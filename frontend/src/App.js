import './App.css';
import Feed from './components/Homepage/Feed';
import Rightbar from './components/Homepage/Rightbar';
import Sidebar from './components/Homepage/Sidebar';
import Topbar from './components/Homepage/Topbar';

function App() {
  return (
    <div className="App">
        <Topbar/>
        <div className="homeContainer">
            <Sidebar/>
            <Feed/>
            <Rightbar/>
        </div>
    </div>
  );
}

export default App;
