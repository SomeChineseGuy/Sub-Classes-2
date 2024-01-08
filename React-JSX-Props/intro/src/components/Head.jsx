import './Head.css'

const Head = (props) => {
  console.log(props);
  // if(props.showComponent) {
  //   return (
  //     <div>
  //       <p>Hello, my name is {props.name} and my age number is {props.age}</p>
  //     </div>
  //   )
  // } else {
  //   return (
  //     <div>
  //       <p>Sorry that info can't be shown</p>
  //     </div>
  //   )
  // }

  return (
    <div className="head">
      {/* {props.showComponent 
        ? 
        <p>Hello, my name is {props.name} and my age number is {props.age}</p>
        :
        <p>Sorry that info can't be shown</p>
      } */}

      {props.showComponent && <p>Hello, my name is {props.name} and my age number is {props.age}</p>}
    </div>
  )

}

// export const Foot = () => {
//   return (
//     <div>
//       <h1>This is a footer</h1>
//     </div>
//   )
// }

// module.exports = Head;
// Export default means this file is only exporting ONE thing
export default Head;

// module.exports = {Head};

// export const arr = [1,2,3,4,5]
// export const name = "Alvin"
// export const num = 23;