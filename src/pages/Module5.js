import TestBlock from "../components/TestBlock";
import tests from "../data/tests";

export default function Module5() {
  return (
    <div className="max-w-3xl mx-auto space-y-5 text-cyan-100">
      <h2 className="text-3xl font-bold text-cyan-300">
        Модуль 5. Работа с текстом
      </h2>
      <p>
        В этом модуле изучается оформление текста: выравнивание, выделение,
        подстрочные и надстрочные символы, а также использование тегов{" "}
        <code>&lt;b&gt;</code>, <code>&lt;strong&gt;</code>,{" "}
        <code>&lt;em&gt;</code>, <code>&lt;sup&gt;</code>, <code>&lt;sub&gt;</code>.
      </p>

      <div className="p-4 border border-cyan-500/30 rounded-xl bg-slate-900/60">
        <pre>{`<p>Текст можно сделать <b>жирным</b>, <i>курсивным</i> или <u>подчеркнутым</u>.</p>
<p>Формулы с индексами: H<sub>2</sub>O, E = mc<sup>2</sup></p>
<p style="text-align: center;">Этот текст выровнен по центру.</p>`}</pre>
      </div>

      <TestBlock
        title="Тест по модулю 5"
        questions={tests[5]}
        mode="module"
        moduleId={5}
      />
    </div>
  );
}
