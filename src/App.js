import Topbar from "./Components/topbar/Topbar";
import Sidebar from "./Components/sidebar/Sidebar";
import Home from "./pages/Home/Home";
import UserList from "./pages/userlist/UserList";
import NewUser from './pages/newUser/NewUser'
import ProductList from './pages/productList/ProductList'
import Product from './pages/Product/Product'
import NewProduct from './pages/newProduct/NewProduct'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import User from './pages/user/User'
function App() {
  return (
    <Router>
      <Topbar />
      <div className='container'>
        <Sidebar />
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/users' component={UserList} />
          <Route path='/user/:userId' component={User} />
          <Route path="/newUser" component={NewUser} />
          <Route path='/products' component={ProductList} />
          <Route path="/product/:productId" component={Product}/>
          <Route path="/newproduct" component={NewProduct}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
