import Body from "./Body";
const Header = (props) => { 
  return(
    <div>
      <h1>Hello!</h1>
      <Body
        title={props.title}
      />
    </div>
  )

}

export default Header;