window.addEventListener('mousemove', function(event) {
    parallaxImage(event);
});
  
function parallaxImage(event) {
    var container = document.querySelector('.image-container');
    var image = container.querySelector('img');
  
    var containerWidth = container.offsetWidth;
    var containerHeight = container.offsetHeight;
  
    var mouseX = event.clientX;
    var mouseY = event.clientY;
  
    var moveX = (mouseX / containerWidth - 0.5) * 0.8;
    var moveY = (mouseY / containerHeight  - 0.5) * 0.8;
  
    var moveZ = Math.sqrt(moveX * moveX + moveY * moveY);
  
    // ปรับความเคลื่อนไหวตามแกน X, Y, Z และการหมุน
    image.style.transform = 'translate3d(' + 
    (moveX * 500) + 'px, ' + 
    (moveY * 150) + 'px, ' + 
    (moveZ * 20) + 'px) rotateX(' + 
    (moveY * 30) + 'deg) rotateY(' +
    (moveX * -15) + 'deg)';


    // ซูมภาพ
    var zoomValue = 1 + moveY * 0.005; // ปรับค่าซูมตามค่า moveZ
    image.style.transform += ' scale(' + zoomValue + ')';
}









function createDust(className) {
    const dust = document.createElement('div');
    dust.classList.add(className); // เพิ่ม class ที่กำหนดให้กับ dust element
    document.body.appendChild(dust);

    // สุ่มตำแหน่งและขนาดฝุ่น
    const left = Math.random() * window.innerWidth;
    const top = Math.random() * window.innerHeight;
    const size = Math.random() * 1 + 3; // ขนาดฝุ่นระหว่าง 1 ถึง 5 px

    // กำหนดตำแหน่งและขนาดฝุ่น
    dust.style.left = `${left }px`; 
    dust.style.top = `${top  }px`;
    dust.style.width = `${size }px`;
    dust.style.height = `${size }px`;

    // สุ่มเวลาที่จะหายไป
    const durationInSeconds = Math.random() * 2 + 3; // สุ่มเวลาระหว่าง 1 ถึง 2 วินาที
    const durationInMilliseconds = durationInSeconds * 1000; // แปลงเป็นมิลลิวินาที

    setTimeout(() => {
        dust.remove();
    }, durationInMilliseconds);
}

setInterval(() => {
    createDust('dust');
}, 1000); // สร้าง .dust ทุก 100 มิลลิวินาที

setInterval(() => {
    createDust('dust2');
}, 200); // สร้าง .dust2 ทุก 200 มิลลิวินาที 

setInterval(() => {
    createDust('dust3');
}, 200); // สร้าง .dust2 ทุก 200 มิลลิวินาที 





document.addEventListener('mousemove', function(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const moveX = (mouseX - window.innerWidth / 2) / 80; // เลื่อนตามแกน X จากศูนย์กลางหน้าจอ
    const moveY = (mouseY - window.innerHeight / 2) / 80; // เลื่อนตามแกน Y จากศูนย์กลางหน้าจอ

    const dusts = document.querySelectorAll('.dust');
    dusts.forEach(function(dust) {
        const dustX = parseInt(dust.style.left);
        const dustY = parseInt(dust.style.top);
        dust.style.left = `${dustX + moveX}px`; // ปรับพิกัด X ของ dust particles
        dust.style.top = `${dustY + moveY}px`; // ปรับพิกัด Y ของ dust particles
    });

    const dusts2 = document.querySelectorAll('.dust2');
    dusts2.forEach(function(dust2) {
        const dustX = parseInt(dust2.style.left);
        const dustY = parseInt(dust2.style.top);
        dust2.style.left = `${dustX + moveX}px`; // ปรับพิกัด X ของ dust particles
        dust2.style.top = `${dustY + moveY}px`; // ปรับพิกัด Y ของ dust particles
    });

    const dusts3 = document.querySelectorAll('.dust3');
    dusts3.forEach(function(dust3) {
        const dustX = parseInt(dust3.style.left);
        const dustY = parseInt(dust3.style.top);
        dust3.style.left = `${dustX + moveX}px`; // ปรับพิกัด X ของ dust particles
        dust3.style.top = `${dustY + moveY}px`; // ปรับพิกัด Y ของ dust particles
    });
});