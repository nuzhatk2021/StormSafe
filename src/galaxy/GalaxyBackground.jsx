import nebula from "./nebula1.png"

function GalaxyBackground() {
  return (
    <div
      className="galaxy-background"
      style={{ backgroundImage: `url(${nebula})` }}
    />
  )
}

export default GalaxyBackground