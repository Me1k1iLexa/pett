import express from "express";

import cors from "cors";
import authRoutes from "./routes/auth.route";
import adminRoutes from "./routes/admin.route";
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", authRoutes);
app.use("/api/admin", adminRoutes);

export default app;
