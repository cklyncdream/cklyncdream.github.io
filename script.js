let videoElement = document.getElementById("video");
let captureButton = document.getElementById("captureButton");
let startVideoButton = document.getElementById("startVideo");
let stopVideoButton = document.getElementById("stopVideo");
let imageGallery = document.getElementById("imageGallery");

let mediaRecorder;
let recordedChunks = [];
let stream;

// Kamera açma fonksiyonu
async function startCamera() {
    stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
    });

    videoElement.srcObject = stream;
}

// Fotoğraf çekme fonksiyonu
captureButton.addEventListener("click", () => {
    let canvas = document.createElement("canvas");
    canvas.width = 320;
    canvas.height = 240;
    let context = canvas.getContext("2d");
    context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
    
    let imgData = canvas.toDataURL("image/png");
    let imgElement = document.createElement("img");
    imgElement.src = imgData;

    imageGallery.appendChild(imgElement);
});

// Video başlatma fonksiyonu
startVideoButton.addEventListener("click", () => {
    mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.ondataavailable = event => {
        recordedChunks.push(event.data);
    };
    
    mediaRecorder.onstop = () => {
        let blob = new Blob(recordedChunks, {
            type: "video/webm"
        });
        let videoURL = URL.createObjectURL(blob);

        let videoElement = document.createElement("video");
        videoElement.src = videoURL;
        videoElement.controls = true;
        videoElement.width = 320;
        imageGallery.appendChild(videoElement);
    };

    mediaRecorder.start();
    startVideoButton.disabled = true;
    stopVideoButton.disabled = false;
});

// Video durdurma fonksiyonu
stopVideoButton.addEventListener("click", () => {
    mediaRecorder.stop();
    startVideoButton.disabled = false;
    stopVideoButton.disabled = true;
});

// Başlangıçta kamerayı başlat
startCamera();
