// import './App.css';
// import Navbar from './components/navbar/navbar';
// import Courses from './components/courses/courses';
// import Homepage from './components/login/homepage';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// function App() {
//   return (
//     <Router>
//       <div className="container">
//           <div className="header">
//           <Navbar/>
//         </div>
//         <div className="body">
//           <Coursemanagement/>
//         </div>  
        
//       </div>
//     </Router>
//   );
// }

//export default App;

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Dashboard from './components/stud_dashboard/Dashboard';
import Sidebar from './components/stud_dashboard/Sidebar';
import Myenrollment from './components/stud_dashboard/Myenrollment';
import Courses from './components/courses/courses';
import Courseinfo from './components/courses/course-info'
import Coursemanagement from './components/course-management/course-management'
import Course from './components/courses/course';
import AddCourses from './components/course-management/add-courses';
import ViewCourses from './components/course-management/view-courses';
import Editcourse from './components/course-management/edit-course';
import {Error} from './components/course-management/Error';

function App() {
  return (
    <Router>

      <div className="container-fluid p-0 m-0">
        <div className="header p-0 m-0">
          <Navbar/>
        </div>
        <div className="body">
            <div className="row p-0 m-0" style={{height:"90vh"}}>
              <div className="col-2 p-0 m-0 "  style={{height:"90vh"}}>
                <Sidebar />
              </div>
              <div className="col-10 p-0 m-0" style={{height:"90vh"}}>
                <Routes>
                  <Route path="*" element={<Error/>}/>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/myenrollment" element={<Myenrollment />} />
                  <Route path="/course-management" element={<Coursemanagement />} >
                    <Route path="edit-course/:id" exact={true} element={<Editcourse/>} />
                    <Route path='' element={<ViewCourses/>} />
                    <Route path='add-courses' element={<AddCourses/>} />
                    <Route path="*" element={<Error/>}/>
                  </Route>
                    <Route path="/courses" element={<Courses />} >
                    <Route path="course-info/:id" exact={true} element={<Courseinfo/>} />
                    <Route path='' element={<Course/>} />
                    <Route path="*" element={<Error/>}/>
                  </Route>
                </Routes>                
              </div>
            </div>
        </div>  
      </div>








      

    </Router>
  );
}

export default App;