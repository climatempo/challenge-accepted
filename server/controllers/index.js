class IndexController {
    get(req, res) {
        // res.render('index', { title: 'API v1.0' });
        res.json({ version: 'v1.1' })
    }
}

export default IndexController;