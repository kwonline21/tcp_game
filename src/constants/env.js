import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || 3000;
export const HOST = process.HOST || 'localhost';
export const CLIENT_VERSION = process.env.CLIENT_VERSION || '1.0.0';
