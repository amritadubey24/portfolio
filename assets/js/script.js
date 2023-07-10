document.addEventListener('keydown', (e) => {
    if (e.keyCode === 123 || (e.keyCode === 85 && (e.ctrlKey || e.metaKey))) {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 67 || e.keyCode === 74)) {
        e.preventDefault();
    }
});



$(document).ready(function() {
    $('#downloadBtn').click(function() {
      // Replace 'path/to/your/pdf.pdf' with the actual path to your PDF file
      var pdfUrl = 'path/to/your/pdf.pdf';
      
      // Create a hidden <a> element with the PDF URL
      var link = document.createElement('a');
      link.href = pdfUrl;
      link.download = 'downloaded_pdf.pdf'; // Specify the name for the downloaded file
      
      // Append the <a> element to the document
      document.body.appendChild(link);
      
      // Programmatically trigger a click event on the <a> element
      link.click();
      
      // Remove the <a> element from the document
      document.body.removeChild(link);
    });
  });
  