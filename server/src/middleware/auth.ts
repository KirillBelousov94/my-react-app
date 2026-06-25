import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

// Расширяем тип Request чтобы хранить данные юзера
export interface AuthRequest extends Request {
  userId?: string;
  userRole?: string;
}

export function authMiddleware(req: AuthRequest, res: Response, next: NextFunction) {
  const token = req.headers.authorization?.split(" ")[1]; // Bearer <token>

  if (!token) {
    res.status(401).json({ message: "Нет токена" });
    return;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string; role: string };
    req.userId = decoded.userId;
    req.userRole = decoded.role;
    next();
  } catch {
    res.status(401).json({ message: "Токен недействителен" });
  }
}