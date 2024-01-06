import React from 'react';
import { Button } from '@/components/ui/button';

const ButtonDownload = () => {
  const handleDownloadCV = () => {
    // Replace 'your_cv.pdf' with the actual path to your PDF file
    const pdfFilePath = 'public/file/Raffaele Amietta CV.pdf';

    // Fetch the PDF file
    fetch(pdfFilePath)
      .then((response) => response.blob())
      .then((blob) => {
        // Create a temporary URL for the PDF blob
        const url = URL.createObjectURL(blob);

        // Create a link element to trigger the download
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Amietta_Raffaele_CV.pdf'; // Specify the desired file name
        document.body.appendChild(a);
        a.click();

        // Clean up: remove the temporary URL and the link element
        URL.revokeObjectURL(url);
        document.body.removeChild(a);
      })
      .catch((error) => {
        console.error('Error downloading CV:', error);
      });
  };

  return (
    <div className="pb-4">
      <Button variant={"secondary"} onClick={handleDownloadCV}>
        Download CV
      </Button>
    </div>
  );
};

export default ButtonDownload;
