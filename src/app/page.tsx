'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaArrowRight,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaPlaneArrival,
  FaPlaneDeparture,
  FaLocationArrow,
} from 'react-icons/fa';
import StructuredData from './components/StructuredData';
import styles from './page.module.css';
import { Bit, Chip, Meter, Ticket } from './reactbits';

interface LandingMark {
  code: string;
  city: string;
  title: string;
  description: string;
  tags: string[];
  runway: string;
  link: string;
}

interface SkillPack {
  title: string;
  items: { name: string; level: number }[];
}

const landingMarks: LandingMark[] = [
  {
    code: 'BRQ',
    city: 'Brno',
    title: 'JAKOBY',
    description:
      'Moderní prezentace restaurace & baru na Jakubáku. Kompletní vizuální identita, která staví atmosféru místa do popředí.',
    tags: ['React', 'Next.js', 'CSS', 'JavaScript', 'Restaurant design'],
    runway: 'Noční let · gastronomie',
    link: 'https://restauracejakoby.cz',
  },
  {
    code: 'PRG',
    city: 'Praha — Holešovice',
    title: 'LA DENTA',
    description:
      'Komplexní web pro rodinnou zubní kliniku. Čistý a důvěryhodný design, který drží fokus na péči a rezervaci termínů.',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'UX/UI'],
    runway: 'Denní let · zdravotnictví',
    link: 'https://www.ladenta.cz',
  },
  {
    code: 'FIN',
    city: 'Online',
    title: 'Kateřina Bendová',
    description:
      'Portfolio finanční poradkyně. Elegantní storytelling, který představuje služby a podporuje důvěru nových klientů.',
    tags: ['React', 'Tailwind', 'Framer Motion', 'Finanční služby'],
    runway: 'Večerní let · finance',
    link: 'https://katerinabendova.cz',
  },
];

const skillPacks: SkillPack[] = [
  {
    title: 'Kabina · Frontend',
    items: [
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'JavaScript', level: 85 },
      { name: 'CSS / HTML', level: 90 },
    ],
  },
  {
    title: 'Údržba · Backend',
    items: [
      { name: 'Node.js', level: 75 },
      { name: '.NET', level: 70 },
      { name: 'MongoDB', level: 70 },
      { name: 'SQL', level: 75 },
    ],
  },
  {
    title: 'Hangár · Nástroje',
    items: [
      { name: 'Git', level: 85 },
      { name: 'VS Code', level: 90 },
      { name: 'Figma', level: 70 },
      { name: 'Vercel', level: 80 },
    ],
  },
];

const quickNotes = [
  'Student IT na SPŠSE Liberec · zaměření na frontend',
  'Navrhuji UI jako boarding pass: jasná hierarchie, žádný chaos',
  'Rád ladím detaily – od animací po mikrotext',
];

const stats = [
  { label: 'Letové hodiny', value: '3+ roky', hint: 'React & UI' },
  { label: 'Posádka', value: 'Solo i tým', hint: 'spolupráce vítaná' },
  { label: 'Zóna', value: 'Liberec → remote', hint: 'CZ/EN' },
];

