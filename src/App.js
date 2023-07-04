
import Navbar from './components/Navbar';
import './App.css';
import RegForm from './components/regform'
import Header from './components/header';

function App() {
  return (
    <><div className="container">
      <div className="header">
      <Navbar />
   
      </div>
      <Header/>
        <RegForm />
      </div></>
  
  );
}

export default App;
