import express from 'express';
import cors from 'cors';
import './dbConnect.js';
import userRoute from './routes/usersRoute.js';
import transactionRoute from './routes/transactionsRoute.js';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(cors());


app.use('/api/users', userRoute);
app.use('/api/transactions', transactionRoute);

const port = process.env.PORT || 5000;


if (process.env.NODE_ENV === 'production') {
   
    app.use(express.static(path.join(__dirname, 'client/build')));

    
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
} else {
    
    app.get('/', (req, res) => res.send('Hello World!'));
}

app.listen(port, () => console.log(`Server running on port ${port}!`));