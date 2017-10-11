import { get } from '../index.jsx';

export function getInfo(id){
    return get('/api/detail/info/'+id);
}

export function getComment(id,page){
    return get('/api/detail/comment/'+id+'/'+page);
}