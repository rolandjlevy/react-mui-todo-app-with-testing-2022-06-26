import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { 
  Button, 
  FormGroup,
  Grid, 
  TextField,
  Typography
} from '@material-ui/core';

import Todo from './Todo';

const App = () => {
  const [todo, setTodo] = useState('');
  const [todos, updateTodos] = useState([]);

  const handleChange = (e) => {
    setTodo(e.target.value);
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAdd(e);
    }
  }

  const handleAdd = (e) => {
    const newTodo = { todo, id: uuidv4() };
    updateTodos([...todos, newTodo]);
    setTodo('');
    e.target.focus();
  }

  const handleRemove = (id) => {
    const filteredTodos = todos.filter(item => item.id !== id);
    updateTodos([...filteredTodos]);
  }

  return (
    <Grid container className="main">
      <Grid item>
        <Typography variant="h5">Mui List Maker</Typography>
      </Grid>
      <Grid item>
        <FormGroup className="input-row" row>
          <TextField 
            type="text" 
            value={todo} 
            aria-label="Description"
            label="Description"
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            variant="outlined"
            placeholder="Description..."
            className="list-input"
          />
          <Button 
            className="add" 
            disabled={!todo.length}
            variant="contained"
            color="primary"
            onClick={(e) => handleAdd(e)} 
            disableElevation
          >
            Add
          </Button>
        </FormGroup>
      </Grid>
      <Grid item>
      {todos.length ? 
        (<ul className="todos"> 
          {(todos.map(({ id, todo }) => (
            <Todo 
              key={id} 
              id={id} 
              description={todo} 
              handleRemove={() => handleRemove(id)} 
            />
            ))
          )}
        </ul>) : <p>No items found</p>
      }
      </Grid>
    </Grid>
  );
}

export default App;