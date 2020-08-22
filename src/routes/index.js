const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.json({"Title": "Hello World"});
});


module.exports = router;
