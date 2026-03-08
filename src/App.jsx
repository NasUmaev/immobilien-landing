import { useRef, useState, useEffect } from "react";

export default function ImmobilienLandingMockup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Anliegen auswählen");

  const cardRef = useRef(null);
  const glowRef = useRef(null);
  const animationFrameRef = useRef(null);

  const currentRotation = useRef({ x: 0, y: 0 });
  const targetRotation = useRef({ x: 0, y: 0 });

  const options = [
    "Immobilie verkaufen",
    "Immobilie kaufen",
    "Immobilie vermieten",
    "Beratung",
  ];

  useEffect(() => {
  const checkScreen = () => {
    setIsDesktop(window.innerWidth >= 1024);
  };

  checkScreen();
  window.addEventListener("resize", checkScreen);

  return () => window.removeEventListener("resize", checkScreen);
}, []);

  useEffect(() => {
  if (!isDesktop) {
    const card = cardRef.current;
    if (card) {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
    }
    return;
  }

  const animate = () => {
    const card = cardRef.current;
    if (!card) {
      animationFrameRef.current = requestAnimationFrame(animate);
      return;
    }

    currentRotation.current.x +=
      (targetRotation.current.x - currentRotation.current.x) * 0.1;
    currentRotation.current.y +=
      (targetRotation.current.y - currentRotation.current.y) * 0.1;

    card.style.transform = `perspective(1000px) rotateX(${currentRotation.current.x}deg) rotateY(${currentRotation.current.y}deg) scale(1.01)`;

    animationFrameRef.current = requestAnimationFrame(animate);
  };

  animationFrameRef.current = requestAnimationFrame(animate);

  return () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
  };
}, [isDesktop]);

  const services = [
    {
      title: "Immobilie verkaufen",
      text: "Klare Vermarktung, starke Präsentation und persönliche Begleitung bis zum Abschluss.",
    },
    {
      title: "Immobilie kaufen",
      text: "Unterstützung bei der Suche, Bewertung und sicheren Entscheidungsfindung.",
    },
    {
      title: "Vermietung",
      text: "Schnelle Vermittlung mit Fokus auf passende Mieter und transparente Kommunikation.",
    },
  ];

  const advantages = [
    "Persönliche Betreuung statt Massenabfertigung",
    "Regionale Marktkenntnis und klare Kommunikation",
    "Professionelle Präsentation Ihrer Immobilie",
    "Schnelle Erreichbarkeit via Telefon und WhatsApp",
  ];

  const steps = [
    {
      step: "01",
      title: "Unverbindliche Anfrage",
      text: "Der Kunde nimmt Kontakt auf und schildert kurz sein Anliegen.",
    },
    {
      step: "02",
      title: "Persönliches Gespräch",
      text: "Ziele, Situation und passende nächsten Schritte werden gemeinsam geklärt.",
    },
    {
      step: "03",
      title: "Strategie & Umsetzung",
      text: "Vom Angebot bis zur Vermarktung wird alles sauber vorbereitet.",
    },
    {
      step: "04",
      title: "Abschluss",
      text: "Begleitung bis zur finalen Entscheidung oder erfolgreichen Vermittlung.",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-neutral-950 via-black to-neutral-900 text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="nebula-a absolute -left-64 -top-40 h-[42rem] w-[42rem] rounded-full bg-amber-300/12 blur-[180px]" />
        <div className="nebula-b absolute -right-72 top-[10%] h-[48rem] w-[48rem] rounded-full bg-white/6 blur-[220px]" />
        <div className="nebula-c absolute left-[20%] bottom-[-18rem] h-[44rem] w-[44rem] rounded-full bg-amber-200/10 blur-[200px]" />
        <div className="nebula-d absolute right-[10%] bottom-[-12rem] h-[36rem] w-[36rem] rounded-full bg-amber-100/8 blur-[180px]" />
        <div className="nebula-b absolute left-[-18rem] top-[45%] h-[34rem] w-[34rem] rounded-full bg-white/4 blur-[180px]" />
        <div className="nebula-a absolute right-[-12rem] top-[55%] h-[30rem] w-[30rem] rounded-full bg-amber-300/8 blur-[160px]" />
      </div>

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.06),transparent_30%),radial-gradient(circle_at_left,rgba(212,175,55,0.08),transparent_25%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-8 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:py-10">
          <div>
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-amber-300/80">
                  Immobilienmakler
                </p>
                <h1 className="mt-2 text-xl font-semibold tracking-wide">
                  Mustermann Immobilien
                </h1>
              </div>

              <button className="rounded-full bg-amber-300 px-6 py-3 font-medium text-neutral-950 transition-all duration-200 hover:scale-105">
                Kontakt
              </button>
            </div>

            <div className="max-w-2xl">
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/50">
                Seriöser Lead-Gen Mockup
              </p>

              <h2 className="text-4xl font-semibold leading-tight md:text-6xl md:leading-[1.05]">
                Immobilien elegant vermarkten.{" "}
                <span className="text-amber-300">Mehr Anfragen</span>, mehr Vertrauen.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-white/70 md:text-lg">
                Moderne Landingpage für einen Immobilienhändler oder Makler mit klarem Fokus auf Vertrauen,
                Kontaktaufnahme und hochwertige Außendarstellung.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <button className="rounded-full bg-amber-300 px-6 py-3 font-medium text-neutral-950 transition-all duration-200 hover:scale-105">
                  Kostenlose Beratung
                </button>
                <button className="rounded-full border border-white/15 px-6 py-3 font-medium text-white transition-all duration-200 hover:scale-105 hover:bg-white hover:text-neutral-950">
                  Objekt bewerten
                </button>
              </div>

              <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-white/10 pt-6">
                <div>
                  <p className="text-2xl font-semibold">120+</p>
                  <p className="mt-1 text-sm text-white/60">Bearbeitete Anfragen</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold">24h</p>
                  <p className="mt-1 text-sm text-white/60">Schnelle Rückmeldung</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold">Top</p>
                  <p className="mt-1 text-sm text-white/60">Premium Eindruck</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center lg:justify-end">
            <div
              ref={cardRef}
              className="group relative w-full max-w-md overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl will-change-transform"
              onMouseMove={
                isDesktop
                  ? (e) => {
                      const card = cardRef.current;
                      if (!card) return;

                      const rect = card.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;

                      const glow = glowRef.current;
                      if (glow) {
                        glow.style.opacity = "1";
                        glow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(251,191,36,0.18), transparent 60%)`;
                      }

                      const centerX = rect.width / 2;
                      const centerY = rect.height / 2;

                      targetRotation.current.y = ((x - centerX) / centerX) * 2;
                      targetRotation.current.x = -((y - centerY) / centerY) * 2;
                    }
                  : undefined
              }
              onMouseLeave={
                isDesktop
                  ? () => {
                      targetRotation.current.x = 0;
                      targetRotation.current.y = 0;

                      const glow = glowRef.current;
                      if (glow) {
                        glow.style.opacity = "0";
                      }
                    }
                  : undefined
              }
            >
              {isDesktop && (
                <div
                  ref={glowRef}
                  className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300"
                />
              )}

              {isDesktop && (
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                  <div className="absolute -left-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-all duration-700 group-hover:left-full group-hover:opacity-100" />
                </div>
              )}

              <div className="relative z-10">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white/50">Jetzt Anfrage senden</p>
                    <h3 className="text-2xl font-semibold">Kostenlose Erstberatung</h3>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-amber-300/90" />
                </div>

                <div className="space-y-4">
                  <input
                    className="w-full rounded-2xl border border-white/10 bg-neutral-900/80 px-4 py-3 outline-none placeholder:text-white/35 transition focus:border-amber-300 focus:bg-neutral-900"
                    placeholder="Ihr Name"
                  />
                  <input
                    className="w-full rounded-2xl border border-white/10 bg-neutral-900/80 px-4 py-3 outline-none placeholder:text-white/35 transition focus:border-amber-300 focus:bg-neutral-900"
                    placeholder="Telefonnummer"
                  />
                  <input
                    className="w-full rounded-2xl border border-white/10 bg-neutral-900/80 px-4 py-3 outline-none placeholder:text-white/35 transition focus:border-amber-300 focus:bg-neutral-900"
                    placeholder="E-Mail"
                  />

                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsOpen(!isOpen)}
                      className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-neutral-900/80 px-4 py-3 text-left text-white/70 outline-none transition hover:border-white/20"
                    >
                      <span
                        className={
                          selectedOption === "Anliegen auswählen" ? "text-white/40" : "text-white"
                        }
                      >
                        {selectedOption}
                      </span>
                      <span
                        className={`text-white/40 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        ▼
                      </span>
                    </button>

                    {isOpen && (
                      <div className="absolute left-0 right-0 top-[calc(100%+0.5rem)] z-20 overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 shadow-2xl shadow-black/40 backdrop-blur-xl">
                        {options.map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => {
                              setSelectedOption(option);
                              setIsOpen(false);
                            }}
                            className="block w-full border-b border-white/5 px-4 py-3 text-left text-white/70 transition last:border-b-0 hover:bg-white/5 hover:text-white"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <textarea
                    className="h-28 w-full rounded-2xl border border-white/10 bg-neutral-900/80 px-4 py-3 outline-none placeholder:text-white/35 transition focus:border-amber-300 focus:bg-neutral-900"
                    placeholder="Kurze Nachricht"
                  />

                  <button className="w-full rounded-2xl bg-amber-300 px-5 py-3 font-semibold text-neutral-950 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl hover:shadow-amber-300/30 active:translate-y-0">
                    Anfrage absenden
                  </button>
                </div>

                <p className="mt-4 text-xs leading-6 text-white/35">
                  Durch Klick auf den Button erklären Sie sich mit der Kontaktaufnahme einverstanden.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-amber-300/80">Leistungen</p>
            <h3 className="mt-3 text-3xl font-semibold md:text-4xl">
              Was Ihre Kunden sofort verstehen sollen
            </h3>
          </div>
          <p className="max-w-xl text-white/60">
            Dieser Bereich zeigt klar und schnell, worin der Nutzen liegt. Kein Blabla, nur saubere Orientierung.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-amber-300/30 hover:shadow-2xl hover:shadow-amber-500/10"
            >
              <div className="mb-5 h-12 w-12 rounded-2xl bg-amber-300/15" />
              <h4 className="text-xl font-semibold">{service.title}</h4>
              <p className="mt-3 leading-7 text-white/65">{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-amber-300/80">Warum wir</p>
            <h3 className="mt-3 text-3xl font-semibold md:text-4xl">
              Vertrauen ist die eigentliche Währung
            </h3>
            <p className="mt-5 max-w-lg leading-7 text-white/65">
              Ein guter Lead-Mockup verkauft nicht aggressiv. Er beruhigt, ordnet, erklärt und gibt dem Besucher das Gefühl,
              am richtigen Ort zu sein.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {advantages.map((item) => (
              <div key={item} className="rounded-[1.5rem] border border-white/10 bg-neutral-900/70 p-5">
                <div className="mb-4 h-2 w-12 rounded-full bg-amber-300" />
                <p className="text-lg leading-7 text-white/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-300/80">Ablauf</p>
          <h3 className="mt-3 text-3xl font-semibold md:text-4xl">
            So könnte der Weg des Kunden aussehen
          </h3>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((item) => (
            <div key={item.step} className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
              <p className="text-sm tracking-[0.3em] text-white/40">{item.step}</p>
              <h4 className="mt-4 text-xl font-semibold">{item.title}</h4>
              <p className="mt-3 leading-7 text-white/60">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10 lg:px-12">
        <div className="grid gap-6 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 md:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-amber-300/80">Call to Action</p>
            <h3 className="mt-3 text-3xl font-semibold md:text-4xl">
              Bereit für echte Anfragen statt nur hübscher Optik?
            </h3>
            <p className="mt-4 max-w-2xl leading-7 text-white/65">
              Eine moderne Immobilien-Landingpage, die Vertrauen schafft, klare Anfragen generiert und professionell wirkt.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="rounded-full bg-amber-300 px-6 py-3 font-medium text-neutral-950 transition-all duration-200 hover:scale-105">
              Termin anfragen
            </button>
            <button className="rounded-full border border-white/15 px-6 py-3 font-medium text-white transition-all duration-200 hover:scale-105 hover:bg-white hover:text-neutral-950">
              WhatsApp
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}