import logoUrl from '../asset/logo.png';
import aboutVideoUrl from '../asset/3.mp4';
import './styles.css';

/* ── DATA ── */
const navItems = [
  ['about', 'About'],
  ['events', 'Events'],
  ['committee', 'Team'],
  ['schedule', 'Schedule'],
  ['downloads', 'Downloads'],
];

const iconSvg = {
  emblem: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l8 4v5c0 4.5-3 7.7-8 9-5-1.3-8-4.5-8-9V7l8-4Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M12 7v10" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M8.5 12h7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  building: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19h14M6 19V9l6-3 6 3v10M9 19v-4h6v4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M11 11h2M11 14h2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  bolt: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13 2L5 13h6l-1 9 9-12h-6l0-8Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>`,
  gem: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 5 8l7 13 7-13-7-5Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M5 8h14M9 8l3 13M15 8l-3 13" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>`,
  gamepad: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.5 17h9c2 0 3.5-1.6 3.5-3.5S18.5 10 16.5 10h-9C5.5 10 4 11.6 4 13.5S5.5 17 7.5 17Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M8 13.5h3M9.5 12v3" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M15.8 12.5h.01M17.8 14h.01" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>`,
  speakerOff: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 14V10h3.2L13 6v12l-4.8-4H5Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M16 9l3 3m0-3-3 3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  speakerOn: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 14V10h3.2L13 6v12l-4.8-4H5Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M16.5 9.5a3 3 0 0 1 0 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M18.5 7.5a6 6 0 0 1 0 9" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  code: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 7 4 12l5 5M15 7l5 5-5 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  quiz: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8.5 9a3.5 3.5 0 1 1 7 0c0 2-2 2.5-2.6 3.8-.2.4-.2.9-.2 1.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="17.5" r="1" fill="currentColor"/></svg>`,
  design: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 16.5V4h12.5L20 7.5V20H7.5L4 16.5Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M14.5 4v3.5H18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M8 15l2.2-2.2 1.7 1.7L14.8 11l1.2 1.2" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  controller: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 16h10c2 0 3-1.5 3-3.5S19 9 17 9H7C5 9 4 10.5 4 12.5S5 16 7 16Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M8 12.5h3M9.5 11v3" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M16 11.5h.01M18 13h.01" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>`,
  project: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 7h14v10H5z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M8 10h8M8 13h5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  pingpong: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm7-1 4 4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 8c1.5 0 2.5 1 2.5 2.2S15.5 12.4 14 12.4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
  video: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h12v10H4z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M16 10.5 20 8v8l-4-2.5Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>`,
  poster: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4h9l3 3v13H6z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M15 4v3h3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M8 11h8M8 14h6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
  file: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4h7l4 4v12H7z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M14 4v4h4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>`,
  calendar: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 6h14v13H5z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M8 4v4M16 4v4M5 9h14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  book: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4h10v16H7c-1.1 0-2 .9-2 2V6c0-1.1.9-2 2-2Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M7 4h10M7 20h10" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  rocket: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4c2.6 0 5 2.4 5 5-.1 5-4 8.8-9 11-1.8-1.8-3-4.2-3-7 0-5 3.3-9 7-9Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M10 14l-3 3M14 8l2-2" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
  sparkle: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4l1.5 4.5L18 10l-4.5 1.5L12 16l-1.5-4.5L6 10l4.5-1.5L12 4Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>`,
};

const iconMark = (name) => `<span class="icon-mark icon-mark--${name}">${iconSvg[name] || iconSvg.sparkle}</span>`;

const stats = [
  { value: 50, suffix: '+', label: 'Universities', icon: 'building' },
  { value: 10, suffix: '+', label: 'Events', icon: 'bolt' },
  { value: 0, suffix: '', label: 'Cash Prizes', icon: 'gem', isGem: true },
  { value: 1000, suffix: '+', label: 'Participants', icon: 'gamepad' },
];

const events = [
  { icon: 'code', title: 'Programming', incharge: 'Dr. M. Siraj Rathore', back: 'Fast-paced coding challenge for problem solvers who can ship clean logic under pressure.' },
  { icon: 'quiz', title: 'Quiz', incharge: 'Dr. Syed Saqib Raza', back: 'Battle of brains across IT, general knowledge, and quick-fire rounds.' },
  { icon: 'design', title: 'Poster Design', incharge: 'Dr. Sabeen Masood', back: 'Visual storytelling with bold composition, message clarity, and campaign-ready flair.' },
  { icon: 'controller', title: 'E-Gaming', incharge: 'Dr. Rizwan Bin Faiz', back: 'High-energy competitive gaming with reflex, strategy, and crowd-hype finals.' },
  { icon: 'project', title: 'Project Exhibition', incharge: 'Dr. Farah Hanif', back: 'Innovators present real-world solutions with demos, prototypes, and live judging.' },
  { icon: 'pingpong', title: 'Table Tennis', incharge: 'Mr. Ibrar Arshad', back: 'Speed, precision, and a sports arena finish for the ultimate campus showdown.' },
  { icon: 'video', title: 'Thematic Video', incharge: 'Dr. Syed Saqib Raza', back: 'Short-format storytelling with message, motion, and cinematic impact.' },
];

const committee = [
  ['Dr. Abdul Basit Siddiqui', 'Event Convener', '1'],
  ['Dr. Bilal Ahmad', 'Organizing Chair, ExcITe Cup', '2'],
  ['Dr. Farah Hanif', 'Project Exhibition Incharge', '3'],
  ['Dr. M. Siraj Rathore', 'Programming Competition Incharge', '4'],
  ['Dr. Syed Saqib Raza', 'Quiz Competition Incharge', '5'],
  ['Dr. Sabeen Masood', 'Poster Competition Incharge', '6'],
  ['Dr. Rizwan Bin Faiz', 'E-Gaming Competition Incharge', '7'],
  ['Mr. Ibrar Arshad', 'Table Tennis Competition Incharge', '8'],
  ['Dr. Syed Saqib Raza', 'Thematic Video Design Competition Incharge', '9'],
];

const downloads = [
  ['Event Poster', 'https://excitecup.cust.edu.pk/downloads/Poster-Excite-Cup2025.png', 'poster'],
  ['Event Brochure', 'https://excitecup.cust.edu.pk/downloads/Brochure-Website-2025.pdf', 'file'],
  ['Event Schedule', 'https://excitecup.cust.edu.pk/downloads/Event-Schedule-2025.pdf', 'calendar'],
  ['Rules Book', 'https://excitecup.cust.edu.pk/downloads/ExcITe-CupRuleBook2025.pdf', 'book'],
  ['Hackathon 2025', 'https://hackathon.cust.edu.pk/', 'rocket'],
];

const scheduleTextItems = [
  ['1', 'Registration / Inaugural Session', '08:00 am – 09:00 am', 'University entrance adjacent to barrier'],
  ['2', 'Tea', '09:10 am – 09:30 am', 'Auditorium A1/A2, Block A, Ground Floor'],
  ['3', 'On Spot Programming', '09:30 am – 10:00 am', 'Instruction Lab 1 & 2, Block M, 2nd Floor'],
  ['4', 'E-Gaming', '10:15 am – 01:15 pm', 'Corridor between Block B & D'],
  ['5', 'Quiz', '10:15 am – 01:15 pm', 'Aud M7, Aud M8, Block M, 3rd Floor'],
  ['6', 'Thematic Video Design', '10:15 am – 01:15 pm', 'Auditorium A2, Block A, Ground Floor'],
  ['7', 'Poster Design', '10:15 am – 01:15 pm', 'Instruction Lab 5 & 6, Block M, 3rd Floor'],
  ['8', 'Software Project Exhibition', '10:15 am – 01:15 pm', 'Instruction Lab 3 & 4, Block M, 2nd Floor'],
  ['9', 'Lunch Break', '01:15 pm – 02:15 pm', 'Main University Cafe'],
  ['10', 'Table Tennis', '10:15 am – 01:15 pm', 'GYM, Block G'],
  ['11', 'E-Gaming (Final Round)', '02:15 pm – 04:15 pm', 'Aud M7, Aud M8, Block M, 3rd Floor'],
  ['12', 'Quiz (Final Round)', '02:15 pm – 04:15 pm', 'Auditorium A2, Block A, Ground Floor'],
  ['13', 'Table Tennis (Final)', '02:15 pm – 04:15 pm', 'GYM, Block G'],
  ['14', 'Software Project Exhibition', '02:15 pm – 04:15 pm', 'Main Lab, Block A, 2nd Floor'],
  ['15', 'Thematic Video Design', '02:15 pm – 04:15 pm', 'Instruction Lab 5 & 6, Block M, 3rd Floor'],
  ['16', 'Poster Design', '02:15 pm – 04:15 pm', 'Instruction Lab 3 & 4, Block M, 3rd Floor'],
  ['17', 'Closing Ceremony', '04:45 pm – 05:45 pm', 'Auditorium A1/A2, Block A, Ground Floor'],
];

/* ── HTML GENERATION ── */
const app = document.querySelector('#app');

app.innerHTML = `
  <canvas id="bg"></canvas>

  <header class="topbar" id="topbar">
    <a class="brand" href="#home" aria-label="ExcITe Cup home">
      <img src="${logoUrl}" alt="ExcITe Cup logo" class="brand__logo" />
      <span>ExcITe Cup</span>
    </a>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav">
      <span></span><span></span><span></span>
    </button>
    <nav class="nav nav--desktop" aria-label="Primary">
      ${navItems.map(([id, label]) => `<a href="#${id}" data-nav="${id}">${label}</a>`).join('')}
    </nav>
    <nav class="nav nav--mobile" id="mobile-nav" aria-label="Mobile primary">
      ${navItems.map(([id, label]) => `<a href="#${id}" data-nav="${id}">${label}</a>`).join('')}
    </nav>
  </header>

  <main>
    <!-- HERO -->
    <section class="hero" id="home">
      <div class="badge">${iconMark('emblem')} All Pakistan Competition</div>
      <h1 class="hero__title">ExcITe<br>Cup 2026</h1>
      <p class="tagline">Excel in IT. Dominate the Game.</p>

      <div class="countdown" data-aos="fade-up">
        <div class="cd-block"><span class="cd-num" data-count="days">00</span><span class="cd-label">Days</span></div>
        <div class="cd-block"><span class="cd-num" data-count="hours">00</span><span class="cd-label">Hours</span></div>
        <div class="cd-block"><span class="cd-num" data-count="minutes">00</span><span class="cd-label">Mins</span></div>
        <div class="cd-block"><span class="cd-num" data-count="seconds">00</span><span class="cd-label">Secs</span></div>
      </div>

      <div class="cta-buttons" data-aos="fade-up">
        <a class="btn-primary" href="https://excitecup.cust.edu.pk/downloads/Brochure-Website-2025.pdf" target="_blank">${iconMark('file')} Download Brochure</a>
        <a class="btn-outline" href="https://excitecup.cust.edu.pk/downloads/Event-Schedule-2025.pdf" target="_blank">${iconMark('calendar')} View Schedule</a>
        <button class="btn-outline btn-outline--register" type="button" data-register-open>${iconMark('sparkle')} Register Now</button>
      </div>

      <div class="scroll-hint">▼ SCROLL DOWN ▼</div>
    </section>

    <!-- ABOUT -->
    <section id="about" class="fade-in">
      <h2 class="section-title" data-typewriter="About ExcITe Cup">About ExcITe Cup</h2>
      <div class="about-grid">
        <div class="about-text">
          <p>Capital University of Science & Technology, Islamabad, Pakistan is organizing the <strong>All Pakistan competition: ExcITe Cup 2026</strong> on <strong>June 13, 2026</strong> — attracting brilliant programmers, young innovators, poster designers, athletes, and e-gamers from educational institutes all over Pakistan.</p>
          <p>The term ExcITe Cup stands for <strong>"Excel in IT"</strong>. The event attracts students from all over Pakistan and challenges participants to showcase their ideas, compete with peers, and sharpen their skills to excel in the field of IT.</p>
          <p>Every year, large numbers of universities participate in ExcITe Cup. Winners and participants are awarded with <strong>cash prizes, shields, and certificates</strong>. The event is covered by TV channels, newspapers, and radio stations.</p>
          <div class="info-grid">
            <button class="info-card info-card--map" type="button" data-map-open>
              <span>Where</span>
              <strong>Capital University of Science & Technology, Islamabad</strong>
              <small>Click to open map</small>
            </button>
            <div class="info-card">
              <span>When</span>
              <strong>June 13, 2026</strong>
            </div>
          </div>
        </div>
        <div class="video-box" data-aos="zoom-in">
          <div class="video-placeholder">
            <video id="highlightsVideo" autoplay muted loop playsinline poster="${logoUrl}" style="width:100%;height:100%;object-fit:cover;border-radius:14px;">
              <source src="${aboutVideoUrl}" type="video/mp4" />
            </video>
                        <button class="speaker-toggle" id="speakerToggle" aria-label="Toggle sound" title="Toggle sound">
              <span class="speaker-icon">${iconMark('sparkle')}</span>
            </button>
	          </div>
          </div>
        </div>
      </div>
    </section>

    <div class="map-modal" id="mapModal" aria-hidden="true" hidden>
      <div class="map-modal__backdrop" data-map-close></div>
      <div class="map-modal__panel" role="dialog" aria-modal="true" aria-labelledby="mapTitle">
        <div class="map-modal__header">
          <div>
            <p class="section__eyebrow">Location</p>
            <h3 id="mapTitle">Capital University of Science &amp; Technology</h3>
          </div>
          <button class="map-modal__close" type="button" data-map-close aria-label="Close map">×</button>
        </div>
        <iframe
          class="map-modal__frame"
          title="Capital University of Science & Technology map"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=Capital%20University%20of%20Science%20and%20Technology%20Islamabad&output=embed"
        ></iframe>
        <div class="map-modal__footer">
          <a href="https://www.google.com/maps/search/Capital+University+of+Science+and+Technology+Islamabad" target="_blank" rel="noreferrer">Open in Maps</a>
        </div>
      </div>
    </div>

    <div class="register-modal" id="registerModal" aria-hidden="true" hidden>
      <div class="register-modal__backdrop" data-register-close></div>
      <div class="register-modal__panel" role="dialog" aria-modal="true" aria-labelledby="registerTitle">
        <div class="register-modal__header">
          <div>
            <p class="section__eyebrow">Register now</p>
            <h3 id="registerTitle">ExcITe Cup Registration</h3>
          </div>
          <button class="register-modal__close" type="button" data-register-close aria-label="Close registration">×</button>
        </div>
        <form class="register-modal__form" id="registerForm">
          <label>
            <span>Student Name</span>
            <input type="text" name="studentName" autocomplete="name" required />
          </label>
          <label>
            <span>Registration Number</span>
            <input type="text" name="registrationNumber" required />
          </label>
          <label>
            <span>Game / Event</span>
            <select name="eventChoice" required>
              <option value="" selected disabled>Select an event</option>
              ${events.map((event) => `<option value="${event.title}">${event.title}</option>`).join('')}
            </select>
          </label>
          <label>
            <span>Contact Number</span>
            <input type="tel" name="contactNumber" autocomplete="tel" required />
          </label>
          <label>
            <span>Email</span>
            <input type="email" name="email" autocomplete="email" required />
          </label>
          <p class="register-modal__fee">Registration Fee: Rs. 1,500</p>
          <button class="btn-primary register-modal__submit" type="submit">Submit Registration</button>
        </form>
      </div>
    </div>

    <!-- ABOUT US -->
    <section id="about-us" class="about-us">
      <h2 class="section-title fade-in" data-typewriter="About Capital University">About Capital University of Science & Technology</h2>
      <div class="about-us__content fade-in">
        <p>Capital University of Science & Technology, Islamabad is established by a federal charter and vested with the authority to award degrees at various levels in all disciplines. As per CUST Act, it is a comprehensive Institution which can have faculties including, but not limited to, Engineering, Medicines, Natural Sciences, Management, Computing, Humanities and Arts.</p>
        <p>Currently, CUST has three Faculties: Faculty of Engineering; Faculty of Computing and Faculty of Management and Social Sciences.</p>
        <p>To ensure the acceptability of our graduates in local as well as in foreign institutions, the University has adopted a widely accepted semester system and offers BS, MS and PhD degrees in compliance to the international norms and standards.</p>
        <p>Our academic programs are accredited by the respective accreditation bodies of the country. Research is another area of prime importance at CUST. Research and Development are the crucial tools which countries use to transform their developing economies into developed nations.</p>
        <p>The advanced degree programs in Banking and Finance, Computer Science and Management Information Systems prepare young men and women to meet the challenges of the new millennium.</p>
        <p>This exciting platform will provide an opportunity to brightest minds to prove their skills in technology competitions. It will also enhance their skills in learning and competing in friendly environment.</p>
      </div>
    </section>

    <!-- STATS -->
    <section class="stats" id="stats">
      <h2 class="section-title fade-in" data-typewriter="Stats That Hit Hard">Stats That Hit Hard</h2>
      <div class="stats-grid fade-in">
        ${stats.map(stat => `
          <div class="stat-card" data-aos="fade-up">
            ${iconMark(stat.icon)}
            <span class="stat-num" ${stat.isGem ? '' : `data-target="${stat.value}" data-suffix="${stat.suffix}"`}>${stat.isGem ? iconMark('gem') : '0'}</span>
            <span class="stat-label">${stat.label}</span>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- EVENTS -->
    <section id="events">
      <h2 class="section-title fade-in" data-typewriter="Competition Events">Competition Events</h2>
      <div class="events-grid">
        ${events.map((ev, i) => `
          <div class="event-card" data-aos="zoom-in" data-aos-delay="${i * 70}">
            <div class="flip-card-inner">
              <div class="flip-card-front" style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:2rem;backface-visibility:hidden;">
                ${iconMark(ev.icon)}
                <div class="event-name">${ev.title}</div>
                <div class="event-incharge">${ev.incharge}</div>
                <small style="margin-top:0.5rem;color:#666;font-size:0.75rem;text-transform:uppercase;letter-spacing:1px;">Hover / tap to flip</small>
              </div>
              <div class="flip-card-back" style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:1.5rem;backface-visibility:hidden;">
                <p style="font-size:0.9rem;line-height:1.6;color:#ccc;margin:0;">${ev.back}</p>
                <small style="color:#ff6b00;margin-top:0.8rem;font-size:0.8rem;">Incharge: ${ev.incharge}</small>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- COMMITTEE -->
    <section id="committee">
      <h2 class="section-title fade-in" data-typewriter="Coordination Committee">Coordination Committee</h2>
      <div class="committee-grid">
        ${committee.map(([name, role, badge], i) => `
          <div class="comm-card fade-in" data-aos="fade-up" data-aos-delay="${i * 70}">
            <span class="comm-badge">${badge}</span>
            <div class="comm-name">${name}</div>
            <div class="comm-role">${role}</div>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- DATES -->
    <section id="dates">
      <h2 class="section-title fade-in" data-typewriter="Important Dates">Important Dates</h2>
      <div class="timeline fade-in">
        <div class="timeline-dot" data-aos="fade-right">
          <div class="tl-date">05 JUNE</div>
          <div class="tl-label">Submission Deadline</div>
        </div>
        <div class="timeline-line"></div>
        <div class="timeline-dot" data-aos="fade-left" style="border-color:rgba(255,45,120,0.6);box-shadow:0 0 30px rgba(255,45,120,0.2);">
          <div class="tl-date" style="color:#ff2d78;">13 JUNE</div>
          <div class="tl-label">${iconMark('sparkle')} Event Day!</div>
        </div>
      </div>
    </section>

    <!-- SCHEDULE: Floating Glowing Circles -->
    <section id="schedule" class="schedule">
      <h2 class="section-title fade-in" data-typewriter="Program Details (June 13, 2026)">11th ExcITe Cup — Program Details (June 13, 2026)</h2>
      <div class="schedule-circles" id="scheduleCircles"></div>
      <div class="schedule-lunch-note fade-in">
        <p>Lunch for participants will be served in the Main University Cafe.</p>
        <p>Lunch for judges/faculty will be served at River Side Cafe at 1:30 pm.</p>
        <p style="margin-top:0.5rem;color:var(--yellow);">Following events will continue after lunch break.</p>
      </div>
    </section>

    <!-- DOWNLOADS -->
    <section id="downloads">
      <h2 class="section-title fade-in" data-typewriter="Download Files">Download Files</h2>
      <div class="dl-grid fade-in">
        ${downloads.map(([label, href, icon]) => `
          <a class="dl-btn" href="${href}" target="_blank">${iconMark(icon)} ${label}</a>
        `).join('')}
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="footer__inner">
      <img src="${logoUrl}" alt="CUST logo" class="footer__logo" />
      <div>
        <strong>ExcITe Cup 2026</strong>
        <p>Capital University of Science & Technology, Islamabad</p>
        <p style="margin-top:0.25rem;">Copyright 2026 © <span>ExcITe Cup</span>. All rights reserved.</p>
      </div>
    </div>
  </footer>
`;

/* ── CANVAS FLOATING PARTICLES (background) ── */
const canvas = document.getElementById('bg');
const ctx = canvas.getContext('2d');
let W, H, particles = [];

function resizeBg() {
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
}
resizeBg();
window.addEventListener('resize', resizeBg);

const colors = ['#FF6B00', '#FF2D78', '#FFE600', '#ffffff', '#00E5FF', '#A855F7', '#10B981', '#FF4D6D', '#38BDF8', '#FF9F1C'];

for (let i = 0; i < 120; i++) {
  particles.push({
    x: Math.random() * 1920,
    y: Math.random() * 1080,
    r: Math.random() * 3 + 0.5,
    vx: (Math.random() - 0.5) * 0.5,
    vy: (Math.random() - 0.5) * 0.5,
    color: colors[Math.floor(Math.random() * colors.length)],
    alpha: Math.random() * 0.6 + 0.15,
    glow: Math.random() * 15 + 5,
  });
}

function drawParticles() {
  ctx.clearRect(0, 0, W, H);
  particles.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < -10) p.x = W + 10;
    if (p.x > W + 10) p.x = -10;
    if (p.y < -10) p.y = H + 10;
    if (p.y > H + 10) p.y = -10;

    ctx.save();
    ctx.globalAlpha = p.alpha;
    ctx.shadowColor = p.color;
    ctx.shadowBlur = p.glow;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();
    ctx.restore();
  });
  requestAnimationFrame(drawParticles);
}
drawParticles();

/* ── FLOATING GLOWING CIRCLES FOR SCHEDULE ── */
(function initFloatingCircles() {
  const container = document.getElementById('scheduleCircles');
  if (!container) return;

  const circleColors = ['#FF6B00', '#FF2D78', '#FFE600', '#00E5FF', '#A855F7', '#10B981', '#FF4D6D', '#38BDF8', '#FF9F1C', '#FF6B00'];
  const circles = [];

  scheduleTextItems.forEach((item, i) => {
    const circle = document.createElement('div');
    circle.className = 'schedule-circle';
    const color = circleColors[i % circleColors.length];
    const size = Math.round(150 + Math.random() * 60);
    circle.dataset.size = size;

    circle.style.cssText = `
      --circle-color: ${color};
      width: ${size}px;
      height: ${size}px;
      position: absolute;
      border-radius: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 1rem;
      text-align: center;
      background: radial-gradient(circle at 40% 40%, rgba(255,255,255,0.06) 0%, rgba(0,0,0,0.0) 70%),
                  rgba(13, 13, 18, 0.75);
      border: 1.5px solid ${color}80;
      box-shadow:
        0 0 20px ${color}40,
        0 0 60px ${color}20,
        inset 0 0 30px ${color}15;
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      animation: floatCircle ${6 + Math.random() * 8}s ease-in-out infinite;
      animation-delay: ${-Math.random() * 10}s;
      cursor: default;
      transition: transform 0.4s ease, box-shadow 0.4s ease;
      z-index: 1;
    `;

    circle.innerHTML = `
      <div style="font-family:'Bebas Neue',sans-serif;font-size:1.2rem;color:${color};letter-spacing:2px;text-shadow:0 0 12px ${color};line-height:1.2;">#${item[0]}</div>
      <div style="font-family:'Bebas Neue',sans-serif;font-size:0.85rem;color:#fff;letter-spacing:1px;margin:0.3rem 0;line-height:1.2;">${item[1]}</div>
      <div style="font-size:0.7rem;color:#aaa;line-height:1.3;">${item[2]}</div>
      <div style="font-size:0.6rem;color:#FFE600;margin-top:0.2rem;line-height:1.3;">${item[3]}</div>
    `;

    circle.addEventListener('mouseenter', () => {
      circle.style.transform = 'scale(1.15)';
      circle.style.boxShadow = `0 0 40px ${color}60, 0 0 80px ${color}30, inset 0 0 50px ${color}25`;
      circle.style.zIndex = '10';
    });

    circle.addEventListener('mouseleave', () => {
      circle.style.transform = '';
      circle.style.boxShadow = `0 0 20px ${color}40, 0 0 60px ${color}20, inset 0 0 30px ${color}15`;
      circle.style.zIndex = '1';
    });

    container.appendChild(circle);
    circles.push(circle);
  });

  function positionCircles() {
    const rect = container.getBoundingClientRect();
    const w = rect.width || 1200;
    const h = rect.height || 800;

    circles.forEach((circle, i) => {
      const size = parseInt(circle.dataset.size) || 180;
      const angle = (i / circles.length) * Math.PI * 2;
      const radiusX = Math.max(0, (w - size) / 2 - 20);
      const radiusY = Math.max(0, (h - size) / 2 - 20);
      const cx = w / 2;
      const cy = h / 2;
      const offsetX = cx + Math.cos(angle) * radiusX - size / 2;
      const offsetY = cy + Math.sin(angle) * radiusY - size / 2;

      circle.style.left = `${Math.round(Math.max(10, Math.min(w - size - 10, offsetX)))}px`;
      circle.style.top = `${Math.round(Math.max(10, Math.min(h - size - 10, offsetY)))}px`;
    });
  }

  // Initial positioning
  setTimeout(positionCircles, 100);

  const scheduleSection = document.getElementById('schedule');
  if (scheduleSection) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(positionCircles, 100);
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(scheduleSection);
  }

  window.addEventListener('resize', positionCircles);
})();

/* ── COUNTDOWN (June 13, 2026) ── */
const countdownTarget = new Date('2026-06-13T09:00:00+05:00');
const countdownEls = {
  days: document.querySelector('[data-count="days"]'),
  hours: document.querySelector('[data-count="hours"]'),
  minutes: document.querySelector('[data-count="minutes"]'),
  seconds: document.querySelector('[data-count="seconds"]'),
};

function pad(v) { return String(v).padStart(2, '0'); }

function updateCountdown() {
  const now = new Date();
  const diff = countdownTarget - now;
  if (diff <= 0) {
    Object.values(countdownEls).forEach(el => el.textContent = '00');
    if (countdownEls.seconds) countdownEls.seconds.innerHTML = iconMark('sparkle');
    return;
  }
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  if (countdownEls.days) countdownEls.days.textContent = pad(d);
  if (countdownEls.hours) countdownEls.hours.textContent = pad(h);
  if (countdownEls.minutes) countdownEls.minutes.textContent = pad(m);
  if (countdownEls.seconds) countdownEls.seconds.textContent = pad(s);
}
updateCountdown();
setInterval(updateCountdown, 1000);

/* ── AOS INIT ── */
if (window.AOS) {
  window.AOS.init({
    duration: 900,
    easing: 'ease-out-cubic',
    once: true,
    offset: 120,
  });
}

/* ── SPEAKER TOGGLE FOR VIDEO ── */
(function initSpeakerToggle() {
  const video = document.getElementById('highlightsVideo');
  const button = document.getElementById('speakerToggle');
  if (!video || !button) return;

  button.addEventListener('click', () => {
    video.muted = !video.muted;
    const icon = button.querySelector('.speaker-icon');
    if (video.muted) {
      icon.innerHTML = iconMark('speakerOff');
      button.title = 'Unmute sound';
      button.setAttribute('aria-label', 'Unmute sound');
    } else {
      icon.innerHTML = iconMark('speakerOn');
      button.title = 'Mute sound';
      button.setAttribute('aria-label', 'Mute sound');
    }
  });
})();

/* ── MAP MODAL ── */
(function initMapModal() {
  const openButton = document.querySelector('[data-map-open]');
  const modal = document.getElementById('mapModal');
  if (!openButton || !modal) return;

  const closeButtons = modal.querySelectorAll('[data-map-close]');

  function openMap() {
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    modal.hidden = false;
    document.body.classList.add('map-open');
  }

  function closeMap() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    modal.hidden = true;
    document.body.classList.remove('map-open');
  }

  openButton.addEventListener('click', openMap);
  closeButtons.forEach((btn) => btn.addEventListener('click', closeMap));

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('is-open')) closeMap();
  });
})();

