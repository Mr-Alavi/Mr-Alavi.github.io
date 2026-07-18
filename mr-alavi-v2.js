// MR ALAVI V2 - Interaction Engine
document.addEventListener('DOMContentLoaded', () => {
    // 1. Cinematic Loader Execution
    const loader = document.createElement('div');
    loader.className = 'mralavi-v2-loader';
    loader.innerHTML = '<div class="mralavi-v2-loader-text">WITHOUT FEAR.<br>WITHOUT LIMITS.</div>';
    document.body.appendChild(loader);
    
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => loader.remove(), 1200);
    }, 1500);

    // 2. Cursor Glow Effect
    const cursor = document.createElement('div');
    cursor.className = 'mralavi-v2-cursor-glow';
    document.body.appendChild(cursor);
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // 3. Applying Glassmorphism to existing card
    const card = document.querySelector('.card');
    if(card) {
        card.classList.add('mralavi-v2-glass');
    }
    
    console.log("MR ALAVI V2 Experience Loaded Successfully.");
});
