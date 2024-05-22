import { useState } from "react";
import "./App.css";
import Lighter from "./compontents/CiggaretteLighterParts/Lighter";
import Cigarette from "./compontents/CiggaretteLighterParts/Ciggarette";
import DinnerForm from "./compontents/DinnerForm";
import DinnerList from "./compontents/DinnerList";

function App() {
  const [touchedFlame, setTouchedFlame] = useState(false);
  const [showFormAndList, setShowFormAndList] = useState(false);

  const handleFlameTouch = () => {
    setTouchedFlame(true);
    setTimeout(() => {
      setShowFormAndList(true);
    }, 3000); // Show form and list after 3 seconds
  };

  const refreshList = () => {
    // Function to refresh the list, called after form submission
    setShowFormAndList(false); // Hide the list temporarily
    setTimeout(() => {
      setShowFormAndList(true); // Show the list after a short delay for re-rendering
    }, 100);
  };

  return (
    <>
      <div className="bg-black min-h-screen flex justify-center items-center p-0 m-0">
        <div className="text-center relative">
          <h1 className="text-4xl font-bold text-white mb-6">MIDDAG ROYALE</h1>
          <p className="text-lg text-gray-300 mb-1">
            Äntligen är tiden kommen...
          </p>
          <p className="text-lg text-gray-300 mb-8">Tänd ciggen för anmälan</p>
          {!showFormAndList && (
            <>
              <Cigarette
                touchedFlame={touchedFlame}
                setTouchedFlame={handleFlameTouch}
              />{" "}
              <Lighter />
            </>
          )}
          {showFormAndList && (
            <>
              <DinnerForm onFormSubmit={refreshList} /> 
              <DinnerList />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;