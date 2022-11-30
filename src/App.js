import "./App.css"
import Home from "./Components/pages/Home/Home";
import Sidebar from "./Components/sidebar/Sidebar";
import Topbar from "./Components/Topbar/Topbar";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import UserList from "./Components/pages/UserList/UserList";
import User from "./Components/pages/User/User";
import NewUser from "./Components/pages/NewUser/NewUser";
import ProductList from "./Components/pages/ProductList/ProductList";

function App() {
  return (
    <>

      <Topbar />
      <div className="container">
        <Router>
          <Sidebar />

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/user" element={<UserList />} />
            <Route exact path="/user/:userId" element={<User />} />
            <Route exact path="/newUser" element={<NewUser />} />
            <Route exact path="/products" element={<ProductList />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
