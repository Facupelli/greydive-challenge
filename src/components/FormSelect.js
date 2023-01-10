import { handleOnChange } from "../utils/form";

export default function FormSelect({ item, setValues, values }) {
  return (
    <>
      <label htmlFor={item.name}>{item.label}</label>

      <select
        onChange={(e) => handleOnChange(e, setValues, item.type, item.name)}
        className="self-start border border-slate-400 rounded-sm px-2"
        value={values[item.name]}
      >
        {item.options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
}
