import { GlobalStyle } from "./components/GlobalStyles";
import Theme from "./components/Theme";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import Pokedex from "./pages/Pokedex";
import CharacterView from "./pages/CharacterView";
import { Provider } from 'react-redux'
import store from "./redux/store";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Provider store={store}>
      <Theme>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/*" element={ <NotFound/>} /> 
          
          <Route element={<ProtectedRoutes />}>
            <Route path="/pokedex" element={<Pokedex />} />
            <Route path="/pokedex/:id" element={<CharacterView />} />
          </Route>
        </Routes>
      </Theme>
    </Provider>
  );
}

export default App;
