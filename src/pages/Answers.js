import { firestore } from "../firebase";
import { collection, getDocs } from "@firebase/firestore";
import Nav from "../components/Nav";
import { useEffect, useState } from "react";
import AnswerCard from "../components/AnswerCard";

function Answers() {
  const [answers, setAnswers] = useState([]);
  const docRef = collection(firestore, "user_info");

  useEffect(() => {
    getDocs(docRef).then((res) => {
      const docs = [];
      res.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setAnswers(docs);
    });
  }, [docRef]);

  return (
    <div className="bg-zinc-800 min-h-screen ">
      <div className="max-w-2xl mx-auto pt-4">
        <Nav route="answers" />
        {answers.length === 0 && (
          <div className="bg-white p-4 mt-4">Todavía no hay respuestas!</div>
        )}
        {answers.length > 0 && (
          <div className="pt-4">
            <AnswerCard
              question="Nombre Completo:"
              answer={answers[answers.length - 1].full_name}
            />
            <AnswerCard
              question="Correo Electrónico:"
              answer={answers[answers.length - 1].email}
            />
            <AnswerCard
              question="Fecha de Nacimiento:"
              answer={answers[answers.length - 1].birth_date}
            />
            <AnswerCard
              question="País de origen:"
              answer={answers[answers.length - 1].country_of_origin}
            />
            <AnswerCard
              question="Términos y condiciones:"
              answer={
                answers[answers.length - 1].terms_and_conditions
                  ? "ACEPTADOS"
                  : "RECHAZADOS"
              }
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Answers;
