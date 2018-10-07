import isEmpty from './isEmpty';

export const create = (req) => {
    let {title, descriptions, context} = req.body;
    
    let errors = {}

    if(context && typeof context !== 'string') {
        errors.context = 'Context type must be string';
    } 

    if(!title || !title.trim()) {
        errors.title = 'Title field is required';
    } else  if(typeof title !== 'string') {
        errors.title = 'Title field must be string';
    }

    if(descriptions && typeof descriptions !== 'string') {
        errors.descriptions = 'Descriptions field must be string';
    }
    
    return {
        errors,
        isValid: isEmpty(errors)
    };
} 