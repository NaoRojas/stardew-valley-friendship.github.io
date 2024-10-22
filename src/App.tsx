import './App.css'
import CharacterCard from './components/CharacterCard'
import data from './data/data.json'
import { useState } from 'react'

function App() {
  const characters = data.characters
  const [search, setSearch] = useState('')

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(search.toLowerCase())
  )
  return (
    <>
      <div className="flex-row start dashed">
        <span className="icon-card">
          <i className="material-icons title">group</i>
        </span>
        <h1>Friendship</h1>
      </div>
      <div className="flex-row center">
        <input
          type="text"
          placeholder="Search Character"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {/* <input
          type="text"
          placeholder="Search Item"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        /> */}
      </div>
      <div className="flex-col">
        {filteredCharacters.map((character) => (
          <CharacterCard
            key={character.name}
            name={character.name}
            loves={character.loves}
            likes={character.likes}
            dislikes={character.dislikes}
            hates={character.hates}
          />
        ))}
      </div>
    </>
  )
}

export default App
