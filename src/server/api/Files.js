import {AsyncRouter} from "express-async-router";

export default ({models, validation}) => {
    const api = AsyncRouter();
    
    api.post('/create-file', async (req, res) => {
        let {errors, isValid} = validation.Files.create(req);
        if(!isValid) return res.status(400).json(errors);
        let context = '_default_';

        if(typeof req.body.context === 'string' && req.body.context.trim().length) {
            context = req.body.context;
        }

        const newFile = new models.Files({
            title: req.body.title,
            type: 'file',
            context: context,
            descriptions: req.body.descriptions,
            content: req.body.content
        });

        if(context !== '_default_') {
            try {
                let folder = await models.Folders.findById(context);
                folder.elements.push(newFile.id);
                await folder.save();
            } catch(err) {
                return res.status(404).json({
                    context: 'Context folder not found'
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

    return api;
}