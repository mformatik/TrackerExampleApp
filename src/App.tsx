import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.tsx";
import {Routes} from "./components/Routes/Routes.tsx";
import './app.scss'

 const App = () => (
  <div className={"app"}>
    <Navbar/>
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  </div>
)

export default App
