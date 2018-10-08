import isEmpty from './isEmpty';

export const getPage = (req) => {
    let errors = {};
    let {context, type} = req.body;

    if(!type) {
        errors.type = "type field is required";
    } else if(!['file', 'folder'].includes(type)) {
        errors.type = "type field must be folder or file";
    }

    if(context && typeof context !== 'string') {
        errors.context = 'context type must be string';
    } 
    
    if(!context && type === 'file') {
        errors.context = 'page type "file" must contains context filed';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}