// testModifyPDF.js
import { modifyPDF } from './app/lib/pdfUtils.js';

(async () => {
  try {
    // Call the modifyPDF function
    const modifiedPdfPath = await modifyPDF('Hello, World!');

    console.log('Modified PDF saved at:', modifiedPdfPath);
  } catch (error) {
    console.error('Error modifying PDF:', error);
  }
})();
