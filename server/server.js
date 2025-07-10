import express from 'express';
import cors from 'cors'; 
import './dbConnect.js'
import userRoute from './routes/usersRoute.js';
import transactionRoute from './routes/transactionsRoute.js';
import path from 'path'

const app = express();
app.use(express.json());
app.use(cors()); 



app.use('/api/users', userRoute);
app.use('/api/transactions', transactionRoute);

const port = process.env.PORT || 5000;

if(process.env.NODE_ENV === 'production'){
    app.use('/', express.static('client/build'))

    app.use('*',(req,res) => {
        res.sendFile(path.resolve(__dirname, 'client/build/index.html'))
    })
}

app.get('/', (req,res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Server running on port ${port}!`));