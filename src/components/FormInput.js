import { handleOnChange } from "../utils/form";

export default function FormInput({ item, setValues }) {
  return (
    <>
      <label htmlFor={item.name}>{item.label}</label>
      <input
        className={`self-start border border-slate-400 rounded-sm px-2 ${
          item.type === "text" || item.type === "email" ? "w-full" : ""
        }`}
        onChange={(e) => handleOnChange(e, setValues, item.type, item.name)}
        type={item.type}
        required={item.required}
        name={item.name}
        id={item.name}
      />
    </>
  );
}
