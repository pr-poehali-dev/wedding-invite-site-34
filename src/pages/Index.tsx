import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const BG_OPTIONS = [
  {
    id: "bouquet",
    label: "Букет",
    emoji: "💐",
    url: "https://cdn.poehali.dev/projects/41813e7f-1d84-4f4e-81b9-f846028d38fa/files/affd477e-5fd8-4ba4-b7d9-a5f78887ab55.jpg",
  },
  {
    id: "watercolor",
    label: "Акварель",
    emoji: "🎨",
    url: "https://cdn.poehali.dev/projects/41813e7f-1d84-4f4e-81b9-f846028d38fa/files/95bdba07-bed9-4450-bab5-b5ac27ace4ec.jpg",
  },
  {
    id: "botanical",
    label: "Ботаника",
    emoji: "🌿",
    url: "https://cdn.poehali.dev/projects/41813e7f-1d84-4f4e-81b9-f846028d38fa/files/1fa93ce1-a7a2-4a8d-baaf-16f89fc1067e.jpg",
  },
  {
    id: "petals",
    label: "Лепестки",
    emoji: "🌸",
    url: "https://cdn.poehali.dev/projects/41813e7f-1d84-4f4e-81b9-f846028d38fa/files/c6792906-e626-4dcb-97bf-9a4fb2b22130.jpg",
  },
  {
    id: "details",
    label: "Детали",
    emoji: "💍",
    url: "https://cdn.poehali.dev/projects/41813e7f-1d84-4f4e-81b9-f846028d38fa/files/c24637aa-6bc5-466d-96e8-8b3beb8c1c80.jpg",
  },
  {
    id: "field",
    label: "Полевые",
    emoji: "🌼",
    url: "https://cdn.poehali.dev/projects/41813e7f-1d84-4f4e-81b9-f846028d38fa/files/bf8e4edd-8045-49eb-9317-63c423e4526f.jpg",
  },
];

