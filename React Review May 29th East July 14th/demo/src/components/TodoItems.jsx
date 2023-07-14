const TodoItems = (props) => {
  const handleClick = () => {
    props.setTodos((prev) => {
      const results = prev.map(item => {
        if(item.id === props.todo.id) {
          return {
            ...item,
            isCompleted: !item.isCompleted
          }
        }
        return item
      });
      // const results2 = [...prev]
      // const index = results2.findIndex(allTodos => allTodos.id === props.todo.id);
      // results2[index] = {
      //   ...results2[index],
      //   isCompleted: !results2[index].isCompleted
      // }
      return results
    })
 
  }
  return (
    <div className="todoitems" onClick={handleClick}>
      <p>{props.todo.task} {props.todo.isCompleted ? '✅' : '🟩'}</p>
    </div>
  )
}

export default TodoItems;