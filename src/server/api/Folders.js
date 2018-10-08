import {AsyncRouter} from "express-async-router";

export default ({models, validation}) => {
    const api = AsyncRouter();
    
    api.post('/create-folder', async (req, res) => {
        let {errors, isValid} = validation.Folders.create(req);
        if(!isValid) return res.status(400).json(errors);

        let context = '_default_';

        if(typeof req.body.context === 'string' && req.body.context.trim().length) {
            context = req.body.context;
        }

        const newFolder = new models.Folders({
            title: req.body.title,
            type: 'folder',
            context: context,
            descriptions: req.body.descriptions,
            folders: [],
            elements: []
        });

        if(context !== '_default_') {
            try {
                let folder = await models.Folders.findById(context);
                if(!folder) {
                    return res.status(404).json({
                        context: 'Context folder not found'
                    });
                }
                folder.folders.push(newFolder.id);
                await folder.save();
            } catch(err) {
                return res.status(404).json({
                    context: 'Context folder not found'
                });
            }
        }
        try {
            const _folder = await newFolder.save();
            res.status(200).json(models.Response.Folder(_folder))
        } catch(err) {
            res.status(500).json(err);
        }
    })

    return api;
}