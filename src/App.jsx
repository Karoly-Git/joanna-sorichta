import {
    ArrowDownRight,
    ArrowUpRight,
    BadgeCheck,
    CalendarDays,
    Check,
    ChevronRight,
    Clock3,
    Croissant,
    Download,
    FileDown,
    GraduationCap,
    Linkedin,
    MapPin,
    Phone,
    Quote,
    ShieldCheck,
    Sparkles,
    UtensilsCrossed,
} from "lucide-react";

import "./App.css";

const cv = "/Joanna_Sorichta_CV.docx";

const capabilities = [
    "Bakery production",
    "Food preparation",
    "Food safety & hygiene",
    "Kitchen organisation",
    "Stock rotation",
    "Reliable teamwork",
];

const experience = [
    {
        date: "2023 — present",
        role: "Baker",
        company: "GAIL's Bakery",
        location: "Earlsfield, London",
        featured: true,
        text: "Produced high-quality breads, pastries and baked goods in a busy London bakery, balancing consistency, presentation and food safety every day.",
        points: [
            "Followed recipes, production methods and daily schedules precisely.",
            "Prepared ingredients and maintained excellent hygiene standards.",
            "Supported stock preparation, rotation and a clean, organised bakery.",
        ],
    },
    {
        date: "1999 — 2008",
        role: "Catering Assistant & Cook",
        company: "Caritas Poland",
        location: "Chorzów, Poland",
        text: "Prepared salads, soups, main meals and baked products in a high-volume kitchen while keeping the workspace safe, clean and efficient.",
    },
    {
        date: "2017 — 2023",
        role: "Multi-Skilled Operative",
        company: "ALS Managed Services",
        location: "Wandsworth, London",
        text: "Built a strong reputation for disciplined working practices, reliability and positive teamwork in a demanding operational setting.",
    },
];

const qualifications = [
    {
        icon: ShieldCheck,
        label: "Food Safety",
        title: "Food Hygiene & Safety — Level 3",
        detail: "Eversley Training · August 2026",
    },
    {
        icon: BadgeCheck,
        label: "Food Safety",
        title: "Food Safety — Level 2",
        detail: "Highfield Training · August 2026",
    },
    {
        icon: GraduationCap,
        label: "Education",
        title: "Vocational Diploma in Catering & Food Service",
        detail: "Chorzów · 1999–2002",
    },
];

function Nav() {
    return (
        <nav className="nav">
            <a className="brand" href="#top">
                <span>JS</span>
                <strong>Joanna Sorichta</strong>
            </a>

            <div className="nav-links">
                <a href="#about">About</a>
                <a href="#experience">Experience</a>
                <a href="#contact">Contact</a>

                <a className="nav-download" href={cv} download>
                    CV
                    <Download size={15} />
                </a>
            </div>
        </nav>
    );
}

function Hero() {
    return (
        <section className="hero" id="top">
            <div className="hero-copy">
                <p className="eyebrow">
                    <Sparkles size={15} />
                    Bakery · Catering · Food Production
                </p>

                <h1>
                    Bringing care,
                    <br />
                    <em>craft</em> and consistency
                    <br />
                    to every shift.
                </h1>

                <p className="hero-text">
                    A reliable bakery and catering professional with 15+ years of
                    practical food-production experience and a genuine pride in doing
                    things properly.
                </p>

                <div className="hero-actions">
                    <a className="button button-dark" href="#contact">
                        Let&apos;s connect
                        <ArrowDownRight size={18} />
                    </a>

                    <a className="text-link" href={cv} download>
                        Download my CV
                        <FileDown size={17} />
                    </a>
                </div>

                <div className="mini-proof">
                    <div className="proof-avatars">
                        <span>J</span>
                        <span>F</span>
                        <span>H</span>
                    </div>

                    <p>
                        <strong>Food safety qualified</strong>
                        <br />
                        Level 2 & Level 3 training
                    </p>
                </div>
            </div>

            <div className="hero-visual">
                <div className="sun" />

                <div className="hero-image-wrap">
                    <img src="/profile.png" alt="Joanna Sorichta" />
                </div>

                <div className="experience-stamp">
                    <strong>15+</strong>
                    <span>
                        years of
                        <br />
                        experience
                    </span>
                </div>

                <div className="availability-note">
                    <span className="dot" />
                    Reliable hands. Professional standards.
                </div>
            </div>
        </section>
    );
}

function About() {
    return (
        <section className="about section" id="about">
            <div className="section-intro">
                <p className="number">01 / ABOUT</p>

                <h2>
                    Built on experience.
                    <br />
                    Known for <em>care.</em>
                </h2>
            </div>

            <div className="about-body">
                <p className="large-copy">
                    I am a hardworking food production and catering professional who
                    enjoys being part of a well-run, positive kitchen or bakery team.
                </p>

                <p>
                    From busy bakery production at GAIL&apos;s to years spent cooking
                    and preparing food in a high-volume kitchen, I bring a calm,
                    hands-on approach and strong attention to quality, hygiene and
                    organisation.
                </p>

                <div className="location-line">
                    <MapPin size={18} />
                    <span>Based in Rainham, Essex</span>
                </div>
            </div>

            <aside className="quote-card">
                <Quote size={32} />

                <p>
                    “I believe a clean, organised workspace and good teamwork are
                    behind every great service.”
                </p>

                <span>— Joanna</span>
            </aside>
        </section>
    );
}

