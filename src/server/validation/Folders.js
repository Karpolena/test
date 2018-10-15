import isEmpty from "./isEmpty";

export const create = req => {
    let { title, descriptions, context } = req.body;

    let errors = {};

    if (context && typeof context !== "string") {
        errors.context = "Context type must be string";
    }

    if (!title || !title.trim()) {
        errors.title = "Title field is required";
    } else if (typeof title !== "string") {
        errors.title = "Title field must be string";
    }

    if (descriptions && typeof descriptions !== "string") {
        errors.descriptions = "Descriptions field must be string";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};

export const update = req => {
    let { id } = req.params;
    let { title } = req.body;

    let errors = {};

    if (isEmpty(id)) {
        errors.id = "ID field is required";
    }

    if (typeof title === "string" && !title.trim().length) {
        errors.title = "Title field must not be empty";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};

export const remove = req => {
    let { id } = req.params;

    let errors = {};

    if (isEmpty(id)) {
        errors.id = "ID field is required";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};
