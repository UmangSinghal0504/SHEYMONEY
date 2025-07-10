import mongoose from "mongoose";

const connectionString = 'mongodb+srv://umangsinghal20222056:A0987654321z@cluster0.04stbym.mongodb.net/your-database-name'; 

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

connection.on('connected', () => {
    console.log(`MongoDB connected to: ${connectionString}`);
});

connection.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

export default mongoose;