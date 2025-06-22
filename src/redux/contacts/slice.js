import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, deleteContact, addContact } from "./operations";

const slice = createSlice({
  name: "contacts",

  initialState: {
    contacts: {
      items: [],
      loading: false,
      error: null,
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.contacts.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.loading = false;
        state.contacts.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.contacts.loading = false;
        state.contacts.error = action.payload;
      })
      .addCase(deleteContact.pending, (state) => {
        state.contacts.loading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.loading = false;
        state.contacts.items = state.contacts.items.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.contacts.loading = false;
        state.contacts.error = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.contacts.error = action.payload;
      }),
});

export default slice.reducer;