/* ── REGISTRATION MODAL ── */
(function initRegisterModal() {
  const openButton = document.querySelector('[data-register-open]');
  const modal = document.getElementById('registerModal');
  const form = document.getElementById('registerForm');
  if (!openButton || !modal || !form) return;

  const closeButtons = modal.querySelectorAll('[data-register-close]');

  function openModal() {
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    modal.hidden = false;
    document.body.classList.add('register-open');
  }

  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    modal.hidden = true;
    document.body.classList.remove('register-open');
  }

  openButton.addEventListener('click', openModal);
  closeButtons.forEach((btn) => btn.addEventListener('click', closeModal));

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    closeModal();
    window.alert('Registration form captured. Connect this form to your backend or Google Form next.');
  });

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
  });
})();

/* ── SCROLL FADE-IN ── */
const fadeElements = document.querySelectorAll('.fade-in');
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      const tw = e.target.querySelector('[data-typewriter]');
      if (tw) typewriterReveal(tw);
    }
  });
}, { threshold: 0.1 });
fadeElements.forEach(el => fadeObserver.observe(el));

/* ── TYPEWRITER EFFECT ── */
function typewriterReveal(el) {
  if (el.dataset.typed === 'true') return;
  el.dataset.typed = 'true';
  const text = el.dataset.typewriter || '';
  el.textContent = '';
  el.classList.add('typewriter');
  let i = 0;
  function type() {
    if (i <= text.length) {
      el.textContent = text.slice(0, i);
      i++;
      setTimeout(type, 50);
    } else {
      el.classList.remove('typewriter');
    }
  }
  type();
}

