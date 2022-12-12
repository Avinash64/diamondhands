import logo from './logo.svg';
import './App.css';
import Login from "./components/login"
import Dash from "./components/dash"
import Register from './components/register';
import Sidebar from './components/sidebar';
import Market from './components/markets';
import Navbar from './components/navbar';
import Home from './components/home';
import Trending from './components/trending';
import Trades from './components/trades';
import Settings from './components/settings';
import {Link,
BrowserRouter as Router,
Routes,
Route} from "react-router-dom"


function App() {
  return (
    // <Register />
    // <Login />
    <Router>
      <div className='App'>

    <Navbar />

    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dash />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/market" element={<Market />} />
        <Route path="/trades" element={<Trades />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>


      </div>
    </Router>
  );
}

export default App;