function CapabilityStrip() {
    return (
        <section className="capability-strip">
            <p>CORE STRENGTHS</p>

            <div>
                {capabilities.map((item) => (
                    <span key={item}>
                        {item}
                        <i>✦</i>
                    </span>
                ))}
            </div>
        </section>
    );
}

function Experience() {
    return (
        <section className="section experience" id="experience">
            <div className="section-intro">
                <p className="number">02 / EXPERIENCE</p>

                <h2>
                    A career made
                    <br />
                    with <em>purpose.</em>
                </h2>
            </div>

            <div className="timeline">
                {experience.map((item, index) => (
                    <article
                        className={`role ${item.featured ? "role-featured" : ""
                            }`}
                        key={item.role}
                    >
                        <div className="role-index">0{index + 1}</div>

                        <div className="role-date">
                            <CalendarDays size={15} />
                            {item.date}
                        </div>

                        <div className="role-main">
                            <div className="role-heading">
                                <h3>{item.role}</h3>
                                <ArrowUpRight size={20} />
                            </div>

                            <p className="company">
                                {item.company}
                                <span>·</span>
                                {item.location}
                            </p>

                            <p>{item.text}</p>

                            {item.points && (
                                <ul>
                                    {item.points.map((point) => (
                                        <li key={point}>
                                            <Check size={16} />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

function Skills() {
    const items = [
        [
            Croissant,
            "Bakery craft",
            "Producing baked goods to a consistent, attractive and high-quality standard.",
        ],
        [
            UtensilsCrossed,
            "Food preparation",
            "Practical experience preparing ingredients, meals and products for service.",
        ],
        [
            ShieldCheck,
            "Safe by nature",
            "Confident with food hygiene, cleaning, contamination prevention and daily safety routines.",
        ],
        [
            Clock3,
            "Calm under pressure",
            "Used to fast-paced shifts, changing priorities and delivering work on time.",
        ],
    ];

    return (
        <section className="skills section">
            <div className="section-intro">
                <p className="number">03 / EXPERTISE</p>

                <h2>
                    What I bring
                    <br />
                    to the <em>team.</em>
                </h2>
            </div>

            <div className="skill-grid">
                {items.map(([SkillIcon, title, text], index) => (
                    <article className="skill" key={title}>
                        <span>0{index + 1}</span>

                        <SkillIcon />

                        <h3>{title}</h3>

                        <p>{text}</p>

                        <ChevronRight size={20} />
                    </article>
                ))}
            </div>
        </section>
    );
}

function Qualifications() {
    return (
        <section className="qualifications section">
            <div className="section-intro">
                <p className="number">04 / TRAINING</p>

                <h2>
                    Learning that
                    <br />
                    shows in the <em>work.</em>
                </h2>
            </div>

            <div className="qualification-list">
                {qualifications.map(
                    ({ icon: QualificationIcon, label, title, detail }) => (
                        <article key={title}>
                            <div className="qualification-icon">
                                <QualificationIcon size={24} />
                            </div>

                            <div>
                                <p>{label}</p>
                                <h3>{title}</h3>
                                <span>{detail}</span>
                            </div>

                            <BadgeCheck className="verified" size={22} />
                        </article>
                    )
                )}
            </div>
        </section>
    );
}

function Contact() {
    return (
        <section className="contact" id="contact">
            <p className="number">05 / CONTACT</p>

            <h2>
                Let&apos;s make
                <br />
                something <em>great.</em>
            </h2>

            <p className="contact-copy">
                I&apos;m an experienced bakery and catering professional, passionate
                about high standards, food safety and being part of a positive,
                well-organised team.
            </p>

            <a
                className="contact-email"
                href="mailto:joanna.mymob@gmail.com"
            >
                joanna.mymob@gmail.com
                <ArrowUpRight />
            </a>

            <div className="contact-footer">
                <a href="tel:07930817158">
                    <Phone size={17} />
                    07930 817158
                </a>

                <a
                    href="https://www.linkedin.com/in/joanna-sorichta/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Linkedin size={17} />
                    LinkedIn
                </a>

                <a href={cv} download>
                    <Download size={17} />
                    Download CV
                </a>
            </div>
        </section>
    );
}

export default function App() {
    return (
        <>
            <Nav />

            <main>
                <Hero />
                <About />
                <CapabilityStrip />
                <Experience />
                <Skills />
                <Qualifications />
                <Contact />
            </main>

            <footer>
                <span>© {new Date().getFullYear()} Joanna Sorichta</span>
                <span>Bakery · Catering · Food Production</span>
            </footer>
        </>
    );
}