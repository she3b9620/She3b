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
  { no: '01', title: 'تحرير الفيديو', text: 'مونتاج احترافي، ترتيب السرد، وبناء الإيقاع البصري لمشاريع السينما والمحتوى الرقمي.', color: 'lime' },
  { no: '02', title: 'صناعة المحتوى', text: 'إدارة وتطوير محتوى She3b TV وقنوات متخصصة في السينما والألعاب والرياضة.', color: 'orange' },
  { no: '03', title: 'التصوير والسرد البصري', text: 'تصوير فوتوغرافي وفيديو، تصميم بصري، وتحويل الأفكار إلى قصص واضحة ومؤثرة.', color: 'blue' },
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
    title: <>Every story<br/><em>has a world.</em></>, lede: <>I&apos;m Muhammad Shaaban, better known as <strong>She3b</strong>. I create content about cinema, gaming, and sports — telling stories through image and sound.</>
  }
  return <main className={dark ? 'theme-dark' : 'theme-light'} dir={isArabic ? 'rtl' : 'ltr'}>
    <nav className="nav container">
      <a className="brand" href="#top"><img className="brand-logo" src="/images/she3b-logo.png" alt="شعار شِعب" /><span>شِعب<span className="dot">.</span></span></a>
      <div className="nav-links"><a href="#about">{copy.about}</a><a href="#work">{copy.work}</a><a href="#channels">{copy.channels}</a><a href="#contact">{copy.contact}</a></div>
      <div className="nav-tools"><button className="tool-button" onClick={() => setLanguage(isArabic ? 'en' : 'ar')} aria-label={isArabic ? 'Switch to English' : 'التبديل إلى العربية'}>{isArabic ? 'EN' : 'عربي'}</button><button className="tool-button" onClick={() => setDark(!dark)} aria-label={dark ? (isArabic ? 'تفعيل الوضع الفاتح' : 'Switch to light mode') : (isArabic ? 'تفعيل الوضع الداكن' : 'Switch to dark mode')}>{dark ? <Sun size={16}/> : <Moon size={16}/>}</button><a className="nav-cta" href="https://she3b.odoo.com" target="_blank" rel="noreferrer">{copy.official} <ArrowUpLeft size={16}/></a></div>
    </nav>

    <section id="top" className="hero container">
      <div className="hero-copy"><p className="eyebrow"><Sparkles size={15}/> {copy.creator}</p><h1>{copy.title}</h1><p className="hero-lede">{copy.lede}</p><div className="hero-actions"><a className="button button-fill" href="#about">{copy.discover} <ArrowUpLeft size={18}/></a><a className="button button-ghost" href="#channels"><Play size={16} fill="currentColor"/> {copy.watch}</a></div></div>
      <div className="hero-art"><div className="art-ring ring-one"/><div className="art-ring ring-two"/><div className="portrait-card"><div className="portrait-glow"/><img className="portrait-image" src="/images/she3b-portrait.jpg" alt="صورة محمد شعبان الشخصية" /><p>MUHAMMAD<br/>SHAABAN</p></div><div className="floating-note note-top">01 / creator</div><div className="floating-note note-bottom">film · games · life</div></div>
      <div className="scroll-cue"><span>مرّر لاكتشاف المزيد</span><span className="line"/></div>
    </section>

    <section id="about" className="about section container"><div className="section-tag">01 — عن محمد</div><div className="about-grid"><h2>أصنع الصورة<br/><span>وأحكي القصة.</span></h2><div className="about-text"><p>محرر فيديو وصانع محتوى رقمي ومصور فوتوغرافي، أعمل في صناعة المحتوى منذ 2014. أختص بالمحتوى السينمائي، السرد البصري، وإنتاج المواد الرقمية للقنوات والمنصات الإلكترونية.</p><p className="muted">أجمع بين المونتاج والتصوير والتصميم البصري، مع شغف بإخراج الأفلام والتمثيل وتطوير مشاريع سينمائية أوسع.</p></div></div></section>

    <section id="work" className="work section"><div className="container"><div className="section-heading"><div><div className="section-tag">02 — مجالاتي</div><h2>ثلاثة عوالم،<br/><span>صوت واحد.</span></h2></div><p>من خلف الكاميرا إلى أمامها، أتنقل بين أشكال مختلفة من صناعة المحتوى لأحكي ما أحب.</p></div><div className="work-list">{work.map((item) => <article className={`work-card ${item.color}`} key={item.no}><span className="work-no">{item.no}</span><div><h3>{item.title}</h3><p>{item.text}</p></div><ArrowUpLeft className="work-arrow" size={23}/></article>)}</div></div></section>

    <section id="tools" className="tools section container"><div className="section-heading"><div><div className="section-tag">03 — أدواتي</div><h2>الأدوات التي<br/><span>أبني بها.</span></h2></div><p>خبرة عملية في أدوات التصميم والمونتاج وصناعة الصورة، من الفكرة إلى النسخة النهائية.</p></div><div className="tools-grid"><article><h3>Adobe Photoshop</h3><p>تحرير الصور، إنشاء الأصول البصرية، وتصميم التخطيطات.</p></article><article><h3>Adobe Premiere Pro</h3><p>مونتاج الفيديو، بناء التسلسل، وسير عمل ما بعد الإنتاج.</p></article><article><h3>DaVinci Resolve</h3><p>تلوين احترافي ومونتاج سينمائي عالي الجودة.</p></article><article><h3>After Effects</h3><p>موشن جرافيك، مؤثرات بصرية، وتكوينات ديناميكية.</p></article></div></section>

    <section id="channels" className="channels section container"><div className="section-heading"><div><div className="section-tag">04 — القنوات</div><h2>ادخل عالم<br/><span>شِعب.</span></h2></div><a className="text-link" href="https://sites.google.com/view/she3bproduction" target="_blank" rel="noreferrer">كل القنوات <ArrowUpLeft size={17}/></a></div><div className="channel-grid">{channels.map((channel) => <a className="channel-card" href={channel.href} target="_blank" rel="noreferrer" key={channel.title}><div className="channel-mark">{channel.mark}<Play size={15}/></div><div><p>{channel.type}</p><h3>{channel.title}</h3><span>{channel.desc}</span></div><ExternalLink className="external" size={17}/></a>)}</div></section>

    <section id="contact" className="contact section"><div className="container contact-inner"><div><div className="section-tag">05 — لنتكلم</div><h2>عندك قصة؟<br/><span>احكيها لي.</span></h2></div><div className="contact-side"><p>للتعاون، التصوير، الإنتاج أو حتى مجرد السلام — أنا موجود.</p><a className="button button-fill" href="mailto:She3bproduction@gmail.com">تواصل معي <ArrowUpLeft size={18}/></a><div className="socials"><a href="https://www.instagram.com" aria-label="Instagram"><CircleDot size={19}/></a><a href="https://www.linkedin.com" aria-label="LinkedIn"><Link size={19}/></a><a href="https://www.youtube.com" aria-label="YouTube"><Play size={19}/></a></div></div></div></section>

    <footer className="footer container"><a className="brand" href="#top"><img className="brand-logo" src="/images/she3b-logo.png" alt="شعار شِعب" /><span>شِعب<span className="dot">.</span></span></a><p>صُنع بشغف من القاهرة إلى كل حتة.</p><span className="footer-year">© 2026</span></footer>
  </main>
}
