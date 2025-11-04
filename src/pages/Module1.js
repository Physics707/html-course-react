import TestBlock from "../components/TestBlock";
import tests from "../data/tests";

export default function Module1() {
  return (
    <div className="max-w-3xl mx-auto space-y-5">
      <h2 className="text-3xl font-bold text-cyan-300">Модуль 1. Введение в HTML</h2>
      <p className="opacity-90">
        Инструменты, редактор, браузер, структура документа, базовые теги и атрибуты.
      </p>

      <div className="p-4 border border-cyan-500/30 rounded-xl bg-slate-900/60">
        <pre>{`<!doctype html>
<html lang="ru">
<head>
  <meta charset="utf-8" />
  <title>Первая страница</title>
</head>
<body>
  <h1>Привет, мир!</h1>
</body>
</html>`}</pre>
      </div>

      <TestBlock
        title="Тест по модулю 1"
        questions={tests[1]}
        mode="module"
        moduleId={1}
      />
    </div>
  );
}
