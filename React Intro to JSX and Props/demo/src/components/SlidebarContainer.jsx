import SlidebarItem from "./SlidebarItem"


const data = [
  {name: 'History'},
  {name: 'Playlist'},
  {name: 'Your Videos'},
  {name: 'Liked Videos'},
  {name: 'Download'},
]
const SlidebarContainer = () => {
  return (
    <div>

      
      {data.map((single, idx) => {
        return (
          <SlidebarItem
            key={idx}
            item={single}
          />
        )
      })}
    </div>
  )
}

export default SlidebarContainer