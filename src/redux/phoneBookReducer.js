const { createSlice } = require('@reduxjs/toolkit');

const INITIAL_STATE = {
  contacts: [],
};

const phoneBookSlice = createSlice({
  name: 'phoneBook',
  initialState: INITIAL_STATE,
  reducers: {
    addNumber: (state, action) => {
      if (
        state.contacts.some(
          contact =>
            contact.name === action.payload.name ||
            contact.number === action.payload.number
        )
      ) {
        alert('This contact alredy exist');

        return;
      }
      state.contacts.push(action.payload);
    },
    delNumber: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { setContacts, addNumber, delNumber } = phoneBookSlice.actions;
export const phoneBookReducer = phoneBookSlice.reducer;
