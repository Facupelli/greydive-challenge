export const handleOnChange = (e, setValues, item_type, item_name) => {
  setValues((prev) => ({
    ...prev,
    [item_name]: item_type === "checkbox" ? e.target.checked : e.target.value,
  }));
};
