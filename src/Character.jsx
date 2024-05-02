import './App.css';
function Character({character}) {
  return (
    <div >
    <h2>{character.name}</h2>
    <img src={character.image} ></img>
    </div>
  )
}

export default Character;
