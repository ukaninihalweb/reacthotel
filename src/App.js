import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Nav from './Nav';
import Effect from './MemoDemo';
function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/MemoDemo' element={<Effect />} />
      </Routes>
    </Router>
  );
}

export default App;
