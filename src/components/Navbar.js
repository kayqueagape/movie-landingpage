import { Link } from "react-router-dom"


export default function NavBar(){
  return(
    <div>
      <Link to='/'>Filmes</Link>
      <Link to='/serie'>Series</Link>
      <Link to='#'>Soudtracks</Link>
      <Link to='#'>Favoritos</Link>
      
    </div>
  )
}