import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth";
import requestRoutes from "./routes/requests";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: "http://localhost:5173" })); // разрешаем запросы с фронта
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/requests", requestRoutes);

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});