import { GlobalStyle } from "./components/GlobalStyles";
import Theme from "./components/Theme";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import Pokedex from "./pages/Pokedex";
import { Provider } from 'react-redux'
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Theme>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/pokedex" element={<Pokedex/>} />
        </Routes>
      </Theme>
    </Provider>
  );
}

export default App;
