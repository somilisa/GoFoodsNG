import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import pages
import Layout from './pages/Layout';
import Home from './pages/Home';
import Groups from './pages/Groups'
import About from './pages/About';
import Contact from './pages/Contact';
import SingleCocktail from './pages/SingleCocktail';
import Error from './pages/Error';
// import components
import Navbar from './components/Navbar';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='groups' element={<Groups />} />
          <Route path='cocktail/:id' element={<SingleCocktail />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
