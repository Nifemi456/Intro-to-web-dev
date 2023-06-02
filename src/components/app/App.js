import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Main from '../Main/Main';
import MyForm from '../Form/Form';
import NoPage from "../NoPage/NoPage";
import Layout from '../Layout/Layout';
import Api from '../Api-content/Api-content';


function App() {
  return (
    <Router>
      <div className=''>
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





  //  <div>
  //   <button onClick={() => setShow(true)}>Show modal</button>
  //   <Modal title="My Modal" onClose={() => setShow(false)} show={show}>
  //     <p>This is modal body</p>
  //   </Modal>
  //  </div>
    
  );
}

export default App;
