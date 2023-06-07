import React, { useState } from 'react'
import { FormControl, Container, TextField, Button} from '@mui/material';


const Form = ({addTodo}) => {
    const [text, setText] = useState ("");
    const handleSubmit = e => {
        e.preventDefault();
        addTodo(text);
        setText("");
    }; 
  return (
    <Container maxWidth='sm'>
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth>
            <h2 style={{margin : '50px'}}>YAPILACAKLAR</h2>

            <TextField className='textfield' style={{marginTop : '15px', borderColor : '#b88cff', marginBottom : '15px'}}  label="Eklemek için yaz." required={true} value={text} onChange={ (e)=> setText(e.target.value)}/>

            <Button variant='contained' type='submit' style={{backgroundColor : '#b88cff'}}>Tıkla</Button>
        </FormControl>
      </form>
    </Container>
  )
}

export default Form
