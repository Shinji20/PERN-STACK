import { Router } from 'express';
import {
  getAllTasks,
  deleteTask,
  getTask,
  createTask,
  updateTask,
} from '../controllers/tasks.controller.js';

const router = Router();

router.get('/tasks', getAllTasks);

router.get('/tasks/:id', getTask);

router.post('/tasks', createTask);

router.delete('/tasks/:id', deleteTask);

router.put('/tasks/:id', updateTask);

export default router;