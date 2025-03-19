import './SlidebarItem.css'

const SlidebarItem = (props) => {
  console.log(props);
  return (
    <div className='slidebar-item'>
      <p className='slidebar-item-text'>{props.item.name}</p>
    </div>
  )
}


export default SlidebarItem