import express from "express";
import cors from "cors";
import userRoutes from "./modules/user/user.route"
import authRoutes from "./modules/auth/auth.routes"

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

app.use('/auth', authRoutes);
app.use('/users', userRoutes);


export default app;
