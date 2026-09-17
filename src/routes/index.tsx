import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";

import { Nav } from "@/components/site/nav";
import { Reveal, StaggerList, ProductImage } from "@/components/site/reveal";
import { Signature, SIGNATURE } from "@/components/site/signature";
import { OrderTag, PriceTickets, StampLink, TwineRule, ORDER_HREF } from "@/components/site/ui";

import heroImg from "@/assets/hero.jpg";
import heroVideo from "@/assets/hero.mp4";
import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";
import story3 from "@/assets/story-3.jpg";
import silvanasImg from "@/assets/silvanas.jpg";
import ensaymadaImg from "@/assets/ensaymada.jpg";
import chocolateCakeImg from "@/assets/chocolate-cake.jpg";
import sansrivalImg from "@/assets/sansrival.jpg";
import cookieClassic from "@/assets/cookie-classic.jpg";
import cookieDark from "@/assets/cookie-dark.jpg";
import cookieScarlet from "@/assets/cookie-scarlet.jpg";
import cookiePistachio from "@/assets/cookie-pistachio.jpg";
import cookieBerry from "@/assets/cookie-berry.jpg";
import bananaLoaf from "@/assets/banana-loaf.jpg";
import browniesImg from "@/assets/brownies.jpg";
import browniesOnCrunchImg from "@/assets/brownies-crunch.jpg";
import oatDatesBar from "@/assets/oat-dates-bar.jpg";
import oatBars from "@/assets/oat-bars.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "D'SAINTS — A Moment Worth Sharing | Filipino Desserts, Doha" },
      {
        name: "description",
        content:
          "D'SAINTS crafts Filipino artisan desserts in Doha, Qatar — silvanas, ensaymada, sans rival, brownies and cookies. Est. 2020.",
      },
      {
        property: "og:title",
        content: "D'SAINTS — A Moment Worth Sharing",
      },
      {
        property: "og:description",
        content:
          "Filipino artisan desserts in Doha, Qatar. Silvanas, ensaymada, specialty cakes and cookies.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const label = "label-wide";

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduced ? "0%" : "14%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, reduced ? 1 : 0.25]);

  return (
    <section
      id="top"
      ref={ref}
      className="grain relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-ivory px-6 pt-28 pb-16 text-center"
    >
      <motion.video
        autoPlay
        loop
        muted
        playsInline
        poster={heroImg}
        src={heroVideo}
        style={{ y }}
        className="pointer-events-none absolute inset-0 h-[115%] w-full object-cover opacity-25"
        aria-hidden="true"
      />
      <motion.div style={{ opacity: fade }} className="relative z-[2] max-w-4xl">
        <motion.p
          className={label}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          EST. D&apos;SAINTS 2020
        </motion.p>

        <motion.h1
          className="mt-8 font-logo text-[19vw] leading-[0.82] font-light tracking-[0.02em] text-foreground sm:text-[15vw] lg:text-[11rem]"
          initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 1.08, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 0.35, ease: [0.19, 1, 0.22, 1] }}
        >
          D&apos;SAINTS
        </motion.h1>

        <motion.p
          className="mx-auto mt-8 max-w-xl text-lg text-espresso italic sm:text-2xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 1.05 }}
          style={{ fontFamily: "var(--font-display)" }}
        >
          {SIGNATURE}
        </motion.p>

        <motion.p
          className={`mt-12 ${label}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          DOHA, QATAR
        </motion.p>
      </motion.div>
    </section>
  );
}

function TwineTag({
  text,
  progress,
  at,
  align,
}: {
  text: string;
  progress: MotionValue<number>;
  at: number;
  align: "left" | "center" | "right";
}) {
  const opacity = useTransform(progress, [at - 0.06, at + 0.02], [0, 1]);
  const y = useTransform(progress, [at - 0.06, at + 0.02], [10, 0]);
  return (
    <motion.p
      style={{ opacity, y }}
      className={`max-w-[10rem] font-display text-lg text-espresso sm:max-w-[12rem] sm:text-2xl ${
        align === "left" ? "text-left" : align === "right" ? "text-right" : "text-center"
      }`}
    >
      {text}
    </motion.p>
  );
}

function FirstMoment() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const headlineOpacity = useTransform(scrollYProgress, [0, 0.12], [0, 1]);
  const headlineY = useTransform(scrollYProgress, [0, 0.12], [16, 0]);
  const twineProgress = useTransform(scrollYProgress, [0.14, 0.8], [0, 1]);
  const sigOpacity = useTransform(scrollYProgress, [0.85, 1], [0, 1]);
  const sigY = useTransform(scrollYProgress, [0.85, 1], [14, 0]);

  const lines: { text: string; at: number; align: "left" | "center" | "right" }[] = [
    { text: "A familiar taste.", at: 0.3, align: "left" },
    { text: "A table full of people.", at: 0.52, align: "center" },
    { text: "Something worth bringing home.", at: 0.74, align: "right" },
  ];

  return (
    <>
      {/* Desktop/tablet: pinned scroll-scrubbed twine reveal */}
      <section ref={ref} className="relative hidden bg-cream lg:block" style={{ height: "180vh" }}>
        <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden px-6">
          <motion.h2
            style={{ opacity: headlineOpacity, y: headlineY }}
            className="max-w-3xl text-center font-display text-3xl leading-tight sm:text-5xl"
          >
            WHAT MAKES A MOMENT MEMORABLE?
          </motion.h2>

          <div className="relative mt-20 w-full max-w-4xl">
            <svg viewBox="0 0 1000 4" preserveAspectRatio="none" className="h-1 w-full text-espresso/40" aria-hidden="true">
              <motion.line
                x1="0"
                y1="2"
                x2="1000"
                y2="2"
                stroke="currentColor"
                strokeWidth="1.5"
                style={{ pathLength: twineProgress }}
              />
            </svg>
            <div className="relative mt-4 flex justify-between gap-4">
              {lines.map((l) => (
                <TwineTag key={l.text} text={l.text} progress={scrollYProgress} at={l.at} align={l.align} />
              ))}
            </div>
          </div>

          <motion.div style={{ opacity: sigOpacity, y: sigY }} className="mt-20">
            <Signature className="text-base sm:text-lg" />
          </motion.div>
        </div>
      </section>

      {/* Mobile: simple stagger, no pinning (touch-scroll pinning can feel janky at narrow widths) */}
      <section className="bg-cream px-6 py-28 sm:py-40 lg:hidden">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal as="h2" className="font-display text-3xl leading-tight sm:text-5xl">
            WHAT MAKES A MOMENT MEMORABLE?
          </Reveal>
          <StaggerList
            className="mt-14 space-y-5"
            lineClassName="font-display text-2xl text-espresso sm:text-4xl"
            lines={["A familiar taste.", "A table full of people.", "Something worth bringing home."]}
          />
          <Reveal delay={0.4} className="mt-16">
            <Signature className="text-base sm:text-lg" />
          </Reveal>
        </div>
      </section>
    </>
  );
}

function TiltPhoto({
  src,
  alt,
  width,
  height,
  className,
  fromX = 0,
  fromY = 60,
  fromRotate = 0,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  fromX?: number;
  fromY?: number;
  fromRotate?: number;
}) {
  const ref = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.9", "start 0.35"] });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const x = useTransform(scrollYProgress, [0, 1], [fromX, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [fromY, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [fromRotate, 0]);

  return (
    <motion.img
      ref={ref}
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      style={{ opacity, x, y, rotate }}
      className={className}
    />
  );
}
function Story() {
  return (
    <section id="story" className="bg-ivory px-6 py-28 sm:py-40">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5 lg:pt-10">
          <Reveal as="h2" className="font-display text-5xl tracking-[0.06em] sm:text-7xl">
            D&apos;SAINTS
          </Reveal>
          <Reveal delay={0.15} className="mt-8 max-w-md text-base leading-relaxed text-espresso">
            <p>
              D&apos;SAINTS has always been about connecting lives, one moment at a time. It&apos;s
              about hospitality, empowering purpose, and making space for everyone at the table.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="mt-10">
            <TwineRule />
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:col-span-7">
          <TiltPhoto
            src={story3}
            alt="Coffee cup and a cookie being dipped"
            width={1236}
            height={2048}
            className="col-span-1 row-span-2 w-full self-start object-cover"
            fromX={-40}
            fromY={50}
            fromRotate={-5}
          />
          <TiltPhoto
            src={story1}
            alt="Hands passing a plate of dessert across a shared table"
            width={900}
            height={1200}
            className="col-span-1 mt-10 w-full object-cover"
            fromX={40}
            fromY={50}
            fromRotate={4}
          />
          <TiltPhoto
            src={story2}
            alt="A dessert box wrapped in plastic, pastries inside"
            width={1200}
            height={900}
            className="col-span-1 pr-8 w-full object-cover"
            fromX={0}
            fromY={70}
            fromRotate={-3}
          />
        </div>
      </div>
    </section>
  );
}

function BlurReveal({
  children,
  className,
  fromBlur = 8,
  fromScale = 0.96,
  fromSkew = 0,
}: {
  children: ReactNode;
  className?: string;
  fromBlur?: number;
  fromScale?: number;
  fromSkew?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.9", "start 0.45"] });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const blur = useTransform(scrollYProgress, [0, 1], [fromBlur, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [fromScale, 1]);
  const skew = useTransform(scrollYProgress, [0, 1], [fromSkew, 0]);
  const filter = useTransform(blur, (b) => `blur(${b}px)`);

  return (
    <motion.div ref={ref} style={{ opacity, scale, skewX: skew, filter }} className={className}>
      {children}
    </motion.div>
  );
}
function Philosophy() {
  return (
    <section className="grain bg-chocolate px-6 py-32 text-ivory sm:py-48">
      <div className="mx-auto max-w-4xl">
        <BlurReveal
          fromBlur={10}
          fromScale={0.94}
          fromSkew={-2}
          className="font-display text-4xl leading-tight sm:text-6xl"
        >
          Not everything perfect is planned.
        </BlurReveal>
        <BlurReveal
          fromBlur={8}
          fromScale={0.96}
          fromSkew={2}
          className="mt-10 max-w-2xl font-display text-2xl leading-snug text-cream/85 sm:text-3xl"
        >
          <p>Because sometimes, the best recipes come from letting go, letting mistakes happen.</p>
        </BlurReveal>
        <BlurReveal fromBlur={4} fromScale={0.98} className="mt-10">
          <p className="text-sm tracking-[0.3em] text-cream/70">— D&apos;SAINTS</p>
        </BlurReveal>
        <BlurReveal fromBlur={6} fromScale={0.97} className="mt-20">
          <span className="signature-line text-sm text-cream/60">{SIGNATURE}</span>
        </BlurReveal>
      </div>
    </section>
  );
}

function SignatureCollection() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "-50%"]);

  const items = [
    {
      name: "Silvanas",
      img: silvanasImg,
      alt: "Stacked silvanas with buttercream and crisp meringue",
      copy: "A PHILIPPINE ARTISAN DELICACY OF CRISP MERINGUE AND BUTTERCREAM, A SIGNATURE FROZEN FINISH THAT MELTS INTO NOSTALGIA.",
      price: ["55 QAR"],
    },
    {
      name: "Ensaymada",
      img: ensaymadaImg,
      alt: "Ensaymada topped with buttercream and grated cheese",
      copy: "PHILIPPINE ARTISAN STAPLE WITH BUTTERY CREAM, AND A LAYER OF CHEESE — FAMILIAR, CLOSE TO HOME.",
      price: ["12 pcs / 60 QAR", "6 pcs / 35 QAR"],
    },
  ];

  return (
    <section id="signature" className="bg-cream">
      {/* Desktop: sticky horizontal pan between the two signatures */}
      <div ref={ref} className="relative hidden h-[240vh] lg:block">
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          <p className={`${label} px-10 pb-10`}>S I G N A T U R E</p>
          <motion.div style={{ x }} className="flex w-[200%]">
            {items.map((it) => (
              <article key={it.name} className="flex w-1/2 items-center gap-12 px-10">
                <img
                  src={it.img}
                  alt={it.alt}
                  width={1200}
                  height={1400}
                  loading="lazy"
                  className="h-[58vh] w-1/2 object-cover"
                />
                <div className="w-1/2">
                  <h3 className="font-display text-6xl">{it.name}</h3>
                  <p className="mt-6 max-w-md text-xs leading-relaxed tracking-[0.14em] text-espresso">
                    {it.copy}
                  </p>
                  <PriceTickets prices={it.price} className="mt-8" />
                </div>
              </article>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile / tablet: stacked */}
      <div className="px-6 py-24 lg:hidden">
        <p className={label}>S I G N A T U R E</p>
        <div className="mt-12 space-y-20">
          {items.map((it) => (
            <article key={it.name}>
              <ProductImage
                src={it.img}
                alt={it.alt}
                width={1200}
                height={1400}
                className="w-full object-cover"
              />
              <h3 className="mt-8 font-display text-4xl">{it.name}</h3>
              <p className="mt-4 text-xs leading-relaxed tracking-[0.14em] text-espresso">
                {it.copy}
              </p>
              <PriceTickets prices={it.price} className="mt-6" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cakes() {
  return (
    <section id="cakes" className="bg-ivory px-6 py-28 sm:py-40">
      <div className="mx-auto max-w-6xl">
        <p className={label}>S P E C I A L T Y&nbsp;&nbsp;C A K E S</p>

        <div className="mt-16 grid gap-20 md:grid-cols-2 md:gap-12">
          <article>
            <ProductImage
              src={chocolateCakeImg}
              alt="Slice of rich layered chocolate cake with glossy ganache"
              width={1200}
              height={1400}
              className="aspect-4/5 w-full object-cover"
            />
            <h3 className="mt-8 font-display text-4xl sm:text-5xl">Chocolate Dream Cake</h3>
            <p className="mt-5 max-w-md text-xs leading-relaxed tracking-[0.14em] text-espresso">
              A RICH CHOCOLATE INDULGENCE WITH LAYERS OF TEXTURE, BALANCING SILKY, CREAMY, AND CRISP
              IN EVERY BITE.
            </p>
            <PriceTickets prices={["65 QAR", "25 QAR", "120 QAR"]} className="mt-6" />
          </article>

          <article className="md:pt-24">
            <ProductImage
              src={sansrivalImg}
              alt="Sans rival cake with cashew meringue layers and roasted cashews"
              width={1200}
              height={1400}
              className="aspect-4/5 w-full object-cover"
            />
            <h3 className="mt-8 font-display text-4xl sm:text-5xl">Sansrival Cake</h3>
            <p className="mt-5 max-w-md text-xs leading-relaxed tracking-[0.14em] text-espresso">
              DELICATE LAYERS OF CASHEW MERINGUE AND BUTTERCREAM, FINISHED WITH ROASTED CASHEWS. A
              FILIPINO CLASSIC WITHOUT RIVAL.
            </p>
            <PriceTickets prices={["70 QAR", "45 QAR", "150 QAR"]} className="mt-6" />
            <Reveal delay={0.2} className="mt-8 max-w-md">
              <div className="note-card">
                <span className="note-card-tab">note</span>
                <p className="font-display text-xl italic text-espresso">
                  Did you know? Sans Rival means &ldquo;without rival.&rdquo;
                </p>
              </div>
            </Reveal>
          </article>
        </div>
      </div>
    </section>
  );
}

const flavors = [
  {
    name: "Classic Chocolate Chip",
    img: cookieClassic,
    alt: "Chocolate chip cookies with walnuts",
    desc: "Semi-sweet & dark chocolate, crunchy walnuts.",
  },
  {
    name: "Dark Squared",
    img: cookieDark,
    alt: "Dark cocoa cookies with melted chocolate",
    desc: "Cocoa dough, semi-sweet & dark chocolate.",
  },
  {
    name: "Scarlet Red",
    img: cookieScarlet,
    alt: "Red velvet cookie with a cheesecake center",
    desc: "White chocolate, creamy cheesecake center.",
  },
  {
    name: "Pistachio Nut",
    img: cookiePistachio,
    alt: "Cookie with a creamy pistachio center",
    desc: "Hazelnut, white chocolate, creamy pistachio center.",
  },
  {
    name: "Berry Berry",
    img: cookieBerry,
    alt: "Cranberry and white chocolate cookies",
    desc: "Cranberries, white chocolate, lemon zest.",
  },
];

function Favorites() {
  const [active, setActive] = useState(0);
  const flavor = flavors[active]!;

  return (
    <section id="favorites" className="bg-cream px-6 py-28 sm:py-40">
      <div className="mx-auto max-w-6xl">
        <p className={label}>F A V O R I T E S</p>
        <Reveal as="h2" className="mt-8 font-display text-5xl sm:text-7xl">
          NEW YORK COOKIES
        </Reveal>
        <PriceTickets prices={["Solo 12 QAR", "3 pcs 35 QAR", "5 pcs 55 QAR"]} className="mt-5" />

        <div className="mt-16 grid gap-12 md:grid-cols-2 md:items-center">
          <div className="overflow-hidden bg-beige/40">
            <motion.img
              key={flavor.img}
              src={flavor.img}
              alt={flavor.alt}
              width={1000}
              height={1000}
              loading="lazy"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="aspect-square w-full object-cover"
            />
          </div>

          <div>
            <ul className="divide-y divide-border">
              {flavors.map((f, i) => (
                <li key={f.name}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    aria-pressed={i === active}
                    className={`relative w-full py-5 pl-6 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${
                      i === active ? "text-foreground" : "text-muted-foreground hover:text-espresso"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`absolute top-5 left-0 h-7 w-[3px] transition-opacity ${
                        i === active ? "bg-espresso opacity-100" : "opacity-0"
                      }`}
                    />
                    <span className="font-display text-2xl sm:text-3xl">{f.name}</span>
                    {i === active && (
                      <span
                        aria-hidden="true"
                        className="ml-3 inline-block translate-y-[-0.35em] border-b border-espresso pb-1 text-[0.55rem] tracking-[0.28em] text-espresso uppercase"
                      >
                        selected
                      </span>
                    )}
                    {i === active && (
                      <motion.span
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="mt-2 block text-xs leading-relaxed tracking-[0.14em] text-espresso uppercase"
                      >
                        {f.desc}
                      </motion.span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

type Comfort = {
  name: string;
  price: string[];
  note?: string;
  img?: string;
  alt?: string;
};

const comforts: Comfort[] = [
  { name: "Roasted Banana Loaf", price: ["40 QAR"], img: bananaLoaf, alt: "Sliced roasted banana loaf on parchment" },
  {
    name: "Classic Brownies",
    price: ["16 pcs / 59 QAR", "8 pcs / 32 QAR"],
    note: "Assorted or single flavor",
    img: browniesImg,
    alt: "Fudgy chocolate brownie squares",
  },
  { name: "Brownies on Crunch", price: ["16 pcs / 62 QAR", "8 pcs / 35 QAR"], img: browniesOnCrunchImg, alt: "Brownies on a crunchy base" },
  { name: "Original Oat Bar", price: ["16 pcs / 59 QAR", "8 pcs / 32 QAR"], img: oatBars, alt: "Stacked oat bars on a plate" },
  { name: "Oat Dates Bar", price: ["16 pcs / 62 QAR", "8 pcs / 35 QAR"], img: oatDatesBar, alt: "Oat and dates bar" },
];

function Comforts() {
  return (
    <section className="bg-ivory px-6 py-28 sm:py-40">
      <div className="mx-auto max-w-6xl">
        <p className={label}>T H E&nbsp;&nbsp;C O M F O R T S</p>
        <div className="mt-14 grid gap-x-12 gap-y-16 md:grid-cols-3">
          {comforts.map((c, i) => (
            <Reveal key={c.name} delay={(i % 3) * 0.08} className={i === 1 ? "md:pt-16" : ""}>
              <article>
                {c.img && (
                  <img
                    src={c.img}
                    alt={c.alt ?? c.name}
                    width={1000}
                    height={1200}
                    loading="lazy"
                    className="mb-6 aspect-4/5 w-full object-cover"
                  />
                )}
                <h3 className="font-display text-3xl">{c.name}</h3>
                {c.note && (
                  <p className="mt-1 text-xs tracking-[0.16em] text-muted-foreground uppercase">
                    {c.note}
                  </p>
                )}
                <PriceTickets prices={c.price} className="mt-3" />
                <TwineRule className="mt-6" width="5rem" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function LittleThings() {
  return (
    <section className="bg-cream px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-5xl space-y-10">
        <Reveal direction="left" className="font-display text-3xl sm:text-5xl">
          <p>Not every comfort needs explaining.</p>
        </Reveal>
        <Reveal
          direction="right"
          delay={0.1}
          className="text-right font-display text-3xl text-accent-foreground sm:text-5xl"
        >
          <p>
            Pistachio? Yeah, that&apos;s a{" "}
            <span style={{ color: "var(--pistachio)" }}>green flag.</span>
          </p>
        </Reveal>
        <Reveal direction="up" delay={0.2} className="font-display text-3xl sm:text-5xl">
          <p>Brownies? Always a yes.</p>
        </Reveal>
      </div>
    </section>
  );
}

function Distance() {
  return (
    <section className="grain bg-beige px-6 py-28 text-center sm:py-40">
      <div className="mx-auto max-w-3xl">
        <Reveal as="h2" className="font-display text-5xl sm:text-8xl">
          BRING ME SOME.
        </Reveal>
        <Reveal delay={0.15} className="mt-8 text-lg text-espresso sm:text-xl">
          <p>Apparently, &ldquo;bring me some&rdquo; has no distance limit!</p>
        </Reveal>
        <Reveal delay={0.3} className="mt-4 font-display text-2xl italic sm:text-3xl">
          <p>L.A., you&apos;re in for a treat.</p>
        </Reveal>
      </div>
    </section>
  );
}

function Connection() {
  return (
    <section className="bg-ivory px-6 py-40 text-center sm:py-56">
      <div className="mx-auto max-w-3xl">
        <Reveal direction="none" duration={1.6}>
          <p className="signature-line text-2xl leading-relaxed sm:text-4xl">{SIGNATURE}</p>
        </Reveal>
        <Reveal direction="none" duration={1.6} delay={0.5}>
          <p className="mx-auto mt-14 max-w-xl text-sm leading-loose tracking-[0.12em] text-muted-foreground">
            D&apos;SAINTS has always been about connecting lives, one moment at a time.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Invitation() {
  return (
    <footer id="contact" className="grain bg-chocolate px-6 py-28 text-ivory sm:py-36">
      <div className="mx-auto max-w-5xl">
        <Reveal as="h2" className="font-display text-4xl leading-tight sm:text-7xl">
          MAKE THE MOMENT COUNT.
        </Reveal>
        <Reveal delay={0.15} className="mt-6 text-base text-cream/80 sm:text-lg">
          <p>Some things are simply better when shared.</p>
        </Reveal>
        <Reveal delay={0.3} className="mt-4">
          <span className="signature-line text-cream/70">{SIGNATURE}</span>
        </Reveal>

        <div className="mt-14 flex flex-wrap gap-4">
          <StampLink href={ORDER_HREF}>ORDER / INQUIRE</StampLink>
          <StampLink href="https://wa.me/97455881795" variant="outline" external>
            WHATSAPP
          </StampLink>
        </div>

        <TwineRule className="mt-16" tone="ivory" width="10rem" />

        <div className="mt-10 grid gap-8 text-sm text-cream/75 sm:grid-cols-2">
          <address className="space-y-1 not-italic">
            <p>Doha, Qatar</p>
            <p>
              <a href="tel:+97455881795" className="hover:text-ivory">
                +974 5588 1795
              </a>
            </p>
            <p>
              <a href="tel:+97455423214" className="hover:text-ivory">
                +974 5542 3214
              </a>
            </p>
          </address>
          <ul className="space-y-1 sm:text-right">
            <li>
              <a
                href="https://instagram.com/dsaints.qa"
                target="_blank"
                rel="noreferrer"
                className="hover:text-ivory"
              >
                Instagram @dsaints.qa
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com/DsaintsFood"
                target="_blank"
                rel="noreferrer"
                className="hover:text-ivory"
              >
                Facebook DsaintsFood
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-20 text-center">
          <p
            className="font-logo inline-block bg-[#FFF4CD] px-4 py-1.5 text-4xl tracking-[0.1em] text-chocolate sm:px-5 sm:text-6xl"
            style={{ borderRadius: "3px" }}
          >
            D&apos;SAINTS
          </p>
          <p className="mt-3 text-[0.65rem] tracking-[0.4em] text-cream/60">EST. 2020</p>
          <p className="mt-6">
            <span className="signature-line text-sm text-cream/60">{SIGNATURE}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <>
      <Nav />
      <OrderTag />
      <main>
        <Hero />
        <FirstMoment />
        <Story />
        <Philosophy />
        <SignatureCollection />
        <Cakes />
        <Favorites />
        <Comforts />
        <LittleThings />
        <Distance />
        <Connection />
      </main>
      <Invitation />
    </>
  );
}
