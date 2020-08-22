const { Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    
    res.json('movies');
});

router.get('/info', (req, res) => {
    
    res.json({ 'INFORMATION': 'Este es una pagina de peliculas cristiana'});
});

module.exports = router;