const text = "نمایش پروژه‌های موفق در زمینه طراحی و توسعه وب. تمرکز بر روی رابط کاربری مدرن و واکنش‌گرا.";
const speed = 50; 
let i = 0;
function typeWriter() { if (i < text.length) { document.getElementById("typewriter").innerHTML += text.charAt(i); i++; setTimeout(typeWriter, speed); } else { document.getElementById("telegram-btn").style.display = "block"; document.getElementById("back-btn").style.display = "block"; } }
window.onload = typeWriter;