const contactInfo = {
  email: 'davidudic06fx@gmail.com',
  phone: '+420 727 828 136',
  ico: 'IČ: 23181176',
};

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMove = (e: PointerEvent) => {
      setVisible(true);
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('pointermove', handleMove);
    return () => window.removeEventListener('pointermove', handleMove);
  }, []);

  return (
    <div
      className={`${styles.cursor} ${visible ? styles.cursorVisible : ''}`}
      style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0)` }}
    >
      <span />
    </div>
  );
};

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState({
    isSubmitting: false,
    message: '',
    isError: false,
  });

  useEffect(() => setMounted(true), []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ isSubmitting: true, message: '', isError: false });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || `Status: ${response.status}`);
      }

      setFormData({ name: '', email: '', phone: '', message: '' });
      setStatus({
        isSubmitting: false,
        message: 'Zpráva byla odeslána. Řídící věž potvrzuje příjem.',
        isError: false,
      });
    } catch (error) {
      console.error(error);
      setStatus({
        isSubmitting: false,
        message: 'Při odeslání došlo k chybě. Zkuste to prosím znovu.',
        isError: true,
      });
    }
  };

  return (
    <>
      <StructuredData />
      {mounted && <CustomCursor />}
      <div className={styles.page}>
        <div className={styles.background} aria-hidden />
        <div className={styles.noise} aria-hidden />

        <header className={styles.topBar}>
          <div className={styles.brand}>UD Flight Lab</div>
          <nav>
            <a href="#projects">Trasa</a>
            <a href="#about">Manifest</a>
            <a href="#skills">Výbava</a>
            <a href="#contact">Řídící věž</a>
          </nav>
        </header>

        <main className={styles.main}>
          <section className={styles.hero} id="home">
            <div className={styles.heroCopy}>
              <p className={styles.heroKicker}>Flight UD-IC · Frontend vývojář</p>
              <h1>
                Boarding pass pro digitální projekty. Přistanu s čistým kódem i originálním UI.
              </h1>
              <p className={styles.heroText}>
                Jsem David Udič, student IT ze SPŠSE Liberec. Stavím weby jako letenku – jasné
                informace, žádný šum, jemné animace a důraz na zážitek.
              </p>
              <div className={styles.actions}>
                <a className={styles.primary} href="#projects">
                  <FaPlaneDeparture />
                  Projekty jako přistání
                </a>
                <a className={styles.secondary} href="#contact">
                  <FaLocationArrow />
                  Spojit s věží
                </a>
              </div>

              <div className={styles.stats}>
                {stats.map((item) => (
                  <div key={item.label} className={styles.stat}>
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                    <small>{item.hint}</small>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              className={styles.pass}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Ticket tone="secondary">
                <div className={styles.passTop}>
                  <Chip accent>Boarding now</Chip>
                  <div className={styles.passRoute}>
                    <div>
                      <span className={styles.label}>Odlet</span>
                      <div className={styles.airport}>
                        <FaPlaneDeparture />
                        <div>
                          <strong>LBC</strong>
                          <small>Liberec</small>
                        </div>
                      </div>
                    </div>
                    <div className={styles.routeLine}>
                      <span />
                      <FaPlaneArrival />
                      <span />
                    </div>
                    <div>
                      <span className={styles.label}>Přílet</span>
                      <div className={styles.airport}>
                        <FaPlaneArrival />
                        <div>
                          <strong>WEB</strong>
                          <small>Digitální runway</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.passGrid}>
                  <Bit label="Let" value="UD 2024" />
                  <Bit label="Gate" value="Next.js 15" />
                  <Bit label="Seat" value="React 19" />
                  <Bit label="Cargo" value="UX / UI" />
                </div>

                <div className={styles.passFooter}>
                  <div>
                    <span className={styles.label}>Kapitán</span>
                    <strong>David Udič</strong>
                  </div>
                  <Chip>Vždy připraven na další let</Chip>
                </div>
              </Ticket>
            </motion.div>
          </section>

          <section className={styles.landings} id="projects">
            <div className={styles.sectionHead}>
              <p className={styles.sectionKicker}>Přistání</p>
              <h2>Projekty jako landing marks</h2>
              <p className={styles.sectionText}>
                Každý web jako nové letiště. Držím kurz na rychlé načítání, srozumitelnou mapu obsahu
                a jemné mikrointerakce.
              </p>
            </div>

            <div className={styles.landingGrid}>
              {landingMarks.map((landing) => (
                <Ticket key={landing.title} className={styles.landingCard}>
                  <div className={styles.landingMeta}>
                    <div className={styles.landingCode}>
                      <span>{landing.code}</span>
                      <small>{landing.city}</small>
                    </div>
                    <Chip accent>{landing.runway}</Chip>
                  </div>

                    <div className={styles.landingTitleRow}>
                      <h3>{landing.title}</h3>
                      <a href={landing.link} target="_blank" rel="noreferrer" className={styles.visit}>
                        Navštívit <FaArrowRight />
                      </a>
                    </div>

                  <p className={styles.landingDescription}>{landing.description}</p>

                  <div className={styles.tags}>
                    {landing.tags.map((tag) => (
                      <Chip key={tag}>{tag}</Chip>
                    ))}
                  </div>
                </Ticket>
              ))}
            </div>
          </section>

          <section className={styles.manifest} id="about">
            <div className={styles.sectionHead}>
              <p className={styles.sectionKicker}>Manifest</p>
              <h2>Kdo sedí v kokpitu</h2>
              <p className={styles.sectionText}>
                Student IT se zaměřením na frontend. Baví mě převádět nápady do funkčních a
                srozumitelných rozhraní.
              </p>
            </div>

            <div className={styles.manifestGrid}>
              <Ticket className={styles.aboutCard}>
                <h3>O mně</h3>
                <p>
                  Jsem student oboru Informační technologie na SPŠSE Liberec. Zaměřuji se na
                  frontend, miluji React a Next.js a rád navrhuji UI, které se používá stejně dobře,
                  jako vypadá.
                </p>
                <div className={styles.notes}>
                  {quickNotes.map((note) => (
                    <Chip key={note}>{note}</Chip>
                  ))}
                </div>
              </Ticket>

              <Ticket className={styles.aboutCard}>
                <h3>Letový plán</h3>
                <ul className={styles.list}>
                  <li>Designuji komponenty a systémy, ne jen stránky.</li>
                  <li>Od konceptu po nasazení na Vercel – rychle a bez turbulencí.</li>
                  <li>Responzivita, přístupnost a SEO beru jako standard.</li>
                </ul>
                <div className={styles.badges}>
                  <Chip accent>React / Next.js</Chip>
                  <Chip>Framer Motion</Chip>
                  <Chip>Tailwind & CSS</Chip>
                </div>
              </Ticket>
            </div>
          </section>

          <section className={styles.skills} id="skills">
            <div className={styles.sectionHead}>
              <p className={styles.sectionKicker}>Výbava</p>
              <h2>Technologie na palubě</h2>
              <p className={styles.sectionText}>
                Kombinuji moderní stack, aby byl každý projekt stabilní, rychlý a připraven na
                náročný let.
              </p>
            </div>

            <div className={styles.skillGrid}>
              {skillPacks.map((pack) => (
                <Ticket key={pack.title} tone="secondary" className={styles.skillCard}>
                  <div className={styles.skillHeader}>{pack.title}</div>
                  <div className={styles.skillMeters}>
                    {pack.items.map((skill) => (
                      <Meter key={skill.name} label={skill.name} value={skill.level} />
                    ))}
                  </div>
                </Ticket>
              ))}
            </div>
          </section>

          <section className={styles.contact} id="contact">
            <div className={styles.sectionHead}>
              <p className={styles.sectionKicker}>Řídící věž</p>
              <h2>Spojit se</h2>
              <p className={styles.sectionText}>
                Máte projekt, který potřebuje bezpečné přistání? Dejme dohromady letový plán.
              </p>
            </div>

            <div className={styles.contactGrid}>
              <Ticket className={styles.contactCard}>
                <div className={styles.contactInfo}>
                  <Chip accent>Otevřen pro spolupráce</Chip>
                  <h3>Rychlé spojení</h3>
                  <a href={`mailto:${contactInfo.email}`}>
                    <FaEnvelope />
                    {contactInfo.email}
                  </a>
                  <a href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}>
                    <FaPhone />
                    {contactInfo.phone}
                  </a>
                  <span className={styles.muted}>{contactInfo.ico}</span>

                  <div className={styles.socials}>
                    <a href="https://github.com/davidudic" target="_blank" rel="noreferrer">
                      <FaGithub />
                      GitHub
                    </a>
                    <a href="https://linkedin.com/in/david-udic" target="_blank" rel="noreferrer">
                      <FaLinkedin />
                      LinkedIn
                    </a>
                  </div>
                </div>
              </Ticket>

              <Ticket tone="secondary" className={styles.contactCard}>
                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.formRow}>
                    <label htmlFor="name">Jméno</label>
                    <input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className={styles.formRow}>
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className={styles.formRow}>
                    <label htmlFor="phone">Telefon</label>
                    <input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+420 xxx xxx xxx"
                    />
                  </div>
                  <div className={styles.formRow}>
                    <label htmlFor="message">Zpráva</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>
                  <button type="submit" disabled={status.isSubmitting}>
                    {status.isSubmitting ? 'Odesílám...' : 'Odeslat zprávu'}
                  </button>

                  {status.message && (
                    <div className={`${styles.formStatus} ${status.isError ? styles.error : styles.success}`}>
                      {status.message}
                    </div>
                  )}
                </form>
              </Ticket>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
