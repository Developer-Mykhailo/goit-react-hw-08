import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "./slice";
import { selectContacts } from "../contacts/selectors";

// memoization
export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.number.includes(normalizedFilter)
    );
  }
);
