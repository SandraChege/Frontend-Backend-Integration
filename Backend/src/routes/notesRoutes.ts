import { Router } from "express"

import { addTask, getAllNotes} from "../controllers/notescontrollers";

const note_router = Router();

note_router.post("/addnote", addTask);

note_router.get("/fetch", getAllNotes);

// note_router.get("/getNote", getNoteByID);

// note_router.delete("/delete", deleteNoteByID);

export default note_router;

