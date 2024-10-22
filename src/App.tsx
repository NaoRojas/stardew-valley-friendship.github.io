import './App.css'
import CharacterCard from './components/CharacterCard'
import data from './data/data.json'
import { useState } from 'react'

function App() {
  const characters = data.characters
  const [search, setSearch] = useState('')
  const [searchItem, setSearchItem] = useState('')

  const filteredCharacters = characters.filter(
    (character) =>
      character.name.toLowerCase().includes(search.toLowerCase()) &&
      (character.loves.some((love) =>
        love.name.toLowerCase().includes(searchItem.toLowerCase())
      ) ||
        character.likes.some((like) =>
          like.name.toLowerCase().includes(searchItem.toLowerCase())
        ) ||
        character.hates.some((dislike) =>
          dislike.name.toLowerCase().includes(searchItem.toLowerCase())
        ))
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
        <input
          type="text"
          placeholder="Search Item"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />
      </div>
      <div className="flex-col center">
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
