// MR ALAVI V2 - CORE ENGINE
document.addEventListener('DOMContentLoaded', () => {
    // ایجاد لایه نور موس
    const cursor = document.createElement('div');
    cursor.className = 'mralavi-v2-cursor-glow';
    document.body.appendChild(cursor);
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // اعمال افکت شیشه‌ای به هر عنصری که کلاس card دارد
    document.querySelectorAll('.card').forEach(el => el.classList.add('mralavi-v2-glass'));

    // سیستم ترمینال (اگر در صفحه وجود داشته باشد)
    const terminal = document.querySelector('.mralavi-v2-terminal');
    if (terminal) {
        terminal.addEventListener('click', () => {
            const input = terminal.querySelector('.mralavi-v2-terminal-input');
            if(input) input.focus();
        });
    }

    console.log("MR ALAVI V2: All systems nominal.");
});
