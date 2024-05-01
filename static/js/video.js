window.addEventListener('mousemove', function(event) {
    parallaxVideo(event);
  });
  
  function parallaxVideo(event) {
    var container = document.querySelector('.video-container');
    var video = container.querySelector('#myVideo');
  
    var containerWidth = container.offsetWidth;
    var containerHeight = container.offsetHeight;
  
    var mouseX = event.clientX;
    var mouseY = event.clientY;
  
    var moveX = (mouseX / containerWidth - 0.5) * 0.8;
    var moveY = (mouseY / containerHeight + 2.5) * 0.8;
  
    var moveZ = Math.sqrt(moveX * moveX + moveY * moveY);
  
    // ปรับความเคลื่อนไหวตามแกน X, Y, Z และการหมุน
    video.style.transform = 'translate3d(' + moveX * 5 + 'px, ' + moveY * -3 + 'px, ' + moveZ * 3 + 'px) rotateX(' + moveY * 2 + 'deg) rotateY(' + moveX * 5 + 'deg)';
  
    // ซูมวิดีโอ
    var zoomValue = 0.85 + moveY * 0.1; // ปรับค่าซูมตามค่า moveZ
    video.style.transform += ' scale(' + zoomValue + ')';
    
  }
  function moveShine(event) {
    var container = document.querySelector('.video-container');
    var shine = container.querySelector('#shine-overlay');
  
    var containerWidth = container.offsetWidth;
    var containerHeight = container.offsetHeight;
  
    var mouseX = event.clientX;
    var mouseY = event.clientY;
  
    var shineWidth = shine.offsetWidth;
    var shineHeight = shine.offsetHeight;
  
    var containerCenterX = container.offsetLeft + containerWidth / 2;
    var containerCenterY = container.offsetTop + containerHeight / 2;
  
    var shineMoveX = containerCenterX - mouseX - shineWidth / 2;
    var shineMoveY = containerCenterY - mouseY - shineHeight / 2;
  
    var moveX = (mouseX - containerCenterX) * 0.01;
    var moveY = (mouseY - containerCenterY) * 0.01;
  
    shine.style.left = containerCenterX + shineMoveX + 'px';
    shine.style.top = containerCenterY + shineMoveY + 'px';
    shine.style.transform = 'rotateX(' + moveY + 'deg) rotateY(' + moveX + 'deg)';
  
    shine.classList.add('active');
  }
  
  window.addEventListener('mousemove', function(event) {
    moveShine(event);
  });
  
  
  
  
  
  
  
  
  