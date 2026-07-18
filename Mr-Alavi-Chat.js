const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const voiceBtn = document.getElementById('voice-btn');

const botKnowledge = {
    "سلام": "سلام 👋 من Mr Alavi هستم. چطور می‌تونم کمک‌تون کنم؟",
    "معرفی mr alavi": "من Mr. Alavi هستم. طراح و توسعه‌دهنده وب. علاقه‌مند به خلق تجربه‌های کاربری مدرن و واکنش‌گرا.",
    "پروژه‌های من": "برای دیدن پروژه‌های من می‌توانید به صفحه اصلی برگردید و روی 'پروژه‌های من' کلیک کنید.",
    "خدمات": "خدمات من شامل طراحی سایت شخصی، پیاده‌سازی رابط کاربری مدرن (UI/UX) و بهینه‌سازی سایت برای موبایل است.",
    "ارتباط با من": "می‌توانید از طریق تلگرام با من در ارتباط باشید. آماده همکاری در پروژه‌های جدید هستم.",
    "default": "متوجه نشدم. اما می‌توانید درباره پروژه‌ها، خدمات یا راه‌های ارتباطی از من بپرسید!"
};

// پاکسازی کامل چت هنگام بارگذاری
function initChat() {
    chatBox.innerHTML = ''; 
    localStorage.removeItem('mrAlaviChatHistory'); // اطمینان از پاک شدن حافظه
    setTimeout(() => addBotMessage("سلام 👋\nمن Mr Alavi هستم.\nچطور می‌تونم کمک‌تون کنم؟"), 500);
}

function scrollToBottom() { chatBox.scrollTop = chatBox.scrollHeight; }
function addUserMessage(text) { const div = document.createElement('div'); div.className = 'message user-msg'; div.textContent = text; chatBox.appendChild(div); scrollToBottom(); }
function addBotMessage(text) { const div = document.createElement('div'); div.className = 'message bot-msg'; div.innerText = text; chatBox.appendChild(div); scrollToBottom(); speak(text); }
function showTyping() { const div = document.createElement('div'); div.className = 'typing-indicator'; div.id = 'typing'; div.innerHTML = '<div class="dot"></div><div class="dot"></div><div class="dot"></div>'; chatBox.appendChild(div); scrollToBottom(); }
function removeTyping() { const typing = document.getElementById('typing'); if(typing) typing.remove(); }
function processInput(text) { if (!text.trim()) return; addUserMessage(text); userInput.value = ''; showTyping(); setTimeout(() => { removeTyping(); let reply = botKnowledge["default"]; let lowerText = text.toLowerCase(); for (let key in botKnowledge) { if (lowerText.includes(key)) { reply = botKnowledge[key]; break; } } addBotMessage(reply); }, 1500); }
function sendQuickReply(text) { processInput(text); }

sendBtn.addEventListener('click', () => processInput(userInput.value));
userInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') processInput(userInput.value); });

if ('webkitSpeechRecognition' in window) { const recognition = new webkitSpeechRecognition(); recognition.lang = 'fa-IR'; recognition.onresult = (event) => { const text = event.results[0][0].transcript; processInput(text); }; voiceBtn.addEventListener('click', () => { recognition.start(); voiceBtn.style.color = 'red'; }); recognition.onend = () => voiceBtn.style.color = '#00f3ff'; } else { voiceBtn.style.display = 'none'; }
function speak(text) { if ('speechSynthesis' in window) { const msg = new SpeechSynthesisUtterance(text); msg.lang = 'fa-IR'; window.speechSynthesis.speak(msg); } }

window.onload = initChat;
