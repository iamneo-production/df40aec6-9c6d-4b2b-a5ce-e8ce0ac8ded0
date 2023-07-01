import './App.css';
import Navbar from './components/navbar/navbar';
import Coursemanagement from './components/course-management/course-management'
import Courses from './components/courses/courses';

function App() {
  return (
  
    <div className="container">
        <div className="header">
        <Navbar/>
      </div>
      <div className="body">
        <Courses/>
      </div>  
      
    </div>
  );
}

export default App;