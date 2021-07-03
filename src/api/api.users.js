import axios from 'axios';

export async function getOffres(){
    const response=await axios.get('http://localhost:8080/users/');
    return response;
}
export async function addOffre(user){
    const response=await axios.post('http://localhost:8080/users/',user,
        {
            headers: { 'content-type': 'multipart/form-data'}
        }
    );
    return response;
}
export async function updateOffre(id,user){
    const response=await axios.post('http://localhost:8080/users/'+id,user);
    return response;
}
export async function deleteOffre(id){
    const response=await axios.delete('http://localhost:8080/users/'+id);
    return response;
}