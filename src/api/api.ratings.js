import axios from 'axios';

export async function getRatings(){
    const response=await axios.get('http://localhost:8080/ratings/');
    return response;
}
export async function getRatingById(id){
    const response=await axios.get('http://localhost:8080/ratings/'+id);
    return response;
}
export async function addRating(rating){
    const response=await axios.post('http://localhost:8080/ratings/',rating );
    return response;
}
export async function updateRatingr(id,rating){
    const response=await axios.post('http://localhost:8080/ratings/'+id,rating);
    return response;
}
export async function deleteRating(id){
    const response=await axios.delete('http://localhost:8080/ratings/'+id);
    return response;
}