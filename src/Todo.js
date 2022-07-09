import React from 'react';

import { 
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Typography
} from '@material-ui/core';
  
import { 
  ReactComponent as DeleteIcon
} from './mui-delete-icon.svg';

import TodoStyles from './TodoStyles';

const Todo = ({ id, description, handleRemove }) => { 
  const classes = TodoStyles();
  return (
    <ListItem className={classes.todo} disableGutters>
      <ListItemText
        className={classes.desciption}
        primary={
          <Typography variant="body1">
            {description}
          </Typography>
        }
      />
      <ListItemSecondaryAction>
        <IconButton 
          aria-label="remove-btn"
          onClick={() => handleRemove(id)}
        >
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
};

export default Todo;