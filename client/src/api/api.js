import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

// export function fetchPosts() {
//     return API.get('/posts');
// }

export const fetchPosts = () => API.get('/posts');
export const createPosts = (newPost) => API.post('/posts', newPost);
export const updatePosts = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likepost`);