import express from "express"
import dotenv from "dotenv"
import userRouter from "./routes/userRoutes.js"
import { errorhandler, notFound } from "./middleware/errorMiddleware.js";
import connectDb from "./config/db.js";
import cookieParser from "cookie-parser";
dotenv.config()
connectDb()
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended :true}));
app.use(cookieParser())
app.use('/api/users', userRouter)
app.get('/', (req, res) => res.send('Server is Ready'));
app.use(notFound);
app.use(errorhandler);
app.listen(port, () => console.log(`Server Runing on ${port}`));