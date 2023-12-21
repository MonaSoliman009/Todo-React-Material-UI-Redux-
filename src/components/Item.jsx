import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types'; // ES6
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { completeTodo, removeTodo } from '../store/slices/todos';


const Item = ({ todo }) => {
    const dispatch = useDispatch()
    const completeItem = (ev, id) => {
        console.log(id);
        dispatch(completeTodo(id))
    }
    const removeItem = (id) => {
        console.log(id);

        dispatch(removeTodo(id))
    }
    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <FormControlLabel sx={{ textDecoration: (todo.completed) ? 'line-through' : 'none' }} control={<Checkbox
                    onChange={(e) => { completeItem(e, todo.id) }}

                    checked={todo.completed} color='success' />}
                    label={todo.value} />
                <DeleteIcon fontSize='small' color='error'
                    onClick={() => { removeItem(todo.id) }} />
            </Box>

        </>
    );
}


Item.propTypes = {
    todo: PropTypes.shape({
        value: PropTypes.string,
        completed: PropTypes.bool,
        id: PropTypes.string
    }),

}
export default Item;
