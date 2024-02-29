import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface Todo {
  content: string;
  id: string;
  done: boolean;
  children: Todo[];
}

interface TodosState {
  todos: Todo[];
}

const initialState: TodosState = {
  todos: [
    {
      id: 'glarb',
      content: 'Do live code section',
      done: false,
      children: [
        {
          id: 'hahe',
          content: 'Talk about redux',
          done: false,
          children: [],
        },
      ],
    },
  ],
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    create(state, action: PayloadAction<{ content: string }>) {
      state.todos.push({
        content: action.payload.content,
        done: false,
        id: crypto.randomUUID(),
        children: [],
      });
    },
  },
});

export const { create } = todosSlice.actions;

const todosReducer = todosSlice.reducer;
export default todosReducer;
