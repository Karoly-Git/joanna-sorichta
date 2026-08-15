import {
    Croissant,
    FileDown,
    Linkedin,
    Mail,
    Utensils,
    ShieldCheck,
    Boxes,
    Users,
    Gauge,
    Award,
    GraduationCap,
    Languages,
    Check,
    Phone,
    MapPin,
    Download,
} from "lucide-react";

const cv = "/Joanna_Sorichta_CV.docx";

const Icon = ({ children }) => (
    <span className="react-icon">{children}</span>
);

function Nav() {
    return (
        <nav className="site-nav">
            <div className="nav-inner">
                <a className="brand" href="#top">
                    Joanna Sorichta
                </a>

                <div className="nav-links">
                    <a href="#about">About</a>
                    <a href="#experience">Experience</a>
                    <a href="#skills">Skills</a>
                    <a href="#qualifications">Qualifications</a>
                    <a href="#contact">Contact</a>

                    <a className="nav-cta" href={cv} download>
                        Download CV
                    </a>
                </div>
            </div>
        </nav>
    );
}

function Hero() {
    return (
        <header className="hero" id="top">
            <div className="hero-inner">
                <div className="eyebrow">
                    <Icon>
                        <Croissant />
                    </Icon>
                    Baker & Catering Professional
                </div>

                <h1>
                    Quality food.
                    <br />
                    <span>Reliable hands.</span>
                    <br />
                    Professional standards.
                </h1>

                <p className="hero-lead">
                    Experienced catering professional with 15+ years across bakery
                    production, food preparation and kitchen environments, with a strong
                    focus on quality, food safety, organisation and teamwork.
                </p>

                <div className="hero-actions">
                    <a className="btn btn-primary" href={cv} download>
                        <Icon>
                            <FileDown />
                        </Icon>
                        Download CV
                    </a>

                    <a
                        className="btn btn-ghost"
                        href="https://www.linkedin.com/in/joanna-sorichta/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Icon>
                            <Linkedin />
                        </Icon>
                        LinkedIn
                    </a>

                    <a
                        className="btn btn-ghost"
                        href="mailto:joanna.mymob@gmail.com"
                    >
                        <Icon>
                            <Mail />
                        </Icon>
                        Email
                    </a>
                </div>
            </div>
        </header>
    );
}

const skills = [
    [
        "Bakery Production",
        Croissant,
        "Hands-on experience producing bakery products to consistent quality and presentation standards.",
    ],
    [
        "Food Preparation",
        Utensils,
        "Practical experience preparing ingredients, meals, baked products and food for service.",
    ],
    [
        "Food Safety & Hygiene",
        ShieldCheck,
        "Highfield Level 2 Food Safety qualified, with strong day-to-day hygiene awareness.",
    ],
    [
        "Stock & Organisation",
        Boxes,
        "Experienced with ingredient handling, stock preparation, rotation and organised work areas.",
    ],
    [
        "Teamwork",
        Users,
        "Comfortable working collaboratively in busy environments where communication and reliability matter.",
    ],
    [
        "Working Under Pressure",
        Gauge,
        "Used to fast-paced shifts, changing priorities and maintaining standards when workloads increase.",
    ],
];

