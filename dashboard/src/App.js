import { Route,Routes } from "react-router-dom";
import { Login ,Signup } from "./pages";
import Home from "./components/Home.js";


 const App = () => {
  return (
    <div className="App">
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/" element={<Home />} />
        </Routes>
        
    </div>
  )
}
export default App;