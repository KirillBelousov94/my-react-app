import { Router } from "express";
import { prisma } from "../db";
import { authMiddleware, AuthRequest } from "../middleware/auth";
import dotenv from "dotenv";
dotenv.config();

const router = Router();

// GET /api/requests — все заявки (только авторизованным)
router.get("/", authMiddleware, async (req: AuthRequest, res) => {
  try {
    const requests = await prisma.request.findMany({
      include: { user: { select: { name: true, email: true } } },
      orderBy: { date: "desc" },
    });
    res.json(requests);
  } catch {
    res.status(500).json({ message: "Ошибка сервера" });
  }
});

// POST /api/requests — создать заявку
router.post("/", authMiddleware, async (req: AuthRequest, res) => {
  const { description, priority } = req.body;

  try {
    const request = await prisma.request.create({
      data: {
        description,
        priority,
        userId: req.userId!,
      },
    });
    res.json(request);
  } catch {
    res.status(500).json({ message: "Ошибка сервера" });
  }
});

export default router;