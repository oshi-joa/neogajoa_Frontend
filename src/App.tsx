import React from "react";
import { Toaster } from "react-hot-toast";
import { Login } from "./apis/auth";

const App = () => {
  const {mutate} = Login()
  return (
    <div>
      <Toaster />
      App
      <button onClick={()=>{
        mutate({email: '', password: ''});
      }}>ㄱㄱ</button>
    </div>
  );
};

export default App;
