import {Navbar} from "./components/navbar/Navbar.tsx";
import {RoutestList} from "./routes/RoutesList.tsx";

import "./styles/globalStyles.css";
import {Provider} from "react-redux";
import {store} from "./redux/store.ts";
import {Footer} from "./components/footer/Footer.tsx";

function App() {
  return (

        <Provider store={store}>

                <Navbar/>
                <RoutestList/>
                <Footer/>

        </Provider>

  )
}

export default App
