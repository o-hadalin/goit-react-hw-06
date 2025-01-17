export const selectFilterValue = state => state.filters.name;

export const selectFilteredContacts = state => {
  const { items } = state.contacts;
  const filter = state.filters.name;

  return items.filter(contact => contact.name.toLowerCase().includes(filter));
};
