import "./App.css";

import Header from "./components/Header";
import Notes from "./pages/Notes";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
       <Route component={Notes} path='/' exact />
      </div>
    </Router>
  );
}

export default App;
