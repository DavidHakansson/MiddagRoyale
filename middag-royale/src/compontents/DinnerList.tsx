import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase";
import { Card, Spacer } from "@nextui-org/react";

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
    <div className="flex flex-col space-y-4">
      <h2 className="text-2xl font-bold text-white">Anmälda vänner:</h2>
      {registrations.map((registration) => (
        <Card key={registration.id} className="bg-gray-900">
          <h3 className="text-lg font-semibold text-white">{registration.name}</h3>
          <p className="text-white">{registration.attending ? "kommer" : "kommer inte, varför anmälde du dig ens?"}</p>
          <Spacer y={1} />
          <p className="text-white">{registration.anecdote}</p>
        </Card>
      ))}
    </div>
  );
};

export default DinnerList;
