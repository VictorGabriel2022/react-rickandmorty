import{useEffect,useState} from 'react'
import Character from './Character'
import './App.css';
function NavPage(props){
  
return (
  <header>
    <p>Page:{props.page}</p>
    <button onClick={()=>props.setPage(props.page + 1)}>Page {props.page + 1}</button>
  </header>
)
}
function CharacterList() {
  const [page,setPage] = useState(1);
  const [characters,setCharacters] = useState([])
  //funcion que permite ejecutar o re-render de la aplicacion cuando un dato cambia
  useEffect(()=>{
   async function fetchData(){
     const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
     const data = await response.json();
     setCharacters(data.results);
  }
  fetchData()
  },[page]);

  return (
    <div className='button'>
      <NavPage page={page} setPage={setPage}/>
   <div className='container'>
     
    {
    characters.map(character=>{
       return (
          <Character  character={character} key={character.id}/>
       )
    })
  }
 </div>
 </div>
  );
}

export default CharacterList;
