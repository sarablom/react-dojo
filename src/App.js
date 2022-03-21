import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import Create from "./pages/create/Create";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Project from "./pages/project/Project";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  const { user, authIsReady } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
        <Router>
          <Sidebar />
          <div className="container">
            <Navbar />
            <Routes>
              {!user && <Route path="/" element={<Navigate to="/login" replace />} />}
              {user && <Route path="/" element={<Dashboard />} />}
              
              {!user && <Route path="/create" element={<Navigate to="/login" replace />} />}
              {user && <Route path="/create" element={<Create />} />}

              {!user && <Route path="/projects/:id" element={<Navigate to="/login" replace />} />}
              {user && <Route path="/projects/:id" element={<Project />} />}

              {user && <Route path="/login" element={<Navigate to="/" replace />} />}
              {!user && <Route path="/login" element={<Login />} />}

              {user && <Route path="/signup" element={<Navigate to="/" replace />} />}
              {!user && <Route path="/signup" element={<Signup />} />}
            </Routes>
          </div>
        </Router>
      )}
    </div>
  );
}

export default App;
