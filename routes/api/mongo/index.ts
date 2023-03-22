import express, { Request, Response, Router, NextFunction } from "express";
import userRoutes from "./user";

const router: Router = Router();

// Import Mongo Users Routes
router.use("/user", userRoutes);

export default router;
