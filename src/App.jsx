import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContextPrivider } from "./store/CartContex";
import { UserProgressContextProvider } from "./store/UserProgressContext";

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextPrivider>
        <Header />
        <Meals />
        <Cart />
        <Checkout />
      </CartContextPrivider>
    </UserProgressContextProvider>
  );
}

export default App;
