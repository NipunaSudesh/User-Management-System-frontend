import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navbar from "./layOut/Navbar";
import Home from "./pages/Home";
import AddUser from "./User/AddUser";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
              <Navbar/>
              <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/adduser" element={<AddUser/>}/>
              </Routes>
      </Router>

    </div>
  );
}

export default App;
