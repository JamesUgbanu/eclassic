import Express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import orderRoutes from './server/routes/orders';
import productRoutes from './server/routes/products';
import userRoutes from './server/routes/users';
import userAddressRoutes from './server/routes/userAddress';

dotenv.config();

// declare constants
const app = new Express();
const port = process.env.PORT;


// declare accepted cors URL
// Set up a whitelist and check against it:
const allowedOrigins = ['http://localhost:3001', 'http://localhost:8080', 'https://e-classik.herokuapp.com'];

app.use(cors({
  origin(origin, callback) {
    // allow requests with no origin
    // (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not '
        + 'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(bodyParser.json());


orderRoutes(app);
productRoutes(app);
userRoutes(app);
userAddressRoutes(app);

// declare 404 route
app.all('*', (req, res) => res.status(404).json({
  status: 404,
  error: 'The URL you are trying to access does not exist. Please enter a valid url',
}));

// listen to app port
app.listen(port, () => console.log(`App listening on port ${port}`));

export default app;
