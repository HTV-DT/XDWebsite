import React from 'react';
import { Box, Typography } from '@mui/material';
import TodoList from '../TodoList';

function Todo({ ...props }) {

  const { todoList } = props;


    return (
        <>
            <Box sx={{ width: '90%', minHeight: 500, marginX: 'auto' }}>
                <Typography variant="h5" component="h5" textAlign={'center'} sx={{ marginTop: 1, padding: 1 }}>
                    Những sản phẩm nổi bật
                </Typography>
                <TodoList todoList={todoList}/>
            </Box>
        </>
    );
}

export default Todo;
