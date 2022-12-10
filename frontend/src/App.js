import logo from './logo.svg';
import './App.css';
import Login from "./components/login"
import Register from './components/register';
import {Link,
BrowserRouter as Router,
Routes,
Route} from "react-router-dom"

const Home = () => {
  return(
    <p>Hi</p>
  )
}

function App() {
  return (
    // <Register />
    // <Login />
    <Router>
      <div>
    <Link to="/login">Login</Link>
    <Link to="/register">Register</Link>
    <Link to="/">Home</Link>
    </div>

    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>



    </Router>
  );
}

export default App;
