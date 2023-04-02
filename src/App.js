
import './App.css';
import './style/style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Donate from './Components/Donate';
import SendMessege from './Components/SendMessege';
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          {/* <Route path='/' element={<OurSaviers />} /> */}
          <Route path='/donate' element={<Donate />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/sendnotification' element={<SendMessege />} />
          <Route path='/*' element={<Home />} />
        </Routes>
        <Footer />
      </Router>

    </>
  );
}

export default App;
