import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/slices/todos';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

const Input = () => {
    const [todo, setTodo] = useState({id:uuidv4(), value: '', completed: false })
    const dispatch = useDispatch()

    const addItem = () => {
        dispatch(addTodo(todo))
        setTodo({ ...todo, value: '' ,id:uuidv4()})
    }
    return (
        <>
            <Box
                sx={{ display: 'flex', alignItems: 'center', height: 'auto' }}

                noValidate
                autoComplete="off"
            >
                <TextField id="filled-basic" value={todo.value} sx={{ width: '75%', marginRight: '2%' }} margin="normal"
                    label="New Task" variant="filled"
                    onChange={(evt) => { setTodo({ ...todo, value: evt.target.value }) }} />
                <Button variant="filled" onClick={addItem}>Add</Button>

            </Box>
        </>
    );
}

export default Input;
