import { PhoneForm } from './PhoneForm';
import { ContactList } from './ContactList';
import { nanoid } from 'nanoid';
import { Filter } from './Filter';
import { useDispatch, useSelector } from 'react-redux';
import { addNumber, delNumber } from 'redux/phoneBookReducer';

export const App = () => {

  const contacts = useSelector(state => state.phoneBook.contacts);
  const filter = useSelector(state => state.filter.filter);

  const dispatch = useDispatch();

  const addConatct = ({ event, name, number }) => {
    event.preventDefault();
    dispatch(addNumber({ name: name, number: number, id: nanoid() }));
  };

  const getFilteredContacts = filter => {
    try {
      return contacts.filter(
        contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase()) ||
          contact.number.includes(filter)
      );
    } catch (err) {
      return contacts;
    }
  };

  const handleDelete = id => {
    dispatch(delNumber(id));
  };

  return (
    <>
      <h1>Phonebook</h1>
      <PhoneForm handleAddNumber={addConatct} />
      <h2>Contacts</h2>
      <Filter filter={filter} contacts={contacts} />
      <ContactList
        contacts={getFilteredContacts(filter) ?? []}
        handleDelete={handleDelete}
      />
    </>
  );
};
