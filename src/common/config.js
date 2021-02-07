export default {
    // BASE_API: "http://localhost:9000/api"
    // BASE_API: "http://39.107.227.98:9000/api",
    BASE_API: process.env.NODE_ENV === 'development' ? '/api' : '/api',
}