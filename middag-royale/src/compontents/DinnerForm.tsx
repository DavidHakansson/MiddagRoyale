// components/DinnerForm.tsx
import React, { useState } from "react";
import db from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const DinnerForm: React.FC = () => {
  const [name, setName] = useState("");
  const [attending, setAttending] = useState(true);
  const [anecdote, setAnecdote] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "dinnerRegistrations"), {
        name,
        attending,
        anecdote,
      });
      setName("");
      setAnecdote("");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Attending:
        <input type="checkbox" checked={attending} onChange={(e) => setAttending(e.target.checked)} />
      </label>
      <label>
        Anecdote:
        <textarea value={anecdote} onChange={(e) => setAnecdote(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default DinnerForm;
