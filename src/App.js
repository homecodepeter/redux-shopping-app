import './App.css';
import Header from './Components/Header';
import { Routes, Route} from 'react-router-dom'
import ProductListing from './Components/ProductListing';
import ProductDetail from './Components/ProductDetail';


function App() {
  return (
    <div className="App">
     <Header />
     <Routes>
     <Route path="/" exact element={<ProductListing />} />
     <Route path="/product/:productId" exact element={<ProductDetail />} />
     <Route>404 is Not Found!</Route>
     </Routes>
    </div>
  );
}

export default App;
