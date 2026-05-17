import FlowArt, { FlowSection } from '@/components/ui/story-scroll';

// Цветовая палитра
const COLORS = {
  black: '#0a0a0a',
  dark: '#141414',
  graphite: '#1a1a1a',
  accent: '#f0993f',
  accentDark: '#BA7517',
  text: '#f5f5f5',
  textMuted: '#a8a8a8',
  textDim: '#6e6e6e',
  border: '#2a2a2a',
};

export default function Portfolio() {
  return (
    <FlowArt aria-label="Портфолио Егора Габитова">

      {/* ============ SECTION 01 — HERO ============ */}
      <FlowSection
        aria-label="Главная"
        style={{ backgroundColor: COLORS.black, color: COLORS.text }}
      >
        <div className="flex flex-col h-full">
          <p className="text-xs font-medium uppercase tracking-[0.25em]" style={{ color: COLORS.accent }}>
            01 — Егор Габитов · Automation &amp; AI
          </p>
          <hr className="my-[2vw] border-none border-t" style={{ borderColor: COLORS.border }} />

          <div className="flex-1 flex items-center">
            <h1
              className="text-[clamp(3rem,11vw,12rem)] font-bold leading-[0.9] tracking-tight"
              style={{ color: COLORS.text }}
            >
              Автоматизирую
              <br />
              <span style={{ color: COLORS.accent }}>рутину</span>
              <br />
              в бизнесе
            </h1>
          </div>

          <hr className="my-[2vw] border-none border-t" style={{ borderColor: COLORS.border }} />

          <div className="flex flex-wrap items-end justify-between gap-8">
            <p className="max-w-[50ch] text-[clamp(1rem,1.6vw,1.4rem)] font-normal leading-relaxed" style={{ color: COLORS.textMuted }}>
              Собираю системы на n8n, которые сами обрабатывают лидов, бронируют звонки, ведут переписку в Telegram и WhatsApp и подтягивают всё в CRM. Без участия менеджера.
            </p>
            <div className="flex flex-wrap gap-2">
              {['n8n', 'OpenAI / Claude', 'AmoCRM', 'Telegram Bot API', 'Wazzup', 'Google Workspace'].map((tag, i) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-xs rounded-md"
                  style={{
                    backgroundColor: i === 0 ? 'rgba(240,153,63,0.15)' : COLORS.graphite,
                    color: i === 0 ? COLORS.accent : COLORS.textMuted,
                    border: `0.5px solid ${i === 0 ? 'rgba(240,153,63,0.3)' : COLORS.border}`,
                    fontWeight: i === 0 ? 500 : 400,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </FlowSection>

      {/* ============ SECTION 02 — ЗАЧЕМ ЭТО БИЗНЕСУ ============ */}
      <FlowSection
        aria-label="Зачем это бизнесу"
        style={{ backgroundColor: COLORS.dark, color: COLORS.text }}
      >
        <p className="text-xs font-medium uppercase tracking-[0.25em]" style={{ color: COLORS.accent }}>
          02 — Зачем это бизнесу
        </p>
        <hr className="my-[2vw] border-none border-t" style={{ borderColor: COLORS.border }} />

        <h2
          className="text-[clamp(2.5rem,9vw,10rem)] font-bold leading-[0.9] tracking-tight"
          style={{ color: COLORS.text }}
        >
          Время.
          <br />
          Деньги.
          <br />
          <span style={{ color: COLORS.accent }}>Спокойствие.</span>
        </h2>

        <hr className="my-[2vw] border-none border-t" style={{ borderColor: COLORS.border }} />

        <div className="flex flex-wrap gap-[3vw]">
          <div className="min-w-[180px] flex-1">
            <p className="mb-3 text-[clamp(2rem,4vw,4rem)] font-bold" style={{ color: COLORS.accent }}>15–30 ч</p>
            <p className="text-[clamp(0.85rem,1.2vw,1.05rem)] leading-relaxed" style={{ color: COLORS.textMuted }}>
              в неделю освобождается у менеджера на одном боте
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-3 text-[clamp(2rem,4vw,4rem)] font-bold" style={{ color: COLORS.accent }}>24/7</p>
            <p className="text-[clamp(0.85rem,1.2vw,1.05rem)] leading-relaxed" style={{ color: COLORS.textMuted }}>
              бот отвечает мгновенно — в любое время и в выходные
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-3 text-[clamp(2rem,4vw,4rem)] font-bold" style={{ color: COLORS.accent }}>0%</p>
            <p className="text-[clamp(0.85rem,1.2vw,1.05rem)] leading-relaxed" style={{ color: COLORS.textMuted }}>
              забытых лидов — система сама напоминает и доводит до звонка
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-3 text-[clamp(2rem,4vw,4rem)] font-bold" style={{ color: COLORS.accent }}>1–2</p>
            <p className="text-[clamp(0.85rem,1.2vw,1.05rem)] leading-relaxed" style={{ color: COLORS.textMuted }}>
              сделки покрывают стоимость разработки
            </p>
          </div>
        </div>

        <hr className="my-[2vw] border-none border-t" style={{ borderColor: COLORS.border }} />

        <p className="mt-auto ml-auto max-w-[50ch] text-right text-[clamp(1rem,2vw,1.8rem)] font-normal leading-relaxed" style={{ color: COLORS.textMuted }}>
          Каждый бот — это менеджер, который не устаёт, не забывает и не уходит в отпуск.
        </p>
      </FlowSection>

      {/* ============ SECTION 03 — ЧТО Я ДЕЛАЮ ============ */}
      <FlowSection
        aria-label="Что я делаю"
        style={{ backgroundColor: COLORS.black, color: COLORS.text }}
      >
        <p className="text-xs font-medium uppercase tracking-[0.25em]" style={{ color: COLORS.accent }}>
          03 — Что я делаю
        </p>
        <hr className="my-[2vw] border-none border-t" style={{ borderColor: COLORS.border }} />

        <h2
          className="text-[clamp(2.5rem,10vw,11rem)] font-bold leading-[0.9] tracking-tight"
          style={{ color: COLORS.text }}
        >
          Четыре
          <br />
          направления
        </h2>

        <hr className="my-[2vw] border-none border-t" style={{ borderColor: COLORS.border }} />

        <div className="flex flex-wrap gap-[3vw]">
          <div className="min-w-[200px] flex-1 border-l-2 pl-4" style={{ borderColor: COLORS.accent }}>
            <p className="mb-2 text-sm font-bold uppercase tracking-wider" style={{ color: COLORS.text }}>AI-боты в мессенджерах</p>
            <p className="text-[clamp(0.85rem,1.2vw,1.05rem)] leading-relaxed" style={{ color: COLORS.textMuted }}>
              Бронирование, квалификация лидов, продажи в Telegram и WhatsApp
            </p>
          </div>
          <div className="min-w-[200px] flex-1 border-l-2 pl-4" style={{ borderColor: COLORS.accent }}>
            <p className="mb-2 text-sm font-bold uppercase tracking-wider" style={{ color: COLORS.text }}>CRM-интеграции</p>
            <p className="text-[clamp(0.85rem,1.2vw,1.05rem)] leading-relaxed" style={{ color: COLORS.textMuted }}>
              AmoCRM, Bitrix, Google Sheets как лёгкая CRM для старта
            </p>
          </div>
        </div>

        <div className="mt-[2vw] flex flex-wrap gap-[3vw]">
          <div className="min-w-[200px] flex-1 border-l-2 pl-4" style={{ borderColor: COLORS.accent }}>
            <p className="mb-2 text-sm font-bold uppercase tracking-wider" style={{ color: COLORS.text }}>Лид-генерация</p>
            <p className="text-[clamp(0.85rem,1.2vw,1.05rem)] leading-relaxed" style={{ color: COLORS.textMuted }}>
              Парсинг баз, обогащение контактов, email-аутрич под нишу
            </p>
          </div>
          <div className="min-w-[200px] flex-1 border-l-2 pl-4" style={{ borderColor: COLORS.accent }}>
            <p className="mb-2 text-sm font-bold uppercase tracking-wider" style={{ color: COLORS.text }}>Календари и напоминания</p>
            <p className="text-[clamp(0.85rem,1.2vw,1.05rem)] leading-relaxed" style={{ color: COLORS.textMuted }}>
              Google Calendar, follow-up последовательности, нотификации
            </p>
          </div>
        </div>

        <hr className="my-[2vw] border-none border-t" style={{ borderColor: COLORS.border }} />

        <p className="mt-auto max-w-[50ch] text-[clamp(1rem,2vw,1.8rem)] font-normal leading-relaxed" style={{ color: COLORS.textMuted }}>
          Не пишу сложные системы там, где можно собрать на n8n за неделю. И наоборот — если задача требует кода, пишу код.
        </p>
      </FlowSection>

      {/* ============ SECTION 04 — КЕЙСЫ ============ */}
      <FlowSection
        aria-label="Кейсы"
        style={{ backgroundColor: COLORS.dark, color: COLORS.text }}
      >
        <p className="text-xs font-medium uppercase tracking-[0.25em]" style={{ color: COLORS.accent }}>
          04 — Кейсы
        </p>
        <hr className="my-[2vw] border-none border-t" style={{ borderColor: COLORS.border }} />

        <h2
          className="text-[clamp(2.5rem,10vw,11rem)] font-bold leading-[0.9] tracking-tight mb-[3vw]"
          style={{ color: COLORS.text }}
        >
          Что
          <br />
          я уже сделал
        </h2>

        {/* Case 1 */}
        <div className="mb-4 p-6 rounded-lg" style={{ backgroundColor: COLORS.graphite, border: `0.5px solid ${COLORS.border}` }}>
          <div className="flex flex-wrap justify-between items-baseline gap-3 mb-2">
            <h3 className="text-[clamp(1.1rem,2vw,1.5rem)] font-medium" style={{ color: COLORS.text }}>
              AI-менеджер в WhatsApp для отдела продаж
            </h3>
            <span className="text-xs font-medium tracking-wider" style={{ color: COLORS.accent }}>
              AmoCRM · Wazzup · OpenAI
            </span>
          </div>
          <p className="text-sm mb-3" style={{ color: COLORS.textDim }}>Клиент в B2B-сегменте</p>
          <p className="text-[clamp(0.9rem,1.3vw,1.05rem)] leading-relaxed mb-3" style={{ color: COLORS.textMuted }}>
            Бот сам ведёт переписку с лидами из WhatsApp, квалифицирует и предлагает свободные слоты в Google Calendar. После записи — переключает сделку на этап «забронировано» и замолкает. Менеджер подключается только на сам звонок.
          </p>
          <p className="text-[clamp(0.8rem,1.1vw,0.95rem)] leading-relaxed" style={{ color: COLORS.textDim }}>
            <span className="font-medium" style={{ color: COLORS.text }}>Что внутри:</span> AI Agent на gpt-4o, синхронизация bot_stage через кастомные поля сделок, автообновление OAuth-токенов каждые 12 часов, фильтрация системных сообщений из ответов модели, расчёт свободных слотов в отдельной Code-ноде.
          </p>
        </div>

        {/* Case 2 */}
        <div className="mb-4 p-6 rounded-lg" style={{ backgroundColor: COLORS.graphite, border: `0.5px solid ${COLORS.border}` }}>
          <div className="flex flex-wrap justify-between items-baseline gap-3 mb-2">
            <h3 className="text-[clamp(1.1rem,2vw,1.5rem)] font-medium" style={{ color: COLORS.text }}>
              Telegram-бот бронирования «БезРук»
            </h3>
            <span className="text-xs font-medium tracking-wider" style={{ color: COLORS.accent }}>
              Telegram · Calendar · OpenAI
            </span>
          </div>
          <p className="text-sm mb-3" style={{ color: COLORS.textDim }}>Клиент: сервис подбора онлайн-ассистентов (работает на комиссии)</p>
          <p className="text-[clamp(0.9rem,1.3vw,1.05rem)] leading-relaxed mb-3" style={{ color: COLORS.textMuted }}>
            Бот проводит лида через сценарий из 6 шагов (формат, имя, тип задач, опыт, выбор слота, подтверждение), записывает на звонок и сам напоминает, если человек пропал.
          </p>
          <p className="text-[clamp(0.8rem,1.1vw,0.95rem)] leading-relaxed" style={{ color: COLORS.textDim }}>
            <span className="font-medium" style={{ color: COLORS.text }}>Что внутри:</span> AI Agent + ведение состояния каждого лида в Google Sheets (выступают в роли CRM), отдельный follow-up воркфлоу с напоминаниями через 4 / 24 / 48 часов и 7 дней, детерминированная логика таймстампов.
          </p>
        </div>

        {/* Case 3 */}
        <div className="mb-4 p-6 rounded-lg" style={{ backgroundColor: COLORS.graphite, border: `0.5px solid ${COLORS.border}` }}>
          <div className="flex flex-wrap justify-between items-baseline gap-3 mb-2">
            <h3 className="text-[clamp(1.1rem,2vw,1.5rem)] font-medium" style={{ color: COLORS.text }}>
              Лид-ген: парсинг Яндекс.Карт + email-аутрич
            </h3>
            <span className="text-xs font-medium tracking-wider" style={{ color: COLORS.accent }}>
              n8n · Email · Telegram
            </span>
          </div>
          <p className="text-sm mb-3" style={{ color: COLORS.textDim }}>Клиент в B2B-сегменте</p>
          <p className="text-[clamp(0.9rem,1.3vw,1.05rem)] leading-relaxed mb-3" style={{ color: COLORS.textMuted }}>
            Система сама собирает контакты бизнесов из Яндекс.Карт по нужной нише и городу, чистит данные, рассылает персонализированные письма и переводит ответивших в Telegram-бот для квалификации.
          </p>
          <p className="text-[clamp(0.8rem,1.1vw,0.95rem)] leading-relaxed" style={{ color: COLORS.textDim }}>
            <span className="font-medium" style={{ color: COLORS.text }}>Что внутри:</span> AI-агент для парсинга, email-инфраструктура с разогретыми ящиками, Telegram-бот квалификации с Google Sheets, фильтрация мусорных контактов.
          </p>
        </div>

        {/* Case 4 */}
        <div className="p-6 rounded-lg" style={{ backgroundColor: COLORS.graphite, border: `0.5px solid ${COLORS.border}` }}>
          <div className="flex flex-wrap justify-between items-baseline gap-3 mb-2">
            <h3 className="text-[clamp(1.1rem,2vw,1.5rem)] font-medium" style={{ color: COLORS.text }}>
              Скрейпинг контактов под нишу: 4000+ сайтов
            </h3>
            <span className="text-xs font-medium tracking-wider" style={{ color: COLORS.accent }}>
              Firecrawl · Serper · Airtable
            </span>
          </div>
          <p className="text-sm mb-3" style={{ color: COLORS.textDim }}>Кейс: сбор email-базы балетных школ Италии</p>
          <p className="text-[clamp(0.9rem,1.3vw,1.05rem)] leading-relaxed mb-3" style={{ color: COLORS.textMuted }}>
            Воркфлоу принимает на вход поисковый запрос, прогоняет результаты через Firecrawl, вытаскивает email с главной и внутренних страниц, дедуплицирует и складывает в Airtable, готовую к рассылке.
          </p>
          <p className="text-[clamp(0.8rem,1.1vw,0.95rem)] leading-relaxed" style={{ color: COLORS.textDim }}>
            <span className="font-medium" style={{ color: COLORS.text }}>Что внутри:</span> двухветочная логика homepage / subpages, JS-regex для извлечения email, дедупликация по домену, обработка ошибок 403/404/timeouts. Запускается под любую нишу заменой одного запроса.
          </p>
        </div>
      </FlowSection>

      {/* ============ SECTION 05 — КАК РАБОТАЕМ + КОНТАКТЫ ============ */}
      <FlowSection
        aria-label="Как работаем и контакты"
        style={{ backgroundColor: COLORS.black, color: COLORS.text }}
      >
        <p className="text-xs font-medium uppercase tracking-[0.25em]" style={{ color: COLORS.accent }}>
          05 — Готовы начать?
        </p>
        <hr className="my-[2vw] border-none border-t" style={{ borderColor: COLORS.border }} />

        <h2
          className="text-[clamp(2.5rem,10vw,11rem)] font-bold leading-[0.9] tracking-tight"
          style={{ color: COLORS.text }}
        >
          Давайте
          <br />
          <span style={{ color: COLORS.accent }}>построим</span>
          <br />
          систему
        </h2>

        <hr className="my-[2vw] border-none border-t" style={{ borderColor: COLORS.border }} />

        {/* Process */}
        <div className="flex flex-wrap gap-[3vw] mb-[2vw]">
          <div className="min-w-[160px] flex-1">
            <p className="mb-2 text-sm font-bold" style={{ color: COLORS.accent }}>01 — Созвон</p>
            <p className="text-[clamp(0.85rem,1.2vw,1.05rem)] leading-relaxed" style={{ color: COLORS.textMuted }}>
              Разбираем процесс и считаем, где деньги
            </p>
          </div>
          <div className="min-w-[160px] flex-1">
            <p className="mb-2 text-sm font-bold" style={{ color: COLORS.accent }}>02 — Прототип</p>
            <p className="text-[clamp(0.85rem,1.2vw,1.05rem)] leading-relaxed" style={{ color: COLORS.textMuted }}>
              Собираю работающий MVP за 3–7 дней
            </p>
          </div>
          <div className="min-w-[160px] flex-1">
            <p className="mb-2 text-sm font-bold" style={{ color: COLORS.accent }}>03 — Тест</p>
            <p className="text-[clamp(0.85rem,1.2vw,1.05rem)] leading-relaxed" style={{ color: COLORS.textMuted }}>
              Гоняем на реальных лидах, фиксим
            </p>
          </div>
          <div className="min-w-[160px] flex-1">
            <p className="mb-2 text-sm font-bold" style={{ color: COLORS.accent }}>04 — Передача</p>
            <p className="text-[clamp(0.85rem,1.2vw,1.05rem)] leading-relaxed" style={{ color: COLORS.textMuted }}>
              Инструкция, обучение, поддержка
            </p>
          </div>
        </div>

        <hr className="my-[2vw] border-none border-t" style={{ borderColor: COLORS.border }} />

        {/* Contacts */}
        <div className="mt-auto">
          <p className="text-[clamp(1rem,2vw,1.8rem)] font-normal leading-relaxed mb-6 max-w-[60ch]" style={{ color: COLORS.textMuted }}>
            Бесплатный созвон 20–30 минут — посмотрю процесс и скажу, что и за сколько можно автоматизировать.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://t.me/rusged"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg text-sm font-medium transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: COLORS.accent, color: COLORS.black }}
            >
              Telegram
            </a>
            <a
              href="https://wa.me/79867361188"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg text-sm font-medium transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: COLORS.graphite, color: COLORS.text, border: `0.5px solid ${COLORS.border}` }}
            >
              WhatsApp <span className="opacity-50 ml-1">RU</span>
            </a>
            <a
              href="https://wa.me/306971693306"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg text-sm font-medium transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: COLORS.graphite, color: COLORS.text, border: `0.5px solid ${COLORS.border}` }}
            >
              WhatsApp <span className="opacity-50 ml-1">EU</span>
            </a>
            <a
              href="https://instagram.com/ru.ged"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg text-sm font-medium transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: COLORS.graphite, color: COLORS.text, border: `0.5px solid ${COLORS.border}` }}
            >
              Instagram
            </a>
          </div>
          <p className="mt-8 text-xs" style={{ color: COLORS.textDim }}>
            © Егор Габитов · 2026
          </p>
        </div>
      </FlowSection>
    </FlowArt>
  );
}
