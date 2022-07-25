import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import axios from 'axios';
import { useEffect } from 'react';

const initialState = {
	lists: [],
	error: null,
	loading: false,
};

export const fetchData = createAsyncThunk(
	'links/fetchData',
	async (url, { rejectWithValue }) => {
		try {
			const response = await axios.get(
				`https://api.shrtco.de/v2/shorten?url=${url}`
			);

			return response.data;
		} catch (err) {
			return rejectWithValue(err.response.data);
		}
	}
);

export const linkSlice = createSlice({
	name: 'links',
	initialState: initialState,
	reducers: {
		copyLink(state, { payload }) {
			state.lists.forEach((item) => {
				if (item.id === payload) {
					item.isCopied = true;
				} else {
					return item;
				}
			});
		},
	},
	extraReducers: {
		[fetchData.pending]: (state, action) => {
			state.loading = true;
			state.error = null;
		},
		[fetchData.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.error = null;
			state.lists = [
				{ id: nanoid(), payload, isCopied: false },
				...state.lists,
			];
		},
		[fetchData.rejected]: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
	},
});

export const { copyLink } = linkSlice.actions;

export default linkSlice.reducer;
