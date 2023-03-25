import logo from './logo.svg';
import './App.css';
// import { Route, Routes } from 'react-router-dom';
import HomePort from './Component/HomePort';

function App() {
  return (
    <div className="App">
         {/* <Routes>
          <Route exact path='/'element={<HomePort/>}/>
         </Routes> */}
         <HomePort/>
    </div>
  );
}

export default App;
