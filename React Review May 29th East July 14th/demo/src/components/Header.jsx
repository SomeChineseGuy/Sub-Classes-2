const Header = (props) => {
  const todoList = props.todos.length;
  // const todoCompleted = props.todos.filter(completedTodos => {
  //   console.log(completedTodos.isCompleted);
  //   if(completedTodos.isCompleted) {
  //     return completedTodos
  //   }
  // })
  const todoCompleted = props.todos.filter(completedTodos => completedTodos.isCompleted).length

  console.log(todoCompleted);
  return (
    <div>
      <h1>You've completed {todoCompleted}/{todoList} items on your todo list!</h1>
    </div>
  );
}

export default Header;