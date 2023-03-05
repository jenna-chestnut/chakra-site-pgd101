import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import HomePage from './Routes/HomePage/HomePage';
import Footer from './Components/Footer/Footer';
import ChakraPage from './Routes/ChakraPage/ChakraPage';
import QuizPage from './Routes/QuizPage/QuizPage';
import ResourcesPage from './Routes/ResourcesPage/ResourcesPage';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>
      <Routes>
        <Route path='/' element={<HomePage/>} exact/>
        <Route path='/root' element={<ChakraPage chakraLink="root" />} exact/>
        <Route path='/sacral' element={<ChakraPage chakraLink="sacral" />} exact/>
        <Route path='/solar-plexus' element={<ChakraPage chakraLink="solarPlexus" />} exact/>
        <Route path='/heart' element={<ChakraPage chakraLink="heart" />} exact/>
        <Route path='/throat' element={<ChakraPage chakraLink="throat" />} exact/>
        <Route path='/third-eye' element={<ChakraPage chakraLink="thirdEye" />} exact/>
        <Route path='/crown' element={<ChakraPage chakraLink="crown" />} exact/>
        <Route path='/all' element={<ChakraPage chakraLink="all" />} exact/>
        <Route path='/quiz' element={<QuizPage />} exact/>
        <Route path='/resources' element={<ResourcesPage />} exact/>
      </Routes>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
