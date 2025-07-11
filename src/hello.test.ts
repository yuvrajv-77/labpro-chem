import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import coa_data from './data/coa_list1.json';

// describe('Hello World Tests', () => {
//     it('should return true for true', () => {
//         expect(true).toBe(true);
//     });

//     it('should add numbers correctly', () => {
//         expect(1 + 1).toBe(4);
//     });
// });


// Utility to clean up ItemName (same as in your component)
function cleanItemName(name: string) {
    return name
        .replace(/\s+/g, ' ')
        .replace(/[‘’“”]/g, '')
        .trim();
}

describe('COA PDF links', () => {
    it('all CoA PDF files should exist in public/pdfs/coa/', () => {
        // Adjust this path if your public folder is elsewhere
        const pdfDir = path.resolve(__dirname, '../public/pdfs/coa');
        const missing: string[] = [];

        for (const item of coa_data) {
            const fileName = encodeURIComponent(cleanItemName(item.ItemName)) + '.pdf';
            const filePath = path.join(pdfDir, fileName);
            if (!fs.existsSync(filePath)) {
                missing.push(fileName);
            }
        }

        expect(missing).toEqual([]);
    });
});