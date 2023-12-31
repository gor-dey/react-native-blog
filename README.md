# React Native блог

## Описание

 Реализовано мобильное приложение, разработанное на React Native с использованием TypeScript. Приложение предоставляет четыре основных экрана в соответствии с предоставленным макетом:

#### 1. Инициализационный splash экран:
  
  Отображается в течение 2 секунд, в течение которых происходит редирект на страницу авторизации либо список постов в зависимости от того, авторизован пользователь или нет.

  Для авторизации написан простенький [сервер](https://github.com/gor-dey/mock-express-server) на Express.Js. Он принимает логин и пароль и возвращает токен.

#### 2. Авторизация:

  Форма логина и пароля реализованы при помощи react-hook-form. Можно ввести любые данные. Произойдет запрос к стору, переменная isAuthorization заменится на true, сохранится введенный логин.

#### 3. Список постов:

Получает данные от внешнего API.

#### 4. Экран с детальным описанием:

Для обеспечения производительности для отображения полного текста поста не производит еще один запрос к внешнему API, а берет уже имеющиеся данные.

Для отображения комментариев делает запрос но новому эндпоинту.

Также можно добавить новый пост, который будет ограничен не боле чем 250 символами и поставить "лайк" (локальная имитация, пост запрос не производится, потому что сервер не сможет дать нормальный ответ).

##  Стек

React Native Expo, MobX, Axios, React-Hook-Form.

Проект построен по архитектуре FSD (Feature-Service-Domain) с применением NextJs-подобного app/ роутинга без использования папки src/.

## Запуск для проверки:

    yarn

    yarn start