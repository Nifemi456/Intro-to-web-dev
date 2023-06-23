import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import MyForm from '../Form/Form';
import NoPage from "../NoPage/NoPage";
import Layout from '../Layout/Layout';
import Api from '../Api-content/Api-content';


function App() {
  return (
    <Router>
      <div>
        <Routes>

        <Route path="/" element={<Layout />}>

          <Route index element={<Main/>} />
          <Route path="form" element={<MyForm/>} />
          <Route path='api' element={<Api/>} />
          <Route path="*" element={<NoPage/>} />

        
        </Route>
      
      </Routes>
      </div>
      
    </Router>



  );
}

export default App;
