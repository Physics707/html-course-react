import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { setModuleScore, setFinalScore } from "../utils/storage";

/**
 * Тестовый компонент с режимами и плавной анимацией.
 * Режимы:
 *  - Учебный: с пояснениями и подсветкой
 *  - Экзамен: без подсказок
 */
export default function TestBlock({ title, questions = [], mode = "module", moduleId }) {
  const [selectedMode, setSelectedMode] = useState(null); // 'study' | 'exam'
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [done, setDone] = useState(false);
  const [showExplain, setShowExplain] = useState(Array(questions.length).fill(false));

  const score = useMemo(
    () => answers.reduce((s, a, i) => (a === questions[i].correct ? s + 1 : s), 0),
    [answers, questions]
  );

  const q = questions[step];

  function choose(idx) {
    if (done) return;
    const next = [...answers];
    next[step] = idx;
    setAnswers(next);
    if (selectedMode === "study") {
      const ex = [...showExplain];
      ex[step] = true;
      setShowExplain(ex);
    }
  }

  function next() {
    if (step < questions.length - 1) setStep(step + 1);
  }
  function prev() {
    if (step > 0) setStep(step - 1);
  }

  function finish() {
    const res = { score, total: questions.length, date: new Date().toISOString() };
    if (mode === "module") setModuleScore(moduleId, res);
    else setFinalScore(res);
    setDone(true);
  }

  // --- выбор режима ---
  if (!selectedMode) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mt-6 border border-cyan-500/40 rounded-2xl p-5 bg-slate-900/60 text-center"
      >
        <h3 className="text-2xl font-semibold text-cyan-300 mb-4">{title}</h3>
        <p className="text-cyan-100/80 mb-6">
          Выберите режим прохождения теста:
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button
            onClick={() => setSelectedMode("study")}
            className="px-6 py-3 bg-cyan-700 hover:bg-cyan-600 rounded-xl text-white font-medium shadow-md shadow-cyan-500/20"
          >
            🧩 Учебный (с пояснениями)
          </button>
          <button
            onClick={() => setSelectedMode("exam")}
            className="px-6 py-3 bg-emerald-700 hover:bg-emerald-600 rounded-xl text-white font-medium shadow-md shadow-emerald-500/20"
          >
            🏁 Экзамен (без пояснений)
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="mt-6 border border-cyan-500/40 rounded-2xl p-5 bg-slate-900/60">
      <h3 className="text-xl font-semibold text-cyan-200">{title}</h3>

      {!done ? (
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <p className="mt-4 text-cyan-100/90">
              Вопрос {step + 1} из {questions.length}
            </p>

            <div className="mt-3 p-4 bg-slate-800 rounded-xl border border-cyan-500/20">
              <div className="font-medium whitespace-pre-line">{q.q}</div>

              <ul className="mt-3 space-y-2">
                {q.options.map((opt, i) => {
                  const picked = answers[step] === i;
                  const correct = q.correct === i;
                  let style =
                    "w-full text-left px-3 py-2 rounded-xl border transition duration-200 ";
                  if (picked && correct && selectedMode === "study")
                    style += "border-emerald-500 bg-emerald-800/40";
                  else if (picked && !correct && selectedMode === "study")
                    style += "border-rose-500 bg-rose-800/40";
                  else
                    style +=
                      "border-slate-700 hover:border-cyan-500/40 hover:bg-slate-700/50";

                  return (
                    <li key={i}>
                      <button
                        onClick={() => choose(i)}
                        disabled={showExplain[step] && selectedMode === "study"}
                        className={style}
                      >
                        {opt}
                      </button>
                    </li>
                  );
                })}
              </ul>

              {selectedMode === "study" && showExplain[step] && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="mt-3 text-sm text-cyan-100/80 border-t border-cyan-500/30 pt-2"
                >
                  <p>
                    ✅ Правильный ответ:{" "}
                    <span className="text-emerald-400 font-semibold">
                      {q.options[q.correct]}
                    </span>
                  </p>
                  {q.explain && (
                    <p className="mt-1 opacity-90">💡 {q.explain}</p>
                  )}
                </motion.div>
              )}
            </div>

            <div className="mt-4 flex gap-2 flex-wrap justify-between">
              <button
                onClick={prev}
                disabled={step === 0}
                className="px-4 py-2 rounded-xl bg-slate-800 border border-slate-700 hover:border-cyan-500/40 disabled:opacity-40"
              >
                ← Назад
              </button>
              {step < questions.length - 1 ? (
                <button
                  onClick={next}
                  className="px-4 py-2 rounded-xl bg-cyan-700 hover:bg-cyan-600 text-white"
                >
                  Далее →
                </button>
              ) : (
                <button
                  onClick={finish}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white"
                >
                  Завершить тест
                </button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="mt-4 text-center"
        >
          <div className="text-2xl font-bold text-emerald-400">
            Результат: {score} / {questions.length}
          </div>
          <p className="mt-2 text-sm opacity-80">
            {selectedMode === "exam"
              ? "Вы прошли экзамен без подсказок. Отличная работа!"
              : "Вы завершили учебный тест. Продолжайте обучение!"}
          </p>
        </motion.div>
      )}
    </div>
  );
}
