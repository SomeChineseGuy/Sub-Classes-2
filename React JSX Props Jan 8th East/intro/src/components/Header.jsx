import './Header.css'

const Header = (props) => {
  return (
    <div className="container" id="header">
      <h1 className='title'>This is the Header Component!</h1>
      <h2 className='sub-heading'>The username  is: {props.username}</h2>
      <h2 className='sub-heading'>The id  is: {props.id >= 10 ? props.id : "You can not see this"}</h2>
      {props.id === 10 ? <h1>This is a special user!</h1> : "" }
    </div>
  )
}

export default Header


// modules.exports = Header
// const Header = require('./Header')
// Header


// export const Header = () => {
//   return (
//     <div>
//       <h1>This is the Header Component!</h1>
//     </div>
//   )
// }
// // modules.exports = { Header }
// const components = require('./Header');
// components.Header 