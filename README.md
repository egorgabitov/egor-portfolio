# Портфолио Егора Габитова

Минималистичный сайт-портфолио в тёмной теме с янтарным акцентом и эффектом поворота секций при скролле (GSAP Story Scroll).

**Стек:** Next.js 14 + React 18 + TypeScript + Tailwind CSS + GSAP

---

## 🚀 Быстрый деплой на Vercel за 5 минут

### Шаг 1. Создай репозиторий на GitHub

1. Зайди на https://github.com → нажми **New repository** (зелёная кнопка справа сверху или https://github.com/new)
2. Имя репозитория: `egor-portfolio` (или любое)
3. **Public** или **Private** — на твоё усмотрение (Vercel работает с обоими)
4. Не нажимай "Add README" — у нас он уже есть
5. **Create repository**

### Шаг 2. Залей файлы в репозиторий

**Вариант А — через сайт GitHub (без терминала):**

1. На странице нового пустого репозитория нажми **uploading an existing file** (или drag and drop)
2. Распакуй zip-архив с проектом у себя на компьютере
3. Выдели **всё содержимое** распакованной папки (НЕ саму папку, а файлы внутри неё) и перетащи в окно GitHub
4. Внизу страницы напиши коммит-сообщение, например "initial commit"
5. **Commit changes**

**Вариант Б — через терминал (если умеешь):**

```bash
cd egor-portfolio
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/ТВОЙ_USERNAME/egor-portfolio.git
git push -u origin main
```

### Шаг 3. Задеплой на Vercel

1. Зайди на https://vercel.com → **Sign up** через GitHub (или войди, если уже есть аккаунт)
2. На дашборде нажми **Add New → Project**
3. Найди свой репозиторий `egor-portfolio` в списке и нажми **Import**
4. Ничего не настраивай — Vercel сам понимает что это Next.js
5. Нажми **Deploy**
6. Жди ~1-2 минуты → готово ✨

Получишь ссылку вида `egor-portfolio.vercel.app` — это твой сайт.

### Шаг 4 (опционально). Свой домен

Если купишь свой домен (например `egor.dev` или `gabitov.io`):
1. В настройках проекта на Vercel → **Domains** → добавь домен
2. У регистратора домена пропиши DNS-записи которые покажет Vercel
3. Через ~15 минут сайт работает на твоём домене

Рекомендую регистраторов: **Namecheap**, **Porkbun**, **Cloudflare Registrar** (дешевле всех).

---

## 🛠️ Локальная разработка (если хочешь править на компе)

Нужны Node.js 18+ и npm.

```bash
npm install
npm run dev
```

Открой http://localhost:3000

---

## 📝 Что можно отредактировать самому

Всё содержимое портфолио — в одном файле: **`app/page.tsx`**

- **Тексты, заголовки, метрики** — меняй прямо в JSX
- **Цвета** — в начале файла переменная `COLORS`
- **Кейсы** — каждый кейс это блок `<div className="mb-4 p-6 rounded-lg">` в секции 04
- **Контакты** — в секции 05, теги `<a href="...">`

Чтобы добавить **скриншоты в кейсы**:

1. Положи картинку в папку `public/` (например `public/case-1-workflow.png`)
2. В нужном месте в `app/page.tsx` (после блока «Что внутри») добавь:

```tsx
<img
  src="/case-1-workflow.png"
  alt="Описание скриншота"
  className="mt-4 rounded-lg w-full"
/>
```

3. Закоммить изменения в GitHub — Vercel автоматически переразвернёт сайт

---

## 📦 Структура проекта

```
egor-portfolio/
├── app/
│   ├── globals.css       ← глобальные стили
│   ├── layout.tsx        ← обёртка страницы (метатеги, шрифты)
│   └── page.tsx          ← ВСЁ СОДЕРЖИМОЕ ПОРТФОЛИО ЗДЕСЬ
├── components/
│   └── ui/
│       └── story-scroll.tsx  ← компонент поворотов при скролле
├── lib/
│   └── utils.ts
├── public/                ← сюда скриншоты, иконки, favicon
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

---

## ❓ Если что-то не работает

- **На GitHub видны не все файлы** — проверь что загрузил скрытые файлы (`.gitignore`). На Mac в Finder нажми `Cmd+Shift+.` чтобы их показать.
- **Vercel выдал ошибку при деплое** — открой логи в Vercel, скинь мне (Claude), разберёмся.
- **Шрифты не подгружаются** — Next.js сам подтянет Inter из Google Fonts, ничего делать не надо.

---

© Егор Габитов, 2026
