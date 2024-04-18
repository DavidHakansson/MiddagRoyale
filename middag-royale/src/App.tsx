import "./App.css";
import { Button } from "@nextui-org/react";
import LighterAndCig from "./compontents/LighterAndCig";
function playVideo() {
  window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}

function App() {
  
  return (
    <>
      <div className="bg-black min-h-screen flex justify-center items-center p-0 m-0">
        <div className="text-center relative">
          <h1 className="text-4xl font-bold text-white mb-6">MIDDAG ROYALE</h1>
          <p className="text-lg text-gray-300 mb-8">
            Äntligen är tiden kommen...
          </p>

          <Button
            color="default"
            className="px-8 py-4 text-lg mb-10"
            onClick={playVideo}
          >
            Mer info
          </Button>
          <LighterAndCig/>
        </div>
      </div>
    </>
  );
}

export default App;
