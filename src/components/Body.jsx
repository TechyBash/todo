import {
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  Checkbox,
  IconButton,
} from "@mui/material";
import { Delete } from "@mui/icons-material";

export const Body = (props) => {
  
  const {todos, deleteTodo, markTodo} = props
  return (
    <List>
      {todos.map((todo, index) => (
        <ListItem
          key={todo.todo}
          secondaryAction={
            <IconButton edge="end" onClick={() => deleteTodo(todo.todo)}>
              <Delete/>
            </IconButton>
          }
          disablePadding
        >
          <ListItemButton
            onClick={() => markTodo(index, todo.todo, todo.status)}
            dense
          >
            <ListItemIcon>
              <Checkbox checked={todo.status ? true: false} edge="start" disableRipple />
            </ListItemIcon>
            <ListItemText primary={todo.todo} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};
