import express from 'express';
import {
  createNote,
  getNotes,
  getNoteById,
  editNoteById,
  deleteNoteById
} from '../controller/note-controller.js';
import {
  notePayloadSchema,
  noteUpdatePayloadSchema,
  noteQuerySchema
} from '../../../services/notes/validator/schema.js';
import validate from '../../../services/notes/validator/validate.js';
import validateQuery from '../../../services/notes/validator/validate-query.js';

const router = express.Router();

router.post('/notes', validate(notePayloadSchema), createNote);
router.get('/notes', validateQuery(noteQuerySchema), getNotes);
router.get('/notes/:id', getNoteById);
router.put('/notes/:id', validate(noteUpdatePayloadSchema), editNoteById);
router.delete('/notes/:id', deleteNoteById);

export default router;
