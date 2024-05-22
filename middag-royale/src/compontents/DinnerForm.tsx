// components/DinnerForm.tsx
import React, { useState } from "react";
import db from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { Button, Input, Checkbox, Textarea } from '@nextui-org/react';

interface DinnerFormProps {
  onFormSubmit: () => void; // Callback function to refresh list
}

const DinnerForm: React.FC<DinnerFormProps> = ({ onFormSubmit }) => {
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
      // Call the callback function to refresh the list
      onFormSubmit();
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-6 p-6 bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-white">ANMÄLAN</h2>
      <label className="flex flex-col">
        <span className="text-lg font-semibold text-white">Ditt Namn</span>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Vem e du?"
          className="text-white bg-gray-800 border-none focus:ring-blue-500"
        />
      </label>
      <label className="flex items-center">
        <Checkbox
          checked={attending}
          onChange={(e) => setAttending(e.target.checked)}
          className="text-blue-500"
        />
        <span className="ml-2 text-lg font-semibold text-white">Jag kommer</span>
      </label>
      <label className="flex flex-col">
        <span className="text-lg font-semibold text-white">Skriv en snapsvisa</span>
        <Textarea
          value={anecdote}
          onChange={(e) => setAnecdote(e.target.value)}
          placeholder="koooooom igen det blir kul"
          className="text-white bg-gray-800 border-none focus:ring-blue-500"
        />
      </label>
      <Button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold">
        Anmäl
      </Button>
    </form>
  );
};

export default DinnerForm;
