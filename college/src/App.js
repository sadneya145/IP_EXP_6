import './App.css';
import Navbar from './Components/Navbar';
import InnerOpt from './Components/InnerOpt';
import Footer from './Components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Profile from './Suboptions/Profile';
import CourseDetails from './Suboptions/CourseDetails';
import Enroll from './Suboptions/Enroll';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <InnerOpt/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/enroll' element={<Enroll />} />
        <Route path='/CourseDetails' element={<CourseDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
