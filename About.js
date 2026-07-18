const bioData = {
    fa: "سلام، من Mr Alavi هستم. تخصص من طراحی و توسعه وب‌سایت‌های شخصی با تمرکز بر عملکرد در موبایل و رابط کاربری مدرن است. هدف من خلق سایت‌هایی است که هم از نظر ظاهری جذاب باشند و هم تجربه کاربری عالی ارائه دهند.",
    en: "Hi, I'm Mr Alavi. I specialize in designing and developing personal websites with a focus on mobile performance and modern UI. My goal is to create websites that are both visually stunning and provide an excellent user experience."
};
function showBio(lang) { document.getElementById('lang-selection').style.display = 'none'; const bioBox = document.getElementById('bio-content'); const bioText = document.getElementById('bio-text'); bioBox.style.display = 'block'; bioText.innerHTML = ""; let text = bioData[lang]; let i = 0; function typeWriter() { if (i < text.length) { bioText.innerHTML += text.charAt(i); i++; setTimeout(typeWriter, 30); } } typeWriter(); }
