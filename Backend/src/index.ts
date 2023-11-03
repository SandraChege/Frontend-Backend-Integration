import express, {NextFunction, Request, Response, json} from "express";
import * as dotenv from "dotenv";
import note_router from "./routes/notesRoutes";
import { BodyParser } from "body-parser";

const app = express()

app.use(json());
/**
 * next:NextFunction used with middlewares
 */
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.json({
    message: err.message,
  });
});

dotenv.config();

const { PORT } = process.env;

app.use("/note", note_router);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});









