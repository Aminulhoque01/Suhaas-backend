import express from "express";
import cors from "cors";
import userRoutes from "./user/user.route"

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

app.use('/users', userRoutes);
export default app;
