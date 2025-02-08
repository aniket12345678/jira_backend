require('dotenv').config();
const exApp = require('express');
const { allRoutes } = require('./app/routes');
const app = exApp();

app.use(exApp.json());
app.use(exApp.urlencoded({ extended: true }));

const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.send({ message: 'Welcome to jira' });
});

app.use('/api', allRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});