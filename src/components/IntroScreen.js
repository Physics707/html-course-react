import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

/**
 * Неоновая заставка с плавающими частицами.
 * Показывается при первом запуске (запоминается в localStorage).
 */
export default function IntroScreen() {
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const seen = localStorage.getItem("intro_seen");
    if (seen) setVisible(false);
  }, []);

  function handleStart() {
    localStorage.setItem("intro_seen", "true");
    setVisible(false);
    navigate("/");
  }

  // создаём 20 частиц с случайным расположением и движением
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    size: Math.random() * 6 + 4,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 6 + 6,
    color:
      Math.random() > 0.5
        ? "rgba(0,255,255,0.6)"
        : "rgba(0,180,255,0.5)",
  }));

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 overflow-hidden bg-gradient-to-br from-slate-950 via-sky-950 to-indigo-900 flex flex-col items-center justify-center z-50"
        >
          {/* --- анимированные неоновые частицы --- */}
          <div className="absolute inset-0 pointer-events-none">
            {particles.map((p) => (
              <motion.span
                key={p.id}
                className="absolute rounded-full blur-lg"
                style={{
                  width: p.size,
                  height: p.size,
                  backgroundColor: p.color,
                  top: `${p.y}%`,
                  left: `${p.x}%`,
                }}
                animate={{
                  y: [`${p.y}%`, `${p.y + (Math.random() * 20 - 10)}%`],
                  x: [`${p.x}%`, `${p.x + (Math.random() * 20 - 10)}%`],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: p.duration,
                  delay: p.delay,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* --- основной контент заставки --- */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center relative z-10"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-cyan-400 drop-shadow-[0_0_20px_#00ffff]">
              HTML КУРС 72 ЧАСА
            </h1>
            <p className="mt-3 text-cyan-200 text-lg md:text-xl opacity-90">
              Интерактивное обучение с тестами, подсказками и анимацией
            </p>
          </motion.div>

          <motion.button
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            onClick={handleStart}
            className="mt-10 px-8 py-4 text-lg font-semibold rounded-xl bg-cyan-700 hover:bg-cyan-600 text-white shadow-lg shadow-cyan-500/40 border border-cyan-400/40 relative z-10"
          >
            🚀 Начать обучение
          </motion.button>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ delay: 1, duration: 1.5 }}
            className="absolute bottom-6 text-sm text-cyan-200 tracking-wide z-10"
          >
            Учебный проект © 2025 — React + TailwindCSS + Framer Motion
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
