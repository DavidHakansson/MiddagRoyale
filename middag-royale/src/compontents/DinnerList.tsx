// components/DinnerList.tsx
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase";

interface DinnerRegistration {
  id: string;
  name: string;
  attending: boolean;
  anecdote: string;
}

const DinnerList: React.FC = () => {
  const [registrations, setRegistrations] = useState<DinnerRegistration[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "dinnerRegistrations"));
        const data: DinnerRegistration[] = [];
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() } as DinnerRegistration);
        });
        setRegistrations(data);
      } catch (error) {
        console.error("Error fetching documents: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <ul>
      {registrations.map((registration) => (
        <li key={registration.id}>
          <strong>{registration.name}</strong> {registration.attending ? "is attending" : "is not attending"}
          <p>{registration.anecdote}</p>
        </li>
      ))}
    </ul>
  );
};

export default DinnerList;
