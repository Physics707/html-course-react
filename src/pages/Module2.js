import TestBlock from "../components/TestBlock";
import tests from "../data/tests";

export default function Module2() {
  return (
    <div className="max-w-3xl mx-auto space-y-5 text-cyan-100">
      <h2 className="text-3xl font-bold text-cyan-300">
        Модуль 2. Основные элементы гипертекстовой разметки
      </h2>
      <p>
        В этом модуле вы познакомитесь с парными и одиночными тегами, их
        атрибутами и структурой документа HTML. Вы узнаете, что такое
        заголовки, абзацы, переносы строк и комментарии.
      </p>

      <div className="p-4 border border-cyan-500/30 rounded-xl bg-slate-900/60">
        <pre>{`<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <title>Основные теги</title>
</head>
<body>
  <h1>Это заголовок первого уровня</h1>
  <p>А это абзац текста с <b>жирным</b> и <i>курсивом</i>.</p>
  <hr />
  <p>Следующий абзац начинается ниже.</p>
</body>
</html>`}</pre>
      </div>

      <TestBlock
        title="Тест по модулю 2"
        questions={tests[2]}
        mode="module"
        moduleId={2}
      />
    </div>
  );
}
