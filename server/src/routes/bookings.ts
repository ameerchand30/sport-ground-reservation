import express from 'express';
import { createBooking, getBookings, updateBooking, deleteBooking } from '../controllers/bookingController';

const router = express.Router();

// Route to create a new booking
router.post('/', createBooking);

// Route to get all bookings
router.get('/', getBookings);

// Route to update a booking by ID
router.put('/:id', updateBooking);

// Route to delete a booking by ID
router.delete('/:id', deleteBooking);

export default router;