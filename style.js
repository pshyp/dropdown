const dropzone = document.querySelector('.container');
const input = document.getElementsByClassName('input_file');


dropzone.addEventListener('dragover', function (e) {
    e.preventDefault();
});

dropzone.addEventListener('drop', function(e) {
    e.preventDefault();
    input[0].files = e.dataTransfer.files;
});
