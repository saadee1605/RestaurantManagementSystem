const express = require('express');
const app = express();
const auth = require('./routes/authenticationRoutes');
const order = require('./routes/orderRoutes')
const addItemInfo=require('./routes/addItemRoutes')
const admin=require('./routes/admin')
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser')
const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(cookieParser())
app.use(express.json());
dotenv.config();

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    try {
        res.send('Hello World!');
    } catch (error) {
        console.error('Error in / route:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.use('/api/auth', auth);
app.use('/api/cart', order)
app.use('/api/admin', admin)
app.use('/api/addItemToCart',addItemInfo)
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});
