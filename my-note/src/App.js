import "./App.css";

import Header from "./components/Header";
import Notes from "./pages/Notes";
import Note from "./pages/Note";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Header />
          <Route component={Notes} path="/" exact />
          <Route component={Note} path="/note/:id" />
        </div>
      </div>
    </Router>
  );
}

export default App;
