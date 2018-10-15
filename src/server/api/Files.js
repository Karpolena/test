import {AsyncRouter} from "express-async-router";

export default ({models, validation}) => {
    const api = AsyncRouter();
    
    // Create File
    api.post("/create-file", async (req, res) => {
        let {errors, isValid} = validation.Files.create(req);
        if(!isValid) return res.status(400).json(errors);
        let context = "_default_";

        if(typeof req.body.context === "string" && req.body.context.trim().length) {
            context = req.body.context;
        }

        const newFile = new models.Files({
            title: req.body.title,
            type: "file",
            context: context,
            descriptions: req.body.descriptions,
            content: req.body.content
        });

        if(context !== "_default_") {
            try {
                let folder = await models.Folders.findById(context);
                folder.elements.push(newFile.id);
                await folder.save();
            } catch(err) {
                return res.status(404).json({
                    context: "Context folder not found"
                });
            }
        }
        try {
            const _file = await newFile.save();
            res.status(200).json(models.Response.File(_file))
        } catch(err) {
            res.status(500).json(err);
        }
    })

    // Update File
    api.put("/update-file/:id", async (req, res) => {
        let { errors, isValid } = validation.Files.update(req);
        if (!isValid) return res.status(400).json(errors);

        let { id } = req.params;
        let { title, descriptions, content } = req.body;

        try {
            let file = await models.Files.findOne({ _id: id })
            if(!file) {
                return res.status(404).json({
                    file: "File with this ID not found"
                });
            }
            if (title && title.trim()) {
                file.title = title.trim();
            }

            if (descriptions && descriptions.trim()) {
                file.descriptions = descriptions.trim();
            }

            if (content && content.trim()) {
                file.content = content.trim();
            }

            file = await file.save();
            res.json(models.Response.File(file))
        } catch(err) {
            return res.status(404).json({
                folder: "File with this ID not found"
            });
        }
    })

    // Delete File
    api.delete("/remove-file/:id", async(req, res) => {
        let { errors, isValid } = validation.Files.remove(req);
        if (!isValid) return res.status(400).json(errors);
        let { id } = req.params;
        try {
            let file = await models.Files.findOne({ _id: id })
            if(!file) {
                return res.status(404).json({
                    folder: "File with this ID not found"
                });
            }
            
            file = await file.remove();
            res.json({
                success: true,
                id
            })
            
        } catch(err) {
            return res.status(404).json({
                folder: "File with this ID not found"
            });
        }
    })

    return api;
}