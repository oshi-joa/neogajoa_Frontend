import React from "react";
import { Toaster } from "react-hot-toast";
import BottomSheet from "./components/BottomSheet";
import Gamepage from "./pages/game";

const App = () => {
  return (
    <div>
      <Toaster />
      <Gamepage />
    </div>
  );
};

export default App;
