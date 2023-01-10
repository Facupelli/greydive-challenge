import { useEffect, useState } from "react";
import { getUsers } from "../utils/api";

import Nav from "../components/Nav";
import AnswerCard from "../components/AnswerCard";
import PageLayout from "../components/PageLayout";

function Answers() {
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllUsers = async () => {
      const querySnapshot = await getUsers();
      const docs = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setAnswers(docs);
    };

    getAllUsers();
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
            answer={answers.at(-1).full_name}
          />
          <AnswerCard
            question="Correo Electrónico:"
            answer={answers.at(-1).email}
          />
          <AnswerCard
            question="Fecha de Nacimiento:"
            answer={answers.at(-1).birth_date}
          />
          <AnswerCard
            question="País de origen:"
            answer={answers.at(-1).country_of_origin}
          />
          <AnswerCard
            question="Términos y condiciones:"
            answer={
              answers.at(-1).terms_and_conditions ? "ACEPTADOS" : "RECHAZADOS"
            }
          />
        </div>
      )}
    </PageLayout>
  );
}

export default Answers;
