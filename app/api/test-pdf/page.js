import { modifyPDF } from '../../lib/pdfUtils';

export default async function handler(req, res) {
  // Log request method and body for debugging
  console.log('Request method:', req.method);
  console.log('Request body:', req.body);

  if (req.method === 'POST') {
    try {
      const { text } = req.body;

      if (!text) {
        res.status(400).json({ error: 'Missing text in request body' });
        return;
      }

      const modifiedPdfPath = await modifyPDF(text);

      res.status(200).json({ message: 'PDF modified successfully', filePath: modifiedPdfPath });
    } catch (error) {
      console.error('Error modifying PDF:', error);
      res.status(500).json({ error: 'Failed to modify PDF' });
    }
  } else {
    res.status(405).end(`Method ${req.method} Not Allowed`);
    res.setHeader('Allow', ['POST'])
  }
}
