import './App.css'
import CharacterCard from './components/CharacterCard'
import data from './data/data.json'
import { useState } from 'react'
import 'react-kofi/dist/styles.css'

function App() {
  const characters = data.characters
  const [search, setSearch] = useState('')
  const [filterType, setFilterType] = useState('character')
  const handleClear = () => {
    setSearch('')
  }
  const filteredCharacters =
    filterType === 'character'
      ? characters.filter((character) =>
          character.name.toLowerCase().includes(search.toLowerCase())
        )
      : characters.filter(
          (character) =>
            character.loves.some((love) =>
              love.name.toLowerCase().includes(search.toLowerCase())
            ) ||
            character.likes.some((like) =>
              like.name.toLowerCase().includes(search.toLowerCase())
            ) ||
            character.hates.some((hate) =>
              hate.name.toLowerCase().includes(search.toLowerCase())
            )
        )

  return (
    <>
      <div className="flex-row start dashed">
        <span className="icon-card">
          <i className="material-icons title">group</i>
        </span>
        <h1>Friendship</h1>
      </div>
      <div className="flex-row center search-container">
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="character">Character</option>
          <option value="item">Item</option>
        </select>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {search && (
          <button className="clear-button" onClick={handleClear}>
            <i className="material-icons">clear</i>
          </button>
        )}
      </div>
      <button
        className="kofi-button"
        onClick={() => window.open('https://ko-fi.com/naoreds', '_blank')}
      >
        <img
          className="kofi-icon"
          src="https://i0.wp.com/www.journoresources.org.uk/wp-content/uploads/2019/05/ko-fi.jpg?ssl=1"
          alt="Ko-fi support me"
        />
        <span>Support Me on Ko-fi</span>
      </button>

      <div className="flex-col center characters">
        {filteredCharacters.map((character) => (
          <CharacterCard
            search={search}
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
