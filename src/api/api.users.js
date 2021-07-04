import axios from 'axios';

export async function getUsers(){
    const response=await axios.get('http://localhost:8080/users/');
    return response;
}
export async function getUserById(id){
    const response=await axios.get('http://localhost:8080/users?idFirebase='+id);
    return response;
}
export async function addUser(user){
    const response=await axios.post('http://localhost:8080/users/',user );
    return response;
}
export async function updateUser(id,user){
    const response=await axios.post('http://localhost:8080/users/'+id,user);
    return response;
}
export async function deleteUser(id){
    const response=await axios.delete('http://localhost:8080/users/'+id);
    return response;
}