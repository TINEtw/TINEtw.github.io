// script.js

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); // ป้องกันการโหลดหน้าใหม่
  const name = document.getElementById("name").value;
  alert("ขอบคุณที่ติดต่อมา, " + name + "!");
});
