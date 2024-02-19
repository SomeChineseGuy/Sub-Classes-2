import './Header.css'

const Header = (props) => {
  
  return (
    <div className="container" id="header">
      <h1>Hello, {props.username} - id: {props.id}</h1>
    </div>
  )
}

export default Header;

// export const HeaderWithBody = () => {
//   return (
//     <div>
//       <h1>Header with Body</h1>
//     </div>
//   )
// }

// module.exports = Header

// module.exports = {Header, HeaderWithBody}