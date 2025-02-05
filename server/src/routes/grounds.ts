import express from 'express';
import { getAllGrounds, createGround, updateGround, deleteGround } from '../controllers/groundController';

const router = express.Router();

// Route to get all sports grounds
router.get('/', getAllGrounds);

// Route to create a new sports ground
router.post('/', createGround);

// Route to update an existing sports ground
router.put('/:id', updateGround);

// Route to delete a sports ground
router.delete('/:id', deleteGround);

export default router;