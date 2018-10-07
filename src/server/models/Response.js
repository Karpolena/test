import _ from 'lodash';

export const Folder = (folder) => {
    return {
        id: folder.id,
        title: folder.title,
        type: folder.type,
        descriptions: folder.descriptions
    }
}

export const File = (file) => {
    return {
        id: file.id,
        title: file.title,
        type: file.type,
        descriptions: file.descriptions,
        content: file.content
    }
}

export const Files = (files) => {
    if(!_.isArray(files)) throw new Error('files type is not array');
    return files.map(_file => File(_file));
}

export const Folders = (folders) => {
    if(!_.isArray(folders)) throw new Error('folders type is not array');
    return folders.map(_folder => Folder(_folder));
}