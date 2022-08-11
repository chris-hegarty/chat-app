
import './App.css';
import { Routes, Route, BrowserRouter as Router, Navigate } from "react-router-dom"
import HomePage from "./HomePage";
import ChatPage from "./ChatPage";
import { useState } from "react";

function App() {
  //create a currentUser piece of state
  const [currentUser, setCurrentUser] = useState("");
  return (
    <div>
      <Router>
        <Routes>
          {/* pass down the ability to change it via props to Homepage */}
          <Route
            path="/home"
            element={<HomePage setCurrentUser={setCurrentUser} />} />
          {/* Pass down the value to Chat Page */}
          <Route path="/chat/:roomID" element={<ChatPage currentUser={currentUser} />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
