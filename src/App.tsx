import './App.css'
import CharacterCard from './components/CharacterCard'
import data from './data/data.json'

function App() {
  const characters = data.characters
  return (
    <>
      <div className="flex-row start dashed">
        <span className="icon-card">
          <i className="material-icons title">group</i>
        </span>
        <h1>Friendship</h1>
      </div>
      <div className="flex-col">
        {characters.map((character) => (
          <CharacterCard
            key={character.id}
            name={character.name}
            loves={character.loves}
            description={character.description}
          />
        ))}
      </div>
    </>
  )
}

export default App
