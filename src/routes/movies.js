const { Router } = require('express');
const router = Router();


const movieData = require('../data.json');

router.get('/', (req, res) => {

    res.json(movieData);
});

router.get('/info', (req, res) => {

    res.json({ 'INFORMATION': 'Este es una pagina de peliculas cristiana' });
});


router.post('/', (req, res) => {
    
    const { title, Duracion, rating } = (req.body);

    if (title && Duracion && rating ) {

        const newMovie = {
             ...req.body,
             "id": movieData.length + 1 
            };

        movieData.push(newMovie);

        res.status(200).json({ 
            'Respuesta': 'Se ha agregado correctamente',
            'error': false ,
            'Data': {
                'movies': movieData
            }
        });
    }
    else{
        res.status(400).json({ 
            'Respuesta': 'Formato de pelicula (JSON) Invalido',
            'error': true });
    }

});

router.delete('/:id', (req, res) => {

    const { id: idDelete } = req.params;
    movieData.forEach((value, index) => {
        const { id } = value;
        if(id == idDelete){
            movieData.splice(index, 1);
        }
    });

    res.json({'Respuesta' : 'Eliminado',
                'Data': movieData});
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, Duracion, rating } = req.body;
    
    movieData.forEach((value, index) => {
        if(id == value.id){

            if(title && Duracion && rating){
                value.title = title;
                value.Duracion = Duracion;
                value.rating = rating;
                
                res.json({ Respuesta: 'Modificado correctamente',
                           error: false,
                           data: movieData          
            });
            
            }
            else{
                res.status(500).json({ Respuesta: 'Formato de pelicula (JSON) Invalido',
                error: true,        
                });
            }

        }

    });

});

module.exports = router;