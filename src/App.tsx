import "./App.css";
import { MyRepos } from "./components/MyRepos";
import { Counter } from "./components/Counter";
import { Clock } from "./components/Clock";
import { Form } from "./components/Form";
//import {UseQuery} from "./hooks/UseQuery";

export function App() {
  function HandleFormClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget.form || undefined);
    const data = {
      name: String(formData.get("name")),
      age: Number(formData.get("age")),
      isMan: Boolean(formData.get("isMan")),
    };
    return data;
  }

  return (
    <>
      {/* <Clock/>
      <Counter/>
      <MyRepos/> */}
      <Form
        action="Enviar"
        style={{ flex: 1, flexDirection: "column", backgroundColor: "red", maxWidth:200}}
        handleClick={HandleFormClick}
      />
    </>
  );
}
