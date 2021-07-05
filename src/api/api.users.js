import axios from 'axios';
import firebase from 'firebase/app'
import { createContext, useState } from 'react'; 

import {auth,createUserProfileDocument} from '../firebase/firebase.utils'; 
export async function getUsers(){
    const response=await axios.get('http://localhost:8080/users/');
    return response;
}
export async function getUserById(id){
    const response=await axios.get('http://localhost:8080/users/getuser?idFirebase='+id);
    return response;
}
export async function addUser(user){
    const response=await axios.post('http://localhost:8080/users/',user );
    return response;
}
export async function updateUser(user){
    const response=await axios.patch('http://localhost:8080/users/',user);
    return response;
}
export async function deleteUser(id){
    const response=await axios.delete('http://localhost:8080/users/'+id);
    return response;
}
  
export async function getUserStatis(id){
    const response=await axios.get('http://localhost:8080/users/statistics/'+id);
    return response;
}
// export const currUserContent = createContext({ user: null });