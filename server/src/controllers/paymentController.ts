import { Request, Response } from 'express';
import { Payment } from '../models/Payment';

// Process payment for a reservation
export const processPayment = async (req: Request, res: Response) => {
    const { amount, paymentMethod, bookingId } = req.body;

    try {
        // Here you would integrate with a payment gateway (e.g., Stripe, PayPal)
        // For demonstration, we'll assume the payment is successful

        const payment = new Payment({
            amount,
            paymentMethod,
            bookingId,
            status: 'completed',
        });

        await payment.save();

        res.status(200).json({ message: 'Payment processed successfully', payment });
    } catch (error) {
        res.status(500).json({ message: 'Payment processing failed', error });
    }
};

// Retrieve payment details
export const getPaymentDetails = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const payment = await Payment.findById(id);
        if (!payment) {
            return res.status(404).json({ message: 'Payment not found' });
        }
        res.status(200).json(payment);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving payment details', error });
    }
};