import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import assignmentRoutes from './routes/assignment.routes.js'; // 💡 Import routes

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware configuration
app.use(cors());
app.use(express.json());

// Initialize Database connection
connectDB();

// Mount API Routes
app.use('/api/assignments', assignmentRoutes);

// Basic health check route
app.get('/health', (req, res) => {
  res.json({ status: 'UP', message: 'VedaAI Backend Server is running smoothly.' });
});

app.listen(PORT, () => {
  console.log(`🚀 Production engine humming along at: http://localhost:${PORT}`);
});