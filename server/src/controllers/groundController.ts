import { Request, Response } from 'express';
import Ground from '../models/Ground';

// Get all available grounds
export const getAllGrounds = async (req: Request, res: Response) => {
    try {
        const grounds = await Ground.find();
        res.status(200).json(grounds);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching grounds', error });
    }
};

// Get ground by ID
export const getGroundById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const ground = await Ground.findById(id);
        if (!ground) {
            return res.status(404).json({ message: 'Ground not found' });
        }
        res.status(200).json(ground);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching ground', error });
    }
};

// Create a new ground
export const createGround = async (req: Request, res: Response) => {
    const newGround = new Ground(req.body);
    try {
        const savedGround = await newGround.save();
        res.status(201).json(savedGround);
    } catch (error) {
        res.status(500).json({ message: 'Error creating ground', error });
    }
};

// Update ground by ID
export const updateGround = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const updatedGround = await Ground.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedGround) {
            return res.status(404).json({ message: 'Ground not found' });
        }
        res.status(200).json(updatedGround);
    } catch (error) {
        res.status(500).json({ message: 'Error updating ground', error });
    }
};

// Delete ground by ID
export const deleteGround = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const deletedGround = await Ground.findByIdAndDelete(id);
        if (!deletedGround) {
            return res.status(404).json({ message: 'Ground not found' });
        }
        res.status(200).json({ message: 'Ground deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting ground', error });
    }
};