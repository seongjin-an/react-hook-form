import React from 'react';
import './App.css';
import HookForm from "./components/HookForm";
import HookFormProvider from "./components/HookFormProvider";
import RegisterField from "./components/RegisterField";
import WatchField from "./components/WatchField";
import ApplyValidation from "./components/ApplyValidation";
import HandleError from "./components/HandleError";

function App() {
  return (
    <div>
      <HookForm/>
      <br/>
      <br/>
      <HookFormProvider/>
      <br/>
      <br/>
      <RegisterField/>
      <br/>
      <br/>
      <WatchField/>
      <br/>
      <br/>
      <ApplyValidation/>
      <br/>
      <br/>
      <HandleError/>
    </div>
  );
}

export default App;
