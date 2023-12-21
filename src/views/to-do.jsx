import Input from "../components/Input";
import Container from '@mui/material/Container';
import Item from "../components/Item";
import { useSelector } from "react-redux";
const ToDo = () => {
   const todos= useSelector((state)=>state.todos)
    return (
        <>
            <Container maxWidth="sm">

                <Input />
                {todos.map((todo,index)=>{
                    
                    return <Item todo={todo}  key={index}/>
                })}
            </Container>

        </>
    );
}

export default ToDo;
