import './Cards.css'

const Cards = (props) => {
  return (
    <div className="card">
      <h3 className='card-title'>{props.title}</h3>
      <p className='card-body'>{props.body}</p>
      <button className='card-btn'>{props.btnText}</button>
    </div>
  )
}

export default Cards;