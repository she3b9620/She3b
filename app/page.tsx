'use client'

import { useState } from 'react'
import { ArrowUpLeft, CircleDot, ExternalLink, Link, Moon, Play, Sparkles, Sun } from 'lucide-react'

const channels = [
  { title: 'SHE3B', type: 'القناة الرئيسية', desc: 'محتوى متنوع من عالم شِعب', mark: 'S', href: 'https://www.youtube.com/@SHE3B' },
  { title: 'المِش ناقد', type: 'قناة السينما', desc: 'مراجعات ومناقشات وأخبار الأفلام', mark: 'م', href: 'https://www.youtube.com' },
  { title: 'SHE3B STATION', type: 'قناة الجيمنج', desc: 'تختيم، رعب، فيفا وبيس', mark: 'G', href: 'https://www.youtube.com' },
  { title: 'CAPTAIN SHE3B', type: 'قناة الرياضة', desc: 'كرة القدم وكل ما يخص الرياضة', mark: 'C', href: 'https://www.youtube.com' },
]

const work = [
  { no: '01', title: 'سينما ودراما', text: 'مراجعات أفلام كلاسيكية ورعب وأكشن وسوبر هيروز وفانتازيا ودراما.', color: 'lime' },
  { no: '02', title: 'ألعاب', text: 'تختيم ألعاب، تجارب رعب، وفيفا وبيس من منظور شِعب.', color: 'orange' },
  { no: '03', title: 'إنتاج مرئي', text: 'تصوير ومونتاج وتمثيل وإخراج — أحوّل الفكرة إلى حكاية تُرى.', color: 'blue' },
]

