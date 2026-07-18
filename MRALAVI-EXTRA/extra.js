function showNotification(msg) {
    const el = document.createElement('div');
    el.className = 'mralavi-notification';
    el.innerText = msg;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 3000);
}
// ثبت PWA
if ('serviceWorker' in navigator) navigator.serviceWorker.register('service-worker.js');
