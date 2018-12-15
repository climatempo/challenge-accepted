class IndexController {
    get(req, res) {
        res.render('index', { title: 'API v1.0' });
    }
}

export default IndexController;