import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";

type Layer = {
  d: number; w: number; blur: number; o: number; cookie?: boolean;
  items: [number, number, number][];
};
// item = [left %, top %, rotate deg]
const LAYERS: Layer[] = [
  { d: 40, w: 10, blur: 2, o: 0.4, items: [[8,12,0],[30,70,40],[55,30,80],[78,85,20],[92,45,60],[66,8,10]] },
  { d: 110, w: 16, blur: 0, o: 0.7, items: [[15,50,15],[45,15,60],[70,60,100],[88,20,30],[35,90,75],[60,40,5]] },
  { d: 220, w: 56, blur: 1.5, o: 0.9, cookie: true, items: [[4,20,-20],[90,60,25],[50,92,10]] },
];

const Crumb = () => (
  <svg viewBox="0 0 16 16" fill="#C68B4E"><path d="M2 6 7 1l6 3-2 7-8-1z" /></svg>
);

const Cookie = () => (
  <svg viewBox="0 0 64 64">
    <circle cx="32" cy="32" r="30" fill="#C68B4E" />
    <g fill="#5A3A22">
      <circle cx="20" cy="24" r="4" /><circle cx="40" cy="20" r="3.5" />
      <circle cx="34" cy="38" r="4.5" /><circle cx="18" cy="42" r="3" />
      <circle cx="46" cy="44" r="3.5" />
    </g>
  </svg>
);

const Brownie = () => (
  <svg viewBox="0 0 64 64">
    <rect x="6" y="6" width="52" height="52" rx="4" fill="#3B2418" />
    <path
      d="M12 20c8 6 16-6 24 0s16-6 20 2"
      stroke="#6B4A32" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.6"
    />
    <g fill="#8A6248">
      <circle cx="20" cy="38" r="3" /><circle cx="38" cy="44" r="2.5" />
      <circle cx="46" cy="24" r="2.5" />
    </g>
  </svg>
);

function Piece({ p, layer, item, i, shape }: {
  p: MotionValue<number>; layer: Layer; item: [number, number, number]; i: number;
  shape: "cookie" | "brownie";
}) {
  const y = useTransform(p, [0, 1], [layer.d, -layer.d]);
  const [x, top, rotate] = item;
  return (
    <motion.div
      className={`absolute ${i > 2 ? "hidden md:block" : ""}`}
      style={{
        left: `${x}%`, top: `${top}%`, y, rotate,
        width: layer.w, opacity: layer.o, filter: `blur(${layer.blur}px)`,
      }}
    >
      {layer.cookie ? shape === "brownie" ? <Brownie /> : <Cookie /> : <Crumb />}
    </motion.div>
  );
}

export function Parallax({ sparse = false, variant = "cookie" }: {
  sparse?: boolean; variant?: "cookie" | "brownie";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  return (
    <div ref={ref} aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {LAYERS.map((l) =>
        l.items
          .slice(0, sparse ? Math.ceil(l.items.length / 2) : l.items.length)
          .map((it, i) => (
            <Piece key={`${l.d}-${i}`} p={scrollYProgress} layer={l} item={it} i={i} shape={variant} />
          ))
      )}
    </div>
  );
}