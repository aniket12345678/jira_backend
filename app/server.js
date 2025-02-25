require('dotenv').config();
const { newConnection } = require('./config/connection');
const PORT = process.env.PORT;
const cors = require('cors');
const express = require('express');
const { AllRoutes } = require('./routes/index.route');
const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send({ message: 'welcome to backend' });
});

app.use('/api', AllRoutes);

app.listen(PORT, () => {
    newConnection()
    console.log(`Server is running on ${PORT}`);
});