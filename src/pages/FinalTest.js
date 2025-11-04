import TestBlock from "../components/TestBlock";
import { allFinalQuestions } from "../data/tests";

export default function FinalTest() {
  const questions = allFinalQuestions(); // все вопросы курса
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-cyan-300">Итоговая аттестация</h2>
      <p className="mt-2 opacity-90">Содержит вопросы по всем модулям курса.</p>
      <TestBlock title="Итоговый тест" questions={questions} mode="final" />
    </div>
  );
}
