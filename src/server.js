import axios from 'axios'

export const server = axios.create({
    baseURL: 'http://haivo.42web.io/blog/index.php?rest_route=/',
    blogURL: 'http://haivo.42web.io/blog',
    headers: {
        "Access-Control-Allow-Origin": "*",
        'Content-Type': 'application/json'
    }
})