import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import UserRouter from './Controllers/userController.js';

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cookieParser());


const allowedOrigins = ['https://jwtprojectfrontend.netlify.app','http://localhost:5173'];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) {
      return callback(null, true);
    }
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
};

app.use(cors(corsOptions));

app.use('/api', UserRouter);

app.use('/{*splat}', (req, res, next) => {
  const err = new Error("no endpoint found", 404);
  res.send("no endpoint found!");

})



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
