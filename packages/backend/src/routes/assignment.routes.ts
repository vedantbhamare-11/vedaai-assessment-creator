import { Router } from 'express';
import { createAssignment } from '../controllers/assignment.controller.js';

const router = Router();

// Endpoint matching our creation pipeline
router.post('/', createAssignment);

export default router;