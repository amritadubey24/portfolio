document.addEventListener("keydown",e=>{(123===e.keyCode||85===e.keyCode&&(e.ctrlKey||e.metaKey))&&e.preventDefault(),e.ctrlKey&&e.shiftKey&&(73===e.keyCode||67===e.keyCode||74===e.keyCode)&&e.preventDefault()}),$(document).ready(function(){$("#downloadBtn").click(function(){var e=document.createElement("a");e.href="path/to/your/pdf.pdf",e.download="downloaded_pdf.pdf",document.body.appendChild(e),e.click(),document.body.removeChild(e)})});