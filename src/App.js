import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { 
  Button, 
  FormGroup,
  Grid,
  List,
  TextField,
  Typography
} from '@material-ui/core';

import Todo from './Todo';

const App = () => {
  const [currentTodo, setCurrentTodo] = useState('');
  const [todos, updateTodos] = useState([]);

  const handleChange = (e) => {
    setCurrentTodo(e.target.value);
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAdd(e);
    }
  }

  const handleAdd = (e) => {
    const newTodo = { 
      description: currentTodo, 
      id: uuidv4() 
    };
    updateTodos([...todos, newTodo]);
    setCurrentTodo('');
    e.target.focus();
  }

  const handleRemove = (id) => {
    const filteredTodos = todos.filter(item => item.id !== id);
    updateTodos([...filteredTodos]);
  }

  return (
    <Grid container className="main">
      <Grid item>
        <Typography variant="h4">Mui List Maker</Typography>
      </Grid>
      <Grid item>
        <FormGroup className="input-row" row>
          <TextField 
            type="text" 
            value={currentTodo} 
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
            disabled={!currentTodo.length}
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
          (<List className="todos"> 
            {(todos.map(({ id, description }) => (
              <Todo 
                key={id} 
                id={id} 
                description={description} 
                handleRemove={handleRemove} 
              />
              ))
            )}
          </List>) : <p>No items added</p>
        }
      </Grid>
    </Grid>
  );
}

export default App;