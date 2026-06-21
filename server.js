const express = require('express');
const path = require('path');
const app = express();

// دیاریکردنی فۆڵدەری پۆبڵیک بۆ فایلە جێگیرەکان (CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// ڕاوتەری سەرەکی بۆ کردنەوەی پەیجەکە
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// کارپێکردنی سێرڤەر لەسەر پۆرت پۆرت ٣٠٠٠
const PORT = process.env.PORT || 3000; // لێرە بیکە بە 8080
app.listen(PORT, () => {
    console.log(`سێرڤەرەکە کاردەکات لەسەر: http://localhost:${PORT}`);
});