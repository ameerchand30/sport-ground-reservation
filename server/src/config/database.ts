import { createPool } from 'mysql2/promise';

const pool = createPool({
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'sport_ground_reservation',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export default pool;