function About() {
    return (
        <section className="intro-card">
            <div className="intro-photo">
                <img src="/profile.png" alt="Joanna Sorichta" />
            </div>

            <div className="intro-copy">
                <div className="section-kicker">About Me</div>

                <h2>Baker & Catering Professional</h2>

                <p className="lead">
                    Reliable and hardworking food production and catering professional
                    with over 15 years of experience in bakery, catering and fast-paced
                    food production environments.
                </p>

                <p>
                    Most recently, I worked as a Baker at GAIL's Bakery in London,
                    producing high-quality bakery products while maintaining excellent
                    standards of food safety, hygiene, quality and presentation.
                </p>

                <p>
                    Earlier in my career, I spent nine years as a Catering Assistant &
                    Cook, gaining extensive hands-on experience in food preparation,
                    cooking, kitchen cleanliness and teamwork.
                </p>

                <p>
                    I am passionate about delivering consistently high standards,
                    learning new skills and supporting a positive, well-organised kitchen
                    environment.
                </p>

                <div className="stat-grid">
                    <div className="stat">
                        <strong>15+ Years</strong>
                        <span>Catering & food production</span>
                    </div>

                    <div className="stat">
                        <strong>Level 2</strong>
                        <span>Highfield Food Safety</span>
                    </div>

                    <div className="stat">
                        <strong>Rainham</strong>
                        <span>Essex, United Kingdom</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Experience() {
    return (
        <section className="section" id="experience">
            <div className="section-head">
                <div>
                    <div className="section-kicker">Career</div>
                    <h2 className="section-title">Relevant Experience</h2>
                </div>

                <p>
                    A practical background built around bakery production, catering, food
                    preparation, hygiene, reliability and working effectively under
                    pressure.
                </p>
            </div>

            <div className="experience-grid">
                <article className="feature-card">
                    <div className="role-top">
                        <div>
                            <div className="role-title">Baker</div>

                            <div className="role-company">
                                GAIL's Bakery · Earlsfield, London
                            </div>
                        </div>

                        <div className="role-date">Oct 2023 – Aug 2026</div>
                    </div>

                    <p className="role-summary">
                        Worked in a busy bakery environment producing high-quality products
                        while maintaining consistency, food safety and efficient daily
                        production.
                    </p>

                    <ul className="clean-list">
                        <li>Produced a wide range of breads, pastries and baked goods.</li>

                        <li>
                            Followed detailed recipes, production methods and schedules.
                        </li>

                        <li>
                            Prepared ingredients and maintained high hygiene and food safety
                            standards.
                        </li>

                        <li>
                            Supported stock preparation, ingredient handling and stock
                            rotation.
                        </li>

                        <li>
                            Worked collaboratively with colleagues to meet daily production
                            requirements.
                        </li>

                        <li>
                            Maintained clean, organised and professional food preparation
                            areas.
                        </li>
                    </ul>
                </article>

                <div className="side-stack">
                    <article className="side-card mini-card">
                        <div className="role-title">Catering Assistant & Cook</div>

                        <div className="meta">
                            Caritas Poland · Chorzów, Poland · May 1999 – Aug 2008
                        </div>

                        <p>
                            Prepared and cooked food in a high-volume kitchen, including
                            salads, soups, main meals and baked products, while maintaining
                            kitchen hygiene and food safety standards.
                        </p>
                    </article>

                    <article className="side-card mini-card">
                        <div className="role-title">Office Cleaner</div>

                        <div className="meta">
                            Flux Ltd · Chorzów, Poland · Jan 2009 – Dec 2014
                        </div>

                        <p>
                            Maintained high standards of cleanliness and hygiene and worked
                            independently while following company procedures.
                        </p>
                    </article>

                    <article className="side-card mini-card">
                        <div className="role-title">Multi-Skilled Operative</div>

                        <div className="meta">
                            ALS Managed Services Ltd · Wandsworth · Feb 2017 – Oct 2023
                        </div>

                        <p>
                            Additional experience demonstrating reliability, disciplined
                            working practices, teamwork and a strong health & safety culture.
                        </p>
                    </article>
                </div>
            </div>
        </section>
    );
}

function Skills() {
    return (
        <section className="section" id="skills">
            <div className="section-head">
                <div>
                    <div className="section-kicker">Strengths</div>

                    <h2 className="section-title">
                        What I bring to a team
                    </h2>
                </div>

                <p>
                    Practical skills suited to catering assistants, kitchen team members,
                    bakers, bakery assistants and food production roles.
                </p>
            </div>

            <div className="skills-wrap">
                {skills.map(([title, SkillIcon, description]) => (
                    <article className="skill-card" key={title}>
                        <div className="skill-icon">
                            <SkillIcon />
                        </div>

                        <h3>{title}</h3>

                        <p>{description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}

function Qualifications() {
    return (
        <section className="section" id="qualifications">
            <div className="section-head">
                <div>
                    <div className="section-kicker">Qualifications</div>

                    <h2 className="section-title">
                        Training & Education
                    </h2>
                </div>

                <p>
                    Relevant food safety training and formal catering education supporting
                    a career in food service.
                </p>
            </div>

            <div className="qual-grid">
                <article className="qual-card">
                    <div className="badge">
                        <Award />
                        Food Safety
                    </div>

                    <h3>Highfield Level 2 Food Safety</h3>

                    <div className="meta">
                        Highfield Online Training · Completed August 2026
                    </div>

                    <p>
                        Covers food safety hazards, contamination controls, personal
                        hygiene, cleaning and disinfection, food safety management systems
                        and food safety law.
                    </p>
                </article>

                <article className="qual-card">
                    <div className="badge">
                        <GraduationCap />
                        Diploma
                    </div>

                    <h3>
                        Vocational Diploma in Catering & Food Service
                    </h3>

                    <div className="meta">
                        Complex of Gastronomy and Service Schools, Chorzów · 1999–2002
                    </div>

                    <p>
                        Formal vocational education in catering and food service.
                    </p>
                </article>

                <article className="qual-card">
                    <div className="badge">
                        <Languages />
                        English
                    </div>

                    <h3>English Language Course</h3>

                    <div className="meta">
                        South Thames College, London · 2021–2022
                    </div>

                    <p>
                        English language studies completed in London.
                    </p>
                </article>

                <article className="qual-card">
                    <div className="badge">
                        <Check />
                        Work Ready
                    </div>

                    <h3>Full Right to Work in the UK</h3>

                    <div className="meta">
                        EU Settled Status
                    </div>

                    <p>
                        Available for permanent and part-time employment in catering,
                        bakery and food production.
                    </p>
                </article>
            </div>
        </section>
    );
}

function Contact() {
    return (
        <>
            <section className="availability">
                <div>
                    <h2>Ready for the next opportunity.</h2>

                    <p>
                        I am currently seeking opportunities in catering, bakery, kitchen
                        operations and food production, particularly across East London and
                        Essex.
                    </p>
                </div>

                <div className="availability-actions">
                    <a
                        className="btn btn-primary"
                        href="mailto:joanna.mymob@gmail.com"
                    >
                        <Mail />
                        Get in touch
                    </a>

                    <a className="btn btn-ghost" href={cv} download>
                        <Download />
                        CV
                    </a>
                </div>
            </section>

            <section className="section" id="contact">
                <div className="section-head">
                    <div>
                        <div className="section-kicker">Contact</div>

                        <h2 className="section-title">
                            Let's connect
                        </h2>
                    </div>

                    <p>
                        Please use any of
                        the contact options below.
                    </p>
                </div>

                <div className="contact-grid">
                    <div className="contact-card">
                        <div className="contact-item">
                            <Mail />

                            <div>
                                <strong>Email</strong>
                                <span>joanna.mymob@gmail.com</span>
                            </div>
                        </div>

                        <div className="contact-item">
                            <Phone />

                            <div>
                                <strong>Phone</strong>
                                <span>07930 817 158</span>
                            </div>
                        </div>

                        <div className="contact-item">
                            <MapPin />

                            <div>
                                <strong>Location</strong>
                                <span>Rainham, Essex, United Kingdom</span>
                            </div>
                        </div>
                    </div>

                    <div className="contact-card">
                        <div className="contact-item">
                            <Linkedin />

                            <div>
                                <strong>LinkedIn</strong>

                                <span>
                                    <a
                                        href="https://www.linkedin.com/in/joanna-sorichta/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        linkedin.com/in/joanna-sorichta
                                    </a>
                                </span>
                            </div>
                        </div>

                        <div className="contact-item">
                            <FileDown />

                            <div>
                                <strong>Curriculum Vitae</strong>

                                <span>
                                    <a href={cv} download>
                                        Download current CV
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default function App() {
    return (
        <>
            <Nav />

            <Hero />

            <main className="main" id="about">
                <About />
                <Experience />
                <Skills />
                <Qualifications />
                <Contact />
            </main>

            <footer>
                <p>
                    <strong>Joanna Sorichta</strong>
                </p>

                <p>Bakery · Catering · Food Production</p>

                <p>Rainham, Essex, United Kingdom</p>
            </footer>
        </>
    );
}