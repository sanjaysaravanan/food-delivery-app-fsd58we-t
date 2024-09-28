import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home/Home";
import { useReducer } from "react";
import { appReducer, initialState } from "./AppReducer";
import AppContext from "./AppContext";
import RestaurantDishes from "./pages/Restraunt/Restraunt";
import Cart from "./pages/Cart/Cart";

function App() {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {console.log(state)}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path={"/restaurants/:id"} element={<RestaurantDishes />} />
            <Route path={"/cart"} element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
