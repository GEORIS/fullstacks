const express = require('express');
const router = express.Router();

const Task = require('../models/task');
const task = require('../models/task');
const { Router } = require('express');
const { syncIndexes } = require('../models/task');

router.get('/', async (req, res) => {
    const tasks = await Task.find();
    console.log(tasks);
    res.render('index', {
        tasks 
    });
});
/* ROUTA PARA AGREGAR */
router.post('/add', async (req, res) => {
    const task = new Task(req.body);
    await task.save();
    res.redirect('/');
    
       
});
/* RUTA PARA EL EDITAR */
router.get('/edit/:id', async (req, res) => {
    const { id } = req.params;
    const task = await Task.findById(id);
    res.render( 'edit', {
        task
        });
    });
    
    /* RUTA PARA ACTUALIZAR DATOS */
    router.post('/edit/:id', async (req, res) => {
        const { id } = req.params;
        await Task.update({_id: id}, req.body);
        res.redirect('/');
    } );
    


/* RUTA PARA BORRAR */

router.get('/delete/:id', async (req, res) => {
    const { id } = req.params;
 
   // ELIMINAR POR ID DE TABLA
    await Task.remove({_id: id});
    res.redirect('/');
} );

module.exports = router;
