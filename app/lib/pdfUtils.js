import { PDFDocument, rgb } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

// Path to the original PDF file
const pdfPath = path.resolve('./public/check.pdf');

// Modify the PDF and save it
export async function modifyPDF(name, text) {
  // Load the existing PDF
  const existingPdfBytes = fs.readFileSync(pdfPath);
  
  // Load the PDF into pdf-lib
  const pdfDoc = await PDFDocument.load(existingPdfBytes);

  // Get the first page
  const page = pdfDoc.getPage(0);

  // Get page dimensions
  const { width, height } = page.getSize();
  console.log(`Page dimensions: ${width}x${height}`);

  // Estimate text width and height
  const fontSize = 30;


  // Add text to the PDF
  page.drawText(text, {
    x: 100, // Position from the left
    y: height - 100, // Position from the top
    size: fontSize, // Font size
    color: rgb(0, 0, 0), // Text color (black)
  });

  page.drawText(name, {
    x: 400, // Position from the left
    y: height - 100, // Position from the top
    size: fontSize, // Font size
    color: rgb(0, 0, 0), // Text color (black)
  });

  // Serialize the PDF document to bytes
  const pdfBytes = await pdfDoc.save();

  // Save the modified PDF
  const modifiedPdfPath = path.resolve(`./public/${name}.pdf`);
  fs.writeFileSync(modifiedPdfPath, pdfBytes);

  return modifiedPdfPath;
}
