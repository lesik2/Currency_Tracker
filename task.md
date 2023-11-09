# Tестовое задание приложение Modsen Currency Tracker

## Содержание

- [Техническое задание](#Техническое-задание)
- [API](#API)
- [Необходимый функционал](#Необходимый-функционал)
- [Пример графического представления](#Пример-графического-представления)
- [Используемые технологии](#Используемые-технологии)
- [Тестирование](#Тестирование)
- [Полезные ссылки](#Полезные-ссылки)

## Техническое задание

Необходимо реализовать React приложение "Modsen Currency Tracker" по предоставленному дизайну из Figma.

## API

Список API для использования(если представленные API не удовлетворяют каким-либо условиям задания, можно использовать любые
другие открытые API для определения курса валют):

- **_[Exchange rates](https://docs.coinapi.io/market-data/rest-api/ohlcv#latest-data-get)_** - руководство с данными для конвертера валюты.
- **_[Currency Conversion API](https://currencyapi.com/)_** - конвертация валюты.

## Необходимый функционал:

- реализация конвертера валют;
- график изменения валюты в течение месяца(минимум две валюты);
- смена темы приложения;
- elastic search - поиск с выпадающим списком.

### Дополнительные указания:

- Реализация Loader для отображения запасного UI при подгрузке данных.
- Использование любых библиотек для стилей, валидации и так далее - запрещены, кроме тех, которые рекомендуемы в пункте “Используемые технологии”.

## Пример графического представления:

Ссылка на макет: [Макет "Modsen Currency Tracker"](https://www.figma.com/file/ZgtOyDRdvjtUJJ3M9ENwXN/Modsen-Currency-Tracker?node-id=1-1220&t=r17rPqmN38m0Ji9g-0).

### Также проект предполагает:

- Для реализации логики приложения необходимо использовать поведенческий паттерн программирования **_"Observer"_**, который создаёт механизм подписки, позволяющий одним объектам следить и реагировать на события, происходящие в других объектах (см. подробнее [паттерн Observer](https://refactoring.guru/ru/design-patterns/observer));

- Организацию файловой структуры react приложения. Ссылка на структуру: [Cтруктура проекта](https://github.com/mkrivel/structure);
- Придерживаться требований по написанию и организации кода react приложения. Ссылка на требования: [Требования к тестовому заданию](https://github.com/annaprystavka/requirements);
- Деплой приложения на платформу GitHub Pages или иные другие (Netlify, ...);
- Настройку конфигурации **_babel_**, **_eslint_**, **_prettier_**;
- Использование библиотеки prop-types для проверки входящих props;
- Использование языка typescript (по желанию);
- Обработку ошибок через паттерн **_Error Boundaries_**;
- Использование алиасов для импортирования файлов;
- Самомстоятельную настройку webpack для dev и production сборки;
- Оптимизацию дизайна под мобильные устройства;
- Покрытие тестами всего приложения (cypress, jest);
- Реализацию классовых и функциональных компонентов;
- Оптимизацию приложения;
- Обязательный deploy приложения;
- Реализацию всех принципов SOLID;
- Обязательную анимацию при наведения, нажатии на кнопки, появлении элементов на странице при рендере и скролле.

## Описание экранов

Все страницы включают в себя верхний блок, который предполагает реализацию перехода между страницами и смену темы приложения.
Страницу Contact необходимо реализовать самостоятельно.

1. Страница [Home](https://www.figma.com/file/ZgtOyDRdvjtUJJ3M9ENwXN/Modsen-Currency-Tracker?node-id=1-857&t=r17rPqmN38m0Ji9g-0)
   На главной странице располагаются карточки валют, где отображается текущий курс и название валюты. При нажатии на любую карточку, должно открываться модальное окно(которое необходимо реализовать самостоятельно) с информацией о карточке и поле, где можно выбрать валюту, отличающуюся от текущей, чтобы можно было узнать ее курс относительно выбранной валюты.
   При перезагрузке страницы повторные запросы не должны отправляться к API, данные должны быть закешированы.
   Эта страница должна быть реализована на функциональных компонентах.

2. Страница [Timeline](https://www.figma.com/file/ZgtOyDRdvjtUJJ3M9ENwXN/Modsen-Currency-Tracker?node-id=1-1073&t=r17rPqmN38m0Ji9g-0)
   На странице должен быть реализован график изменения выбранной валюты за месяц(на макете представлен пример графика, который необходимо реализовать).
   При выборе валюты данные для определенного дня должны вводиться пользователем, таким образом вводимые данные влияют на построение графика(продумать ввод данных самостоятельно для представленного графика). Также нужно использовать координаты: день и значение валюты (пример используемых данных можно посмотреть по ссылке API, которая дана в тестовом задании).
   В случае когда данные для построения графика будут введены на 30 дней, нужно чтобы на экран отображалось окно с информацией об успешном составлении графика(это необходимо реализовать с помощью паттерана Observer).
   Эта страница должна быть реализована на классовых компонентах.

3. Страница [Bank card](https://www.figma.com/file/ZgtOyDRdvjtUJJ3M9ENwXN/Modsen-Currency-Tracker?node-id=2-2357&t=r17rPqmN38m0Ji9g-0)
   На странице отображается интерактивная карта, на которой отмечены банки города. При выборе валюты на карте появляются точки банков, где данная валюта есть в наличии
   (минимум должно быть две точки). Реализовать поиск необходимо с помощью elastic search. Также нужно использовать реальные координаты банков, но выбрать в каких будет лежать та или иная валюта - продумать самостоятельно.
   Эта страница должна быть реализована на классовых компонентах.

## Используемые технологии

### Для react

- **_node.js_** - программная платформа, основанная на движке V8 (транслирующем JavaScript в машинный код).
- **_babel_** - транспайлер, преобразующий код из одного стандарта в другой.
- **_axios_** - библиотека для создания асинхронных запросов.
- **_chart-js_** - javascript библиотека для построения диаграмм.
- **_mapbox-gl_** - библиотека для построения интерактивной карты.
- **_eslint_** - линтер для JavaScript кода.
- **_yarn_** - менеджер пакетов.
- **_react_** - JavaScript-библиотека для создания пользовательских интерфейсов.
- **_webpack_** - сборщик модулей, который позволяет скомпилировать JavaScript-модули в единый JS-файл.
- **_prop-types_** - набор валидаторов, которые могут быть использованы для проверки получаемых данных.
- **_redux_** - инструмент для управления состоянием данных и пользовательским интерфейсом в приложениях.
- **_cypress_** — e2e тестирование для веб приложений.
- **_jest_** — unit-тестирование

## Тестирование

Реализовать тестирование c полным покрытием функционала приложения:

- Модуль конвертера валюты;
- Модуль навигации;
- Модуль смены темы;
- Модуль диаграммы.

### Для react native

Will be soon...

## Полезные ссылки

[React](https://reactjs.org/docs/getting-started.html)

[React hooks](https://reactjs.org/docs/hooks-intro.html)

[React router dom](https://reacttraining.com/react-router/web/guides/quick-start)

[Typescript](https://www.typescriptlang.org/)

[Redux](https://redux.js.org/)

[Webpack](https://webpack.js.org/)

[Axios](https://www.npmjs.com/package/axios)

[Chart JS](https://www.chartjs.org/)

[Eslint](https://eslint.org/docs/user-guide/configuring)

[Babel](https://babeljs.io/docs/en/configuration)

[Тестирование Cypress](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell)

[Тестирование Jest](https://jestjs.io/ru/docs/getting-started)

[Heroku](https://devcenter.heroku.com/articles/heroku-cli)

[Husky](https://dev.to/ivadyhabimana/setup-eslint-prettier-and-husky-in-a-node-project-a-step-by-step-guide-946)