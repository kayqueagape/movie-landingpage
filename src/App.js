//reaproveitamento de estrutura:?
import { Outlet } from 'react-router-dom';
import NavBar from './components/Navbar';

export default function App(){
  return(
    <div>
      <NavBar/>
      <Outlet/>
    </div>
  )
}