const THEMES = [
  {
    id: "rose",
    label: "Роза",
    swatch: "#c87a8a",
    petals: ["🌸", "🌺", "✿"],
    heroBg: "linear-gradient(160deg, hsl(350,40%,96%) 0%, hsl(40,40%,97%) 50%, hsl(350,30%,95%) 100%)",
    circle1: "radial-gradient(circle, hsl(340,50%,80%) 0%, transparent 70%)",
    circle2: "radial-gradient(circle, hsl(38,70%,75%) 0%, transparent 70%)",
    textSub: "hsl(340,25%,55%)",
    textTitle: "hsl(340,20%,25%)",
    textDate: "hsl(340,25%,60%)",
    textPlace: "hsl(340,20%,40%)",
    textDown: "hsl(340,25%,60%)",
    navBg: "rgba(253,248,244,0.92)",
    navBorder: "rgba(205,150,160,0.15)",
    navColor: "hsl(340,35%,55%)",
    dividerColor: "hsl(340,30%,50%)",
    dividerLine: "hsl(340,35%,55%)",
    btnBg: "linear-gradient(135deg, hsl(340,45%,60%) 0%, hsl(340,38%,48%) 100%)",
    btnShadow: "rgba(180,100,120,0.3)",
    bgPage: "hsl(40,35%,97%)",
  },
  {
    id: "emerald",
    label: "Изумруд",
    swatch: "#4a9e70",
    petals: ["🌿", "🍃", "✦"],
    heroBg: "linear-gradient(160deg, hsl(150,35%,94%) 0%, hsl(160,25%,97%) 50%, hsl(140,30%,93%) 100%)",
    circle1: "radial-gradient(circle, hsl(155,50%,60%) 0%, transparent 70%)",
    circle2: "radial-gradient(circle, hsl(140,45%,65%) 0%, transparent 70%)",
    textSub: "hsl(155,30%,40%)",
    textTitle: "hsl(155,25%,18%)",
    textDate: "hsl(155,25%,45%)",
    textPlace: "hsl(155,20%,35%)",
    textDown: "hsl(155,30%,45%)",
    navBg: "rgba(245,252,248,0.92)",
    navBorder: "rgba(80,160,110,0.15)",
    navColor: "hsl(155,40%,35%)",
    dividerColor: "hsl(155,30%,50%)",
    dividerLine: "hsl(155,35%,55%)",
    btnBg: "linear-gradient(135deg, hsl(155,42%,38%) 0%, hsl(155,48%,27%) 100%)",
    btnShadow: "rgba(40,120,80,0.3)",
    bgPage: "hsl(150,20%,97%)",
  },
  {
    id: "lavender",
    label: "Лаванда",
    swatch: "#9b7ec8",
    petals: ["💜", "🪻", "✦"],
    heroBg: "linear-gradient(160deg, hsl(270,35%,95%) 0%, hsl(280,25%,97%) 50%, hsl(260,30%,94%) 100%)",
    circle1: "radial-gradient(circle, hsl(270,50%,80%) 0%, transparent 70%)",
    circle2: "radial-gradient(circle, hsl(280,45%,75%) 0%, transparent 70%)",
    textSub: "hsl(270,25%,50%)",
    textTitle: "hsl(270,25%,22%)",
    textDate: "hsl(270,20%,55%)",
    textPlace: "hsl(270,18%,38%)",
    textDown: "hsl(270,20%,55%)",
    navBg: "rgba(248,245,255,0.92)",
    navBorder: "rgba(150,100,200,0.15)",
    navColor: "hsl(270,40%,48%)",
    dividerColor: "hsl(270,28%,55%)",
    dividerLine: "hsl(270,35%,60%)",
    btnBg: "linear-gradient(135deg, hsl(270,45%,52%) 0%, hsl(270,50%,40%) 100%)",
    btnShadow: "rgba(120,70,180,0.3)",
    bgPage: "hsl(270,20%,97%)",
  },
  {
    id: "sky",
    label: "Небо",
    swatch: "#6aaed6",
    petals: ["🩵", "❄️", "✦"],
    heroBg: "linear-gradient(160deg, hsl(205,45%,94%) 0%, hsl(210,30%,97%) 50%, hsl(200,35%,93%) 100%)",
    circle1: "radial-gradient(circle, hsl(205,55%,75%) 0%, transparent 70%)",
    circle2: "radial-gradient(circle, hsl(195,50%,72%) 0%, transparent 70%)",
    textSub: "hsl(205,30%,42%)",
    textTitle: "hsl(210,30%,20%)",
    textDate: "hsl(205,25%,48%)",
    textPlace: "hsl(205,20%,36%)",
    textDown: "hsl(205,25%,50%)",
    navBg: "rgba(242,249,255,0.92)",
    navBorder: "rgba(80,150,200,0.15)",
    navColor: "hsl(205,45%,40%)",
    dividerColor: "hsl(205,32%,52%)",
    dividerLine: "hsl(205,40%,58%)",
    btnBg: "linear-gradient(135deg, hsl(205,50%,45%) 0%, hsl(210,55%,33%) 100%)",
    btnShadow: "rgba(50,120,180,0.3)",
    bgPage: "hsl(205,25%,97%)",
  },
  {
    id: "burgundy",
    label: "Бордо",
    swatch: "#9e3a4a",
    petals: ["🌹", "🍂", "✦"],
    heroBg: "linear-gradient(160deg, hsl(350,30%,94%) 0%, hsl(20,25%,96%) 50%, hsl(5,28%,93%) 100%)",
    circle1: "radial-gradient(circle, hsl(350,45%,72%) 0%, transparent 70%)",
    circle2: "radial-gradient(circle, hsl(25,55%,68%) 0%, transparent 70%)",
    textSub: "hsl(350,28%,45%)",
    textTitle: "hsl(350,30%,18%)",
    textDate: "hsl(350,22%,50%)",
    textPlace: "hsl(350,18%,36%)",
    textDown: "hsl(350,22%,50%)",
    navBg: "rgba(255,245,245,0.92)",
    navBorder: "rgba(180,80,90,0.15)",
    navColor: "hsl(350,40%,40%)",
    dividerColor: "hsl(350,28%,48%)",
    dividerLine: "hsl(350,38%,52%)",
    btnBg: "linear-gradient(135deg, hsl(350,48%,40%) 0%, hsl(350,52%,28%) 100%)",
    btnShadow: "rgba(140,40,55,0.3)",
    bgPage: "hsl(10,18%,97%)",
  },
];

