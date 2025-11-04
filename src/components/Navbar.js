import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-slate-900 shadow-lg shadow-cyan-500/20 p-4 flex justify-between items-center">
      <h1 className="text-neonBlue text-xl font-bold tracking-wide">HTML Курс 72 часа</h1>
      <div className="space-x-4">
        <Link className="hover:text-cyanGlow" to="/">Главная</Link>
        <Link className="hover:text-cyanGlow" to="/final">Итог</Link>
      </div>
    </nav>
  );
}
