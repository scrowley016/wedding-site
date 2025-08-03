import AnimatedLanding from "./components/AnimatedLanding";
import WeddingInfo from "./components/WeddingInfo"
import { useState } from "react";


const App =()=>  {
  const [authed, setAuthed] = useState(
    sessionStorage.getItem("wedding-authed") === "true"
  );

  return authed ? <WeddingInfo /> : <AnimatedLanding onAuthenticate={() => setAuthed(true)} />;
}

export default App