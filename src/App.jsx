import { useState, useEffect, useRef } from "react";

const COLORS = {
  bg: "#080808",
  bg2: "#0e0e0e",
  white: "#eaeaea",
  light: "#bbb",
  mid: "#888",
  dim: "#444",
  line: "#1e1e1e",
};

// ═══════════════════════════════════════
// NAV
// ═══════════════════════════════════════
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkStyle = {
    padding: "0.7rem 1.5rem",
    fontSize: "0.85rem",
    fontWeight: 600,
    color: COLORS.mid,
    borderLeft: `1px solid ${COLORS.line}`,
    transition: "all 0.15s",
    cursor: "pointer",
    background: "transparent",
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 200,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 3vw",
        height: scrolled ? 60 : 68,
        background: scrolled ? "rgba(8,8,8,0.95)" : COLORS.bg,
        backdropFilter: "blur(10px)",
        borderBottom: `1px solid ${COLORS.line}`,
        transition: "height 0.3s, background 0.3s",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <img
          src="CatmovingtailTransparent.gif"
          alt=""
          style={{ height: 30, imageRendering: "pixelated" }}
        />
        <span
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "1.5rem",
            letterSpacing: "0.04em",
            color: COLORS.white,
          }}
        >
          APPOLO
        </span>
      </div>
      <div style={{ display: "flex" }}>
        {["about", "work", "contact"].map((s) => (
          <a
            key={s}
            href={`#${s}`}
            style={linkStyle}
            onMouseEnter={(e) => {
              e.target.style.color = COLORS.white;
              e.target.style.background = COLORS.line;
            }}
            onMouseLeave={(e) => {
              e.target.style.color = COLORS.mid;
              e.target.style.background = "transparent";
            }}
          >
            {s}
          </a>
        ))}
      </div>
    </nav>
  );
}

// ═══════════════════════════════════════
// APPOLO MARQUEE ROWS (behind hero)
// ═══════════════════════════════════════
function AppoloRows() {
  const rows = [
    { speed: 35, direction: "normal" },
    { speed: 45, direction: "reverse" },
    { speed: 30, direction: "normal" },
    { speed: 50, direction: "reverse" },
    { speed: 38, direction: "normal" },
  ];

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 0,
        opacity: 0.6,
      }}
    >
      {rows.map((r, i) => (
        <div key={i} style={{ overflow: "hidden", lineHeight: 1 }}>
          <div
            style={{
              display: "flex",
              whiteSpace: "nowrap",
              animation: `appoloScroll${r.direction === "reverse" ? "R" : "L"} ${r.speed}s linear infinite`,
              width: "max-content",
            }}
          >
            {Array(10)
              .fill("APPOLO")
              .map((t, j) => (
                <span
                  key={j}
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "clamp(4rem, 8vw, 7rem)",
                    color: "transparent",
                    WebkitTextStroke: `1px ${COLORS.line}`,
                    padding: "0 1.5rem",
                    letterSpacing: "0.06em",
                    userSelect: "none",
                  }}
                >
                  {t}
                </span>
              ))}
            {Array(10)
              .fill("APPOLO")
              .map((t, j) => (
                <span
                  key={`d-${j}`}
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "clamp(4rem, 8vw, 7rem)",
                    color: "transparent",
                    WebkitTextStroke: `1px ${COLORS.line}`,
                    padding: "0 1.5rem",
                    letterSpacing: "0.06em",
                    userSelect: "none",
                  }}
                >
                  {t}
                </span>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// ═══════════════════════════════════════
// HERO
// ═══════════════════════════════════════
function Hero() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  const fadeUp = (delay) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(20px)",
    transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
  });

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px 3vw 3rem",
        position: "relative",
        overflow: "hidden",
        borderBottom: `1px solid ${COLORS.line}`,
      }}
    >
      <AppoloRows />
      <div style={{ position: "relative", zIndex: 2, maxWidth: 650 }}>
        <p style={{ fontSize: "0.9rem", color: COLORS.mid, marginBottom: "1rem", ...fadeUp(0.1) }}>
          hey, i'm appolo
        </p>
        <h1
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(3rem, 7vw, 6rem)",
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
            ...fadeUp(0.2),
          }}
        >
          i build roblox
          <br />
          <span style={{ color: COLORS.mid }}>games people</span>
          <br />
          <span style={{ color: COLORS.mid }}>actually play</span>
        </h1>
        <p
          style={{
            marginTop: "1.5rem",
            fontSize: "0.95rem",
            lineHeight: 1.75,
            color: COLORS.light,
            maxWidth: 440,
            fontWeight: 300,
            ...fadeUp(0.35),
          }}
        >
          16 years old, been at this since i was 10. i make combat systems, AI, physics, procedural
          animation, whatever the game needs.
        </p>
        <div style={{ marginTop: "2rem", display: "flex", ...fadeUp(0.45) }}>
          <a
            href="#work"
            style={{
              padding: "0.75rem 1.8rem",
              fontSize: "0.85rem",
              fontWeight: 600,
              background: COLORS.white,
              color: COLORS.bg,
              border: `1px solid ${COLORS.white}`,
              cursor: "pointer",
              transition: "all 0.15s",
            }}
          >
            see my stuff
          </a>
          <a
            href="#contact"
            style={{
              padding: "0.75rem 1.8rem",
              fontSize: "0.85rem",
              fontWeight: 600,
              background: "transparent",
              color: COLORS.mid,
              border: `1px solid ${COLORS.line}`,
              marginLeft: -1,
              cursor: "pointer",
              transition: "all 0.15s",
            }}
          >
            hire me
          </a>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════
