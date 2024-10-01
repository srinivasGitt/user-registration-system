// src/middlewares/upload.ts
import multer from 'multer';

const storage = multer.memoryStorage();
const upload = multer({ storage });

export default upload;

