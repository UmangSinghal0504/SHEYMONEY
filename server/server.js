import express from 'express';
import cors from 'cors';
import './dbConnect.js';
import userRoute from './routes/usersRoute.js';
import transactionRoute from './routes/transactionsRoute.js';
import path from 'path';
import { fileURLToPath } from 'url';

// Modern __dirname implementation for ES Modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Initialize Express with modern settings
const app = express();

// Middleware configuration
app.use(express.json());
app.use(cors());

// API Routes
app.use('/api/users', userRoute);
app.use('/api/transactions', transactionRoute);

// Environment configuration
const port = process.env.PORT || 5000;
const isProduction = process.env.NODE_ENV === 'production';

// Production-specific configuration
if (isProduction) {
    // Serve static files from client/build
    app.use(express.static(path.join(__dirname, 'client/build')));
    
    // Handle client-side routing
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
} else {
    // Development routes
    app.get('/', (req, res) => {
        res.json({
            status: 'development',
            message: 'Server is running in development mode',
            instructions: 'Run client separately for development'
        });
    });
}

// Start server with modern error handling
app.listen(port, () => {
    console.log(`Server running in ${isProduction ? 'production' : 'development'} mode on port ${port}`);
}).on('error', (err) => {
    console.error('Server failed to start:', err);
});