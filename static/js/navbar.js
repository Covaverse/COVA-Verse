// เลือก audio element
const audioPlayer = document.getElementById('audioPlayer');

// เลือกปุ่ม headphones
const headphonesButton = document.querySelector('.headphones');

// เพิ่ม event listener สำหรับปุ่ม headphones
headphonesButton.addEventListener('click', function() {
    // ตรวจสอบสถานะการเล่นเพลง
    if (audioPlayer.paused) {
        // เล่นเพลง
        audioPlayer.play();
    } else {
        // หยุดเล่นเพลง
        audioPlayer.pause();
    }

    

});

// เรียกใช้งานฟังก์ชันทันทีหลังจากที่หน้าเว็บโหลดเสร็จสมบูรณ์
playAudioOnLoad();

function playAudioOnLoad() {
    audioPlayer.play();
}


document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = document.getElementById('audioPlayer');
    const headphonesButton = document.querySelector('.headphones');
    let isPlaying = false;

    // เพิ่ม event listener เมื่อกดปุ่ม
    headphonesButton.addEventListener('click', function() {
        // ตรวจสอบสถานะการเล่นเพลง
        if (!isPlaying) {
            // เล่นเพลง
            audioPlayer.play();
            // เปลี่ยนไอคอนเมื่อเพลงกำลังเล่น
            headphonesButton.innerHTML = '<i class="fa-solid fa-music"></i>';
            isPlaying = true;
        } else {
            // หยุดเล่นเพลง
            audioPlayer.pause();
            // เปลี่ยนไอคอนเมื่อเพลงหยุดเล่น
            headphonesButton.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
            isPlaying = false;
        }
    });

    // เพิ่ม event listener เมื่อมีการเปลี่ยนสถานะการเล่นเพลง
    audioPlayer.addEventListener('play', function() {
        // เปลี่ยนไอคอนเมื่อเพลงกำลังเล่น
        headphonesButton.innerHTML = '<i class="fa-solid fa-music"></i>';
        isPlaying = true;
    });

    audioPlayer.addEventListener('pause', function() {
        // เปลี่ยนไอคอนเมื่อเพลงหยุดเล่น
        headphonesButton.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
        isPlaying = false;
    });
});



