function createHearts() {
    const bg = document.getElementById('bgHearts');
    const heartsList = ['❤️', '💖', '✨', '🌸', '💕', '🧸', '🍓', '👑'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        heart.innerText = heartsList[Math.floor(Math.random() * heartsList.length)];
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.fontSize = Math.random() * 15 + 18 + 'px';
        heart.style.animationDuration = Math.random() * 3 + 4 + 's';
        bg.appendChild(heart);
        
        setTimeout(() => { heart.remove(); }, 7000);
    }, 350);
}
createHearts();

// فەنکشنی تایبەت بە ئەفێکتی تایپکردنی دەقەکان
function typeWriter(elementId, text, speed = 60) {
    const element = document.getElementById(elementId);
    element.innerHTML = ''; // سەرەتا چۆڵکردنی بۆکسەکە
    let i = 0;
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

function openEnvelope() {
    document.getElementById('step1').style.display = 'none';
    showStep2();
}

function showStep2() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.style.display = 'flex';
    
    dynamicContent.innerHTML = `
        <div class="content-area">
            <img src="https://i.ibb.co/6JJxBxtV/image.gif" class="custom-img" alt="Step 2">
            <h2 class="premium-text" id="typeText2"></h2>
        </div>
        <div class="btn-group-wrapper">
            <div class="btn-group">
                <button class="btn yes-btn" onclick="readyResponse(true)">بەڵێ هەمیشە! 😍</button>
                <button class="btn no-btn" onclick="readyResponse(false)">نەخێر 😒</button>
            </div>
        </div>
    `;
    
    typeWriter('typeText2', 'ئامادەیت بۆ شتێکی زۆر تایبەت؟ 😉✨');
}

function readyResponse(isReady) {
    const dynamicContent = document.getElementById('dynamicContent');

    if (!isReady) {
        dynamicContent.innerHTML = `
            <div class="content-area">
                <img src="https://i.ibb.co/5XH7g9Mg/image.png" class="custom-img" alt="No">
                <h2 class="premium-text" id="typeTextNo" style="color: #555;"></h2>
            </div>
            <div class="btn-group-wrapper"></div>
        `;
        typeWriter('typeTextNo', 'باش کەیفی خۆتە داوەشێی 💀');
    } else {
        dynamicContent.innerHTML = `
            <div class="content-area">
                <img src="https://i.ibb.co/Kj8Dqd1h/image.gif" class="custom-img" alt="Love">
                <h2 class="premium-text" id="typeTextYes"></h2>
            </div>
            <div class="btn-group-wrapper"></div>
        `;
        typeWriter('typeTextYes', 'من زۆر زۆرم خۆشەوێی بچکۆلی سەرزل🥰❤️');

        setTimeout(() => { showLoveQuestion(false); }, 5000);
    }
}

