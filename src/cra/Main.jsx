
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

export default function Main(){
  return(
      <BrowserRouter>
        <App />
      </BrowserRouter>
  );
}