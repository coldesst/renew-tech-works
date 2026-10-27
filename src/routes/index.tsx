import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Второе Дыхание — ремонт и перепродажа электроники" },
      { name: "description", content: "Выкупаем сломанные ноутбуки и ПК, восстанавливаем и продаём с гарантией." },
      { property: "og:title", content: "Второе Дыхание — восстановленная электроника" },
      { property: "og:description", content: "Сломанное — выкупим. Починим — продадим с гарантией." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const products = [
  { name: "MacBook Pro 13\" 2019", spec: "i5 · 16 ГБ · 512 SSD", buy: 100, sell: 250, fix: "Замена материнской платы" },
  { name: "Lenovo ThinkPad T480", spec: "i7 · 16 ГБ · 256 SSD", buy: 60, sell: 190, fix: "Новая матрица и батарея" },
  { name: "Игровой ПК Ryzen 5", spec: "RTX 2060 · 16 ГБ · 1 ТБ", buy: 180, sell: 420, fix: "Замена БП, чистка, термопаста" },
  { name: "ASUS VivoBook 15", spec: "i3 · 8 ГБ · 256 SSD", buy: 40, sell: 140, fix: "Ремонт после залития" },
];

const steps = [
  ["01", "Выкупаем", "Берём сломанную технику: не включается, разбит экран, залита."],
  ["02", "Диагностика", "Находим все неисправности, а не только очевидную."],
  ["03", "Восстанавливаем", "Меняем детали, чистим, тестируем под нагрузкой 24 часа."],
  ["04", "Продаём", "С гарантией 3 месяца и в 2 раза дешевле нового."],
];

function Index() {
  const [sent, setSent] = useState(false);
  return (
    <div className="min-h-screen">
      <header className="fixed inset-x-0 top-0 z-20 border-b border-border/50 bg-background/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="font-display text-lg font-bold">Второе<span className="text-primary">·</span>Дыхание</span>
          <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
            <a href="#how" className="hover:text-foreground">Как работаем</a>
            <a href="#shop" className="hover:text-foreground">Каталог</a>
            <a href="#sell" className="hover:text-foreground">Продать технику</a>
          </nav>
        </div>
      </header>

      <section className="relative flex min-h-screen items-end overflow-hidden">
        <img src={hero} alt="Восстановленный ноутбук в мастерской" width={1600} height={1008} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-24">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-primary">Ремонт · Восстановление · Перепродажа</p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">Даём технике второе дыхание</h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">Выкупаем сломанные ноутбуки, системные блоки и электронику. Восстанавливаем до идеала и продаём с гарантией.</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#shop" className="rounded-full bg-primary px-7 py-3 font-semibold text-primary-foreground transition hover:opacity-90">Смотреть каталог</a>
            <a href="#sell" className="rounded-full border border-border px-7 py-3 font-semibold hover:bg-accent">Продать сломанное</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid items-center gap-6 rounded-3xl border border-border bg-card p-8 md:grid-cols-3 md:p-12">
          <div><p className="text-sm text-muted-foreground">Купили сломанным</p><p className="font-display text-5xl font-bold">$100</p></div>
          <div><p className="text-sm text-muted-foreground">Восстановили</p><p className="font-display text-5xl font-bold">→ 🔧</p></div>
          <div><p className="text-sm text-muted-foreground">Продали рабочим</p><p className="font-display text-5xl font-bold text-primary">$250</p></div>
          <p className="text-muted-foreground md:col-span-3">Так работает наша модель: техника не отправляется на свалку, покупатель получает рабочее устройство дешевле нового, а продавец — деньги за сломанное.</p>
        </div>
      </section>

      <section id="how" className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-3xl font-bold md:text-4xl">Как мы работаем</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {steps.map(([n, t, d]) => (
            <div key={n} className="border-t border-primary pt-6">
              <span className="font-display text-primary">{n}</span>
              <h3 className="mt-3 text-xl font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="shop" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-3xl font-bold md:text-4xl">В продаже сейчас</h2>
        <p className="mt-3 text-muted-foreground">Каждое устройство проверено и с гарантией 3 месяца.</p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {products.map((p) => (
            <article key={p.name} className="rounded-2xl border border-border bg-card p-6 transition hover:border-primary">
              <div className="flex items-start justify-between gap-4">
                <div><h3 className="text-lg font-semibold">{p.name}</h3><p className="text-sm text-muted-foreground">{p.spec}</p></div>
                <span className="font-display text-2xl font-bold text-primary">${p.sell}</span>
              </div>
              <p className="mt-4 text-sm"><span className="text-muted-foreground">Что сделали:</span> {p.fix}</p>
              <p className="mt-1 text-xs text-muted-foreground">Выкуплен за ${p.buy} в нерабочем состоянии</p>
              <a href="#sell" className="mt-5 inline-block rounded-full bg-secondary px-5 py-2 text-sm font-semibold hover:bg-accent">Хочу купить</a>
            </article>
          ))}
        </div>
      </section>

      <section id="sell" className="mx-auto max-w-3xl px-6 py-24">
        <h2 className="text-3xl font-bold md:text-4xl">Продайте нам сломанную технику</h2>
        <p className="mt-3 text-muted-foreground">Опишите устройство — оценим в течение часа.</p>
        {sent ? (
          <p className="mt-10 rounded-2xl border border-primary bg-card p-8 text-lg">Спасибо! Мы свяжемся с вами в ближайшее время.</p>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="mt-10 grid gap-4">
            <input required placeholder="Ваше имя" className="rounded-xl border border-input bg-card px-4 py-3 outline-none focus:border-ring" />
            <input required placeholder="Телефон или Telegram" className="rounded-xl border border-input bg-card px-4 py-3 outline-none focus:border-ring" />
            <textarea required rows={4} placeholder="Устройство и что с ним случилось" className="rounded-xl border border-input bg-card px-4 py-3 outline-none focus:border-ring" />
            <button className="rounded-full bg-primary px-7 py-3 font-semibold text-primary-foreground hover:opacity-90">Получить оценку</button>
          </form>
        )}
      </section>

      <footer className="border-t border-border py-10 text-center text-sm text-muted-foreground">© 2026 Второе Дыхание. Ремонт и перепродажа электроники.</footer>
    </div>
  );
}