/* ── COUNTER ANIMATION ── */
function animateCounter(el, target, suffix) {
  let current = 0;
  const step = Math.ceil(target / 60);
  const interval = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = current + (suffix || '');
    if (current >= target) clearInterval(interval);
  }, 30);
}

const counterObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const el = e.target;
      const target = parseInt(el.dataset.target);
      const suffix = el.dataset.suffix || '';
      if (target) animateCounter(el, target, suffix);
      counterObs.unobserve(el);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('[data-target]').forEach(el => counterObs.observe(el));

/* ── 3D TILT ON CARDS ── */
document.querySelectorAll('.event-card, .stat-card, .comm-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `perspective(600px) rotateY(${x / 15}deg) rotateX(${-y / 15}deg) translateY(-8px)`;
  });
  card.addEventListener('mouseleave', () => { card.style.transform = ''; });
});

/* ── NAV ── */
const topbar = document.getElementById('topbar');
const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.nav--mobile');
const navLinks = document.querySelectorAll('[data-nav]');
const sections = Array.from(document.querySelectorAll('main section'));

window.addEventListener('scroll', () => {
  topbar.classList.toggle('topbar--scrolled', window.scrollY > 20);
});

menuToggle.addEventListener('click', () => {
  const open = mobileNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

const activeSectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      navLinks.forEach(link => link.classList.toggle('active', link.dataset.nav === id));
    });
  },
  { threshold: 0.45, rootMargin: '-20% 0px -45% 0px' },
);
sections.forEach(section => activeSectionObserver.observe(section));

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (event) => {
    const targetId = anchor.getAttribute('href');
    const target = targetId ? document.querySelector(targetId) : null;
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

document.querySelectorAll('.flip-card-front, .flip-card-back').forEach(el => {
  el.style.backfaceVisibility = 'hidden';
});
document.querySelectorAll('.flip-card-back').forEach(el => {
  el.style.transform = 'rotateY(180deg)';
});
