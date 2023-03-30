import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  return (
    <div className="div-deco" data-testid="planets">
      <h1>PLANETS</h1>
      <Slider>
        {planetsList.map(eachItem => (
          <PlanetItem item={eachItem} key={eachItem.id} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
