import TestBlock from "../components/TestBlock";
import tests from "../data/tests";

export default function Module6() {
  return (
    <div className="max-w-3xl mx-auto space-y-5 text-cyan-100">
      <h2 className="text-3xl font-bold text-cyan-300">
        Модуль 6. Элементы построения web-страницы
      </h2>
      <p>
        Этот модуль посвящён созданию реальной структуры веб-страницы:
        блочные и строчные элементы, списки, таблицы, формы и поля ввода данных.
        Вы научитесь собирать полноценную HTML-страницу с интерактивными
        элементами.
      </p>

      <div className="p-4 border border-cyan-500/30 rounded-xl bg-slate-900/60">
        <pre>{`<h2>Пример формы:</h2>
<form action="/submit" method="post">
  <label>Имя: <input type="text" name="name" /></label><br />
  <label>Email: <input type="email" name="email" /></label><br />
  <input type="submit" value="Отправить" />
</form>

<h3>Пример списка:</h3>
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>`}</pre>
      </div>

      <TestBlock
        title="Тест по модулю 6"
        questions={tests[6]}
        mode="module"
        moduleId={6}
      />
    </div>
  );
}
