<!DOCTYPE html>
<html lang="ckb" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>پەیجی تایبەتی من و تۆ ✨</title>
    <link rel="stylesheet" href="style.css">
    <style>
        /* جێگیرکردنی شاشە و نەهێشتنی سکرۆڵ */
        html, body {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100vh;
            overflow: hidden;
            position: relative;
            font-family: 'Noto Sans Arabic', sans-serif;
        }

        /* کۆنتێنەری سەرەکی */
        .container {
            width: 100%;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10px;
            box-sizing: border-box;
        }

        /* کارتەکە */
        .card {
            width: 100%;
            max-width: 400px;
            background: rgba(255, 255, 255, 0.85);
            backdrop-filter: blur(10px);
            border-radius: 30px;
            padding: 20px;
            box-shadow: 0 10px 30px rgba(255, 71, 126, 0.15);
            border: 2px solid rgba(255, 255, 255, 0.5);
            box-sizing: border-box;
            max-height: 95vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .step {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            box-sizing: border-box;
        }

        /* مێنوو بە شێوازی دوو ستوونی ڕێک و دیار */
        .menu-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
            width: 100%;
            margin-top: 15px;
            box-sizing: border-box;
        }
        
        .menu-block {
            background: #ffffff;
            border: 2px solid #ffccd5;
            border-radius: 20px;
            padding: 10px;
            display: flex;
            flex-direction: column;
            gap: 8px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.03);
            transition: all 0.3s ease;
            box-sizing: border-box;
        }
        
        .menu-block:hover {
            border-color: #ff477e;
            transform: translateY(-2px);
            box-shadow: 0 6px 15px rgba(255, 71, 126, 0.15);
        }
        
        /* شێوازی دوگمە سەرەکییەکانی مێنوو */
        .menu-item {
            padding: 12px 5px;
            border-radius: 14px;
            text-align: center;
            cursor: pointer;
            font-weight: bold;
            font-size: 14px;
            color: #ff0054;
            background: #fff5f7;
            border: 1px solid #ffb3c1;
            transition: all 0.2s ease;
            display: block;
            width: 100%;
            box-sizing: border-box;
        }
        
        .menu-item:hover {
            background: linear-gradient(45deg, #ff0054, #ff5400);
            color: white;
            border-color: transparent;
            box-shadow: 0 5px 12px rgba(255, 0, 84, 0.3);
        }
        
        /* دوگمەی کۆپی کردن */
        .copy-btn {
            background: #2b2d42;
            color: #ffffff;
            border: none;
            padding: 6px 12px;
            font-size: 12px;
            border-radius: 10px;
            cursor: pointer;
            font-weight: bold;
            transition: all 0.2s ease;
            align-self: center;
            width: 100%;
            max-width: 90px;
            text-align: center;
            display: inline-block;
        }
        
        .copy-btn:hover {
            background: #ff0054;
            box-shadow: 0 3px 10px rgba(255, 0, 84, 0.2);
        }
        
        /* ستایلی گشتی بۆ دوگمەکانی ناو پڕۆژەکان (بەڵێ / نەخێر) */
        .btn-group-wrapper {
            width: 100%;
            display: flex;
            justify-content: center;
            margin-top: 15px;
        }

        .btn-group {
            display: flex;
            gap: 10px;
            width: 100%;
            justify-content: center;
        }

        .btn {
            padding: 12px 24px;
            font-size: 14px;
            font-weight: bold;
            border: none;
            border-radius: 15px;
            cursor: pointer;
            transition: all 0.2s ease;
            text-align: center;
        }

        .main-btn {
            background: linear-gradient(45deg, #ff0054, #ff5400);
            color: white;
            width: 100%;
            box-shadow: 0 5px 15px rgba(255, 0, 84, 0.3);
        }

        .yes-btn {
            background: #4caf50;
            color: white;
            flex: 1;
        }

        .no-btn {
            background: #f44336;
            color: white;
            flex: 1;
        }
        
        /* ئینپوتەکان */
        .love-input {
            width: 100%;
            padding: 12px;
            border: 2px solid #ffccd5;
            border-radius: 14px;
            font-size: 14px;
            text-align: center;
            outline: none;
            box-sizing: border-box;
            transition: border-color 0.3s;
            margin-bottom: 10px;
        }
        
        .love-input:focus {
            border-color: #ff477e;
        }
    </style>
</head>
<body>

    <div class="bg-hearts" id="bgHearts"></div>

    <div class="container">
        <div class="card" id="mainCard">
            <div id="dynamicContent" class="step"></div>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
