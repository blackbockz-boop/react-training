import logo from './logo.svg';
import './App.css';
import nav from './components/Nav';
import { use } from 'react';

function App() {
  const [cart, setCart] = useState([]);
  
  function addToCart(book) {
    setCart([...cart, book]);
  }

  function changeQuantity(book, quantity) {
    setCart(
       cart.map((item) => 
     item.id === book.id 
     ? { 
        ...item,
        quantity: +quantity,
     : item
     )
    );
  }


  useEffect(() => {
    console.log(cart);
  }, []);


  return (
    <router>
    <div className="App">
      <Nav />
      <Route path="/" component={Home} />
      <Route path="/books" render={() => <Books books={books} cart={cart} changeQuantity={changeQuantity} />} />
      <footer />
    </div>
    </router>
  );
}

export default App;
