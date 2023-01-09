import { firestore } from "../firebase";
import { addDoc, collection } from "@firebase/firestore";
import { Link } from "react-router-dom";
import { useState } from "react";

import { useFetchItems } from "../hooks/useFetchItems";

import FormInput from "../components/FormInput";
import FormSelect from "../components/FormSelect";
import FormSubmitBtn from "../components/FormSubmitBtn";
import Nav from "../components/Nav";
import Modal from "../components/Modal";

function Questions() {
  const collectionRef = collection(firestore, "user_info");

  const { items } = useFetchItems();

  const [values, setValues] = useState({
    full_name: "",
    email: "",
    birth_date: "",
    country_of_origin: "argentina",
    terms_and_conditions: false,
  });

  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);

    try {
      await addDoc(collectionRef, values);
      setValues({
        full_name: "",
        email: "",
        birth_date: "",
        country_of_origin: "argentina",
        terms_and_conditions: false,
      });
      setShowModal(true);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {showModal && (
        <Modal>
          <div className="flex flex-col">
            <button
              className="self-end cursor-pointer"
              onClick={() => setShowModal(false)}
              type="button"
            >
              X
            </button>
            Respuestas enviadas con éxito.
            <Link
              to="/answers"
              className="p-1 px-2 mt-4 self-center rounded  bg-rose-400 text-white"
            >
              ver respuestas
            </Link>
          </div>
        </Modal>
      )}
      <div className="bg-zinc-800 min-h-screen ">
        <div className="max-w-2xl mx-auto pt-4">
          <Nav route="questions" />

          {items.length > 0 && (
            <form onSubmit={handleSubmit} className="pt-4">
              {items.map((item) => (
                <div
                  key={item.label}
                  className="bg-slate-50 p-4 my-2 rounded-sm flex flex-col gap-3 shadow-sm"
                >
                  {item.options && (
                    <FormSelect item={item} setValues={setValues} />
                  )}
                  {!item.options && item.name && (
                    <FormInput item={item} setValues={setValues} />
                  )}
                  {item.type === "submit" && <FormSubmitBtn item={item} />}
                </div>
              ))}
            </form>
          )}
        </div>
      </div>
    </>
  );
}

export default Questions;
