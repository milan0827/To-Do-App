import { useState } from "react";
import "./Form.css";
import FormAddTask from "./FormAddTask";

function Form({ formOpen, onAddTask, children }) {
  return <>{children}</>;
}

export default Form;
