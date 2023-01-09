export const fetchItems = async () => {
  return await fetch("data.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
};
