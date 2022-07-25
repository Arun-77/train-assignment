import { configureStore } from '@reduxjs/toolkit';
import postReducer from './linkSlice';

const store = configureStore({
	reducer: { link: postReducer },
});

export default store;
