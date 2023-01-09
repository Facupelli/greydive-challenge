export default function FormSubmitBtn({ item }) {
  return (
    <input
      className="bg-rose-600 text-white p-2 font-semibold cursor-pointer"
      type={item.type}
    />
  );
}
