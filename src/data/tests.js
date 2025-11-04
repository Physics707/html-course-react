// src/data/tests.js
// Банк вопросов курса HTML (72 часа)
// Формат вопроса:
// { q: "Текст вопроса", options: ["A","B","C","D"], correct: <0..3>, explain: "Пояснение" }

const t = {
  1: [
    {
      q: "Что означает аббревиатура HTML?",
      options: [
        "Hyper Transfer Markup Language",
        "HyperText Markup Language",
        "HighText Machine Language",
        "Hyper Tool Markup Level"
      ],
      correct: 1,
      explain: "HTML — HyperText Markup Language, язык гипертекстовой разметки."
    },
    {
      q: "Какой правильный doctype для HTML5?",
      options: ["<!DOCTYPE HTML5>", "<!doctype html>", "<!DOCTYPE html5>", "<doctype html>"],
      correct: 1,
      explain: "Стандарт HTML5 использует короткую запись: <!doctype html>."
    },
    {
      q: "Где располагается видимое содержимое страницы?",
      options: ["Внутри <head>", "Внутри <meta>", "Внутри <body>", "Внутри <!doctype>"],
      correct: 2,
      explain: "Пользовательский контент всегда в <body>."
    },
    {
      q: "Какой тег предназначен для указания кодировки документа?",
      options: [
        "<meta http-equiv='content-type'>",
        "<meta charset='UTF-8'>",
        "<charset=UTF-8>",
        "<codepage='utf8'>"
      ],
      correct: 1,
      explain: "Современный способ — <meta charset='UTF-8'> в <head>."
    },
    {
      q: "Выберите корректный минимальный шаблон HTML5.",
      options: [
        "Только <body> и контент",
        "<!doctype html> + <html><head></head><body></body></html>",
        "<!html5><document></document>",
        "<html><body></body></html> без doctype"
      ],
      correct: 1,
      explain: "Нужен doctype и корневой тег <html> c <head> и <body>."
    },
    {
      q: "Где правильно размещать <title>?",
      options: ["Внутри <body>", "Внутри <head>", "После </html>", "В любом месте"],
      correct: 1,
      explain: "<title> всегда в <head>."
    },
    {
      q: "Какая роль тега <html>?",
      options: [
        "Описывает таблицу",
        "Корневой элемент документа",
        "Выделяет важный текст",
        "Служит для изображений"
      ],
      correct: 1,
      explain: "<html> — корневой элемент всего документа."
    },
    {
      q: "Какая структура корректна?",
      options: [
        "<!doctype html><head><html></html></head><body></body>",
        "<!doctype html><html><head></head><body></body></html>",
        "<html><body></body><head></head></html>",
        "<!doctype html><body><head></head></body>"
      ],
      correct: 1,
      explain: "Порядок: doctype → html → head → body."
    },
    {
      q: "Где следует подключать метаданные (описание, ключевые слова)?",
      options: ["В <body>", "В <footer>", "В <head>", "В <article>"],
      correct: 2,
      explain: "Все метаданные — в разделе <head>."
    },
    {
      q: "Какая строка корректна для языка документа?",
      options: [
        "<html language='ru'>",
        "<html lang='ru'>",
        "<html lng='ru'>",
        "<html locale='ru'>"
      ],
      correct: 1,
      explain: "Используется атрибут lang, например lang='ru'."
    },
    {
      q: "Что делает этот код?\n\n<!doctype html>\n<html lang='ru'>\n<head>\n  <meta charset='utf-8'>\n</head>\n<body>\n  <h1>Привет!</h1>\n</body>\n</html>",
      options: [
        "Показывает заголовок в <head>",
        "Выводит заголовок на странице",
        "Ничего не делает без CSS",
        "Неверный doctype"
      ],
      correct: 1,
      explain: "<h1> отображается в области <body>."
    },
    {
      q: "Какой тег отвечает за подключение иконки сайта (favicon)?",
      options: [
        "<meta rel='icon' href='...'>",
        "<link rel='icon' href='...'>",
        "<icon href='...'>",
        "<favicon src='...'>"
      ],
      correct: 1,
      explain: "Используем <link rel='icon' href='...'> в <head>."
    },
    {
      q: "Какая роль комментирования <!-- ... --> в HTML?",
      options: [
        "Выполняет код",
        "Комментирует: не отображается в браузере",
        "Меняет цвет фона",
        "Создаёт скрипт"
      ],
      correct: 1,
      explain: "Комментарии не видны пользователю на странице."
    }
  ],

  2: [
    {
      q: "Какой тег задаёт абзац?",
      options: ["<div>", "<p>", "<span>", "<section>"],
      correct: 1,
      explain: "<p> — семантический абзац."
    },
    {
      q: "Какой тег используется для строчного элемента без семантики?",
      options: ["<div>", "<section>", "<span>", "<article>"],
      correct: 2,
      explain: "<span> — строчный, без семантики."
    },
    {
      q: "Какой тег обычно блочный?",
      options: ["<span>", "<img>", "<div>", "<a>"],
      correct: 2,
      explain: "<div> — блочный контейнер."
    },
    {
      q: "Где указываются атрибуты тега?",
      options: [
        "Внутри закрывающего тега",
        "Внутри открывающего тега",
        "После содержимого",
        "В комментариях"
      ],
      correct: 1,
      explain: "Атрибуты — в открывающем теге."
    },
    {
      q: "Что делает атрибут id?",
      options: [
        "Задаёт класс для CSS",
        "Задаёт уникальный идентификатор элемента",
        "Подключает файл",
        "Выравнивает текст"
      ],
      correct: 1,
      explain: "id уникален на странице."
    },
    {
      q: "Как задать несколько классов элементу?",
      options: [
        "class='a+b'",
        "class='a, b'",
        "class='a b'",
        "class='a|b'"
      ],
      correct: 2,
      explain: "Классы перечисляются через пробел: class='a b'."
    },
    {
      q: "Какой из вариантов корректен?\n\n<p class='lead text'>Пример</p>",
      options: [
        "Некорректно: допускается только один класс",
        "Корректно: можно несколько классов",
        "Некорректно: класс указывается в закрывающем теге",
        "Некорректно: нужeн id вместо class"
      ],
      correct: 1,
      explain: "Несколько классов — норма."
    },
    {
      q: "Какой атрибут задаёт всплывающую подсказку элемента при наведении?",
      options: ["alt", "title", "hint", "desc"],
      correct: 1,
      explain: "title — браузерная подсказка."
    },
    {
      q: "Какую роль выполняет <section>?",
      options: [
        "Оборачивает навигацию",
        "Секция документа по смыслу",
        "Контейнер для медиа",
        "Контент подвала"
      ],
      correct: 1,
      explain: "<section> — смысловой раздел документа."
    },
    {
      q: "Чем <article> отличается от <section>?",
      options: [
        "article — самодостаточный материал",
        "section — только для списка",
        "article — всегда в <footer>",
        "Разницы нет"
      ],
      correct: 0,
      explain: "article — независимый блок контента (новость, пост)."
    },
    {
      q: "Какой тег для навигационных ссылок?",
      options: ["<nav>", "<menu>", "<aside>", "<header>"],
      correct: 0,
      explain: "<nav> — контейнер для навигации."
    },
    {
      q: "Что делает этот код?\n\n<div id='box' class='card primary'>...</div>",
      options: [
        "Задаёт два id",
        "Задаёт один класс",
        "Задаёт id и два класса",
        "Неверный синтаксис"
      ],
      correct: 2,
      explain: "id='box' и class='card primary' — всё корректно."
    },
    {
      q: "Где правильно использовать <main>?",
      options: [
        "Главный контент страницы (1 раз)",
        "Для заголовка сайта",
        "Для постов блога",
        "Для навигации"
      ],
      correct: 0,
      explain: "<main> должен быть уникальным и описывать основной контент."
    }
  ],

  3: [
    {
      q: "Какой атрибут задаёт адрес ссылки?",
      options: ["src", "href", "link", "to"],
      correct: 1,
      explain: "У <a> адрес задаётся в href."
    },
    {
      q: "Что такое абсолютная ссылка?",
      options: [
        "Ссылка внутри страницы",
        "Ссылка с полным URL (https://...)",
        "Ссылка по id",
        "Ссылка на файл по относительному пути"
      ],
      correct: 1,
      explain: "Абсолютная ссылка начинается с протокола и домена."
    },
    {
      q: "Как сделать якорную ссылку к элементу с id='top'?",
      options: ["href='@top'", "href='#top'", "href='top#'", "href='!top'"],
      correct: 1,
      explain: "Используется решётка: #id."
    },
    {
      q: "Что делает атрибут target='_blank' у <a>?",
      options: [
        "Открытие в новой вкладке/окне",
        "Открытие в этом же окне",
        "Плавный скролл",
        "Меняет цвет ссылки"
      ],
      correct: 0,
      explain: "Открывает ссылку в новой вкладке."
    },
    {
      q: "Как задать скачивание файла по ссылке без открытия в браузере (если поддерживается)?",
      options: [
        "Добавить download к <a>",
        "Использовать rel='nofollow'",
        "Поставить type='file'",
        "Это невозможно"
      ],
      correct: 0,
      explain: "Атрибут download подсказывает браузеру сохранить файл."
    },
    {
      q: "Относительный путь '../images/pic.png' означает:",
      options: [
        "Файл в текущей папке",
        "Файл на один уровень выше, в папке images",
        "Файл в корне сайта",
        "Файл в папке ниже"
      ],
      correct: 1,
      explain: ".. — шаг на уровень вверх."
    },
    {
      q: "Что делает атрибут rel='noopener noreferrer' вместе с target='_blank'?",
      options: [
        "Ускоряет загрузку CSS",
        "Повышает безопасность/производительность",
        "Добавляет якорь",
        "Меняет цвет ссылок"
      ],
      correct: 1,
      explain: "Отключает доступ новой вкладки к window.opener."
    },
    {
      q: "Что выведет код?\n\n<a href='https://example.com' title='Перейти'>Сайт</a>",
      options: [
        "Картинку со ссылкой",
        "Ссылку с подсказкой при наведении",
        "Параграф",
        "Кнопку формы"
      ],
      correct: 1,
      explain: "Атрибут title покажет подсказку, текст ссылки — 'Сайт'."
    },
    {
      q: "Какая ссылка корректна для e-mail?",
      options: [
        "<a href='mail:info@example.com'>Почта</a>",
        "<a href='mailto:info@example.com'>Почта</a>",
        "<a href='email:info@example.com'>Почта</a>",
        "<a href='post:info@example.com'>Почта</a>"
      ],
      correct: 1,
      explain: "mailto: — схема для почтовых ссылок."
    },
    {
      q: "Как сделать ссылку на номер телефона?",
      options: [
        "<a href='tel:+77001234567'>Позвонить</a>",
        "<a href='call:+77001234567'>Позвонить</a>",
        "<a href='phone:+77001234567'>Позвонить</a>",
        "<a href='dial:+77001234567'>Позвонить</a>"
      ],
      correct: 0,
      explain: "tel: — схема для телефонных ссылок."
    },
    {
      q: "Что не рекомендуется использовать в тексте ссылки с точки зрения доступности?",
      options: [
        "Ссылки вида 'кликните сюда'",
        "Ссылки с понятным контекстом",
        "Текст, соответствующий цели",
        "Описательные названия"
      ],
      correct: 0,
      explain: "Лучшая практика — понятный контекст ссылки."
    },
    {
      q: "Чем отличается <a> от <button> с ролью ссылки?",
      options: [
        "<a> — навигация по URL, <button> — действие/скрипт",
        "Разницы нет",
        "<button> всегда лучше",
        "<a> нельзя стилизовать"
      ],
      correct: 0,
      explain: "Семантика важна: ссылки — для переходов, кнопки — для действий."
    },
    {
      q: "Что делает атрибут download=\"report.pdf\" у ссылки на файл?",
      options: [
        "Открывает в новой вкладке",
        "Сохраняет как report.pdf (если поддерживается)",
        "Переименовывает файл на сервере",
        "Меняет MIME-тип"
      ],
      correct: 1,
      explain: "download предлагает имя файла при сохранении."
    }
  ],

  4: [
    {
      q: "Какой тег вставляет изображение?",
      options: ["<image>", "<img>", "<pic>", "<media>"],
      correct: 1,
      explain: "Только <img> корректен для изображений."
    },
    {
      q: "Какой атрибут обязателен для <img> с точки зрения доступности?",
      options: ["title", "alt", "desc", "name"],
      correct: 1,
      explain: "alt описывает изображение, особенно важно при ошибке загрузки."
    },
    {
      q: "Как задать источник изображения?",
      options: ["href", "src", "data", "link"],
      correct: 1,
      explain: "У <img> путь указывается в src."
    },
    {
      q: "Что делает CSS свойство object-fit: cover для тега <img>?",
      options: [
        "Сжимает без сохранения пропорций",
        "Обрезает изображение, заполняя контейнер",
        "Скрывает изображение",
        "Переводит в градации серого"
      ],
      correct: 1,
      explain: "Cover масштабирует и обрезает сохранением заполнения."
    },
    {
      q: "Как центрировать блочный элемент по горизонтали без flex/grid?",
      options: [
        "text-align: center;",
        "margin: 0 auto;",
        "align: middle;",
        "padding: auto;"
      ],
      correct: 1,
      explain: "margin: 0 auto; центрирует блочный элемент по ширине."
    },
    {
      q: "Каким атрибутом задают ширину изображения (семантически корректнее в CSS)?",
      options: ["w", "style", "width", "size"],
      correct: 2,
      explain: "Атрибут width есть, но обычно лучше использовать CSS."
    },
    {
      q: "Что делает атрибут loading='lazy' у <img>?",
      options: [
        "Блокирует загрузку полностью",
        "Ленивая загрузка изображения",
        "Превращает в фон",
        "Меняет формат"
      ],
      correct: 1,
      explain: "Lazy loading загружает изображение при прокрутке в видимую область."
    },
    {
      q: "Как задать фон страницы изображением?",
      options: [
        "Через <img> внутри <body>",
        "Через CSS: body { background-image: url('...'); }",
        "Через <background>",
        "Через <meta background>"
      ],
      correct: 1,
      explain: "Фон задаётся через CSS."
    },
    {
      q: "Что делает свойство background-size: cover?",
      options: [
        "Повторяет фон",
        "Растягивает с искажением",
        "Масштабирует и обрезает для заполнения",
        "Сжимает до 100px"
      ],
      correct: 2,
      explain: "Аналогично object-fit: cover, но для фона."
    },
    {
      q: "Что выведет код?\n\n<img src='logo.png' alt='Логотип' title='Наш логотип' />",
      options: [
        "Только подсказка, без картинки",
        "Картинку; при наведении всплывает подсказка",
        "Ничего",
        "Только текст alt"
      ],
      correct: 1,
      explain: "Если файл есть — увидим картинку и title при наведении."
    },
    {
      q: "Как указать несколько форматов изображений для адаптивности?",
      options: [
        "Через <picture> и <source>",
        "Через <sources>",
        "Через атрибут multiple",
        "Невозможно"
      ],
      correct: 0,
      explain: "<picture> позволяет задавать разные источники (webp, jpg и т.д.)."
    },
    {
      q: "Как сделать фигуру с подписью под изображением семантически?",
      options: ["<div><p></p></div>", "<figure><img><figcaption></figcaption></figure>", "<img><caption>", "<image><desc>"],
      correct: 1,
      explain: "Используем <figure> и <figcaption>."
    },
    {
      q: "Как позиционировать элемент относительно ближайшего позиционированного предка?",
      options: [
        "position: static; left: 10px;",
        "position: relative; left: 10px;",
        "position: absolute; left: 10px;",
        "position: sticky; left: 10px;"
      ],
      correct: 2,
      explain: "absolute позиционируется относительно ближайшего предка с position отличным от static."
    }
  ],

  5: [
    {
      q: "Какой тег задаёт полужирный начертание без семантики?",
      options: ["<strong>", "<b>", "<em>", "<i>"],
      correct: 1,
      explain: "<b> — визуальное выделение (жирный) без семантики."
    },
    {
      q: "Какой тег семантически выделяет важность?",
      options: ["<b>", "<strong>", "<i>", "<mark>"],
      correct: 1,
      explain: "<strong> — важный текст (обычно жирный)."
    },
    {
      q: "Какой тег задаёт курсив без семантики?",
      options: ["<italic>", "<em>", "<i>", "<cite>"],
      correct: 2,
      explain: "<i> — чисто визуальный курсив."
    },
    {
      q: "Семантический курсив (логическое выделение) — это…",
      options: ["<em>", "<i>", "<var>", "<small>"],
      correct: 0,
      explain: "<em> — логическое выделение (часто курсив)."
    },
    {
      q: "Как задать нижний индекс?",
      options: ["<sup>", "<sub>", "<low>", "<down>"],
      correct: 1,
      explain: "<sub> — нижний индекс (например, H2O)."
    },
    {
      q: "Как задать верхний индекс?",
      options: ["<sub>", "<sup>", "<top>", "<high>"],
      correct: 1,
      explain: "<sup> — верхний индекс (например, x^2)."
    },
    {
      q: "Какой тег использовать для цитаты в несколько строк?",
      options: ["<q>", "<blockquote>", "<cite>", "<quote>"],
      correct: 1,
      explain: "<blockquote> — блочная цитата."
    },
    {
      q: "Какой тег для короткой цитаты внутри строки?",
      options: ["<blockquote>", "<q>", "<cite>", "<quote>"],
      correct: 1,
      explain: "<q> — короткие цитаты, браузер добавляет кавычки."
    },
    {
      q: "Как разметить код (моноширинный) в строке текста?",
      options: ["<pre>", "<code>", "<kbd>", "<samp>"],
      correct: 1,
      explain: "<code> — фрагмент кода в тексте; <pre> — блок с сохранением пробелов."
    },
    {
      q: "Что делает <pre>?",
      options: [
        "Переводит текст в верхний регистр",
        "Сохраняет пробелы и переносы",
        "Подключает CSS",
        "Добавляет кавычки"
      ],
      correct: 1,
      explain: "<pre> отображает текст моноширинно и сохраняет форматирование."
    },
    {
      q: "Что делает этот фрагмент?\n\n<p>Вода — H<sub>2</sub>O, площадь — S = a<sup>2</sup>.</p>",
      options: [
        "Выводит математические формулы с индексами",
        "Ничего не выводит",
        "Ошибка разметки",
        "Только подчёркивает текст"
      ],
      correct: 0,
      explain: "<sub> и <sup> для нижних/верхних индексов."
    },
    {
      q: "Как центрировать текст в блоке?",
      options: [
        "text-align: center;",
        "align: center;",
        "justify-content: center; без flex",
        "margin: center;"
      ],
      correct: 0,
      explain: "Для текста используется text-align."
    },
    {
      q: "Какую роль играет <br>?",
      options: [
        "Создаёт абзац",
        "Жёсткий перенос строки",
        "Выравнивание текста",
        "Ничего"
      ],
      correct: 1,
      explain: "<br> вставляет разрыв строки внутри абзаца."
    }
  ],

  6: [
    {
      q: "Какой тег создаёт ненумерованный список?",
      options: ["<ul>", "<ol>", "<dl>", "<list>"],
      correct: 0,
      explain: "<ul> — маркированный список."
    },
    {
      q: "Какой тег создаёт нумерованный список?",
      options: ["<ul>", "<ol>", "<dl>", "<list>"],
      correct: 1,
      explain: "<ol> — нумерованный список."
    },
    {
      q: "Каким тегом объявляют элемент списка?",
      options: ["<li>", "<dt>", "<dd>", "<item>"],
      correct: 0,
      explain: "<li> — элемент списка, для ul/ol."
    },
    {
      q: "Какая пара тэгов описывает термины и определения в списках?",
      options: ["<dt> и <dd>", "<li> и <dd>", "<ul> и <li>", "<term> и <def>"],
      correct: 0,
      explain: "<dt> — термин, <dd> — определение (внутри <dl>)."
    },
    {
      q: "Как объявить таблицу?",
      options: ["<table>", "<tab>", "<grid>", "<sheet>"],
      correct: 0,
      explain: "<table> — таблица, внутри <tr>, <td>, <th>, <thead>, <tbody>."
    },
    {
      q: "Какой тег задаёт заголовочную ячейку таблицы?",
      options: ["<td>", "<th>", "<thead>", "<caption>"],
      correct: 1,
      explain: "<th> — заголовочная ячейка."
    },
    {
      q: "Как объединить столбцы в ячейке?",
      options: ["rowspan", "colspan", "merge", "span"],
      correct: 1,
      explain: "Атрибут colspan объединяет колонки."
    },
    {
      q: "Какой атрибут формы задаёт адрес отправки данных?",
      options: ["method", "action", "name", "for"],
      correct: 1,
      explain: "action — URL для отправки."
    },
    {
      q: "Какой атрибут формы определяет способ отправки?",
      options: ["action", "method", "type", "target"],
      correct: 1,
      explain: "method='GET' | 'POST' и др."
    },
    {
      q: "Какой тип поля ввода подходит для email?",
      options: ["text", "mail", "email", "input-email"],
      correct: 2,
      explain: "type='email' включает валидацию e-mail."
    },
    {
      q: "Как связать <label> с конкретным <input>?",
      options: [
        "Через атрибут for='id_поля'",
        "Через класс",
        "Через name",
        "Только по порядку"
      ],
      correct: 0,
      explain: "label[for] совпадает с id поля."
    },
    {
      q: "Что делает required у <input>?",
      options: [
        "Делает поле только для чтения",
        "Запрещает ввод",
        "Помечает поле как обязательное",
        "Меняет цвет"
      ],
      correct: 2,
      explain: "Браузер не отправит форму без заполнения такого поля."
    },
    {
      q: "Что делает этот код?\n\n<form action='/send' method='post'>\n  <label for='em'>Email</label>\n  <input id='em' type='email' required>\n  <button type='submit'>Отправить</button>\n</form>",
      options: [
        "Создаёт форму с обязательным e-mail и отправкой на /send методом POST",
        "Ничего не делает без JS",
        "Это таблица",
        "Неверный HTML"
      ],
      correct: 0,
      explain: "Всё корректно: label связан с input, метод POST, required."
    }
  ]
};

export default t;

/**
 * Возвращает случайные n вопросов из всех модулей.
 * По умолчанию n = 20 для итоговой аттестации.
 */
export function allFinalQuestions(n = 20) {
  const all = Object.values(t).flat();
  // Перемешаем массив Фишером–Йетсом
  for (let i = all.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [all[i], all[j]] = [all[j], all[i]];
  }
  return all.slice(0, Math.max(1, Math.min(n, all.length)));
}
