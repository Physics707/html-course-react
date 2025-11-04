import TestBlock from "../components/TestBlock";
import tests from "../data/tests";

export default function Module3() {
  return (
    <div className="max-w-3xl mx-auto space-y-5 text-cyan-100">
      <h2 className="text-3xl font-bold text-cyan-300">
        Модуль 3. Работа со ссылками
      </h2>
      <p>
        Ссылки — это ключевой элемент гипертекста. В этом модуле вы узнаете о
        различиях между абсолютными и относительными путями, атрибуте
        <code> href</code>, а также о создании якорей для навигации внутри
        страницы.
      </p>

      <div className="p-4 border border-cyan-500/30 rounded-xl bg-slate-900/60">
        <pre>{`<h2>Пример ссылки:</h2>
<a href="https://example.com" target="_blank">Перейти на сайт</a>

<h3>Внутренняя ссылка:</h3>
<a href="#section1">К разделу 1</a>

<h3 id="section1">Раздел 1</h3>
<p>Это текст раздела, на который ведет ссылка.</p>`}</pre>
      </div>

      <TestBlock
        title="Тест по модулю 3"
        questions={tests[3]}
        mode="module"
        moduleId={3}
      />
    </div>
  );
}
