import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import App1 from './App1';
import App2 from './App2';
import App3 from './App3';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App1></App1>}></Route>
        <Route path='/detalle/:coddoc' element={<App2></App2>}></Route>
        <Route path='/registrarHoras/:cod_doc' element={<App3></App3>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
