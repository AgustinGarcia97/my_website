import {Navbar} from "./components/navbar/Navbar.tsx";
import {RoutestList} from "./routes/RoutesList.tsx";
import {BrowserRouter} from "react-router-dom";
import "./styles/globalStyles.css";
import {Provider} from "react-redux";
import {store} from "./redux/store.ts";
import {Footer} from "./components/footer/Footer.tsx";
import { HashRouter } from 'react-router-dom';
function App() {
  return (

        <Provider store={store}>
            <HashRouter>
                <Navbar/>
                <RoutestList/>
                <Footer/>
            </HashRouter>
        </Provider>

  )
}

export default App
