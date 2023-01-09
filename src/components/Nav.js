import { Link } from "react-router-dom";

export default function Nav({ route }) {
  return (
    <nav>
      <ul className="flex text-center justify-around cursor-pointer">
        <li
          className={`border-b-2 w-full p-2 text-white ${
            route === "questions"
              ? "border-rose-600 font-semibold"
              : "border-slate-300"
          }`}
        >
          <Link to="/">Preguntas</Link>
        </li>
        <li
          className={`border-b-2 w-full p-2 text-white ${
            route === "answers"
              ? "border-rose-600 font-semibold"
              : "border-slate-300"
          }`}
        >
          <Link to="/answers">Respuestas</Link>
        </li>
      </ul>
    </nav>
  );
}
