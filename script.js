// فەنکشنی دروستکردنی ئەنیمەیشنی دڵەکانی باکگراوند
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
        if(bg) bg.appendChild(heart);
        setTimeout(() => { heart.remove(); }, 7000);
    }, 350);
}
createHearts();

// فەنکشنی نووسینی هێواش (Typewriter Effect)
function typeWriter(elementId, text, speed = 60) {
    const element = document.getElementById(elementId);
    if (!element) return;
    element.innerHTML = '';
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

function showMainMenu() {
    const urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.get('page');
    const name = urlParams.get('name');
    const target = urlParams.get('target');

    if (page === 'promise' && target === 'lover' && name) {
        showLoverLockedBox(decodeURIComponent(name));
        return;
    }

    document.title = "پەیجی تایبەتی من و تۆ ✨";
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <div class="content-area" style="justify-content: flex-start; width:100%;">
            <img src="https://i.pinimg.com/originals/0e/ba/e1/0ebae1a095888493cd43dff553511301.gif" style="width: 120px; height: 120px; margin-bottom: 5px; object-fit: contain; border-radius: 15px;" alt="Love GIF">
            
            <h2 class="premium-text" id="menuTitle" style="margin-bottom: 2px; margin-top:0;">🌟 بەخێرهێی دڵەکەم 🌟</h2>
            <p style="font-size: 13px; color: #666; margin: 0 0 10px 0; text-align:center;">بەشێک هەڵبژێره یان لینکەکەی کۆپی بکە</p>
            
            <div class="menu-grid">
                <div class="menu-block"><div class="menu-item" onclick="startLoveProject()">💖 پەیمانی ئەشق</div><button class="copy-btn" onclick="copyLink('love')">کۆپیکردنی لینک 🔗</button></div>
                <div class="menu-block"><div class="menu-item" onclick="startIntroProject()">🌱 یەکتر ناسین</div><button class="copy-btn" onclick="startIntroProject()">دروستکردنی لینک 🔗</button></div>
                <div class="menu-block"><div class="menu-item" onclick="startApologyProject()">🥺 ئاشتکردنەوە</div><button class="copy-btn" onclick="copyLink('apology')">کۆپیکردنی لینک 🔗</button></div>
                <div class="menu-block"><div class="menu-item" onclick="startCalculatorProject()">🔮 ڕێژەی عەشق</div><button class="copy-btn" onclick="copyLink('calc')">کۆپیکردنی لینک 🔗</button></div>
                <div class="menu-block"><div class="menu-item" onclick="startPromiseProject()">🔒 بەڵێنی ئەبەدی</div><button class="copy-btn" onclick="copyLink('promise')">کۆپیکردنی لینک 🔗</button></div>
                <div class="menu-block"><div class="menu-item" onclick="startCertificateProject()">💌 پسوولەی دڵ</div><button class="copy-btn" onclick="copyLink('cert')">کۆپیکردنی لینک 🔗</button></div>
            </div>
        </div>
        <div class="btn-group-wrapper"></div>
    `;
    typeWriter('menuTitle', '🌟 بەخێرهێی دڵەکەم 🌟', 50);
}

function checkUrlParameters() {
    const urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.get('page');
    const name = urlParams.get('name');
    const target = urlParams.get('target');

    if (page === 'intro') {
        const bName = urlParams.get('bname');
        const gName = urlParams.get('gname');
        
        // ئەگەر هەردوو زانیارییەکە لە بەستەرەکەدا هەبوو (واتە کۆتایی هاتووە و بۆ بینینەوەیە)
        if (bName && gName) {
            showFinalIntroCardViewOnly();
        } 
        // ئەگەر تەنها زانیاری کوڕەکەی پێبوو، پەیجەکە بۆ کچەکە نیشان دەدات
        else if (bName) {
            showIntroToGirl(); 
        } else {
            startIntroProject(); 
        }
    }
    else if (page === 'promise') {
        if (target === 'lover' && name) {
            showLoverLockedBox(decodeURIComponent(name));
        } else {
            startPromiseProject();
        }
    }
    else if (page === 'love') startLoveProject();
    else if (page === 'apology') startApologyProject();
    else if (page === 'calc') startCalculatorProject();
    else if (page === 'cert') startCertificateProject();
    else showMainMenu();
}
window.onload = checkUrlParameters;

function copyLink(pageName) {
    const baseUrl = window.location.href.split('?')[0];
    const customLink = `${baseUrl}?page=${pageName}`;
    navigator.clipboard.writeText(customLink).then(() => {
        alert('لینکەکە بە سەرکەوتوویی کۆپی کرا! ئێستا دەتوانیت بینێریت بۆ بەرامبەرەکەت 🎀');
    }).catch(err => {
        console.error('کێشەیەک هەیە لە کۆپیکردن: ', err);
    });
}

/* ==========================================
   پڕۆژەی دووەم: لاپەڕەی داینامیکی یەکتر ناسین (چاککراو)
   ========================================== */
function startIntroProject() {
    document.title = "دروستکردنی لۆبی یەکترناسین 🌱";
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <div class="content-area" style="width: 100%; justify-content:center; align-items:center;">
            <img src="https://i.pinimg.com/1200x/27/bd/8d/27bd8d08a98193f6f47412dd7634aa9a.jpg" style="width: 120px; height: 120px; margin-bottom: 10px; border-radius: 15px; object-fit: cover;">
            <h2 class="premium-text" id="introBuildTitle" style="font-size:18px; margin: 5px 0;"></h2>
            <p style="font-size:13px; color:#555; margin:0 0 15px 0; text-align:center;">تکایە سەرەتا زانیارییەکانی خۆت (کوڕ) پڕبکەرەوە:</p>
            <div style="width: 100%; max-width:280px;">
                <input type="text" id="boyName" class="love-input" placeholder="ناوی تۆ (کوڕ) 🤵">
                <input type="number" id="boyAge" class="love-input" placeholder="تەمەنت 🔢">
                <input type="text" id="boyCity" class="love-input" placeholder="خەڵکی کوێیت؟ 📍">
            </div>
        </div>
        <div class="btn-group-wrapper" style="margin-top:10px; width:100%; max-width:280px;">
            <button class="btn main-btn" onclick="generateIntroLink()">دروستکردنی لینک بۆ کچەکە 🔗</button>
        </div>
    `;
    typeWriter('introBuildTitle', '🌱 ڕێکخستنی پەیجی یەکترناسین');
}

function generateIntroLink() {
    const name = document.getElementById('boyName').value.trim();
    const age = document.getElementById('boyAge').value.trim();
    const city = document.getElementById('boyCity').value.trim();

    if(!name || !age || !city) { alert('تکایە هەموو خانەکان پڕبکەرەوە! ✨'); return; }

    const baseUrl = window.location.protocol + '//' + window.location.host + window.location.pathname;
    const introLink = `${baseUrl}?page=intro&bname=${encodeURIComponent(name)}&bage=${encodeURIComponent(age)}&bcity=${encodeURIComponent(city)}`;
    
    navigator.clipboard.writeText(introLink).then(() => {
        alert(`لینکەکە بە سەرکەوتوویی دروستکرا و کۆپی بوو! ئێستا بینێره بۆ ئەو کچەی دەتەوێت بیناسیت تا پڕی بکاتەوە 💌`);
        goBackHome();
    });
}

let noCount = 0;
function showIntroToGirl() {
    document.title = "پەیجی یەکترناسین 🌱";
    noCount = 0;
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <div class="content-area">
            <img src="https://i.pinimg.com/1200x/27/bd/8d/27bd8d08a98193f6f47412dd7634aa9a.jpg" style="width: 120px; height: 120px; margin-bottom: 10px; border-radius: 15px; object-fit: cover;">
            <h2 class="premium-text" id="introText"></h2>
        </div>
        <div class="btn-group-wrapper">
            <div class="btn-group" id="introBtnGroup">
                <button class="btn yes-btn" onclick="introResponse(true)">بەڵێ بە دڵنیاییەوە 😍</button>
                <button class="btn no-btn" id="introNoBtn" onclick="introResponse(false)">نەخێر تاقەتم نیە 😒</button>
            </div>
        </div>
    `;
    typeWriter('introText', 'ئایا ئامادەیت کاتێکی خۆش پێکەوە بەسەر بەرین و زیاتر یەکتر بناسین؟ ⚡🌸');
}

function introResponse(isYes) {
    const dynamicContent = document.getElementById('dynamicContent');
    if (isYes) {
        askGirlDetails(); 
    } else {
        noCount++;
        if (noCount === 1) typeWriter('introText', 'دڵنیایت؟ تکایه پێم مەڵێ نەخێر... جارێکی تر بیر بکەرەوە! 🥺💔');
        else if (noCount === 2) typeWriter('introText', 'هێشتا هەر دەڵێی نەخێر?! کچێ وا مەکە ڕازی ببه دەی! 😤👉');
        else if (noCount >= 3) {
            dynamicContent.innerHTML = `
                <div class="content-area" style="justify-content: center; height: 100%;">
                    <img src="https://i.pinimg.com/originals/d1/99/5d/d1995dd8f43c8c38ee8c8ddb2096d760.gif" style="width: 110px; height: 110px; margin-bottom: 10px; border-radius: 15px;">
                    <h1 class="premium-text" id="finalLockText" style="font-size: 26px; color: #d90429; line-height: 1.6; padding: 10px;"></h1>
                </div>
                <div class="btn-group-wrapper">
                    <button class="btn yes-btn" onclick="askGirlDetails()" style="width: 100%;">بەڵێ فەرموو (تەنها ئەم ڕێگایە ماوە) ❤️</button>
                </div>
            `;
            typeWriter('finalLockText', 'تەواو ئیتر ناهێڵم ڕام بکەیتەوە. هەلێکم پێبدە چاو جوان! 😉🔒✨', 50);
        }
    }
}

function askGirlDetails() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <div class="content-area" style="width: 100%; justify-content:center; align-items:center;">
            <img src="https://i.pinimg.com/originals/0e/ba/e1/0ebae1a095888493cd43dff553511301.gif" style="width: 110px; height: 110px; margin-bottom: 10px; border-radius: 15px;">
            <h2 class="premium-text" id="askGirlTitle" style="font-size:18px; margin:5px 0;"></h2>
            <div style="width: 100%; max-width:280px; margin-top:10px;">
                <input type="text" id="gName" class="love-input" placeholder="ناوی تۆ (کچ) 🤵‍♀️">
                <input type="number" id="gAge" class="love-input" placeholder="تەمەنت 🔢">
                <input type="text" id="gCity" class="love-input" placeholder="خەڵکی کوێیت؟ 📍">
            </div>
        </div>
        <div class="btn-group-wrapper" style="margin-top:15px; width:100%; max-width:280px;">
            <button class="btn main-btn" onclick="showFinalIntroCard()">تەواوکردن و دروستکردنی ئەنجام 🌟</button>
        </div>
    `;
    typeWriter('askGirlTitle', '✨ ئێستاش تۆ زانیارییەکانت بنووسە');
}

function showFinalIntroCard() {
    const gName = document.getElementById('gName').value.trim();
    const gAge = document.getElementById('gAge').value.trim();
    const gCity = document.getElementById('gCity').value.trim();

    if(!gName || !gAge || !gCity) { alert('تکایە هەموو خانەکان پڕبکەرەوە شازادە! 🌸'); return; }

    const urlParams = new URLSearchParams(window.location.search);
    const bName = decodeURIComponent(urlParams.get('bname') || 'نادیار');
    const bAge = decodeURIComponent(urlParams.get('bage') || 'نادیار');
    const bCity = decodeURIComponent(urlParams.get('bcity') || 'نادیار');

    // دروستکردنی لۆبی نوێ کە زانیاری کوڕ و کچ پێکەوە کۆ دەکاتەوە
    const baseUrl = window.location.protocol + '//' + window.location.host + window.location.pathname;
    const finalResultLink = `${baseUrl}?page=intro&bname=${encodeURIComponent(bName)}&bage=${encodeURIComponent(bAge)}&bcity=${encodeURIComponent(bCity)}&gname=${encodeURIComponent(gName)}&gage=${encodeURIComponent(gAge)}&gcity=${encodeURIComponent(gCity)}`;

    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <div class="content-area" style="width: 100%; justify-content:center; align-items:center;">
            <img src="https://i.pinimg.com/originals/cb/16/5d/cb165d4a8a452d2bc0e942a95922d449.gif" style="width: 100px; height: 100px; margin-bottom: 10px; border-radius: 15px;">
            
            <div style="background: rgba(255,255,255,0.9); border: 2px dashed #ff477e; border-radius: 20px; padding: 15px; width: 100%; max-width: 320px; box-sizing: border-box; text-align: center;">
                <h3 style="color: #ff0054; margin: 0 0 15px 0; font-size: 18px;">🤝 سەرکەوتووانە یەکتریتان ناسی 🤝</h3>
                
                <div style="background: #f0f7ff; padding: 10px; border-radius: 12px; margin-bottom: 10px; border: 1px solid #b3d7ff; text-align: right; direction: rtl;">
                    <b style="color: #007bff; font-size:14px;">🤵 زانیاری نێرەر (کوڕ):</b>
                    <p style="margin: 5px 0 0 0; font-size: 13px; color: #333;">ناو: ${bName} <br> تەمەن: ${bAge} ساڵ <br> شار: ${bCity}</p>
                </div>

                <div style="background: #fff5f7; padding: 10px; border-radius: 12px; border: 1px solid #ffccd5; text-align: right; direction: rtl;">
                    <b style="color: #ff477e; font-size:14px;">👰‍♀️ زانیاری وەرگر (کچ):</b>
                    <p style="margin: 5px 0 0 0; font-size: 13px; color: #333;">ناو: ${gName} <br> تەمەن: ${gAge} ساڵ <br> شار: ${gCity}</p>
                </div>
            </div>
            <p id="introFinalText" style="font-size: 13px; color: #555; text-align: center; margin-top: 15px; max-width:280px; font-weight:bold;"></p>
        </div>
        <div class="btn-group-wrapper" style="width:100%; max-width:280px;">
            <button class="btn main-btn" onclick="copyFinalResultLink('${finalResultLink}')">ناردنەوەی ئەنجام بۆ کوڕەکە 🔗</button>
        </div>
    `;
    typeWriter('introFinalText', 'بۆ ئەوەی کوڕەکەش زانیارییەکانت ببینێت، کلیک لەسەر دوگمەی خوارەوە بکە و لینکەکەی بۆ بنێرەوە! ✨💍');
}

function copyFinalResultLink(link) {
    navigator.clipboard.writeText(link).then(() => {
        alert('لینیاتی ئەنجامەکە کۆپی کرا! بینێرەوە بۆ کوڕەکە تا زانیارییەکانت ببینێت 🌸');
    });
}

// فەنکشنێک بۆ کاتێک کوڕەکە لینکە گەڕاوەکەی کچەکە دەکاتەوە (تەنها بۆ بینینی کارتەکە بە تەواوی)
function showFinalIntroCardViewOnly() {
    const urlParams = new URLSearchParams(window.location.search);
    const bName = decodeURIComponent(urlParams.get('bname') || 'نادیار');
    const bAge = decodeURIComponent(urlParams.get('bage') || 'نادیار');
    const bCity = decodeURIComponent(urlParams.get('bcity') || 'نادیار');
    const gName = decodeURIComponent(urlParams.get('gname') || 'نادیار');
    const gAge = decodeURIComponent(urlParams.get('gage') || 'نادیار');
    const gCity = decodeURIComponent(urlParams.get('gcity') || 'نادیار');

    document.title = "ئەنجامی یەکترناسین 🤝";
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <div class="content-area" style="width: 100%; justify-content:center; align-items:center;">
            <img src="https://i.pinimg.com/originals/0e/ba/e1/0ebae1a095888493cd43dff553511301.gif" style="width: 100px; height: 100px; margin-bottom: 10px; border-radius: 15px;">
            
            <div style="background: rgba(255,255,255,0.9); border: 2px dashed #007bff; border-radius: 20px; padding: 15px; width: 100%; max-width: 320px; box-sizing: border-box; text-align: center;">
                <h3 style="color: #007bff; margin: 0 0 15px 0; font-size: 18px;">✨ پیرۆزە! کچەکە لۆبیەکەی پڕکردەوە ✨</h3>
                
                <div style="background: #f0f7ff; padding: 10px; border-radius: 12px; margin-bottom: 10px; border: 1px solid #b3d7ff; text-align: right; direction: rtl;">
                    <b style="color: #007bff; font-size:14px;">🤵 زانیاری تۆ (کوڕ):</b>
                    <p style="margin: 5px 0 0 0; font-size: 13px; color: #333;">ناو: ${bName} <br> تەمەن: ${bAge} ساڵ <br> شار: ${bCity}</p>
                </div>

                <div style="background: #fff5f7; padding: 10px; border-radius: 12px; border: 1px solid #ffccd5; text-align: right; direction: rtl;">
                    <b style="color: #ff477e; font-size:14px;">👰‍♀️ زانیاری ئەو (کچ):</b>
                    <p style="margin: 5px 0 0 0; font-size: 13px; color: #333;">ناو: ${gName} <br> تەمەن: ${gAge} ساڵ <br> شار: ${gCity}</p>
                </div>
            </div>
            <p id="viewFinalText" style="font-size: 13px; color: #555; text-align: center; margin-top: 15px; max-width:280px; font-weight:bold;"></p>
        </div>
        <div class="btn-group-wrapper">
            <button class="btn main-btn" onclick="goBackHome()">گەڕانەوە بۆ مێنیو ↩️</button>
        </div>
    `;
    typeWriter('viewFinalText', 'هیوادارم سەرەتایەک بێت بۆ خۆشترین هاوڕێیەتی و پێکەوەبوون! 🌟🧸');
}

/* ==========================================
   پڕۆژەی پێنجەم: سندووقی بەڵێنی ئەبەدی
   ========================================== */
function startPromiseProject() {
    document.title = "بەڵێنی ئەبەدی 🔒❤️";
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <div class="content-area" style="width: 100%;">
            <img src="https://i.pinimg.com/736x/84/71/01/847101a27556824e1f747f34c509cf13.jpg" style="width: 110px; height: 110px; margin-bottom: 10px; border-radius: 15px; object-fit: cover;">
            <h2 class="premium-text" id="promiseTitle"></h2>
            <div style="width: 100%; margin-top: 15px;">
                <input type="text" id="loverName" class="love-input" placeholder="ناوی ئەو کەسەی پەیجەکەی بۆ دەنێریت... 👑">
            </div>
        </div>
        <div class="btn-group-wrapper">
            <button class="btn main-btn" onclick="generatePromiseLink()">دروستکردنی سندووق و کۆپیکردنی لینک 🔗</button>
        </div>
    `;
    typeWriter('promiseTitle', '🔒 سندووقی بەڵێنی هەمیشەیی بۆ خۆشەویستەکەم');
}

function generatePromiseLink() {
    const name = document.getElementById('loverName').value.trim();
    if(!name) { alert('تکایە ناوی خۆشەویستەکەت بنووسە! ✨'); return; }

    const baseUrl = window.location.protocol + '//' + window.location.host + window.location.pathname;
    const loveLink = `${baseUrl}?page=promise&target=lover&name=${encodeURIComponent(name)}`;
    
    navigator.clipboard.writeText(loveLink).then(() => {
        alert(`سندووقەکە بە ناوی (${name}) دروستکرا و لینکەکەی کۆپی بوو! ئێستا دەتوانیت لە چات بۆی بنێریت. 💌`);
        
        const dynamicContent = document.getElementById('dynamicContent');
        dynamicContent.innerHTML = `
            <div class="content-area" style="width:100%;">
                <div class="promise-box">
                    <img src="https://i.pinimg.com/originals/03/ba/9b/03ba9bb409798666aa56507dcaa62f8a.gif" style="width: 80px; height: 80px; margin-bottom: 10px; border-radius: 10px;">
                    <h3 style="color: #ff0054;">سندووقی بەڵێن کۆپی کرا!</h3>
                    <p style="font-size: 14px; color: #2b2d42; line-height: 1.6;">لینکەکە بە سەرکەوتوویی کۆپی بوو. دەتوانیت لە خوارەوە خۆت تاقی بکەیتەوە پێش ئەوەی بینێریت:</p>
                </div>
            </div>
            <div class="btn-group-wrapper">
                <button class="btn main-btn" onclick="showLoverLockedBox('${name}')">بینینی شێوازی پەیجەکە 🔑</button>
            </div>
        `;
    });
}

function showLoverLockedBox(name) {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <div class="content-area" style="width:100%;">
            <img src="https://i.pinimg.com/originals/03/ba/9b/03ba9bb409798666aa56507dcaa62f8a.gif" style="width: 110px; height: 110px; margin-bottom: 10px; border-radius: 15px;">
            <div class="promise-box" id="pBox">
                <h3 style="color: #ff0054; margin: 10px 0;">سندووقی بەڵێنی ئەبەدی</h3>
                <p style="font-size: 14px; color: #555; line-height: 1.6;">
                    ئەم سندووقە بە فەرمی و تەنها بۆ نازداری دڵم <span style="color: #ff477e; font-weight: bold;">( ${name} )</span> قوفڵ کراوە.
                </p>
            </div>
        </div>
        <div class="btn-group-wrapper">
            <button class="btn main-btn" id="openBoxBtn" onclick="revealPromise('${name}')">کردنەوەی سندووقی دڵ 🔑</button>
        </div>
    `;
}

function revealPromise(name) {
    const openBoxBtn = document.getElementById('openBoxBtn');
    const pBox = document.getElementById('pBox');
    
    pBox.innerHTML = `
        <div class="promise-revealed">
            <img src="https://i.pinimg.com/736x/7f/80/b6/7f80b67c1b4a2db83fa1555d28f553af.jpg" style="width: 100px; height: 100px; border-radius: 50%; object-fit: cover; margin-bottom: 10px; border: 3px solid #ff477e;">
            <h3 style="color: #d90429; font-size: 20px; margin: 0 0 10px 0;">بەڵێنی هەمیشەیی من بۆ تۆ</h3>
            <div style="color: #ffb3c6; margin-bottom: 10px;">━━━━ 🧸 ━━━━</div>
            <p class="promise-text-body" id="promiseTextAnim"></p>
            <div class="promise-signature">✍️ هاوسەری دواڕۆژت</div>
        </div>
    `;
    if(openBoxBtn) {
        openBoxBtn.setAttribute("onclick", "goBackHome()");
        openBoxBtn.innerText = "داخستن ↩️";
    }
    typeWriter('promiseTextAnim', `بۆ نازدارترین و هێمن‌ترین دڵی دونیا، بۆ شازادە ${name}.. بەڵێنت پێدەدەم کە لە خۆشی و ناخۆشیدا، لە تەنگانە و پێکەنیندا، دەستت بەربنەدەم. تۆ تەنها خۆشەویستی من نیت، تۆ تەواکەری ڕۆح و داهاتووی منیت. تا دوا هەناسە لێدانی دڵم, هۆگری تۆ دەبم! ❤️`, 40);
}

/* ==========================================
   پڕۆژەی چوارەم: حاسیبەی عەشق
   ========================================== */
function startCalculatorProject() {
    document.title = "پێوەر و ڕێژەی عەشق 🔮";
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <div class="content-area" style="width: 100%;">
            <img src="https://i.pinimg.com/originals/d1/99/5d/d1995dd8f43c8c38ee8c8ddb2096d760.gif" style="width: 110px; height: 110px; margin-bottom: 10px; border-radius: 15px;">
            <h2 class="premium-text" id="calcTitle"></h2>
            <div style="width: 100%; margin-top: 15px;">
                <input type="text" id="name1" class="love-input" placeholder="ناوی تۆ 🤵">
                <input type="text" id="name2" class="love-input" placeholder="ناوی ئەو 👰">
            </div>
        </div>
        <div class="btn-group-wrapper">
            <button class="btn main-btn" onclick="calculateLove()">ئەنجامەکە نیشان بدە ⚡</button>
        </div>
    `;
    typeWriter('calcTitle', '🔮 پێوەری داینامیکی ڕێژەی عەشق');
}

function calculateLove() {
    const n1 = document.getElementById('name1').value.trim();
    const n2 = document.getElementById('name2').value.trim();
    if(!n1 || !n2) { alert('تکایە هەردوو ناوەکە بنووسە! 🌸'); return; }

    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <div class="content-area">
            <img src="https://i.pinimg.com/originals/0e/ba/e1/0ebae1a095888493cd43dff553511301.gif" style="width: 100px; height: 100px; border-radius: 15px;">
            <h2 class="premium-text" id="loadingText">خەریکە لێکدانەوە بۆ دڵەکان دەکرێت... ⏳</h2>
        </div>
        <div class="btn-group-wrapper"></div>
    `;

    setTimeout(() => {
        const randomPercent = Math.floor(Math.random() * 7) + 94; 
        
        dynamicContent.innerHTML = `
            <div class="content-area" style="justify-content: center; width: 100%;">
                <div class="huge-heart-wrapper">
                    <div class="huge-heart"></div>
                    <div class="heart-content">
                        <div class="heart-names">
                            <span class="left-name">${n1}</span>
                            <span class="right-name">${n2}</span>
                        </div>
                        <div class="heart-percent">%${randomPercent}</div>
                    </div>
                </div>
                <p style="font-size: 13px; color: #555; line-height: 1.5; text-align: center; margin-top: 25px; padding: 0 10px;" id="calcResultText"></p>
            </div>
            <div class="btn-group-wrapper">
                <button class="btn main-btn" onclick="goBackHome()">گەڕانەوە بۆ مێنیو ↩️</button>
            </div>
        `;
        typeWriter('calcResultText', 'ئەستێرەکان دەڵێن ئێوە بۆ یەکتر دروستکراون و چاوپیس ناتوانێت لە یەکتریتان جیا بکاتەوە! 💍✨');
    }, 2000);
}

/* ==========================================
   پڕۆژەی پێنجەم (پاشکۆ): پسوولەی دڵ
   ========================================== */
function startCertificateProject() {
    document.title = "پسوولەی فەرمی دڵ 💌";
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <div class="content-area" style="width: 100%;">
            <img src="https://i.pinimg.com/originals/0e/ba/e1/0ebae1a095888493cd43dff553511301.gif" style="width: 110px; height: 110px; margin-bottom: 10px; border-radius: 15px;">
            <h2 class="premium-text" id="certTitle"></h2>
            <div style="width: 100%; margin-top: 20px;">
                <input type="text" id="ownerName" class="love-input" placeholder="ناوی خاوەنی دڵ بنووسە... 👑">
            </div>
        </div>
        <div class="btn-group-wrapper">
            <button class="btn main-btn" onclick="generateCertificate()">تۆمارکردنی پسوولە 📜</button>
        </div>
    `;
    typeWriter('certTitle', '💌 پسوولەی هەمیشەیی خاوەندارێتی دڵ');
}

function generateCertificate() {
    const name = document.getElementById('ownerName').value.trim();
    if(!name) { alert('تکایە ناوێک بنووسە! ✨'); return; }

    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <div class="content-area" style="width:100%;">
            <div class="luxury-cert">
                <div class="cert-ribbon">👑</div>
                <h3>بڕیارنامەی تەمەن</h3>
                <div class="cert-divider">🌟 🌟 🌟</div>
                <p class="cert-body">
                    بڕیاردرا بە فەرمی کە سەرجەم لێدانەکان, هەستەکان و تەواوی موڵکییەتی دڵی نێرەری ئەم لینکە، تا دوا هەناسەی ژیان بخرێتە سەر شوناس و ناوی نازدار:
                </p>
                <div class="cert-name">✨ ${name} ✨</div>
                <div class="cert-footer">
                    <span>🔐 مۆری ئەبەدی</span>
                    <span>📍 جێگیر لە ناو ڕۆح</span>
                </div>
            </div>
        </div>
        <div class="btn-group-wrapper">
            <button class="btn main-btn" onclick="goBackHome()">گەڕانەوە بۆ مێنیو ↩️</button>
        </div>
    `;
}

/* ==========================================
   پڕۆژەی سێیەم: ئاشتکردنەوە
   ========================================== */
let apologyNoCount = 0;
function startApologyProject() {
    document.title = "سوڵح و ئاشتکردنەوە 🥺❤️";
    apologyNoCount = 0;
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <div class="content-area">
            <img src="https://i.pinimg.com/originals/cb/16/5d/cb165d4a8a452d2bc0e942a95922d449.gif" style="width: 120px; height: 120px; margin-bottom: 10px; border-radius: 15px; object-fit: cover;">
            <h2 class="premium-text" id="apologyText"></h2>
        </div>
        <div class="btn-group-wrapper">
            <div class="btn-group" id="apologyBtnGroup">
                <button class="btn yes-btn" onclick="apologyResponse(true)">لێت خۆشبووم گیانم 🫂❤️</button>
                <button class="btn no-btn" id="apologyNoBtn" onclick="apologyResponse(false)">نەخێر، هێشتا دڵم عاجزە 💔</button>
            </div>
        </div>
    `;
    typeWriter('apologyText', 'دەزانم ڕەنگە دڵt لێم مابێت، بەڵام تۆ گەورەیی خۆت بنوێنە... لێم خۆش دەبیت؟ 🥺🌹');
}

function apologyResponse(isForgiven) {
    const dynamicContent = document.getElementById('dynamicContent');
    if (isForgiven) {
        dynamicContent.innerHTML = `
            <div class="content-area">
                <img src="https://i.pinimg.com/736x/3b/1c/fb/3b1cfb3d0d8a6eb0ec98bc4b5d446c81.jpg" style="width: 120px; height: 120px; margin-bottom: 10px; border-radius: 15px; object-fit: cover;">
                <h2 class="premium-text" id="apologyYesText"></h2>
            </div>
            <div class="btn-group-wrapper">
                <button class="btn main-btn" onclick="goBackHome()">گەڕانەوە بۆ مێنیو ↩️</button>
            </div>
        `;
        typeWriter('apologyYesText', 'ئۆیی فیدای ئەو دڵە پاکەت بم! بەڵێن بێت ئیتر هەرگیز چاوە جوانتەکانت نزم نەکەمەوە... 🌸✨🥰');
    } else {
        apologyNoCount++;
        if (apologyNoCount === 1) typeWriter('apologyText', 'ئەی هاوار.. مەڵێ وا هێشتا زویری! کوا دڵت دێت سەیری گریانی من بکەیت؟ جارێکی تر سەیرکەرەوە 🥺💔');
        else if (apologyNoCount === 2) typeWriter('apologyText', 'باشە من هەڵە بووم، گەردنم ئازاد بکە دەی.. بە قورbانت بم مەڵێ نەخێر! 😭👉🎀');
        else if (apologyNoCount >= 3) {
            dynamicContent.innerHTML = `
                <div class="content-area" style="justify-content: center; height: 100%;">
                    <img src="https://i.pinimg.com/originals/cb/16/5d/cb165d4a8a452d2bc0e942a95922d449.gif" style="width: 110px; height: 110px; margin-bottom: 10px; border-radius: 15px; object-fit: cover;">
                    <h1 class="premium-text" id="apologyLockText" style="font-size: 25px; color: #d90429; line-height: 1.6; padding: 10px;"></h1>
                </div>
                <div class="btn-group-wrapper">
                    <button class="btn yes-btn" onclick="apologyResponse(true)" style="width: 100%;">ئیتر لێت خۆشبووم گەردنت ئازاد بێت 🤍</button>
                </div>
            `;
            typeWriter('apologyLockText', 'هەرچەنە زۆریش کەلەڕەقیت بەڵام هەر خۆشم دەوێی! ئیتر ڕێگای ڕاکردنت نییە، کلیک لە خوارەوە بکە و با ئاشت بینەوە 😉🔐✨', 50);
        }
    }
}

/* ==========================================
   پڕۆژەی یەکەم: ئەشقی من و تۆ
   ========================================== */
function startLoveProject() {
    document.title = "پەیماننامەی عەشق 💖";
    showStep2();
}

function showStep2() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <div class="content-area">
            <img src="https://i.pinimg.com/originals/0e/ba/e1/0ebae1a095888493cd43dff553511301.gif" style="width: 120px; height: 120px; margin-bottom: 10px; border-radius: 15px;">
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
                <img src="https://i.pinimg.com/originals/cb/16/5d/cb165d4a8a452d2bc0e942a95922d449.gif" style="width: 120px; height: 120px; margin-bottom: 10px; border-radius: 15px; object-fit: cover;">
                <h2 class="premium-text" id="typeTextNo" style="color: #555;"></h2>
            </div>
            <div class="btn-group-wrapper"></div>
        `;
        typeWriter('typeTextNo', 'باش کەیفی خۆتە داوەشێی 💀');
        setTimeout(goBackHome, 3000);
    } else {
        dynamicContent.innerHTML = `
            <div class="content-area">
                <img src="https://i.pinimg.com/originals/d1/99/5d/d1995dd8f43c8c38ee8c8ddb2096d760.gif" style="width: 120px; height: 120px; margin-bottom: 10px; border-radius: 15px;">
                <h2 class="premium-text" id="typeTextYes"></h2>
            </div>
            <div class="btn-group-wrapper"></div>
        `;
        typeWriter('typeTextYes', 'من زۆر زۆرم خۆشەوێی بچکۆلی سەرزل🥰❤️');
        setTimeout(() => { showLoveQuestion(false); }, 4000);
    }
}

