import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
   
    <Router>
       <div className="App">
          <section className='div-1'>
            <Link className='my-link' to="/">Home</Link>
            <Link className='my-link' to="/List">Filter</Link>
            <Link className='my-link' to="/Favorite">favourite</Link>
          </section>
          <div className='Product-List-1'>
            <Routes>

            </Routes>
          </div>
        </div>

    </Router>

  );
}

export default App;
