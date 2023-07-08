import './App.css';
import { RouterProvider } from 'react-router-dom';
import useRouter from './router/useRouter';

function App() {
  const {router} = useRouter()
  return (
    <div className="App">
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
