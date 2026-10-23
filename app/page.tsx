'use client'

import { useState } from 'react'
import { ArrowUpLeft, CircleDot, ExternalLink, Link, Moon, Play, Sparkles, Sun } from 'lucide-react'

const channels = [
  { title: 'SHE3B', type: 'القناة الرئيسية', desc: 'محتوى متنوع من عالم شِعب', mark: 'S', href: 'https://youtube.com/@She3bTv' },
  { title: 'المِش ناقد', type: 'قناة السينما', desc: 'مراجعات ومناقشات وأخبار الأفلام', mark: 'م', href: 'https://youtube.com/@MeshNaqed' },
  { title: 'SHE3B STATION', type: 'قناة الجيمنج', desc: 'تختيم، رعب، فيفا وبيس', mark: 'G', href: 'https://youtube.com/@She3bStation' },
  { title: 'CAPTAIN SHE3B', type: 'قناة الرياضة', desc: 'كرة القدم وكل ما يخص الرياضة', mark: 'C', href: 'https://youtube.com/@CaptainShe3b' },
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
      <a className="brand" href="#top"><img className="brand-logo" src="/images/she3b-logo.png" alt={isArabic ? 'شعار شِعب' : 'She3b logo'} /><span>{isArabic ? 'شِعب' : 'She3b'}<span className="dot">.</span></span></a>
      <div className="nav-links"><a href="#about">{copy.about}</a><a href="#work">{copy.work}</a><a href="#channels">{copy.channels}</a><a href="#contact">{copy.contact}</a></div>
      <div className="nav-tools"><button className="tool-button" onClick={() => setLanguage(isArabic ? 'en' : 'ar')} aria-label={isArabic ? 'Switch to English' : 'التبديل إلى العربية'}>{isArabic ? 'EN' : 'عربي'}</button><button className="tool-button" onClick={() => setDark(!dark)} aria-label={dark ? (isArabic ? 'تفعيل الوضع الفاتح' : 'Switch to light mode') : (isArabic ? 'تفعيل الوضع الداكن' : 'Switch to dark mode')}>{dark ? <Sun size={16}/> : <Moon size={16}/>}</button><a className="nav-cta" href="https://sites.google.com/view/she3bproduction" target="_blank" rel="noreferrer">{copy.official} <ArrowUpLeft size={16}/></a></div>
    </nav>

    <div key={language} className="locale-scene">
    <section id="top" className="hero container">
      <div className="hero-copy"><p className="eyebrow"><Sparkles size={15}/> {copy.creator}</p><h1>{copy.title}</h1><p className="hero-lede">{copy.lede}</p><div className="hero-actions"><a className="button button-fill" href="#about">{copy.discover} <ArrowUpLeft size={18}/></a><a className="button button-ghost" href="#channels"><Play size={16} fill="currentColor"/> {copy.watch}</a></div></div>
      <div className="hero-art"><div className="art-ring ring-one"/><div className="art-ring ring-two"/><div className="portrait-card"><div className="portrait-glow"/><img className="portrait-image" src="/images/she3b-portrait.jpg" alt={isArabic ? 'صورة محمد شعبان الشخصية' : 'Muhammad Shaaban portrait'} /><p>MUHAMMAD<br/>SHAABAN</p></div><div className="floating-note note-top">01 / creator</div><div className="floating-note note-bottom">film · games · life</div></div>
      <div className="scroll-cue"><span>{isArabic ? 'مرّر لاكتشاف المزيد' : 'Scroll to discover more'}</span><span className="line"/></div>
    </section>

    <section id="about" className="about section container"><div className="section-tag">01 — {isArabic ? 'عن محمد' : 'About Muhammad'}</div><div className="about-grid"><h2>{isArabic ? <>أصنع الصورة<br/><span>وأحكي القصة.</span></> : <>I shape the image<br/><span>and tell the story.</span></>}</h2><div className="about-text"><p>{isArabic ? 'محرر فيديو وصانع محتوى رقمي ومصور فوتوغرافي، أعمل في صناعة المحتوى منذ 2014. أختص بالمحتوى السينمائي، السرد البصري، وإنتاج المواد الرقمية للقنوات والمنصات الإلكترونية.' : 'Video editor, digital content creator, and photographer with hands-on experience since 2014. I specialize in cinematic content, visual storytelling, and digital production for online channels and platforms.'}</p><p className="muted">{isArabic ? 'أجمع بين المونتاج والتصوير والتصميم البصري، مع شغف بإخراج الأفلام والتمثيل وتطوير مشاريع سينمائية أوسع.' : 'I combine editing, photography, and visual design with a passion for filmmaking, acting, and building broader cinematic projects.'}</p></div></div></section>

    <section id="work" className="work section"><div className="container"><div className="section-heading"><div><div className="section-tag">02 — {isArabic ? 'مجالاتي' : 'What I do'}</div><h2>{isArabic ? <>ثلاثة عوالم،<br/><span>صوت واحد.</span></> : <>Three worlds,<br/><span>one voice.</span></>}</h2></div><p>{isArabic ? 'من خلف الكاميرا إلى أمامها، أتنقل بين أشكال مختلفة من صناعة المحتوى لأحكي ما أحب.' : 'From behind the camera to in front of it, I move across formats to tell the stories I care about.'}</p></div><div className="work-list">{work.map((item) => <article className={`work-card ${item.color}`} key={item.no}><span className="work-no">{item.no}</span><div><h3>{isArabic ? item.title : ['Video Editing', 'Content Creation', 'Photography & Visual Storytelling'][Number(item.no) - 1]}</h3><p>{isArabic ? item.text : ['Professional editing, narrative structure, and visual rhythm for cinema and digital content.', 'Developing and producing content for She3b TV across cinema, gaming, and sports.', 'Photography, video, and visual design that turn ideas into clear, engaging stories.'][Number(item.no) - 1]}</p></div><ArrowUpLeft className="work-arrow" size={23}/></article>)}</div></div></section>

    <section id="tools" className="tools section container"><div className="section-heading"><div><div className="section-tag">03 — {isArabic ? 'أدواتي' : 'My tools'}</div><h2>{isArabic ? <>الأدوات التي<br/><span>أبني بها.</span></> : <>The tools<br/><span>I build with.</span></>}</h2></div><p>{isArabic ? 'خبرة عملية في أدوات التصميم والمونتاج وصناعة الصورة، من الفكرة إلى النسخة النهائية.' : 'Hands-on experience with design, editing, and visual production tools — from first idea to final cut.'}</p></div><div className="tools-grid"><article><h3>Adobe Photoshop</h3><p>{isArabic ? 'تحرير الصور، إنشاء الأصول البصرية، وتصميم التخطيطات.' : 'Photo editing, visual asset creation, and layout design.'}</p></article><article><h3>Adobe Premiere Pro</h3><p>{isArabic ? 'مونتاج الفيديو، بناء التسلسل، وسير عمل ما بعد الإنتاج.' : 'Professional video editing, sequencing, and post-production workflows.'}</p></article><article><h3>DaVinci Resolve</h3><p>{isArabic ? 'تلوين احترافي ومونتاج سينمائي عالي الجودة.' : 'High-end color grading and cinematic video editing.'}</p></article><article><h3>After Effects</h3><p>{isArabic ? 'موشن جرافيك، مؤثرات بصرية، وتكوينات ديناميكية.' : 'Motion graphics, visual effects, and dynamic composition.'}</p></article></div></section>

    <section id="channels" className="channels section container"><div className="section-heading"><div><div className="section-tag">04 — {isArabic ? 'القنوات' : 'Channels'}</div><h2>{isArabic ? <>ادخل عالم<br/><span>شِعب.</span></> : <>Enter the<br/><span>She3b world.</span></>}</h2></div><a className="text-link" href="https://sites.google.com/view/she3bproduction" target="_blank" rel="noreferrer">{isArabic ? 'كل القنوات' : 'View all channels'} <ArrowUpLeft size={17}/></a></div><div className="channel-grid">{channels.map((channel) => <a className="channel-card" href={channel.href} target="_blank" rel="noreferrer" key={channel.title}><div className="channel-mark">{channel.mark}<Play size={15}/></div><div><p>{isArabic ? channel.type : ['Main channel', 'Cinema channel', 'Gaming channel', 'Sports channel'][channels.indexOf(channel)]}</p><h3>{isArabic ? channel.title : ['SHE3B', 'The Non Critic', 'SHE3B STATION', 'CAPTAIN SHE3B'][channels.indexOf(channel)]}</h3><span>{isArabic ? channel.desc : ['A varied look into the world of She3b.', 'Film reviews, discussions, and cinema news.', 'Gaming playthroughs, horror, FIFA, and more.', 'Football and everything around sports.'][channels.indexOf(channel)]}</span></div><ExternalLink className="external" size={17}/></a>)}</div></section>

    <section id="contact" className="contact section"><div className="container contact-inner"><div><div className="section-tag">05 — {isArabic ? 'لنتكلم' : 'Let’s talk'}</div><h2>{isArabic ? <>عندك قصة؟<br/><span>احكيها لي.</span></> : <>Have a story?<br/><span>Tell me about it.</span></>}</h2></div><div className="contact-side"><p>{isArabic ? 'للتعاون، التصوير، الإنتاج أو حتى مجرد السلام — أنا موجود.' : 'For collaborations, photography, production, or simply saying hello — I’m here.'}</p><a className="button button-fill" href="mailto:She3bproduction@gmail.com">{isArabic ? 'تواصل معي' : 'Get in touch'} <ArrowUpLeft size={18}/></a><div className="socials"><a href="https://instagram.com/Muhammad.Shaaban96" target="_blank" rel="noreferrer" aria-label="Instagram"><CircleDot size={19}/></a><a href="https://linkedin.com/in/muhammadshaaban96" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Link size={19}/></a><a href="https://x.com/MuhamaadShaaban" target="_blank" rel="noreferrer" aria-label="X"><span className="x-mark">X</span></a></div></div></div></section>

    <footer className="footer container"><a className="brand" href="#top"><img className="brand-logo" src="/images/she3b-logo.png" alt={isArabic ? 'شعار شِعب' : 'She3b logo'} /><span>{isArabic ? 'شِعب' : 'She3b'}<span className="dot">.</span></span></a><p>{isArabic ? 'صُنع بشغف من الإسكندرية إلى كل حتة.' : 'Made with passion in Alexandria, for everywhere.'}</p><span className="footer-year">© 2026</span></footer>
    </div>
  </main>
}
