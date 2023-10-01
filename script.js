document.addEventListener('DOMContentLoaded', function () {
    var image = document.getElementsByClassName('parallax');
    new simpleParallax(image, {
        scale: 1.5
    });
});

document.getElementById('downloadButton').addEventListener('click', function () {
    // Replace 'path/to/your/file.pdf' with the actual path to your PDF file
    var pdfPath = './Resume/resume.pdf';

    // Create a download link
    var downloadLink = document.createElement('a');

    // Set the download link properties
    downloadLink.download = 'Athul-resume.pdf'; // Set the file name
    downloadLink.href = pdfPath; // Set the path to the PDF file

    // Append the download link to the document
    document.body.appendChild(downloadLink);

    // Trigger a click event on the download link
    downloadLink.click();

    // Remove the download link from the document
    document.body.removeChild(downloadLink);
});