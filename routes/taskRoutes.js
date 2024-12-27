const express = require('express');
const Task = require('./models/Task');

const router = express.Router();


router.post('/', async(req, res) => {
    const { title, description } = req.body;
    if(!title){
        return res.status(400).json({ message: 'titre est obligatoire' });
    }

    try {
        const task = new Task({title, description});
        await task.save();
        res.status(201).json(task);
    }catch (error){
        res.status(500).json({ message: 'Erreur de la creation de la tache' });
    }
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const task = await Task.findByIdAndUpdate(id, req.body, { new: true });
        if (!task) {
            return res.status(404).json({ message: 'Tache non trouvee' });
        }
        res.json(task);
    } catch (error) {
        res.status(500).json({ message: 'Erreur de la mise à jour de la tache', error: error.message });
    }
});


router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    }catch (error){
        res.status(500).json({ message: 'Erreur de la recuperation des taches' });
        }
});

router.delete('/:id',async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) {
            return res.status(404).json({ message: 'Tache non trouvee' });
        }
        }catch (error){
            res.status(500).json({ message: 'Erreur  de la suppression de la tache' });
            }
});
module.exports = router;