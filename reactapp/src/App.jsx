import './App.css';
import Navbar from './components/navbar/navbar';
import Coursemanagement from './components/course-management/course-management'
import Courses from './components/courses/courses';
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
  <Router>
    <div className="container">
        <div className="header">
        <Navbar/>
      </div>
      <div className="body">
        <Coursemanagement/>
      </div>  
      
    </div>
    </Router>
  );
}

export default App;