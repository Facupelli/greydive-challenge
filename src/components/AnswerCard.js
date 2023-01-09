export default function AnswerCard({ question, answer }) {
  return (
    <div className="bg-slate-50 p-4 my-2 rounded-sm flex flex-col  shadow-sm">
      <p>{question}</p>
      <p className="font-semibold">{answer}</p>
    </div>
  );
}
