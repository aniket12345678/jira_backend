const exApp = require('express');
const { allRoutes } = require('./app/routes');
const app = exApp();
require('dotenv').config();

const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.send({ message: 'Welcome to jira' });
});

app.use('/api', allRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});