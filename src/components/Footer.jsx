import Typography from "@mui/material/Typography"
export const Footer = () => {

  const countTodos = (type) => {
    const todos = JSON.parse(localStorage.getItem('todos'))
    const activeTodos = todos.filter((todo) => todo.status == 0)
    const completedTodos = todos.filter((todo) => todo.status == 1)

    if(type === "active")
      return activeTodos.length
    else
      return completedTodos.length

  }
  return (
    <Typography variant="h6" style={{textAlign: "center"}}>
      {countTodos("active")} left | {countTodos("completed")} done
    </Typography>
  )
}