const getPetals = (theme: typeof THEMES[0]) =>
  Array.from({ length: 14 }, (_, i) => ({
    id: i,
    left: `${(i * 7 + 3) % 100}%`,
    animationDuration: `${8 + (i % 6) * 2}s`,
    animationDelay: `${(i * 1.3) % 12}s`,
    fontSize: `${10 + (i % 5) * 4}px`,
    emoji: theme.petals[i % 3],
  }));

const schedule = [
  { time: "14:00", title: "Сбор гостей", desc: "Встреча и приветственный бокал шампанского" },
  { time: "14:30", title: "Церемония", desc: "Торжественная регистрация брака" },
  { time: "15:30", title: "Фотосессия", desc: "Прогулка молодожёнов в саду" },
  { time: "16:30", title: "Банкет", desc: "Торжественный ужин и первый танец" },
  { time: "19:00", title: "Торт", desc: "Разрезание свадебного торта" },
  { time: "20:00", title: "Вечеринка", desc: "Танцы и праздничная программа" },
];

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");
  const [rsvpName, setRsvpName] = useState("");
  const [rsvpGuests, setRsvpGuests] = useState("1");
  const [rsvpDiet, setRsvpDiet] = useState("");
  const [rsvpAttend, setRsvpAttend] = useState<null | boolean>(null);
  const [rsvpSent, setRsvpSent] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [themeId, setThemeId] = useState("rose");
  const [bgId, setBgId] = useState("bouquet");

  const theme = THEMES.find((t) => t.id === themeId) ?? THEMES[0];
  const petals = getPetals(theme);
  const currentBg = BG_OPTIONS.find((b) => b.id === bgId) ?? BG_OPTIONS[0];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.4 }
    );
    ["home", "details", "schedule", "gifts", "rsvp", "contacts"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { id: "home", label: "Главная" },
    { id: "details", label: "Детали" },
    { id: "schedule", label: "Программа" },
    { id: "gifts", label: "Подарки" },
    { id: "rsvp", label: "RSVP" },
    { id: "contacts", label: "Контакты" },
  ];

  return (
    <div className="min-h-screen" style={{ background: theme.bgPage }}>
      {/* Floating petals */}
      {petals.map((p) => (
        <div
          key={p.id}
          className="petal"
          style={{
            left: p.left,
            top: "-20px",
            animationDuration: p.animationDuration,
            animationDelay: p.animationDelay,
            fontSize: p.fontSize,
          }}
        >
          {p.emoji}
        </div>
      ))}

      {/* Navigation */}
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: theme.navBg,
          backdropFilter: "blur(16px)",
          borderBottom: `1px solid ${theme.navBorder}`,
          transition: "background 0.5s ease",
        }}
      >
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div
            className="font-cormorant text-xl italic cursor-pointer"
            style={{ color: theme.navColor, transition: "color 0.5s" }}
            onClick={() => scrollTo("home")}
          >
            А & М
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <button
                key={l.id}
                className="nav-link"
                style={{ color: activeSection === l.id ? theme.navColor : undefined, transition: "color 0.5s" }}
                onClick={() => scrollTo(l.id)}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Mobile burger */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={20} style={{ color: theme.navColor }} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden px-6 pb-4 flex flex-col gap-4 border-t" style={{ borderColor: theme.navBorder }}>
            {navLinks.map((l) => (
              <button key={l.id} className="nav-link text-left" onClick={() => scrollTo(l.id)}>
                {l.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden px-6"
        style={{ background: theme.heroBg, transition: "background 0.6s ease" }}
      >
        {/* Full-screen background flowers */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${currentBg.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.13,
            transition: "background-image 0.5s ease",
          }}
        />

        {/* Decorative glow circles */}
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-20 z-0"
          style={{ background: theme.circle1 }} />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-15 z-0"
          style={{ background: theme.circle2 }} />

        {/* Switchers panel */}
        <div className="absolute top-24 right-4 z-20 flex flex-col gap-3 items-end">
          {/* Theme switcher */}
          <div className="flex flex-col items-end gap-1">
            <span className="text-xs uppercase tracking-widest" style={{ color: theme.textDate, opacity: 0.6 }}>Тема</span>
            <div className="flex gap-1.5">
              {THEMES.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setThemeId(t.id)}
                  title={t.label}
                  className="transition-all duration-200"
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    background: t.swatch,
                    border: themeId === t.id ? "2px solid white" : "2px solid transparent",
                    boxShadow: themeId === t.id ? `0 0 0 2px ${t.swatch}` : "0 2px 6px rgba(0,0,0,0.15)",
                    cursor: "pointer",
                    transform: themeId === t.id ? "scale(1.25)" : "scale(1)",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Background switcher */}
          <div className="flex flex-col items-end gap-1">
            <span className="text-xs uppercase tracking-widest" style={{ color: theme.textDate, opacity: 0.6 }}>Фон</span>
            <div className="flex gap-1.5">
              {BG_OPTIONS.map((b) => (
                <button
                  key={b.id}
                  onClick={() => setBgId(b.id)}
                  title={b.label}
                  className="transition-all duration-200 flex items-center justify-center text-sm"
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: "8px",
                    backgroundImage: `url(${b.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    border: bgId === b.id ? "2px solid white" : "2px solid rgba(255,255,255,0.3)",
                    boxShadow: bgId === b.id ? "0 0 0 2px rgba(0,0,0,0.25)" : "0 2px 6px rgba(0,0,0,0.15)",
                    cursor: "pointer",
                    transform: bgId === b.id ? "scale(1.2)" : "scale(1)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center">
          <p
            className="font-cormorant italic text-lg md:text-xl animate-fade-in-up delay-200 mb-2"
            style={{ color: theme.textSub, transition: "color 0.5s" }}
          >
            Мы рады пригласить вас на нашу свадьбу
          </p>

          <h1
            className="font-cormorant text-6xl md:text-8xl lg:text-9xl font-light animate-fade-in-up delay-300 mb-4 leading-none"
            style={{ color: theme.textTitle, transition: "color 0.5s" }}
          >
            Анна
            <span className="gold-text mx-4 md:mx-6 text-5xl md:text-7xl">&</span>
            Михаил
          </h1>

          <div className="floral-divider animate-fade-in-up delay-400 my-4"
            style={{ ["--divider-color" as string]: theme.dividerLine }}>
            <span className="font-cormorant italic text-base" style={{ color: theme.textDate, transition: "color 0.5s" }}>
              14 июня 2026 года
            </span>
          </div>

          <p
            className="font-cormorant text-xl md:text-2xl animate-fade-in-up delay-500 mb-8"
            style={{ color: theme.textPlace, transition: "color 0.5s" }}
          >
            Москва · Усадьба «Архангельское»
          </p>

          <CountdownTimer targetDate="2026-06-14T14:00:00" titleColor={theme.textTitle} labelColor={theme.textDate} />

          <button
            className="animate-fade-in-up delay-800 mt-8"
            style={{
              background: theme.btnBg,
              boxShadow: `0 4px 20px ${theme.btnShadow}`,
              color: "white",
              border: "none",
              padding: "14px 40px",
              borderRadius: "50px",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 400,
              fontSize: "0.8rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onClick={() => scrollTo("rsvp")}
          >
            Подтвердить присутствие
          </button>

          <button
            className="animate-fade-in-up delay-1000 mt-4 flex items-center gap-2"
            style={{ color: theme.textDown, fontSize: "0.8rem", letterSpacing: "0.1em", background: "none", border: "none", cursor: "pointer", transition: "color 0.5s" }}
            onClick={() => scrollTo("details")}
          >
            <span>Узнать детали</span>
            <Icon name="ChevronDown" size={16} />
          </button>
        </div>
      </section>

      {/* DETAILS */}
      <section id="details" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionTitle title="Детали свадьбы" subtitle="Всё, что нужно знать о нашем особенном дне" />

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: "Calendar",
                title: "Дата",
                main: "14 июня 2026",
                sub: "Воскресенье",
                color: "hsl(340,45%,65%)",
              },
              {
                icon: "Clock",
                title: "Время",
                main: "14:00",
                sub: "Сбор гостей в 13:30",
                color: "hsl(38,65%,60%)",
              },
              {
                icon: "MapPin",
                title: "Место",
                main: "Усадьба «Архангельское»",
                sub: "Московская область, Красногорский район",
                color: "hsl(340,30%,55%)",
              },
            ].map((item, i) => (
              <div key={i} className="section-card p-8 text-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: `${item.color}20` }}
                >
                  <Icon name={item.icon} fallback="Calendar" size={24} style={{ color: item.color }} />
                </div>
                <p
                  className="font-cormorant italic text-sm mb-1"
                  style={{ color: "hsl(340,20%,60%)" }}
                >
                  {item.title}
                </p>
                <h3
                  className="font-cormorant text-xl md:text-2xl font-medium mb-1"
                  style={{ color: "hsl(340,20%,25%)" }}
                >
                  {item.main}
                </h3>
                <p className="text-xs" style={{ color: "hsl(340,10%,55%)" }}>
                  {item.sub}
                </p>
              </div>
            ))}
          </div>

          {/* Dress code */}
          <div className="section-card p-8 mt-6 flex flex-col md:flex-row items-center gap-6">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(200,170,100,0.1)" }}
            >
              <span className="text-2xl">👗</span>
            </div>
            <div>
              <p
                className="font-cormorant italic text-sm mb-1"
                style={{ color: "hsl(340,20%,60%)" }}
              >
                Дресс-код
              </p>
              <h3
                className="font-cormorant text-xl font-medium mb-2"
                style={{ color: "hsl(340,20%,25%)" }}
              >
                Романтический · Пастельные тона
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "hsl(340,10%,50%)" }}>
                Просим гостей придерживаться нежной пастельной гаммы: розовый, пудровый, кремовый, сиреневый, мятный. 
                Избегайте белого и чёрного цветов.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section
        id="schedule"
        className="py-24 px-6"
        style={{ background: "linear-gradient(180deg, hsl(350,30%,97%) 0%, hsl(40,35%,97%) 100%)" }}
      >
        <div className="max-w-2xl mx-auto">
          <SectionTitle title="Программа дня" subtitle="Каждый момент создан с любовью" />

          <div className="mt-12 space-y-0">
            {schedule.map((item, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div
                    className="w-3 h-3 rounded-full mt-1.5 flex-shrink-0 transition-all duration-300 group-hover:scale-150"
                    style={{ background: "hsl(340,45%,65%)", boxShadow: "0 0 0 4px rgba(200,140,155,0.2)" }}
                  />
                  {i < schedule.length - 1 && (
                    <div
                      className="w-px flex-1 mt-1"
                      style={{ background: "linear-gradient(180deg, hsl(340,30%,80%) 0%, transparent 100%)", minHeight: "40px" }}
                    />
                  )}
                </div>
                <div className="pb-8 flex-1">
                  <div className="section-card p-5 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3
                        className="font-cormorant text-lg font-medium"
                        style={{ color: "hsl(340,20%,25%)" }}
                      >
                        {item.title}
                      </h3>
                      <span
                        className="font-cormorant text-sm italic"
                        style={{ color: "hsl(340,45%,65%)" }}
                      >
                        {item.time}
                      </span>
                    </div>
                    <p className="text-sm" style={{ color: "hsl(340,10%,55%)" }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GIFTS */}
      <section id="gifts" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <SectionTitle title="Пожелания о подарках" subtitle="Ваше присутствие — лучший подарок для нас" />

          <p
            className="text-center text-sm leading-relaxed mt-4 mb-12 max-w-xl mx-auto"
            style={{ color: "hsl(340,10%,55%)" }}
          >
            Если вы хотите порадовать нас чем-то особенным, мы будем рады:
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                emoji: "✈️",
                title: "Путешествия",
                desc: "Мы мечтаем о путешествии в Италию на медовый месяц. Любой вклад в нашу копилку впечатлений будет бесценен.",
                cta: "Пополнить копилку",
              },
              {
                emoji: "🏡",
                title: "Для нашего дома",
                desc: "Мы обустраиваем совместное гнёздышко. Будем рады подарочным картам в IKEA или «Стокгольм».",
                cta: "Узнать детали",
              },
              {
                emoji: "💐",
                title: "Живые цветы",
                desc: "Живые цветы — это язык любви. Мы обожаем пионы, розы и тюльпаны пастельных оттенков.",
                cta: null,
              },
              {
                emoji: "💌",
                title: "Тёплые слова",
                desc: "Письма с пожеланиями, которые мы сможем перечитывать много лет — самая нетленная ценность.",
                cta: null,
              },
            ].map((g, i) => (
              <div key={i} className="gift-card">
                <div className="text-3xl mb-4">{g.emoji}</div>
                <h3
                  className="font-cormorant text-xl font-medium mb-2"
                  style={{ color: "hsl(340,20%,25%)" }}
                >
                  {g.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "hsl(340,10%,55%)" }}>
                  {g.desc}
                </p>
                {g.cta && (
                  <button
                    className="text-xs font-medium uppercase tracking-widest"
                    style={{ color: "hsl(340,45%,60%)", background: "none", border: "none", cursor: "pointer" }}
                  >
                    {g.cta} →
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Bank details */}
          <div
            className="mt-8 p-6 rounded-2xl text-center"
            style={{
              background: "linear-gradient(135deg, rgba(200,140,155,0.08) 0%, rgba(200,170,100,0.08) 100%)",
              border: "1px solid rgba(200,150,160,0.2)",
            }}
          >
            <p className="font-cormorant italic text-lg mb-2" style={{ color: "hsl(340,20%,40%)" }}>
              Реквизиты для денежного подарка
            </p>
            <p className="text-sm mb-1" style={{ color: "hsl(340,10%,50%)" }}>Номер карты Сбербанк</p>
            <p
              className="font-cormorant text-2xl tracking-widest"
              style={{ color: "hsl(340,20%,30%)" }}
            >
              4276 •••• •••• 8847
            </p>
            <p className="text-xs mt-1" style={{ color: "hsl(340,10%,60%)" }}>Анна Иванова</p>
          </div>
        </div>
      </section>

      {/* RSVP */}
      <section
        id="rsvp"
        className="py-24 px-6"
        style={{ background: "linear-gradient(160deg, hsl(340,30%,96%) 0%, hsl(350,25%,97%) 100%)" }}
      >
        <div className="max-w-xl mx-auto">
          <SectionTitle title="Подтвердите присутствие" subtitle="Пожалуйста, ответьте до 1 мая 2026" />

          {rsvpSent ? (
            <div className="section-card p-10 text-center mt-10">
              <div className="text-5xl mb-4 animate-heartbeat">💌</div>
              <h3
                className="font-cormorant text-2xl font-medium mb-2"
                style={{ color: "hsl(340,20%,25%)" }}
              >
                Спасибо, {rsvpName}!
              </h3>
              <p className="text-sm" style={{ color: "hsl(340,10%,55%)" }}>
                {rsvpAttend
                  ? "Мы так рады, что вы будете с нами! До встречи!"
                  : "Жаль, что вы не сможете прийти. Мы будем думать о вас!"}
              </p>
            </div>
          ) : (
            <div className="section-card p-8 mt-10">
              <div className="space-y-5">
                <div>
                  <label className="block text-xs uppercase tracking-widest mb-2" style={{ color: "hsl(340,20%,55%)" }}>
                    Ваше имя
                  </label>
                  <input
                    className="input-romantic"
                    placeholder="Имя и фамилия"
                    value={rsvpName}
                    onChange={(e) => setRsvpName(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest mb-2" style={{ color: "hsl(340,20%,55%)" }}>
                    Вы придёте?
                  </label>
                  <div className="flex gap-3">
                    {[
                      { val: true, label: "С радостью!" },
                      { val: false, label: "К сожалению, нет" },
                    ].map((opt) => (
                      <button
                        key={String(opt.val)}
                        onClick={() => setRsvpAttend(opt.val)}
                        className="flex-1 py-3 rounded-full text-sm transition-all duration-200"
                        style={{
                          border: `1px solid ${rsvpAttend === opt.val ? "hsl(340,45%,60%)" : "rgba(200,150,160,0.4)"}`,
                          background: rsvpAttend === opt.val ? "hsl(340,45%,65%)" : "white",
                          color: rsvpAttend === opt.val ? "white" : "hsl(340,15%,40%)",
                          fontFamily: "Montserrat, sans-serif",
                          fontSize: "0.8rem",
                        }}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {rsvpAttend && (
                  <div>
                    <label className="block text-xs uppercase tracking-widest mb-2" style={{ color: "hsl(340,20%,55%)" }}>
                      Количество гостей
                    </label>
                    <select
                      className="input-romantic"
                      value={rsvpGuests}
                      onChange={(e) => setRsvpGuests(e.target.value)}
                      style={{ appearance: "none" as const }}
                    >
                      {["1", "2", "3", "4"].map((n) => (
                        <option key={n} value={n}>
                          {n} {n === "1" ? "гость" : "гостя"}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                <div>
                  <label className="block text-xs uppercase tracking-widest mb-2" style={{ color: "hsl(340,20%,55%)" }}>
                    Пожелания или диетические предпочтения
                  </label>
                  <textarea
                    className="textarea-romantic"
                    rows={3}
                    placeholder="Вегетарианское меню, аллергии, пожелания..."
                    value={rsvpDiet}
                    onChange={(e) => setRsvpDiet(e.target.value)}
                  />
                </div>

                <button
                  className="btn-rose w-full"
                  onClick={() => {
                    if (rsvpName && rsvpAttend !== null) setRsvpSent(true);
                  }}
                >
                  Отправить ответ
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <SectionTitle title="Контакты" subtitle="Будем рады ответить на любые вопросы" />

          <div className="grid md:grid-cols-2 gap-5 mt-12">
            {[
              {
                name: "Анна",
                role: "Невеста",
                phone: "+7 (999) 123-45-67",
                telegram: "@anna_bride",
                emoji: "👰",
              },
              {
                name: "Михаил",
                role: "Жених",
                phone: "+7 (999) 765-43-21",
                telegram: "@mikhail_groom",
                emoji: "🤵",
              },
            ].map((c, i) => (
              <div key={i} className="section-card p-8">
                <div className="text-4xl mb-4">{c.emoji}</div>
                <p className="font-cormorant italic text-sm mb-1" style={{ color: "hsl(340,20%,60%)" }}>
                  {c.role}
                </p>
                <h3
                  className="font-cormorant text-2xl font-medium mb-4"
                  style={{ color: "hsl(340,20%,25%)" }}
                >
                  {c.name}
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" size={14} style={{ color: "hsl(340,45%,65%)" }} />
                    <span className="text-sm" style={{ color: "hsl(340,10%,50%)" }}>{c.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="MessageCircle" size={14} style={{ color: "hsl(340,45%,65%)" }} />
                    <span className="text-sm" style={{ color: "hsl(340,10%,50%)" }}>{c.telegram}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Wedding coordinator */}
          <div className="section-card p-6 mt-5 flex items-start gap-5">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(200,170,100,0.1)" }}
            >
              <Icon name="Star" size={20} style={{ color: "hsl(38,65%,55%)" }} />
            </div>
            <div>
              <p className="font-cormorant italic text-sm mb-1" style={{ color: "hsl(340,20%,60%)" }}>
                Координатор свадьбы
              </p>
              <h3
                className="font-cormorant text-xl font-medium mb-1"
                style={{ color: "hsl(340,20%,25%)" }}
              >
                Светлана
              </h3>
              <p className="text-sm mb-2" style={{ color: "hsl(340,10%,55%)" }}>
                По организационным вопросам обращайтесь к Светлане
              </p>
              <p className="text-sm" style={{ color: "hsl(340,10%,50%)" }}>
                +7 (999) 333-22-11 · @svetlana_event
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-12 text-center px-6"
        style={{
          background: "linear-gradient(180deg, hsl(350,30%,96%) 0%, hsl(340,25%,94%) 100%)",
          borderTop: "1px solid rgba(200,150,160,0.15)",
        }}
      >
        <div className="animate-heartbeat inline-block mb-4 text-2xl">♡</div>
        <h2
          className="font-cormorant text-3xl md:text-4xl font-light mb-2"
          style={{ color: "hsl(340,20%,35%)" }}
        >
          Анна & Михаил
        </h2>
        <p className="font-cormorant italic" style={{ color: "hsl(340,25%,60%)" }}>
          14 июня 2026 · С любовью ждём вас
        </p>
      </footer>
    </div>
  );
}

function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="text-center">
      <h2
        className="font-cormorant text-4xl md:text-5xl font-light mb-3"
        style={{ color: "hsl(340,20%,25%)" }}
      >
        {title}
      </h2>
      <div className="floral-divider my-3">
        <span className="text-lg">✿</span>
      </div>
      <p className="font-cormorant italic text-lg" style={{ color: "hsl(340,20%,55%)" }}>
        {subtitle}
      </p>
    </div>
  );
}

function CountdownTimer({ targetDate, titleColor, labelColor }: { targetDate: string; titleColor: string; labelColor: string }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calc = () => {
      const diff = new Date(targetDate).getTime() - Date.now();
      if (diff <= 0) return;
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    calc();
    const t = setInterval(calc, 1000);
    return () => clearInterval(t);
  }, [targetDate]);

  return (
    <div className="flex gap-4 md:gap-8 animate-fade-in-up delay-600 mt-6">
      {[
        { val: timeLeft.days, label: "дней" },
        { val: timeLeft.hours, label: "часов" },
        { val: timeLeft.minutes, label: "минут" },
        { val: timeLeft.seconds, label: "секунд" },
      ].map((item, i) => (
        <div key={i} className="text-center">
          <div
            className="font-cormorant text-4xl md:text-5xl font-light tabular-nums"
            style={{ color: titleColor, transition: "color 0.5s" }}
          >
            {String(item.val).padStart(2, "0")}
          </div>
          <div
            className="text-xs uppercase tracking-widest mt-1"
            style={{ color: labelColor, fontFamily: "Montserrat, sans-serif", transition: "color 0.5s" }}
          >
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}