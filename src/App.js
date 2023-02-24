import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './component/Login';
import Signup from './component/Signup';
import 'bootstrap/dist/css/bootstrap.css';
import { DataProvider } from "./context/DataContext";
import Master from "./component/Master";
import Student from "./component/Student";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="master" element={<Master />} />
          <Route path="student" element={<Student />} />
        </Routes>
      </DataProvider>

    </div>
  );
}

export default App;