// TICKER
// ═══════════════════════════════════════
function Ticker() {
  const items = [
    "Lua",
    "Roblox Studio",
    "AI",
    "Python",
    "Procedural Animation",
    "Physics",
    "UI/UX",
    "JavaScript",
    "Pathfinding",
    "State Machines",
    "C++",
  ];
  const doubled = [...items, ...items];

  return (
    <div
      style={{
        borderBottom: `1px solid ${COLORS.line}`,
        overflow: "hidden",
        padding: "0.75rem 0",
        background: COLORS.bg2,
      }}
    >
      <div
        style={{
          display: "flex",
          whiteSpace: "nowrap",
          animation: "appoloScrollL 30s linear infinite",
          width: "max-content",
        }}
      >
        {doubled.map((t, i) => (
          <span
            key={i}
            style={{
              fontSize: "0.82rem",
              color: COLORS.dim,
              padding: "0 1.8rem",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            <span style={{ color: COLORS.line, marginRight: "1.8rem" }}>◆</span>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════
// SCROLL REVEAL WRAPPER
// ═══════════════════════════════════════
function Reveal({ children, delay = 0, style = {} }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVis(true);
          obs.unobserve(e.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(25px)",
        transition: `opacity 0.55s ease ${delay}s, transform 0.55s ease ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// ═══════════════════════════════════════
// ABOUT
// ═══════════════════════════════════════
function About() {
  const statData = [
    { val: "160k+", label: "visits on my main game" },
    { val: "6 yrs", label: "writing code almost daily" },
    { val: "16", label: "years old, pursuing CS" },
  ];

  return (
    <section id="about" style={{ borderBottom: `1px solid ${COLORS.line}` }}>
      <div style={{ padding: "3rem 3vw 1.5rem", borderBottom: `1px solid ${COLORS.line}` }}>
        <Tag>about</Tag>
        <SectionHeading>a bit about me</SectionHeading>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr" }} className="about-grid">
        <Reveal style={{ padding: "2.2rem 3vw", borderRight: `1px solid ${COLORS.line}` }} className="about-copy-wrap">
          <p style={bodyText}>
            I got into coding by downloading Roblox Studio and messing around with free models. Ever
            since then I've been completely hooked on programming and now I'm pursuing a{" "}
            <strong style={{ color: COLORS.white, fontWeight: 600 }}>computer science</strong> path
            in college.
          </p>
          <p style={{ ...bodyText, marginTop: "1.2rem" }}>
            I'm fluent in{" "}
            <strong style={{ color: COLORS.white, fontWeight: 600 }}>Lua</strong>, but recently
            I've been expanding and branching out to different game engines like{" "}
            <strong style={{ color: COLORS.white, fontWeight: 600 }}>Unreal Engine 5</strong>.
            Right now I'm learning{" "}
            <strong style={{ color: COLORS.white, fontWeight: 600 }}>C++</strong> and honestly it's
            a whole different world compared to Lua, but I'm getting there.
          </p>
          <p style={{ ...bodyText, marginTop: "1.2rem" }}>
            Most of my work is building the systems games actually need to function. Not surface
            level stuff. I'm talking{" "}
            <strong style={{ color: COLORS.white, fontWeight: 600 }}>AI behavior trees</strong>,{" "}
            <strong style={{ color: COLORS.white, fontWeight: 600 }}>custom physics</strong>,{" "}
            <strong style={{ color: COLORS.white, fontWeight: 600 }}>procedural animation</strong>, full
            UI frameworks. The kind of stuff you don't notice until it breaks.
          </p>
        </Reveal>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {statData.map((s, i) => (
            <Reveal
              key={i}
              delay={i * 0.08}
              style={{
                flex: 1,
                padding: "1.3rem 1.8rem",
                borderBottom: i < statData.length - 1 ? `1px solid ${COLORS.line}` : "none",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <span
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "1.6rem",
                  letterSpacing: "0.02em",
                }}
              >
                {s.val}
              </span>
              <span
                style={{
                  fontSize: "0.78rem",
                  color: COLORS.mid,
                  textAlign: "right",
                  lineHeight: 1.4,
                }}
              >
                {s.label}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════
// PROJECT CARD
// ═══════════════════════════════════════
function ProjectCard({ idx, type, title, desc, techs, link, linkText, imgSrc, videoSrc, icon, flip }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Reveal>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="project-card"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: 340,
          borderBottom: `1px solid ${COLORS.line}`,
          direction: flip ? "rtl" : "ltr",
          background: hovered ? COLORS.bg2 : "transparent",
          transition: "background 0.3s",
        }}
      >
        {/* visual */}
        <div
          style={{
            direction: "ltr",
            position: "relative",
            overflow: "hidden",
            background: "#111",
            borderRight: flip ? "none" : `1px solid ${COLORS.line}`,
            borderLeft: flip ? `1px solid ${COLORS.line}` : "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {imgSrc ? (
            <img
              src={imgSrc}
              alt={title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: hovered ? "grayscale(0%)" : "grayscale(100%)",
                opacity: hovered ? 1 : 0.5,
                transform: hovered ? "scale(1.03)" : "scale(1)",
                transition: "all 0.5s",
              }}
            />
          ) : videoSrc ? (
            <video
              src={videoSrc}
              muted
              loop
              playsInline
              autoPlay={false}
              ref={(el) => {
                if (!el) return;
                if (hovered) { el.play().catch(() => {}); }
                else { el.pause(); el.currentTime = 0; }
              }}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: hovered ? "grayscale(0%)" : "grayscale(100%)",
                opacity: hovered ? 1 : 0.4,
                transform: hovered ? "scale(1.03)" : "scale(1)",
                transition: "all 0.5s",
              }}
            />
          ) : (
            <span
              style={{
                fontSize: "3.5rem",
                opacity: hovered ? 0.22 : 0.1,
                transition: "opacity 0.4s",
              }}
            >
              {icon}
            </span>
          )}
          <span
            style={{
              position: "absolute",
              top: 10,
              left: flip ? "auto" : 10,
              right: flip ? 10 : "auto",
              fontSize: "0.65rem",
              fontFamily: "'Space Mono', monospace",
              color: COLORS.dim,
              letterSpacing: "0.08em",
            }}
          >
            {idx}
          </span>
        </div>

        {/* text */}
        <div
          style={{
            direction: "ltr",
            padding: "2.2rem 2.5vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Tag>{type}</Tag>
          <h3
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "1.5rem",
              letterSpacing: "0.02em",
              marginBottom: "0.8rem",
              lineHeight: 1.15,
            }}
          >
            {title}
          </h3>
          <p
            style={{
              fontSize: "0.9rem",
              color: COLORS.light,
              lineHeight: 1.75,
              marginBottom: "1.2rem",
              fontWeight: 300,
            }}
            dangerouslySetInnerHTML={{ __html: desc }}
          />
          <div style={{ display: "flex", flexWrap: "wrap", marginBottom: "1.3rem" }}>
            {techs.map((t, i) => (
              <span
                key={i}
                style={{
                  fontSize: "0.68rem",
                  fontFamily: "'Space Mono', monospace",
                  padding: "0.25rem 0.65rem",
                  border: `1px solid ${COLORS.line}`,
                  color: COLORS.dim,
                  margin: "-0.5px",
                }}
              >
                {t}
              </span>
            ))}
          </div>
          <a
            href={link}
            target={link.startsWith("http") ? "_blank" : undefined}
            style={{
              fontSize: "0.88rem",
              color: COLORS.mid,
              fontWeight: 500,
              transition: "color 0.2s",
              width: "fit-content",
            }}
            onMouseEnter={(e) => (e.target.style.color = COLORS.white)}
            onMouseLeave={(e) => (e.target.style.color = COLORS.mid)}
          >
            {linkText} →
          </a>
        </div>
      </div>
    </Reveal>
  );
}

// ═══════════════════════════════════════
// CONTACT
// ═══════════════════════════════════════
function Contact() {
  const btnStyle = {
    padding: "0.75rem 1.8rem",
    fontSize: "0.85rem",
    fontWeight: 600,
    border: `1px solid ${COLORS.line}`,
    color: COLORS.mid,
    marginRight: -1,
    transition: "all 0.15s",
    background: "transparent",
    cursor: "pointer",
  };

  return (
    <section id="contact" style={{ padding: "4rem 3vw", borderBottom: `1px solid ${COLORS.line}` }}>
      <Reveal>
        <Tag>contact</Tag>
        <h2
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            marginBottom: "0.8rem",
          }}
        >
          want something built?
        </h2>
        <p
          style={{
            fontSize: "0.95rem",
            color: COLORS.light,
            maxWidth: 420,
            lineHeight: 1.65,
            fontWeight: 300,
            marginBottom: "2rem",
          }}
        >
          commissions, collabs, or just wanna chat about game dev. i'm around.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {[
            { label: "email", href: "mailto:juciuskajus15@gmail.com" },
            { label: "roblox", href: "https://www.roblox.com/users/1163251716/profile" },
            { label: "discord", href: "https://discord.gg/kREW5QQqPB" },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              style={btnStyle}
              onMouseEnter={(e) => {
                e.target.style.background = COLORS.white;
                e.target.style.color = COLORS.bg;
                e.target.style.borderColor = COLORS.white;
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "transparent";
                e.target.style.color = COLORS.mid;
                e.target.style.borderColor = COLORS.line;
              }}
            >
              {c.label}
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

// ═══════════════════════════════════════
// SHARED COMPONENTS
// ═══════════════════════════════════════
function Tag({ children }) {
  return (
    <p
      style={{
        fontSize: "0.72rem",
        fontFamily: "'Space Mono', monospace",
        color: COLORS.dim,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        marginBottom: "0.6rem",
      }}
    >
      {children}
    </p>
  );
}

function SectionHeading({ children }) {
  return (
    <h2
      style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
        letterSpacing: "0.02em",
        lineHeight: 1.15,
      }}
    >
      {children.toUpperCase()}
    </h2>
  );
}

const bodyText = {
  fontSize: "0.95rem",
  lineHeight: 1.85,
  color: COLORS.light,
  fontWeight: 300,
};

// ═══════════════════════════════════════
// PROJECT DATA
// ═══════════════════════════════════════
// each project can have: imgSrc, videoSrc, or icon (fallback)
// imgSrc  → shows a static image, goes color on hover
// videoSrc → greyscale + paused by default, plays on hover
// icon    → shows a faint emoji if you have neither yet
// just fill in whichever one you have and delete the others

const projects = [
  {
    idx: "01",
    type: "shipped game",
    title: "RAISE A DR HOUSE",
    desc: `built this whole game myself. all the game logic, UI, progression, <em style="color:${COLORS.white};font-style:normal;font-weight:500">no templates, no free models</em>. over 160k people have played it and they keep coming back, so i think the systems hold up pretty well. yes the concept is a bit silly, but watch the show and you'll get it. seriously, go watch it.`,
    techs: ["Lua", "Game Logic", "UI", "Progression"],
    link: "https://www.roblox.com/games/82635139286925/Raise-a-Dr-House",
    linkText: "play it",
    imgSrc: "raiseadrhouse.png",
    // videoSrc: "drhouse-preview.mp4",  ← swap to this if you get a video
  },
  {
    idx: "02",
    type: "combat system",
    title: "LOCK-ON TARGETING",
    desc: `dark souls style lock on. you target an enemy and the <em style="color:${COLORS.white};font-style:normal;font-weight:500">camera smoothly tracks them</em>, you can switch between targets, and if they go behind a wall or die mid lock it handles everything without the camera freaking out.`,
    techs: ["Lua", "Camera", "Raycasting", "Combat"],
    link: "#",
    linkText: "demo video",
    videoSrc: "lockon-demo.mp4",
    // imgSrc: "lockon-screenshot.png",  ← or use a screenshot
    icon: "⚔",  // remove this line once you add a video or image
  },
  {
    idx: "03",
    type: "ai / pathfinding",
    title: "RTS UNIT MOVEMENT",
    desc: `click somewhere and your units move there in formation. they <em style="color:${COLORS.white};font-style:normal;font-weight:500">pathfind around obstacles, avoid bumping into each other</em>, and you can queue up commands. basically starcraft controls but in roblox.`,
    techs: ["Lua", "Pathfinding", "Formations", "RTS"],
    link: "https://youtu.be/ULdcywxUb48",
    linkText: "watch on youtube",
    videoSrc: "rts-demo.mp4",
    icon: "◈",
  },
  {
    idx: "04",
    type: "ui",
    title: "RADIAL EMOTE WHEEL",
    desc: `radial selection menu that uses <em style="color:${COLORS.white};font-style:normal;font-weight:500">trig to position everything in a circle</em>. mouse angle picks which option is highlighted, works with any number of items, and the transitions feel responsive.`,
    techs: ["Lua", "UI", "Trig", "Animation"],
    link: "#",
    linkText: "demo video",
    videoSrc: "emotewheel-demo.mp4",
    icon: "◎",
  },
  {
    idx: "05",
    type: "algorithm",
    title: "MAZE GENERATOR",
    desc: `<em style="color:${COLORS.white};font-style:normal;font-weight:500">recursive backtracking</em> that generates a unique solvable maze every time you run it. also visualizes the algorithm step by step so you can watch it carve the path out.`,
    techs: ["Python", "Algorithms", "Procgen"],
    link: "https://youtu.be/ULdcywxUb48",
    linkText: "watch on youtube",
    videoSrc: "project3.mp4",
    icon: "⬡",
  },
];

// ═══════════════════════════════════════
// APP
// ═══════════════════════════════════════
export default function App() {
  return (
    <div
      style={{
        fontFamily: "'IBM Plex Sans', 'Inter', sans-serif",
        background: COLORS.bg,
        color: COLORS.white,
        minHeight: "100vh",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Syne:wght@700;800&family=Space+Mono:wght@400;700&family=IBM+Plex+Sans:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />
      <style>{`
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { background: ${COLORS.bg}; overflow-x: hidden; }
        a { color: inherit; text-decoration: none; }
        ::selection { background: ${COLORS.white}; color: ${COLORS.bg}; }
        @keyframes appoloScrollL {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes appoloScrollR {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .about-copy-wrap { border-right: none !important; border-bottom: 1px solid ${COLORS.line} !important; }
          .project-card { grid-template-columns: 1fr !important; direction: ltr !important; }
          .project-card > div:first-child { border-right: none !important; border-left: none !important; border-bottom: 1px solid ${COLORS.line} !important; min-height: 200px; }
        }
      `}</style>

      <Nav />
      <Hero />
      <Ticker />
      <About />

      {/* WORK HEADER */}
      <div
        id="work"
        style={{
          padding: "3rem 3vw 1.5rem",
          borderBottom: `1px solid ${COLORS.line}`,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
        }}
      >
        <div>
          <Tag>work</Tag>
          <SectionHeading>things i've made</SectionHeading>
        </div>
        <span
          style={{
            fontSize: "0.75rem",
            fontFamily: "'Space Mono', monospace",
            color: COLORS.dim,
          }}
        >
          01 — 05
        </span>
      </div>

      {/* PROJECTS */}
      {projects.map((p, i) => (
        <ProjectCard key={i} {...p} flip={i % 2 === 1} />
      ))}

      <Contact />

      {/* FOOTER */}
      <footer
        style={{
          padding: "1.5rem 3vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: "0.75rem", fontFamily: "'Space Mono', monospace", color: COLORS.dim }}>
          © 2026 appolo
        </span>
        <span style={{ fontSize: "0.75rem", fontFamily: "'Space Mono', monospace", color: COLORS.dim }}>
          built between classes
        </span>
      </footer>
    </div>
  );
}