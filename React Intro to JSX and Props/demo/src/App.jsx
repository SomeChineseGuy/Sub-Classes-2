import './App.css'
import Cards from './components/Cards'
import Header from './components/Header'
import SlidebarContainer from './components/SlidebarContainer'

const queryData = [
  {
    title: "This card is awesome!",
    body: "Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it?",
    btnText: "Awesome!"
  },

  {
    title: "Card!",
    body: "Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine.",
    btnText: "Not Cool man!"
  }
]

// How does Arrays work in react

function App() {
  return (
    <div>

      {queryData.map((item, idx) => {
        return (
          <Cards 
            key={idx}
            title={item.title}
            body={item.body}
            btnText={item.btnText}
          />
        )
      })}

      <SlidebarContainer />
      
    </div>
  )
}

export default App

