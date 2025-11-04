const KEY = "html_course_progress_v1";

export function readProgress() {
  const raw = localStorage.getItem(KEY);
  return raw ? JSON.parse(raw) : { modules: {}, final: null };
}

export function writeProgress(next) {
  localStorage.setItem(KEY, JSON.stringify(next));
}

export function setModuleScore(moduleId, scoreObj) {
  const data = readProgress();
  data.modules[moduleId] = scoreObj; // {score, total, date}
  writeProgress(data);
}

export function getModuleScore(moduleId) {
  return readProgress().modules[moduleId] || null;
}

export function setFinalScore(scoreObj) {
  const data = readProgress();
  data.final = scoreObj;
  writeProgress(data);
}

export function totals() {
  const { modules, final } = readProgress();
  const completed = Object.values(modules).filter(Boolean).length;
  const sumScore = Object.values(modules).reduce((s, m) => s + (m?.score || 0), 0);
  const sumTotal = Object.values(modules).reduce((s, m) => s + (m?.total || 0), 0);
  return { completed, sumScore, sumTotal, final };
}
