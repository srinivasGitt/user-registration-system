import { Request, Response } from 'express';
import * as XLSX from 'xlsx';

export const importChat = (req: Request, res: Response): Promise<void> => {
    return new Promise((resolve, reject) => {
        try {
            const file = req.file;

            if (!file) {
                res.status(400).json({ message: 'No file uploaded' });
                resolve(); // Resolve the promise after sending a response
                return;
            }

            // Process the file
            const workbook = XLSX.read(file.buffer, { type: 'buffer' });
            const sheetName = workbook.SheetNames[0];
            const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

            // Validate and process chat data here...

            res.status(200).json({ message: 'Chat imported successfully', data });
            resolve(); // Resolve after successful response
        } catch (error) {
            res.status(500).json({ message: 'Error processing chat import' });
            reject(error); // Reject in case of an error
        }
    });
};
