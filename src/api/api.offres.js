import axios from 'axios';

export async function getOffres(){
    const response=await axios.get('http://localhost:8080/offres/');
    return response;
}
export async function getOffreById(id){
    const response=await axios.get('http://localhost:8080/offres/'+id);
    return response;
}
export async function addOffre(offre){
    const response=await axios.post('http://localhost:8080/offres/',offre,
        {
            headers: { 'content-type': 'multipart/form-data' }
        }
    );
    return response;
}
export async function updateOffre(offre){
    const response=await axios.patch('http://localhost:8080/offres/',offre);
    return response;
}
export async function deleteOffre(id){
    const response=await axios.delete('http://localhost:8080/offres/'+id);
    return response;
}