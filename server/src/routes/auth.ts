import { Router } from "express";
import { prisma } from "../db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const router = Router();

// POST /api/auth/register
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const exists = await prisma.user.findUnique({ where: { email } });
    if (exists) {
      res.status(400).json({ message: "Email уже занят" });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: { name, email, password: hashedPassword },
    });

    const token = jwt.sign(
      { userId: user.id, role: user.role },
      process.env.JWT_SECRET!,
      { expiresIn: "7d" }
    );

    res.json({ user: { id: user.id, name: user.name, email: user.email, role: user.role }, token });
  } catch {
    res.status(500).json({ message: "Ошибка сервера" });
  }
});

// POST /api/auth/login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      res.status(400).json({ message: "Неверный email или пароль" });
      return;
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      res.status(400).json({ message: "Неверный email или пароль" });
      return;
    }

    const token = jwt.sign(
      { userId: user.id, role: user.role },
      process.env.JWT_SECRET!,
      { expiresIn: "7d" }
    );

    res.json({ user: { id: user.id, name: user.name, email: user.email, role: user.role }, token });
  } catch {
    res.status(500).json({ message: "Ошибка сервера" });
  }
});

export default router;