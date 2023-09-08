import Signup from "./components/Signup"
import Login from "./components/Login"
import Home from "./components/Home"
import Disconnect from "./components/Disconnect"
import Messages from "./components/Messages"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path='/disconnect' element={<Disconnect />} />
          <Route path='/messages' element={<Messages />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
