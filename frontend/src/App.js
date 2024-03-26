import { Route, Routes } from "react-router-dom";
import ChatPage from "./pages/ChatPage";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App flex min-h-screen h-14 bg-gradient-to-r from-cyan-500 to-blue-500">
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/chats" Component={ChatPage} />
      </Routes>
    </div>
  );
}

export default App;
