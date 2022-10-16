import React  from "react";
import "./App.css"

import "bootstrap/dist/css/bootstrap.min.css";
import {useThemeHook} from "./components/ThemeProvider";

function App() {
  const [theme] = useThemeHook()
  return (
    <main className={theme? 'bg-black':'bg-light-2'}>
       App
    </main>
  );
}

export default App;
