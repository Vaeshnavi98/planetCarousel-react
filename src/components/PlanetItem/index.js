// Write your code here
import './index.css'

const PlanetItem = props => {
  const {item} = props

  const {name, imageUrl, description} = item

  return (
    <div className="planets-div">
      <img src={imageUrl} className="image-deco" alt={`planet ${name}`} />
      <h1 className="text-deco">{name}</h1>
      <p className="text-deco">{description}</p>
    </div>
  )
}

export default PlanetItem
