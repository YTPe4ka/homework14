import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [
      { id: 1, name: 'Laptop' },
      { id: 2, name: 'Smartphone' },
      { id: 3, name: 'Tablet' },
    ],
  },
  reducers: {},
});

export const {} = productSlice.actions;
export default productSlice.reducer;
