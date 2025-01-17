import { useDispatch, useSelector } from 'react-redux';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import { nanoid } from 'nanoid';
import { selectFilteredContacts } from './redux/selectors';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  const addContact = newContact => {
    const duplicate = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (duplicate) {
      alert(`${newContact.name} is already in contacts!`);
      return;
    }

    dispatch({
      type: 'contacts/add',
      payload: { id: nanoid(), ...newContact },
    });
  };

  const deleteContact = id => {
    dispatch({ type: 'contacts/delete', payload: id });
  };

  return (
    <div className="app">
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <h2>Contacts</h2>
      <SearchBox />
      <ContactList contacts={contacts} onDelete={deleteContact} />
    </div>
  );
};

export default App;
