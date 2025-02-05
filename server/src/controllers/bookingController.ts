import { Request, Response } from 'express';
import Booking from '../models/Booking';
import Ground from '../models/Ground';

// Create a new booking
export const createBooking = async (req: Request, res: Response) => {
    try {
        const { userId, groundId, date, timeSlot } = req.body;
        const newBooking = new Booking({ userId, groundId, date, timeSlot });
        await newBooking.save();
        res.status(201).json(newBooking);
    } catch (error) {
        res.status(500).json({ message: 'Error creating booking', error });
    }
};

// Get all bookings for a user
export const getUserBookings = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;
        const bookings = await Booking.find({ userId }).populate('groundId');
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching bookings', error });
    }
};

// Cancel a booking
export const cancelBooking = async (req: Request, res: Response) => {
    try {
        const { bookingId } = req.params;
        await Booking.findByIdAndDelete(bookingId);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error canceling booking', error });
    }
};

// Check availability of a ground
export const checkAvailability = async (req: Request, res: Response) => {
    try {
        const { groundId, date } = req.query;
        const bookings = await Booking.find({ groundId, date });
        const isAvailable = bookings.length === 0;
        res.status(200).json({ available: isAvailable });
    } catch (error) {
        res.status(500).json({ message: 'Error checking availability', error });
    }
};