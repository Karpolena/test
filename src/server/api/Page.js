import {AsyncRouter} from "express-async-router";
import mongoose from 'mongoose';

export default ({models, validation}) => {
    const api = AsyncRouter();

    api.post('/get-page/', async (req, res) => {
        let {errors, isValid} = validation.Page.getPage(req);

        if(!isValid) return res.status(400).json(errors);
        let {context, type} = req.body;
        let _context = '_default_';

        if(!context) {
            let request = [
                models.Files.find({context: _context}),
                models.Folders.find({context: _context}), 
            ]
            try {
                let [files, folders] = await Promise.all(request);
                res.status(200).json({
                    files: models.Response.Files(files), 
                    folders: models.Response.Folders(folders)
                });
            } catch(err) {
                res.status(500).json(err);
            }
            return;
        }
        _context = context;

        if(type === 'file') {
            try {
                let file = await models.Files.findById(_context);
                if(file) {
                    res.status(200).json({
                        contextElement: models.Response.File(file)
                    });
                } else {
                    res.status(404).json({
                        page: 'Page not found'
                    })
                }
            } catch (err) {
                res.status(404).json({
                    page: 'Page not found'
                })
            }
        } else if(type === 'folder') {
            let contextFolder;
            try {
                contextFolder = await models.Folders.findById(context);
                if(!contextFolder) return res.status(404).json({
                    page: 'Page not found'
                });
            } catch(err) {
                /* return res.status(500).json(err); */
                return res.status(404).json({
                    page: 'Page not found'
                });
            }
            
            let request = [];
            if(contextFolder.elements.length) {
                request.push(await models.Files.find({
                    '_id': {
                        $in: contextFolder.elements.map(el => mongoose.Types.ObjectId(el))
                    }
                }))
            }
            if(contextFolder.folders.length) {
                request.push(await models.Folders.find({
                    '_id': {
                        $in: contextFolder.folders.map(el => mongoose.Types.ObjectId(el))
                    }
                }))
            }

            try {
                let [files, folders] = await Promise.all(request);
                res.status(200).json({
                    files: files ? models.Response.Files(files) : [], 
                    folders: folders ? models.Response.Folders(folders) : [],
                    contextElement: models.Response.Folder(contextFolder)
                }) 
            } catch(err) {
                res.status(500).json(err);
            }
        }
    })

    return api;
}