function showLoveQuestion(isSecondTime = false) {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <div class="content-area">
            <img src="https://i.pinimg.com/originals/0e/ba/e1/0ebae1a095888493cd43dff553511301.gif" style="width: 120px; height: 120px; margin-bottom: 10px; border-radius: 15px;">
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
                <img src="https://i.pinimg.com/originals/cb/16/5d/cb165d4a8a452d2bc0e942a95922d449.gif" style="width: 120px; height: 120px; margin-bottom: 10px; border-radius: 15px; object-fit: cover;">
                <h2 class="premium-text" id="typeTextFirstNo" style="color: #666;"></h2>
            </div>
            <div class="btn-group-wrapper"></div>
        `;
        typeWriter('typeTextFirstNo', 'باشە گەردنت ئازاد بێت... 💔😔');
        setTimeout(goBackHome, 3000);
    } else {
        dynamicContent.innerHTML = `
            <div class="content-area">
                <img src="https://i.736x/3b/1c/fb/3b1cfb3d0d8a6eb0ec98bc4b5d446c81.jpg" style="width: 120px; height: 120px; margin-bottom: 10px; border-radius: 15px; object-fit: cover;">
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
                <img src="https://i.pinimg.com/originals/cb/16/5d/cb165d4a8a452d2bc0e942a95922d449.gif" style="width: 120px; height: 120px; margin-bottom: 10px; border-radius: 15px; object-fit: cover;">
                <h2 class="premium-text" id="typeTextSecNo" style="color: #666;"></h2>
            </div>
            <div class="btn-group-wrapper"></div>
        `;
        typeWriter('typeTextSecNo', 'ئیتر تەواو دڵم شكا... 💔😔');
        setTimeout(goBackHome, 3000);
    } else {
        dynamicContent.innerHTML = `
            <div class="content-area">
                <img src="https://i.pinimg.com/originals/d1/99/5d/d1995dd8f43c8c38ee8c8ddb2096d760.gif" style="width: 120px; height: 120px; margin-bottom: 10px; border-radius: 15px;">
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
            <img src="https://i.pinimg.com/736x/7f/80/b6/7f80b67c1b4a2db83fa1555d28f553af.jpg" style="width: 120px; height: 120px; margin-bottom: 10px; border-radius: 15px; object-fit: cover;">
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
    typeWriter('typeTextBonus', 'بەڵێن بدە کە هەمیشە پێکەوە دەبین? 🥺💍');
}

