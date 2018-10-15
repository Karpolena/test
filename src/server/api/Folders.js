import { AsyncRouter } from "express-async-router";

export default ({ models, validation }) => {
    const api = AsyncRouter();

    // Create folder
    api.post("/create-folder", async (req, res) => {
        let { errors, isValid } = validation.Folders.create(req);
        if (!isValid) return res.status(400).json(errors);

        let context = "_default_";

        if (
            typeof req.body.context === "string" &&
            req.body.context.trim().length
        ) {
            context = req.body.context;
        }

        const newFolder = new models.Folders({
            title: req.body.title,
            type: "folder",
            context: context,
            descriptions: req.body.descriptions,
            folders: [],
            elements: []
        });

        if (context !== "_default_") {
            try {
                let folder = await models.Folders.findById(context);
                if (!folder) {
                    return res.status(404).json({
                        context: "Context folder not found"
                    });
                }
                folder.folders.push(newFolder.id);
                await folder.save();
            } catch (err) {
                return res.status(404).json({
                    context: "Context folder not found"
                });
            }
        }
        try {
            const _folder = await newFolder.save();
            res.status(200).json(models.Response.Folder(_folder));
        } catch (err) {
            res.status(500).json(err);
        }
    }); 

    // Update Folder
    api.put("/update-folder/:id", async(req, res) => {
        let { errors, isValid } = validation.Folders.update(req);
        if (!isValid) return res.status(400).json(errors);

        let { id } = req.params;
        let { title, descriptions } = req.body;

        try {
            let folder = await models.Folders.findOne({ _id: id })
            if(!folder) {
                return res.status(404).json({
                    folder: "Folder with this ID not found"
                });
            }
            if (title && title.trim()) {
                folder.title = title.trim();
            }

            if (descriptions && descriptions.trim()) {
                folder.descriptions = descriptions.trim();
            }
            folder = await folder.save();
            res.json(models.Response.Folder(folder))
        } catch(err) {
            return res.status(404).json({
                folder: "Folder with this ID not found"
            });
        }
    });

    // Delete folder
    api.delete("/remove-folder/:id", async (req, res) => {
        let { errors, isValid } = validation.Folders.remove(req);
        if (!isValid) return res.status(400).json(errors);
        let { id } = req.params;

        try {
            let folder = await models.Folders.findOne({ _id: id })
            if(!folder) {
                return res.status(404).json({
                    folder: "Folder with this ID not found"
                });
            }
            let children = {};
            if(folder.elements.length) {
                children.elements = folder.elements;
            }
            if(folder.folders.length) {
                children.folders = folder.folders;
            }

            folder = await folder.remove();
            res.json({
                success: true,
                id
            })
            
            if(children.folders) {
                removeElements(children.folders, models.Folders);
            }
            if(children.elements) {
                removeElements(children.elements, models.Files);
            }
        } catch(err) {
            return res.status(404).json({
                folder: "Folder with this ID not found"
            });
        }
    })
    // Remove children elements
    const removeElements = (elements, model) => {
        model.find({
            "_id": {
                $in: elements
            }
        }).then(resp => {
            if(resp) {
                resp.forEach(el => {
                    if(el.folders && el.folders.length) {
                        removeElements(el.folders, models.Folders);
                    }
                    if(el.elements && el.elements.length) {
                        removeElements(el.elements, models.Files);
                    }
                    el.remove()
                })
            }
        })
    }

    return api;
};
