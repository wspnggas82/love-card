const express = require('express');
const path = require('path');
const app = express();

// ئێستا ڕەگی سەرەکی (تەنیشت server.js) وەک شوێنی فایلە جێگیرەکان (CSS, JS) دیاری کراوە
app.use(express.static(__dirname));

// ڕاوتەری سەرەکی بۆ کردنەوەی پەیجەکە ڕاستەوخۆ لە ڕەگی سەرەکییەوە
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// کارپێکردنی سێرڤەر لەسەر پۆرت ٣٠٠٠ یان پۆرتی هۆستەکە
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`سێرڤەرەکە کاردەکات لەسەر: http://localhost:${PORT}`);
});
