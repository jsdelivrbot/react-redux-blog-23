import axios from 'axios';
import

export const FETCH_POSTS = 'fetch_posts';

const ROOT_URL = 'http://reduxblog.heroku.com/api'
const API_KEY = '?key=jjajangmyeon'

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}
