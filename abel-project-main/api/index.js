const app = require('../backend/server.js');

module.exports = (req, res) => {
 
    if (req.url.startsWith('/api')) {
        req.url = req.url.replace(/^\/api/, '');
      
        if (req.url === '') req.url = '/';
    }
    app(req, res);
};
