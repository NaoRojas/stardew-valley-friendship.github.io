import React from 'react'
import './CharacterCard.css' // Assuming you have a CSS file for styling

interface CharacterCardProps {
  name: string
  image: string
  description: string
}

const CharacterCard: React.FC<CharacterCardProps> = ({
  name,
  likes,
  loves,
  dislikes,
  hates,
}) => {
  return (
    <div className="character-card">
      <div className="flex-col">
        <div className="caption">{name}</div>
        <div className="character-card-image">
          <img
            src={`/images/characters/${name}.png`}
            className="character-image"
          />
        </div>
      </div>

      <div className="flex-col column">
        <div className="caption">Loves</div>
        <div className="card-info">
          {loves.map(({ name, image }) => (
            <div key={name} className="circle">
              <img src={image} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex-col column">
        <div className="caption">Likes</div>
        <div className="card-info">
          {likes.map(({ name, image }) => (
            <div key={name} className="circle">
              <img src={image} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex-col column">
        <div className="caption">Dislikes</div>
        <div className="card-info">
          {dislikes.map(({ name, image }) => (
            <div key={name} className="circle">
              <img src={image} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex-col column">
        <div className="caption">Hates</div>
        <div className="card-info">
          {hates.map(({ name, image }) => (
            <div key={name} className="circle">
              <img src={image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CharacterCard