function showLoveQuestion(isSecondTime = false) {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <div class="content-area">
            <img src="https://i.ibb.co/bg42y5sg/image.gif" class="custom-img" alt="Question">
            <h2 class="premium-text" id="typeTextLoveQ"></h2>
        </div>
        <div class="btn-group-wrapper">
            <div class="btn-group">
                <button class="btn yes-btn" onclick="${isSecondTime ? 'loveResponseSecondTime(true)' : 'loveResponseFirstTime(true)'}">بەڵێ گیان 🌸</button>
                <button class="btn no-btn" onclick="${isSecondTime ? 'loveResponseSecondTime(false)' : 'loveResponseFirstTime(false)'}">نەخێر تاقەتی تۆم نیە 😢</button>
            </div>
        </div>
    `;
    
    typeWriter('typeTextLoveQ', 'ئایا تۆش منت بە ڕاستی خۆشدەوێ؟ 🥺🌹');
}

function loveResponseFirstTime(lovesBack) {
    const dynamicContent = document.getElementById('dynamicContent');
    
    if (!lovesBack) {
        dynamicContent.innerHTML = `
            <div class="content-area">
                <img src="https://i.ibb.co/jv2nNgpc/image.png" class="custom-img" alt="Sad">
                <h2 class="premium-text" id="typeTextFirstNo" style="color: #666;"></h2>
            </div>
            <div class="btn-group-wrapper"></div>
        `;
        typeWriter('typeTextFirstNo', 'باشە گەردنت ئازاد بێت... 💔😔');
    } else {
        dynamicContent.innerHTML = `
            <div class="content-area">
                <img src="https://i.ibb.co/4RM7bR67/image.gif" class="custom-img" alt="Funny">
                <h2 class="premium-text" id="typeTextFirstYes"></h2>
            </div>
            <div class="btn-group-wrapper">
                <button class="btn main-btn" onclick="showLoveQuestion(true)">گەڕانەوە بۆ لای دڵم ↩️</button>
            </div>
        `;
        typeWriter('typeTextFirstYes', 'هەمم وا زوو ڕازی مەبە بچکۆلی ناشرین! 😜🤪');
    }
}

function loveResponseSecondTime(lovesBack) {
    const dynamicContent = document.getElementById('dynamicContent');
    
    if (!lovesBack) {
        dynamicContent.innerHTML = `
            <div class="content-area">
                <img src="https://i.ibb.co/vMsvx7y/image.png" class="custom-img" alt="Sad">
                <h2 class="premium-text" id="typeTextSecNo" style="color: #666;"></h2>
            </div>
            <div class="btn-group-wrapper"></div>
        `;
        typeWriter('typeTextSecNo', 'ئیتر تەواو دڵم شکا... 💔😔');
    } else {
        dynamicContent.innerHTML = `
            <div class="content-area">
                <img src="https://i.ibb.co/S40qLtzR/image.gif" class="custom-img" alt="Final">
                <h2 class="premium-text" id="typeTextSecYes"></h2>
            </div>
            <div class="btn-group-wrapper">
                <button class="btn yes-btn" onclick="showBonusStep()">بینینی سوپرایزە گەورەکە 🎁</button>
            </div>
        `;
        typeWriter('typeTextSecYes', 'ئۆیی بەقوربانبممم منیش خۆشم دەوێی نازدارەکەی منننن! 😭❤️✨');
    }
}

function showBonusStep() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <div class="content-area">
            <img src="https://i.ibb.co/Kj8Dqd1h/image.gif" class="custom-img" alt="Bonus">
            <h2 class="premium-text" id="typeTextBonus"></h2>
        </div>
        <div class="btn-group-wrapper" style="display: flex; justify-content: space-around; align-items: center; width: 100%;">
            <div style="width: 50%; display: flex; justify-content: center;">
                <button class="btn yes-btn" onclick="showRomanticQuestion()">بەڵێن بێت 🤝❤️</button>
            </div>
            <div style="width: 50%; display: flex; justify-content: center; position: relative; height: 50px;">
                <button class="btn no-btn" id="runawayBtn" style="position: absolute;" onmouseover="runAway()" onclick="runAway()">نەخێر 🏃‍♂️</button>
            </div>
        </div>
    `;
    
    typeWriter('typeTextBonus', 'بەڵێن بدە کە هەمیشە پێکەوە دەبین؟ 🥺💍');
}

function showRomanticQuestion() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <div class="content-area">
            <img src="https://i.ibb.co/6JJxBxtV/image.gif" class="custom-img" alt="Rain Walk">
            <h2 class="premium-text" id="typeTextRain" style="font-size: 20px;"></h2>
        </div>
        <div class="btn-group-wrapper">
            <div class="btn-group">
                <button class="btn yes-btn" onclick="showFinalCertificate('بۆ تۆ 🌸')">چەترەکە ئەدەم بە تۆ🐱</button>
                <button class="btn no-btn" onclick="showFinalCertificate('پێکەوە تەڕ دەبین 🥰')">چەترەکە فڕێ دەدەین و پێکەوە تەڕ دەبین 🤍</button>
            </div>
        </div>
    `;
    
    typeWriter('typeTextRain', 'گەر باران ببارێت، چەترێکمان پێبێت چی لێدەکەی 🌧️☔');
}

function runAway() {
    const btn = document.getElementById('runawayBtn');
    const randomX = Math.floor(Math.random() * 60) - 30; 
    const randomY = Math.floor(Math.random() * 40) - 20; 
    btn.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

function showFinalCertificate(answerText) {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <div class="content-area">
            <div class="cert-box">
                <h2 class="premium-text" id="typeTextCertTitle" style="font-size: 22px; color: #d90429; min-height: auto; margin-bottom: 5px;"></h2>
                <p style="font-size: 15px; color: #2b2d42; line-height: 1.6; margin: 5px 0;">تۆ وتت: <b>"${answerText}"</b></p>
                <p style="font-size: 14px; color: #555; line-height: 1.5;" id="typeTextCertDesc"></p>
            </div>
        </div>
        <div class="btn-group-wrapper">
            <button class="btn main-btn" onclick="restartProject()" style="background: linear-gradient(45deg, #9c27b0, #e040fb);">سەرلەنوێ دوبارەکردنەوە 🔄</button>
        </div>
    `;
    
    typeWriter('typeTextCertTitle', '📜 پەیماننامەی ئەشقی من و تۆ', 40);
    typeWriter('typeTextCertDesc', 'تا دوا دڵنەوایی ژیانم خۆشم دەوێیت! 🔒💗', 40);
}

function restartProject() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.style.display = 'none';
    dynamicContent.innerHTML = '';
    document.getElementById('step1').style.display = 'flex';
}