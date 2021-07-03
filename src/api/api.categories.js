import axios from 'axios';

export async function getCategories(){
    const response=await axios.get('http://localhost:8080/categories/');
    return response;
}
export async function addCategory(categorie){
    const response=await axios.post('http://localhost:8080/categories/',categorie);
    return response;
}
export async function updateCategory(id,categorie){
    const response=await axios.post('http://localhost:8080/categories/'+id,categorie);
    return response;

}
export async function deleteCategory(id){
    const response=await axios.delete('http://localhost:8080/categories/'+id);
    return response;

}