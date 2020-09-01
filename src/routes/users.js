const fetch = require('node-fetch');
const { Router } = require('express');
const router = Router();

router.get('/', async (req, res) => {
    const respuesta = await fetch('https://randomuser.me/api/');
    const data = await respuesta.json();
    
    res.json(data);
});