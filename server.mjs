import express from 'express';
import mongoose from 'mongoose';
import Pusher from 'pusher';
import cors from 'cors';

import mongoData from './models/schemaData.js';

const app = express()
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.status(200).send('Start Server! 🚀'))

app.listen(port, () => {
    console.log(`Server is listening on Port ${port}`);
});