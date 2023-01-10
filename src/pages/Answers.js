import { useEffect, useState } from "react";
import { getUsers } from "../utils/api";

import Nav from "../components/Nav";
import AnswerCard from "../components/AnswerCard";
import PageLayout from "../components/PageLayout";

function Answers() {
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllInfo = async () => {
      const querySnapshot = await getUsers();
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setAnswers(docs);
    };

    getAllInfo();
    setLoading(false);
  }, []);

  return (
    <PageLayout>
      <Nav route="answers" />
      {answers.length === 0 && !loading && (
        <div className="bg-white p-4 mt-4">Todavía no hay respuestas!</div>
      )}

      {loading && <div className="bg-white p-4 mt-4">Cargando...</div>}

      {answers.length > 0 && (
        <div className="pt-4">
          <AnswerCard
            question="Nombre Completo:"
            answer={answers[0].full_name}
          />
          <AnswerCard
            question="Correo Electrónico:"
            answer={answers[0].email}
          />
          <AnswerCard
            question="Fecha de Nacimiento:"
            answer={answers[0].birth_date}
          />
          <AnswerCard
            question="País de origen:"
            answer={answers[0].country_of_origin}
          />
          <AnswerCard
            question="Términos y condiciones:"
            answer={
              answers[0].terms_and_conditions ? "ACEPTADOS" : "RECHAZADOS"
            }
          />
        </div>
      )}
    </PageLayout>
  );
}

export default Answers;
