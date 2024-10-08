// Write your code here
import './index.css'

const PlanetItem = props => {
  const {details} = props
  const {imageUrl, description, name} = details
  return (
    <div className="container">
      <h1>PLANETS</h1>
      <img src={imageUrl} alt={`planet ${name}`} className="Image-styling" />
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  )
}

export default PlanetItem