export default function Home() {
  const [language, setLanguage] = useState<'ar' | 'en'>('ar')
  const [dark, setDark] = useState(true)
  const isArabic = language === 'ar'
  const copy = isArabic ? {
    about: 'عنّي', work: 'مجالاتي', channels: 'القنوات', contact: 'تواصل', official: 'الموقع الرسمي',
    creator: 'صانع محتوى متعدد الشغف', discover: 'اكتشف عالم شِعب', watch: 'شاهد المحتوى',
    title: <>كل قصة<br/><em>لها عالم.</em></>, lede: <>أنا محمد شعبان، لكن أغلب الناس تعرفني باسم <strong>شِعب</strong>. أصنع محتوى عن السينما والألعاب والرياضة، وأحكي الحكايات بالصورة والصوت.</>
  } : {
    about: 'About', work: 'What I do', channels: 'Channels', contact: 'Contact', official: 'Official website',
    creator: 'Multi-passionate creator', discover: 'Discover She3b', watch: 'Watch content',
    title: <>Every story<br/><em>has a world.</em></>, lede: <>I&apos;m Mohamed Shaaban, better known as <strong>She3b</strong>. I create content about cinema, gaming, and sports — telling stories through image and sound.</>
  }
  return <main className={dark ? 'theme-dark' : 'theme-light'} dir={isArabic ? 'rtl' : 'ltr'}>
    <nav className="nav container">
      <a className="brand" href="#top"><span className="brand-mark">ش</span><span>شِعب<span className="dot">.</span></span></a>
      <div className="nav-links"><a href="#about">{copy.about}</a><a href="#work">{copy.work}</a><a href="#channels">{copy.channels}</a><a href="#contact">{copy.contact}</a></div>
      <div className="nav-tools"><button className="tool-button" onClick={() => setLanguage(isArabic ? 'en' : 'ar')} aria-label="Change language">{isArabic ? 'EN' : 'عربي'}</button><button className="tool-button" onClick={() => setDark(!dark)} aria-label="Toggle theme">{dark ? <Sun size={16}/> : <Moon size={16}/>}</button><a className="nav-cta" href="https://she3b.odoo.com" target="_blank" rel="noreferrer">{copy.official} <ArrowUpLeft size={16}/></a></div>
    </nav>

    <section id="top" className="hero container">
      <div className="hero-copy"><p className="eyebrow"><Sparkles size={15}/> {copy.creator}</p><h1>{copy.title}</h1><p className="hero-lede">{copy.lede}</p><div className="hero-actions"><a className="button button-fill" href="#about">{copy.discover} <ArrowUpLeft size={18}/></a><a className="button button-ghost" href="#channels"><Play size={16} fill="currentColor"/> {copy.watch}</a></div></div>
      <div className="hero-art"><div className="art-ring ring-one"/><div className="art-ring ring-two"/><div className="portrait-card"><div className="portrait-glow"/><span className="portrait-letter">ش</span><p>MOHAMED<br/>SHAABAN</p></div><div className="floating-note note-top">01 / creator</div><div className="floating-note note-bottom">film · games · life</div></div>
      <div className="scroll-cue"><span>مرّر لاكتشاف المزيد</span><span className="line"/></div>
    </section>

    <section id="about" className="about section container"><div className="section-tag">01 — عن شِعب</div><div className="about-grid"><h2>شغوف بالقصص<br/><span>بكل أشكالها.</span></h2><div className="about-text"><p>شاب شغوف بالسينما والدراما بكل أنواعها، خصوصاً عوالم الكوميك بوك والسوبرهيروز. أؤمن أن الدراما هي عصب السينما وروحها، وأن كل عمل جيد يستحق أن نتكلم عنه من زاوية مختلفة.</p><p className="muted">هنا أشارك رأيي لأعطيك فكرة عن العمل — القرار في النهاية قرارك. أهلاً بك في عائلة شِعب.</p></div></div></section>

    <section id="work" className="work section"><div className="container"><div className="section-heading"><div><div className="section-tag">02 — مجالاتي</div><h2>ثلاثة عوالم،<br/><span>صوت واحد.</span></h2></div><p>من خلف الكاميرا إلى أمامها، أتنقل بين أشكال مختلفة من صناعة المحتوى لأحكي ما أحب.</p></div><div className="work-list">{work.map((item) => <article className={`work-card ${item.color}`} key={item.no}><span className="work-no">{item.no}</span><div><h3>{item.title}</h3><p>{item.text}</p></div><ArrowUpLeft className="work-arrow" size={23}/></article>)}</div></div></section>

    <section id="channels" className="channels section container"><div className="section-heading"><div><div className="section-tag">03 — القنوات</div><h2>ادخل عالم<br/><span>شِعب.</span></h2></div><a className="text-link" href="https://sites.google.com/view/she3bproduction" target="_blank" rel="noreferrer">كل القنوات <ArrowUpLeft size={17}/></a></div><div className="channel-grid">{channels.map((channel) => <a className="channel-card" href={channel.href} target="_blank" rel="noreferrer" key={channel.title}><div className="channel-mark">{channel.mark}<Play size={15}/></div><div><p>{channel.type}</p><h3>{channel.title}</h3><span>{channel.desc}</span></div><ExternalLink className="external" size={17}/></a>)}</div></section>

    <section id="contact" className="contact section"><div className="container contact-inner"><div><div className="section-tag">04 — لنتكلم</div><h2>عندك قصة؟<br/><span>احكيها لي.</span></h2></div><div className="contact-side"><p>للتعاون، التصوير، الإنتاج أو حتى مجرد السلام — أنا موجود.</p><a className="button button-fill" href="mailto:hello@she3b.com">تواصل معي <ArrowUpLeft size={18}/></a><div className="socials"><a href="https://www.instagram.com" aria-label="Instagram"><CircleDot size={19}/></a><a href="https://www.linkedin.com" aria-label="LinkedIn"><Link size={19}/></a><a href="https://www.youtube.com" aria-label="YouTube"><Play size={19}/></a></div></div></div></section>

    <footer className="footer container"><a className="brand" href="#top"><span className="brand-mark">ش</span><span>شِعب<span className="dot">.</span></span></a><p>صُنع بشغف من القاهرة إلى كل حتة.</p><span className="footer-year">© 2026</span></footer>
  </main>
}
