import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./header";
import Price from "./Price";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route
          exact
          path="/price"
          element={
            <>
              <Header />
              <Price />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
