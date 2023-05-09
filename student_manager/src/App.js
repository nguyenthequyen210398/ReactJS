import logo from './logo.svg';
import './App.css';
import BaseProvider from './components/context/BaseProvider';
import { Outlet } from 'react-router';

function App() {
  return (
    <BaseProvider>
      <Outlet />
    </BaseProvider>

  );
}

export default App;
