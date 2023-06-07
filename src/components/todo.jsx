import React from 'react'
import { Card, CardContent, Typography, Container, IconButton} from '@mui/material';
import { Check, Delete } from '@mui/icons-material';

const Todo = ({title, id, isCompleted, deleteTodo, checkTodo}) => {
  const markComplete = () => checkTodo(id);  
  const delTodo = () => deleteTodo(id);
  const todoStyle = isCompleted ? { color : 'black' } : { color : 'white'};
  return (
    <div>
      <Container>
        <Card variant='outlined' style={{ marginTop : '35px', background : '#b88cff', color : 'white'}}>
            <Typography variant='h5' component='h2' style={todoStyle} >
                <IconButton onClick={markComplete}>
                    <Check style={{ color : 'green'}}></Check>
                </IconButton>
                {title}
                <IconButton style={{float : 'right'}} onClick={delTodo}>
                    <Delete style={{ color : 'red'}}></Delete>
                </IconButton>
            </Typography>
        </Card>
      </Container>
    </div>
  )
}

export default Todo
