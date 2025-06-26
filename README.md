# Проект по фильмам (Movie App)

Тестовый проект для отображения информации о фильмах с использованием API [The Movie Database (TMDb)](https://developer.themoviedb.org/).

## Требования

- Node.js 18+
- Зарегистрированный аккаунт TMDb
- API ключи: `API_KEY` и `API_ACCESS_KEY`

## Настройка `.env`

Создайте файл `.env` в корне проекта и добавьте следующее:

```env
API_URL=https://api.themoviedb.org
API_ACCESS_KEY=ваш_доступный_Bearer_Token
API_KEY=ваш_API_KEY
```

## Запуск проекта

```bash
npm install

npm run build

npm run start
```

Открой в браузере: http://localhost:3000: