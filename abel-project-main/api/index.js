const app = require('../backend/server.js');

module.exports = (req, res) => {
    // Strip /api prefix so Express app sees paths like /products instead of /api/products
    if (req.url.startsWith('/api')) {
        req.url = req.url.replace(/^\/api/, '');
        // If it became empty string, make it / (though unlikely for this app)
        if (req.url === '') req.url = '/';
    }
    app(req, res);
};
