export interface Booking {
    id: number;
    userId: number;
    groundId: number;
    bookingDate: Date;
    startTime: string;
    endTime: string;
    status: 'confirmed' | 'pending' | 'canceled';
    createdAt: Date;
    updatedAt: Date;
}