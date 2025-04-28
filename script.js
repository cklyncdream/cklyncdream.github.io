let videoElement = document.getElementById("video");
let captureButton = document.getElementById("captureButton");
let startVideoButton = document.getElementById("startVideo");
let stopVideoButton = document.getElementById("stopVideo");
let startCameraButton = document.getElementById("startCamera");
let stopCameraButton = document.getElementById("stopCamera");
let imageGallery = document.getElementById("imageGallery");
let videoGallery = document.getElementById("videoGallery");

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
    startCameraButton.disabled = true;
    stopCameraButton.disabled = false;
}

// Kamera kapama fonksiyonu
function stopCamera() {
    if (stream) {
        let tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
    }
    videoElement.srcObject = null;
    startCameraButton.disabled = false;
    stopCameraButton.disabled = true;
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
        videoGallery.appendChild(videoElement);
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

// Tab sekmeleri için geçiş işlevselliği
document.getElementById("photosTab").addEventListener("click", () => {
    document.getElementById("imageGallery").classList.add("active");
    document.getElementById("videoGallery").classList.remove("active");
    document.getElementById("photosTab").classList.add("active");
    document.getElementById("videosTab").classList.remove("active");
});

document.getElementById("videosTab").addEventListener("click", () => {
    document.getElementById("videoGallery").classList.add("active");
    document.getElementById("imageGallery").classList.remove("active");
    document.getElementById("videosTab").classList.add("active");
    document.getElementById("photosTab").classList.remove("active");
});

// Başlangıçta kamerayı başlat
startCameraButton.addEventListener("click", startCamera);
stopCameraButton.addEventListener("click", stopCamera);