function showRomanticQuestion() {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <div class="content-area">
            <img src="https://i.pinimg.com/originals/0e/ba/e1/0ebae1a095888493cd43dff553511301.gif" style="width: 120px; height: 120px; margin-bottom: 10px; border-radius: 15px;">
            <h2 class="premium-text" id="typeTextRain" style="font-size: 20px;"></h2>
        </div>
        <div class="btn-group-wrapper">
            <div class="btn-group">
                <button class="btn yes-btn" onclick="showFinalCertificate('چەترەکە ئەدەم بە تۆ 🐱🌸')">چەترەکە ئەدەم بە تۆ 🐱</button>
                <button class="btn no-btn" onclick="showFinalCertificate('چەترەکە فڕێ دەدەین و پێکەوە تەڕ دەبین 🥰')">چەترەکە فڕێ دەدەین و پێکەوە تەڕ دەبین 🤍</button>
            </div>
        </div>
    `;
    typeWriter('typeTextRain', 'گەر باران ببارێت، چەترێکمان پێبێت چی لێدەکەی 🌧️☔');
}

function runAway() {
    const btn = document.getElementById('runawayBtn');
    if(!btn) return;
    const randomX = Math.floor(Math.random() * 60) - 30; 
    const randomY = Math.floor(Math.random() * 40) - 20; 
    btn.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

function showFinalCertificate(answerText) {
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = `
        <div class="content-area">
            <img src="https://i.pinimg.com/736x/7f/80/b6/7f80b67c1b4a2db83fa1555d28f553af.jpg" style="width: 120px; height: 120px; margin-bottom: 10px; border-radius: 15px; object-fit: cover;">
            <div class="cert-box">
                <h2 class="premium-text" id="typeTextCertTitle" style="font-size: 22px; color: #d90429; min-height: auto; margin-bottom: 5px;"></h2>
                <p style="font-size: 15px; color: #2b2d42; line-height: 1.6; margin: 5px 0;">تۆ وتت: <b>"${answerText}"</b></p>
                <p style="font-size: 14px; color: #555; line-height: 1.5;" id="typeTextCertDesc"></p>
            </div>
        </div>
        <div class="btn-group-wrapper">
            <button class="btn main-btn" onclick="goBackHome()" style="background: linear-gradient(45deg, #9c27b0, #e040fb);">گەڕانەوە بۆ مێنیوی سەرەکی 🔄</button>
        </div>
    `;
    typeWriter('typeTextCertTitle', '📜 پەیماننامەی ئەشقی من و تۆ', 40);
    typeWriter('typeTextCertDesc', 'تا دوا دڵنەوایی ژیانم خۆشم دەوێیت! 🔒🔒', 40);
}

function goBackHome() {
    window.location.href = window.location.href.split('?')[0];
}
