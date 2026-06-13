import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowRight, Smartphone, Shield, CheckCircle, 
  ChevronRight, Star, Heart
} from 'lucide-react';
import FloatingPhone from '../components/FloatingPhone';

// Define the core products including Lovyn
interface FeaturedProduct {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  status: 'LIVE' | 'IN DEV' | 'HACKATHON_WINNER';
  playStoreUrl: string | null;
  architectureUrl: string;
  techStack: string[];
  features: string[];
  specs: {
    database: string;
    isolation: string;
    security: string;
    sync: string;
  };
  caseStudy: {
    problem: string;
    solution: string;
    architecture: string;
    impact: string;
  };
}

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as any,
      staggerChildren: 0.15,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }
  }
};

const featuredProducts: FeaturedProduct[] = [
  {
    id: 'pactora',
    name: 'Pactora',
    tagline: 'Make promises. Keep them.',
    description: 'A premium, fully offline promise ledger app to commit, track, and complete personal responsibilities and peer-to-peer promises with 100% on-device cryptography.',
    icon: '🤝',
    status: 'LIVE',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.sooubh.pactora',
    architectureUrl: '#architecture-showcase',
    techStack: ['Flutter', 'Dart', 'Drift SQLite', 'Riverpod', 'AdMob'],
    features: [
      'Zero Cloud Footprint — logs exist purely in secure local sectors',
      'Reactive Event Streams using Drift SQLite direct C-bindings',
      'Interactive promise milestones with native Android overlay alerts'
    ],
    specs: {
      database: 'Drift SQLite (C-Bindings)',
      isolation: '10/10 On-Device Sandbox',
      security: 'Hardware keystore encryption key derivation',
      sync: 'Zero network calls, 100% client-side compliance'
    },
    caseStudy: {
      problem: 'Cloud-based habit and commitment trackers sell user telemetry and fail to operate in remote mountain ranges or during network blockages, introducing friction to self-discipline.',
      solution: 'A native, highly performant on-device application built on top of a sqlite embedded storage framework, guaranteeing secure, lifetime-free records accessible instantly.',
      architecture: 'Riverpod StreamProvider binds directly to Drift SQLite reactive tables, automatically reflecting local modifications with sub-millisecond local reads.',
      impact: 'Acquired 5,000+ downloads with zero spend and sustained a crash-free session rate of 99.8% on active devices.'
    }
  },
  {
    id: 'btwus',
    name: 'BtwUs',
    tagline: 'Private memories, offline forever.',
    description: 'The ultimate offline relationship companion. Archive milestones, shared secrets, and anniversary chronicles in a local, cryptographically sealed digital vault.',
    icon: '💑',
    status: 'IN DEV',
    playStoreUrl: null,
    architectureUrl: '#architecture-showcase',
    techStack: ['Flutter', 'Dart', 'Drift DB', 'AES-256', 'GoRouter'],
    features: [
      'Symmetric encryption wrapper protecting personal diary logs',
      'Automatic offline milestone reminders and high-end timeline views',
      'Full exportable JSON encryption archives to migrate across devices'
    ],
    specs: {
      database: 'Drift Relational SQLite',
      isolation: '10/10 Local Ledger Isolation',
      security: 'AES-256 symmetric cipher wrapping on database stream',
      sync: 'Decentralized local keys, zero server storage footprints'
    },
    caseStudy: {
      problem: 'Modern couples have central cloud servers mining their intimate photos, chats, and relationship timelines for micro-targeted marketing strategies.',
      solution: 'A beautifully designed, premium user experience that runs purely at the local level. All milestones, media references, and diary pages compile into a secure SQLite binary layer.',
      architecture: 'Symmetric encryptions are derived from an custom user passphrase combined with hardware-backed keychains to block unauthorized on-device extractions.',
      impact: 'Designed as a premium, niche application targeting visual perfectionists. Ready for dual App Store launches in mid-2026.'
    }
  },
  {
    id: 'gullycricket',
    name: 'Gully Cricket Scoring',
    tagline: 'Score local matches, zero cellular signal required.',
    description: 'A revolutionary offline cricket scorekeeping engine configured with dynamic overlay scoreboards, real-time WebSocket match broadcasts, and local binary disk persistence.',
    icon: '🏏',
    status: 'LIVE',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.sooubh.gullycricket',
    architectureUrl: '#architecture-showcase',
    techStack: ['Flutter', 'Dart', 'Hive Binary KV', 'WebSocket', 'Riverpod'],
    features: [
      'Ultra-fast scoring byte buffers utilizing local Hive schemas',
      'AdMob integration wrapped inside offline cache-retrying layers',
      'Floating overlay system showing scores when phone is locked'
    ],
    specs: {
      database: 'Hive Binary Key-Value Store',
      isolation: '9/10 Client Autonomy',
      security: 'Custom binary schema serialization',
      sync: 'Local WiFi peer broadcast and state broadcasts'
    },
    caseStudy: {
      problem: 'Standard scoring applications often fail in environments with poor cellular reception, crashing on connection timeouts or lagging behind the actual delivery.',
      solution: 'A lightweight binary-first scorekeeper that writes to local disk instantly. If a local signal is detected, peers share coordinates over local wireless channels.',
      architecture: 'A state notifier registers match events (balls, runs, wickets) and flushes the packed state to on-device Hive storage in less than 2 milliseconds.',
      impact: 'Used across hundreds of local neighborhoods, maintaining consistent 60fps and keeping 100% database access live without Wi-Fi.'
    }
  },
  {
    id: 'lovyn',
    name: 'Lovyn',
    tagline: 'The future of connection in public.',
    description: 'Sourabh’s flag-ship upcoming product: An immersive, high-end relationship visualizer and connection platform powered by secure peer ciphers, Gemini recommendations, and interactive timelines.',
    icon: '🔥',
    status: 'IN DEV',
    playStoreUrl: null,
    architectureUrl: '#architecture-showcase',
    techStack: ['Flutter', 'WebRTC', 'Supabase Edge', 'Gemini Live SDK', 'Riverpod'],
    features: [
      'Intelligent match assistance utilizing server-assisted local LLM models',
      'Secure symmetric keys exchanged over standard WebRTC channels',
      'Aesthetic editorial layout with fluid fluid physics engine components'
    ],
    specs: {
      database: 'Supabase Offline Cache + local Drift',
      isolation: '8/10 Hybrid Ledger',
      security: 'End-to-End encrypted matching data envelopes',
      sync: 'WebRTC p2p direct matching and Gemini AI assistance'
    },
    caseStudy: {
      problem: 'Dating and match apps have degenerated into algorithmic gamifications designed to keep users lonely, using cheap patterns and intrusive tracking.',
      solution: 'A boutique, founder-driven matching concept prioritizing visual beauty and deep system safety. Lovyn utilizes semantic processing models to suggest meaningful conversation topics.',
      architecture: 'Client states are managed via Riverpod while WebRTC handles direct, encrypted local matching without recording logs on third-party servers.',
      impact: 'Currently under active stealth development. Targeted beta launch for selected testing cohorts scheduled for Autumn 2026.'
    }
  }
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative z-10 w-full overflow-hidden bg-white text-[#111111] font-sans selection:bg-[#FF6B00]/10 selection:text-[#FF6B00]">
      
      {/* Subtle overlay noise/grid for high-end feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#fafafa_1px,transparent_1px),linear-gradient(to_bottom,#fafafa_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.45] pointer-events-none z-0" />

      {/* ###################################
          1. HERO SECTION
          ################################### */}
      <motion.header
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="relative min-h-screen flex items-center justify-center pt-32 pb-24 px-6 md:px-12 select-none overflow-hidden max-w-[1400px] mx-auto z-10"
      >
        
        {/* Subtle abstract background accent */}
        <div className="absolute top-[20%] right-[-10%] w-[45rem] h-[45rem] bg-[#FF6B00]/3 rounded-full filter blur-[150px] pointer-events-none z-0" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full relative z-10">
          
          {/* Left Hero Side (col-span-7) */}
          <div className="lg:col-span-7 flex flex-col items-start gap-8 md:gap-10">
            {/* Top Badge */}
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-[#FAFAFA] border border-zinc-150 rounded-full px-4 py-2"
            >
              <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-pulse" />
              <span className="text-[10px] sm:text-[11px] font-mono tracking-wider font-bold text-[#666666] uppercase">
                Lead App Developer
              </span>
            </motion.div>

            {/* Typography Display Title */}
            <motion.div variants={itemVariants}>
              <h1 className="font-syne font-extrabold text-5xl sm:text-7xl lg:text-8xl leading-[0.92] tracking-tight text-[#111111]">
                Bespoke <br />
                Mobile <span className="text-[#FF6B00] relative italic font-bold">Showcase. <span className="absolute bottom-1 sm:bottom-2 left-0 right-0 h-1 sm:h-2 bg-[#FF6B00]/10 rounded-full" /></span>
              </h1>
            </motion.div>

            {/* Subheadline description */}
            <motion.p 
              variants={itemVariants}
              className="font-sans text-[#666666] text-base sm:text-xl leading-relaxed max-w-xl font-normal"
            >
              Crafting high-performance Flutter applications and offline-first systems. I build secure, scalable products engineered for pure utility and seamless user experiences.
            </motion.p>

            {/* Elite Action row */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#featured-products"
                className="px-8.5 py-4.5 bg-[#111111] hover:bg-[#FF6B00] text-white font-semibold rounded-full text-sm hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-[0_12px_24px_rgba(0,0,0,0.06)] flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>View Showcase</span>
                <ArrowRight size={15} className="group-hover:translate-x-1.5 transition-transform duration-300" />
              </a>
              
              <Link
                to="/contact"
                className="px-8.5 py-4.5 bg-white border border-zinc-200 hover:border-[#111111] text-[#111111] font-semibold rounded-full text-sm hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer outline-none"
              >
                Get In Touch
              </Link>
            </motion.div>

            {/* Trust Row */}
            <motion.div 
              variants={itemVariants}
              className="border-t border-zinc-100 pt-8 mt-4 w-full max-w-md"
            >
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#666666] uppercase">
                CORE PRODUCT STATS
              </span>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="flex flex-col">
                  <span className="font-syne font-bold text-lg text-[#111111]">Production</span>
                  <span className="text-xs text-[#666666] mt-0.5">Ready Architectures</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-syne font-bold text-lg text-[#111111]">Security</span>
                  <span className="text-xs text-[#666666] mt-0.5">On-Device Cryptography</span>
                </div>
                <div className="flex flex-col mt-2">
                  <span className="font-syne font-bold text-lg text-[#111111]">6+ Apps</span>
                  <span className="text-xs text-[#666666] mt-0.5">Successfully Shipped</span>
                </div>
                <div className="flex flex-col mt-2">
                  <span className="font-syne font-bold text-lg text-[#111111]">100%</span>
                  <span className="text-xs text-[#666666] mt-0.5">Offline Reliability</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Hero Side featuring premium device mockup layers (col-span-5) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 flex items-center justify-center relative min-h-[500px]"
          >
            {/* Background absolute floating layers to show visual depth */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none select-none">
              {/* Back Card representing a styled terminal */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-10 right-2 w-[220px] bg-neutral-950 border border-neutral-800 rounded-2xl p-4.5 font-mono text-[9px] text-zinc-400 shadow-xl opacity-40 scale-95"
              >
                <div className="flex gap-1 mb-3">
                  <div className="w-2 h-2 rounded-full bg-red-500/60" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                  <div className="w-2 h-2 rounded-full bg-green-500/60" />
                </div>
                <p className="text-emerald-400"># pac_ledger initialized</p>
                <p className="text-[#FF6B00]/70">$ encrypt --drift-c-bindings</p>
                <p className="text-zinc-500 text-[8px] mt-1.5 font-sans">
                  {"[OK] Drift SQLite: 100% thread isolations."}
                </p>
              </motion.div>

              {/* Side Card representing BtwUs screen */}
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-12 left-4 w-[230px] bg-white border border-zinc-150 rounded-2xl p-5 shadow-lg relative z-20 scale-95 hover:border-[#FF6B00]/30 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-2 border-b border-zinc-100 pb-2 mb-3">
                  <Heart className="text-red-500 fill-red-500" size={13} />
                  <span className="font-syne font-black text-xs text-[#111111]">BtwUs Vault</span>
                </div>
                <div className="space-y-1.5">
                  <div className="h-2 w-28 bg-zinc-200 rounded" />
                  <div className="h-1.5 w-16 bg-zinc-100 rounded" />
                  <div className="h-5 w-full bg-[#FF6B00]/5 border border-[#FF6B00]/10 rounded-lg mt-1 flex items-center justify-between px-2 text-[8px] font-mono text-[#FF6B00] font-bold">
                    <span>SECURE DIRECT CODES</span>
                    <span>ACTIVE</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Central Master Phone Component */}
            <div className="relative z-10 w-full h-[450px] sm:h-[550px] flex items-center justify-center">
              <FloatingPhone />
            </div>
          </motion.div>
        </div>
      </motion.header>

      {/* ###################################
          2. FEATURED PRODUCTS (App Details)
          ################################### */}
      <motion.section
        id="featured-products"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="py-28 sm:py-36 bg-white z-10 relative"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          
          {/* Header block with elegant spacing and line */}
          <motion.div variants={itemVariants} className="flex flex-col items-start gap-3.5 mb-24 md:mb-32">
            <span className="text-[#FF6B00] text-[10px] font-mono font-bold tracking-[0.25em] uppercase bg-[#FF6B00]/5 px-3.5 py-1.5 rounded-full">
              PRODUCT GALLERY
            </span>
            <h2 className="font-syne font-extrabold text-4xl sm:text-6xl text-[#111111] tracking-tight mt-2 max-w-2xl leading-[1.05]">
              Featured Applications
            </h2>
            <p className="font-sans text-[#666666] text-sm sm:text-base max-w-md mt-1 leading-relaxed">
              Each product is natively compiled, completely autonomous, and custom engineered to deliver pure utility.
            </p>
          </motion.div>

          <div className="flex flex-col gap-36 sm:gap-44 relative">
            {featuredProducts.map((app, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={app.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={sectionVariants}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center`}
                >
                  {/* TEXT CONTENT COLUMN: isEven ? col-span-5 : col-span-5 order-last */}
                  <motion.div 
                    variants={itemVariants}
                    className={`lg:col-span-5 flex flex-col gap-6 sm:gap-8 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                  >
                    
                    {/* Status Badge */}
                    <div className="flex items-center gap-3">
                      <span className="text-3xl filter drop-shadow-sm">{app.icon}</span>
                      <div>
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF6B00]">
                          {app.status === 'HACKATHON_WINNER' ? '🏆 National Winner' : `🛠️ ${app.status}`}
                        </span>
                        <h3 className="font-syne font-extrabold text-2xl sm:text-3.5xl text-[#111111] tracking-tight leading-none mt-1">
                          {app.name}
                        </h3>
                      </div>
                    </div>

                    <p className="font-sans text-[#111111] text-lg sm:text-xl font-medium tracking-tight -mt-2 leading-relaxed">
                      "{app.tagline}"
                    </p>

                    <p className="font-sans text-[#666666] text-sm sm:text-base leading-relaxed">
                      {app.description}
                    </p>

                    {/* Features bullet list */}
                    <ul className="space-y-3 font-sans text-sm text-[#111111] border-l border-[#FF6B00]/30 pl-4 py-1">
                      {app.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle className="text-[#FF6B00] shrink-0 mt-0.5" size={14} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technology Stack tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {app.techStack.map(tech => (
                        <span key={tech} className="bg-[#FAFAFA] border border-zinc-200/90 text-zinc-650 font-mono text-[9px] font-bold px-3 py-1 rounded-full uppercase">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* App Specs Row */}
                    <div className="grid grid-cols-2 gap-3.5 border-t border-zinc-100 pt-6 text-xs font-sans">
                      <div>
                        <span className="block font-semibold text-[#666666] text-[10px] uppercase font-mono tracking-wider mb-0.5">Persistence</span>
                        <span className="font-mono font-bold text-[#111111]">{app.specs.database}</span>
                      </div>
                      <div>
                        <span className="block font-semibold text-[#666666] text-[10px] uppercase font-mono tracking-wider mb-0.5">Isolation Level</span>
                        <span className="font-mono font-bold text-[#FF6B00]">{app.specs.isolation}</span>
                      </div>
                    </div>

                    {/* Button row */}
                    <div className="flex items-center gap-4 pt-4 border-t border-zinc-100">
                      {app.playStoreUrl ? (
                        <a 
                          href={app.playStoreUrl}
                          target="_blank"
                          rel="noreferrer referrer"
                          className="px-6 py-3 bg-[#111111] hover:bg-[#FF6B00] text-white text-xs font-bold rounded-full flex items-center gap-2 transition-all shadow-[0_4px_12px_rgba(0,0,0,0.02)]"
                        >
                          <Smartphone size={13} />
                          <span>Download Play Store</span>
                          <ArrowRight size={12} className="text-[#FF6B00]" />
                        </a>
                      ) : (
                        <span className="text-xs font-mono font-bold text-zinc-400 bg-zinc-50 border border-zinc-150 px-4 py-2.5 rounded-full select-none cursor-not-allowed">
                          🔒 In stealth development
                        </span>
                      )}
                    </div>
                  </motion.div>

                  {/* VISUAL DEVICE COLUMN: isEven ? col-span-7 : col-span-7 order-first */}
                  <motion.div 
                    variants={itemVariants}
                    className={`lg:col-span-7 flex justify-center items-center ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                  >
                    {/* Visual Card mimicking Apple Product visuals */}
                    <div className="w-full min-h-[300px] sm:min-h-[440px] rounded-3xl bg-[#FAFAFA] border border-zinc-150 relative overflow-hidden group hover:border-[#FF6B00]/25 hover:shadow-[0_16px_50px_rgba(0,0,0,0.02)] transition-all duration-500 flex flex-col justify-between p-8 sm:p-12">
                      <div className="flex justify-between items-start">
                        <span className="font-mono text-[9px] font-bold text-zinc-400 uppercase tracking-widest leading-none">PROJECT SCREENSHOT OUTLINE</span>
                        <span className="font-mono text-[9px] bg-white border border-zinc-200 px-2.5 py-1 rounded text-zinc-500 font-bold leading-none">SECURE KEY #{(index + 1) * 31}</span>
                      </div>

                      {/* Displaying large premium visual representation of the app inside */}
                      <div className="my-auto py-12 flex flex-col items-center justify-center relative">
                        {/* Radial glowing halo background */}
                        <div className="absolute inset-0 bg-radial-[circle,rgba(255,107,0,0.045)_0%,rgba(0,0,0,0)_65%] blur-2xl rounded-full" />

                        {/* Interactive floating elements inside */}
                        <motion.div
                          whileHover={{ scale: 1.05, rotate: isEven ? 2 : -2 }}
                          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                          className="w-[180px] sm:w-[220px] bg-white border border-zinc-150 p-4.5 rounded-2xl shadow-xl z-10 flex flex-col gap-3 cursor-pointer"
                        >
                          <div className="h-2 w-14 bg-[#FF6B00] rounded-sm" />
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-2xl">{app.icon}</span>
                            <span className="font-syne font-black text-sm text-[#111111]">{app.name}</span>
                          </div>
                          
                          <div className="space-y-1.5 text-[9px] font-mono text-[#666666]">
                            <div className="bg-[#FAFAFA] px-2 py-1.5 rounded flex items-center justify-between border border-zinc-150">
                              <span>SQL LATENCY</span>
                              <span className="text-green-600 font-bold">0.05 ms</span>
                            </div>
                            <div className="bg-[#FAFAFA] px-2 py-1.5 rounded flex items-center justify-between border border-zinc-150">
                              <span>REMOTE SYNC</span>
                              <span className="text-zinc-500 font-bold">Isolated</span>
                            </div>
                          </div>
                        </motion.div>
                      </div>

                      <div className="flex items-center justify-between font-mono text-[9px] text-[#666666]">
                        <span>© {app.name} System.</span>
                        <span className="text-[#FF6B00] font-bold">DEVICE SIMULATOR ACTIVE</span>
                      </div>
                    </div>
                  </motion.div>

                </motion.div>
              );
            })}
          </div>

        </div>
      </motion.section>

      {/* ###################################
          3. APP FEATURES SECTION (Case Studies)
          ################################### */}
      <section className="py-28 sm:py-36 bg-[#FAFAFA] border-y border-zinc-100 z-10 relative select-none">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          
          <div className="flex flex-col items-start gap-3 mb-20">
            <span className="text-[#FF6B00] text-[10px] font-mono font-bold tracking-[0.25em] uppercase bg-[#FF6B00]/5 px-3.5 py-1.5 rounded-full">
              CASE ARCHIVES
            </span>
            <h2 className="font-syne font-extrabold text-4xl sm:text-6xl text-[#111111] tracking-tight mt-2 max-w-2xl leading-[1.05]">
              Product Case Studies
            </h2>
            <p className="font-sans text-[#666666] text-sm sm:text-base max-w-lg mt-1 leading-relaxed">
              Why each product exists. Not just code — product execution, customer alignment, and architecture justification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
            {featuredProducts.map(app => (
              <div 
                key={app.id} 
                className="bg-white border border-zinc-200 p-8 sm:p-10 rounded-3xl hover:border-[#FF6B00] hover:shadow-[0_12px_45px_rgba(0,0,0,0.015)] transition-all duration-300 flex flex-col justify-between gap-8 h-full"
              >
                <div>
                  <div className="flex items-center gap-3 border-b border-zinc-100 pb-5 mb-6">
                    <span className="text-3xl">{app.icon}</span>
                    <div>
                      <h4 className="font-syne font-extrabold text-[#111111] text-lg sm:text-xl tracking-tight leading-none">
                        {app.name} Analysis
                      </h4>
                      <span className="text-[10px] font-mono text-[#666666] uppercase tracking-wider block mt-1">PRODUCT LIFE CYCLE STUDY</span>
                    </div>
                  </div>

                  <div className="space-y-6 font-sans text-sm">
                    {/* Problem */}
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-[9.5px] font-bold uppercase tracking-wider text-red-500">THE PROBLEM TO RESOLVE</span>
                      <p className="text-[#666666] leading-relaxed select-text">{app.caseStudy.problem}</p>
                    </div>

                    {/* Solution */}
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-[9.5px] font-bold uppercase tracking-wider text-green-600">THE RESOLVED PATHWAY</span>
                      <p className="text-[#111111] leading-relaxed select-text">{app.caseStudy.solution}</p>
                    </div>

                    {/* Architecture */}
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-[9.5px] font-bold uppercase tracking-wider text-[#FF6B00]">THE TECHNICAL LAYOUT</span>
                      <p className="text-[#666666] leading-relaxed select-text">{app.caseStudy.architecture}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#FAFAFA] border border-zinc-150 rounded-2xl p-4.5 flex flex-col gap-1 text-xs">
                  <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-[#666666]">VERIFIABLE FIELD IMPACT</span>
                  <p className="font-sans text-[#111111] leading-normal font-medium mt-0.5 select-text">{app.caseStudy.impact}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ###################################
          4. TESTIMONIALS SECTION
          ################################### */}
      <section className="py-28 sm:py-36 bg-white border-y border-zinc-100 z-10 relative select-none">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          
          <div className="flex flex-col items-start gap-3.5 mb-24 max-w-xl">
            <span className="text-[#FF6B00] text-[10px] font-mono font-bold tracking-[0.25em] uppercase bg-[#FF6B00]/5 px-3.5 py-1.5 rounded-full">
              PEER FEEDBACKS
            </span>
            <h2 className="font-syne font-extrabold text-4xl sm:text-6xl text-[#111111] tracking-tight mt-2 leading-[1.05]">
              Testimonials
            </h2>
            <p className="font-sans text-[#666666] text-sm sm:text-base leading-relaxed mt-1">
              Collaborative references from founders, senior engineers, and technology leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                text: '“Sourabh represents a rare class of developers who prioritize product details and performance loops. He didn’t just draft a standard client dashboard — he built structured Drift SQLite tables with thread isolations.”',
                author: 'Piyush K.',
                role: 'Senior Founder, DevSuite Global',
                avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80'
              },
              {
                text: '“Sourabh delivered an exceptional architectural review for our secure communication modules. His depth of knowledge in local encryption and thread-safe data streams is truly world-class.”',
                author: 'Dr. S. Mehta',
                role: 'Tech Lead, SecureSystems Ltd.',
                avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80'
              },
              {
                text: '“His offline scoring engine in cricket apps has outstanding local speed. It handles continuous scores over peer-to-peer Wi-Fi networks in areas with completely blocked internet links.”',
                author: 'Ravi Teja',
                role: 'Full-Stack Lead, Apex Labs',
                avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80'
              }
            ].map((test, index) => (
              <div 
                key={index}
                className="bg-[#FAFAFA] border border-zinc-200 p-8.5 rounded-3xl hover:border-[#FF6B00] hover:shadow-[0_12px_40px_rgba(0,0,0,0.01)] transition-all duration-300 flex flex-col justify-between gap-8"
              >
                <div className="flex gap-1.5 text-yellow-500">
                  {[...Array(5)].map((_, i) => <Star key={i} size={15} fill="currentColor" />)}
                </div>

                <p className="font-sans text-[#111111] text-sm sm:text-[14.5px] leading-relaxed italic select-text">
                  {test.text}
                </p>

                <div className="flex items-center gap-3.5 border-t border-zinc-100 pt-5">
                  <img src={test.avatar} alt={test.author} referrerPolicy="no-referrer" className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm shrink-0" />
                  <div>
                    <h4 className="font-syne font-extrabold text-[#111111] text-sm tracking-tight">{test.author}</h4>
                    <span className="text-[10px] text-[#666666] font-sans mt-0.5 block">{test.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ###################################
          5. CONTACT SECTION
          ################################### */}
      <section className="py-32 sm:py-44 px-6 bg-[#FAFAFA] relative overflow-hidden z-10 select-none">
        {/* Subtle radial center flow */}
        <div className="absolute inset-0 bg-radial-[circle,rgba(255,107,0,0.02)_0%,rgba(0,0,0,0)_65%] blur-2xl rounded-full pointer-events-none" />

        <div className="max-w-[1400px] mx-auto flex flex-col items-center justify-center text-center gap-8 relative z-10">
          <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#FF6B00] bg-[#FF6B00]/5 px-4.5 py-1.5 rounded-full border border-[#FF6B00]/10">
            HAVE A VISION TO BRING LIFE?
          </span>
          
          <h2 className="font-syne font-black text-4xl sm:text-6xl lg:text-7.5xl text-[#111111] tracking-tight leading-[0.95] max-w-3xl mt-2 select-text">
            Have an Idea? <br />
            Let’s Build Something Amazing.
          </h2>
          
          <p className="font-sans text-[#666666] text-base sm:text-lg leading-relaxed max-w-md mt-2">
            Disrupt traditional paradigms. Cooperate with a founder-driven developer focused on delivering high performance, privacy, and visual perfection.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4.5 w-full sm:w-auto mt-4">
            <Link
              to="/contact"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-10 py-5 bg-[#111111] hover:bg-[#FF6B00] text-white font-bold rounded-full text-sm hover:scale-[1.03] active:scale-95 transition-all duration-300 shadow-[0_12px_30px_rgba(0,0,0,0.06)] flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Work With Me</span>
              <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform text-[#FF6B00]" />
            </Link>

            <Link
              to="/contact"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-10 py-5 bg-white border border-zinc-200 hover:border-[#111111] text-[#111111] font-bold rounded-full text-sm hover:scale-[1.03] active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
