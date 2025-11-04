import { Link } from "react-router-dom";
import modules from "../data/modules";
import ProgressBar from "../components/ProgressBar";
import { totals, getModuleScore } from "../utils/storage";

export default function Home() {
  const totalInfo = totals();
  const maxModules = modules.length;

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-neonBlue mb-2">Учебный план — 72 часа</h2>
      <div className="mb-6">
        <div className="mb-2 text-sm opacity-90">
          Выполнено модулей: {totalInfo.completed}/{maxModules} •
          Баллы: {totalInfo.sumScore}/{totalInfo.sumTotal || 0}
        </div>
        <ProgressBar value={totalInfo.completed} max={maxModules} />
      </div>

      <div className="space-y-4">
        {modules.map((m) => {
          const res = getModuleScore(m.id);
          return (
            <div key={m.id} className="border border-cyan-500/50 p-4 rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 transition">
              <div className="flex justify-between gap-4 flex-col sm:flex-row">
                <div>
                  <h3 className="text-xl font-semibold text-cyan-200">{m.title}</h3>
                  <p className="text-sm opacity-80 mt-1">{m.desc}</p>
                  <p className="text-sm mt-1">⏱ {m.hours} ч • 📘 {m.lectures} лекц • 🧠 {m.selfwork} самост • 🧩 {m.test} тест</p>
                </div>
                <div className="min-w-[170px]">
                  {res ? (
                    <div className="text-sm">
                      Пройдено: <span className="font-semibold">{res.score}/{res.total}</span>
                      <div className="opacity-70">{new Date(res.date).toLocaleDateString()}</div>
                    </div>
                  ) : <div className="text-sm opacity-70">Ещё не пройдено</div>}
                  <Link
                    to={`/module${m.id}`}
                    className="inline-block mt-2 px-4 py-2 bg-cyan-700 hover:bg-cyan-600 rounded-xl text-white"
                  >
                    Перейти →
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 p-4 border border-emerald-500/40 rounded-xl">
        <div className="flex items-center justify-between gap-3 flex-col sm:flex-row">
          <div>
            <h4 className="font-semibold text-emerald-300">Итоговая аттестация</h4>
            <p className="text-sm opacity-80">
              Содержит вопросы по всем модулям. Результат сохраняется.
            </p>
          </div>
          <Link to="/final" className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white">
            Пройти итоговый тест →
          </Link>
        </div>
      </div>
    </div>
  );
}
