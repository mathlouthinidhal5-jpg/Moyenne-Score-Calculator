window.addEventListener("load", () => {
  const sheet = document.getElementById("bottomSheet");
  const login = document.getElementById("loginWrapper");
  const cardsContainer = document.getElementById("cardsContainer");

  if (!sheet) return;

  let isEnabled = false;

  // بعد 9 ثوانٍ: إظهار اللوحة، login، وتحريك البطاقات
  

    setTimeout(() => {
  sheet.classList.add("half-open");
  sheet.classList.remove("closed");
  isEnabled = true;

  if (login) {
    login.style.opacity = 1;
  }

  if (cardsContainer) {
    cardsContainer.classList.add("centered");
  } else {
    console.warn("cardsContainer غير موجود في الصفحة.");
  }

  // 🟢 إضافة التوسيط لبطاقة Arabe بعد 9s
  const arabeCard = document.getElementById("arabeCard");
  if (arabeCard) {
    arabeCard.classList.add("arabe-centered");
  }

}, 9000);
    setTimeout(() => {
  sheet.classList.add("half-open");
  sheet.classList.remove("closed");
  isEnabled = true;

  if (login) {
    login.style.opacity = 1;
  }

  if (cardsContainer) {
    cardsContainer.classList.add("centered");
  } else {
    console.warn("cardsContainer غير موجود في الصفحة.");
  }

  // 🟢 إضافة التوسيط لبطاقة Arabe بعد 9s
  const arabeCard = document.getElementById("arabeCard");
  if (arabeCard) {
    arabeCard.classList.add("arabe-centered");
  }

}, 9000);

  // دعم اللمس
  let startY = null;
  let currentY = null;

  function onTouchStart(e) {
    if (!isEnabled) return;
    startY = e.touches[0].clientY;
    currentY = startY;
  }

  function onTouchMove(e) {
    if (!isEnabled || startY === null) return;
    currentY = e.touches[0].clientY;
  }

  function onTouchEnd() {
    if (!isEnabled || startY === null || currentY === null) return;
    const deltaY = startY - currentY;
    if (deltaY > 50) {
      sheet.classList.add("open");
      sheet.classList.remove("half-open", "closed");
    } else if (deltaY < -50) {
      sheet.classList.remove("open", "closed");
      sheet.classList.add("half-open");
    }
    startY = null;
    currentY = null;
  }

  sheet.addEventListener("touchstart", onTouchStart, { passive: true });
  sheet.addEventListener("touchmove", onTouchMove, { passive: true });
  sheet.addEventListener("touchend", onTouchEnd);

  // دعم الماوس
  let mouseStartY = null;

  sheet.addEventListener("mousedown", (e) => {
    if (!isEnabled) return;
    mouseStartY = e.clientY;
  });

  sheet.addEventListener("mouseup", (e) => {
    if (!isEnabled || mouseStartY === null) return;
    const delta = mouseStartY - e.clientY;
    if (delta > 50) {
      sheet.classList.add("open");
      sheet.classList.remove("half-open", "closed");
    } else if (delta < -50) {
      sheet.classList.remove("open", "half-open");
      sheet.classList.add("closed");
    }
    mouseStartY = null;
  });
});
document.addEventListener("DOMContentLoaded", function () {
      const resBtn = document.getElementById("resBtn");
      const whiteBox = document.getElementById("whiteBox");

      if (resBtn && whiteBox) {
        resBtn.addEventListener("click", function () {
          whiteBox.classList.toggle("visible");
        });
      }
    });
    
    
    
    
    
    
    
  window.addEventListener("load", () => {
    const container = document.getElementById("cardscontainer");

    setTimeout(() => {
      container.classList.add("show");
    }, 9000); // 9 ثوانٍ
  });





const rectangles = document.querySelectorAll('.rectan');
        let isDragging = false;
        let currentRect = null;
        let startX;
        
        rectangles.forEach(rect => {
            rect.addEventListener('mousedown', startDrag);
            rect.addEventListener('touchstart', startDrag, { passive: false });
        });
        
        document.addEventListener('mousemove', drag);
        document.addEventListener('touchmove', drag, { passive: false });
        document.addEventListener('mouseup', endDrag);
        document.addEventListener('touchend', endDrag);
        
        function startDrag(e) {
            e.preventDefault();
            isDragging = true;
            currentRect = e.target;
            currentRect.classList.add('dragging');
            
            if (e.type === 'mousedown') {
                startX = e.clientX;
            } else if (e.type === 'touchstart') {
                startX = e.touches[0].clientX;
            }
        }
        
        function drag(e) {
            if (!isDragging || !currentRect) return;
            e.preventDefault();
            
            let clientX;
            
            if (e.type === 'mousemove') {
                clientX = e.clientX;
            } else if (e.type === 'touchmove') {
                clientX = e.touches[0].clientX;
            }
            
            const deltaX = clientX - startX;
            
            // إذا كان السحب لليمين (قيمة deltaX موجبة)
            if (deltaX > 20) {
                currentRect.classList.add('enlarged');
            } 
            // إذا كان السحب لليسار (قيمة deltaX سالبة)
            else if (deltaX < -20) {
                currentRect.classList.remove('enlarged');
            }
        }
        
        function endDrag() {
            if (!isDragging) return;
            isDragging = false;
            
            if (currentRect) {
                currentRect.classList.remove('dragging');
                currentRect = null;
            }
        }