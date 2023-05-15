import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AddCircle from "@mui/icons-material/AddCircle";
import { useState } from "react";

export const Header = ({ todos, setTodos }) => {
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleClick = (e) => {
    const btntype = e.target.innerText;
    if (btntype === "ALL") {
      setTodos(JSON.parse(localStorage.getItem("todos")) || []);
    } else if (btntype === "ACTIVE") {
      setTodos(JSON.parse(localStorage.getItem("todos")).filter((todo) => todo.status == 0));
    } else if (btntype === "COMPLETED") {
      setTodos(JSON.parse(localStorage.getItem("todos")).filter((todo) => todo.status == 1));
    }
  };

  const addTodo = (e) => {
    if (e.key === "Enter") {
      const data = { todo: todo, status: 0 };
      setTodo("");
      localStorage.setItem("todos", JSON.stringify([...todos, data]));
      setTodos([...todos, data]);
    }
  };

  return (
    <>
      <Typography variant="h3" style={{ textAlign: "center" }}>
        My Todo
      </Typography>
      <Box sx={{ mt: "20px" }} display="flex" justifyContent="center">
        <Button
          variant="outlined"
          color="secondary"
          sx={{ mr: "10px" }}
          onClick={handleClick}
        >
          All
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          sx={{ mr: "10px" }}
          onClick={handleClick}
        >
          Active
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          sx={{ mr: "10px" }}
          onClick={handleClick}
        >
          Completed
        </Button>
      </Box>
      <TextField
        label="Write something"
        variant="outlined"
        fullWidth
        sx={{ mt: "30px" }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <AddCircle />
            </InputAdornment>
          ),
        }}
        onKeyUp={addTodo}
        onChange={handleChange}
        value={todo}
      />
    </>
  );
};
