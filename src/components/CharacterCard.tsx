import React from 'react'
import 'react-tooltip/dist/react-tooltip.css'

import './CharacterCard.css' // Assuming you have a CSS file for styling
import { Tooltip } from 'react-tooltip'

interface CharacterCardProps {
  name: string

  loves: { name: string; image: string }[]

  likes: { name: string; image: string }[]

  dislikes: { name: string; image: string }[]

  hates: { name: string; image: string }[]
}

const CharacterCard: React.FC<CharacterCardProps> = ({
  name,
  likes,
  loves,
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
            <>
              <div key={name} className="circle" data-tooltip-id={name}>
                <img src={image} />
              </div>
              <Tooltip className="tooltip-green" id={name} place="top">
                {name}
              </Tooltip>
            </>
          ))}
        </div>
      </div>

      <div className="flex-col column">
        <div className="caption">Likes</div>
        <div className="card-info">
          {likes.map(({ name, image }) => (
            <>
              <div key={name} className="circle" data-tooltip-id={name}>
                <img src={image} />
              </div>
              <Tooltip className="tooltip-green" id={name} place="top">
                {name}
              </Tooltip>
            </>
          ))}
        </div>
      </div>

      <div className="flex-col column">
        <div className="caption">Hates</div>
        <div className="card-info">
          {hates.map(({ name, image }) => (
            <>
              <div key={name} className="circle" data-tooltip-id={name}>
                <img src={image} />
              </div>
              <Tooltip className="tooltip-green" id={name} place="top">
                {name}
              </Tooltip>
            </>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CharacterCard
