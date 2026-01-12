type CardProps = {
    title: string
    description: string
    clicks: number
  }
  
  function Card({ title, description, clicks }: CardProps) {
    return (
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <small>Clicks totales: {clicks}</small>
      </div>
    )
  }
  
  export default Card
  