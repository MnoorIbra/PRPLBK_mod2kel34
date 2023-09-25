import React from "react";
import "./App.css";
import ReactJSX from "./components/ReactJSX";
import CompAndProps from "./components/CompAndProps";
import Button from "./elements/Button";
import TextInput from "./elements/TextInput";
function App() {
  return (
    <div className="main">
     
        <ReactJSX />

        <form>
            <TextInput border="skyblue" placeholder="Cari . . ."/>
            <Button backgorund = "blue">Cari</Button>
        </form>
    
          <CompAndProps />
       
    </div>
  );
}
export default App;
