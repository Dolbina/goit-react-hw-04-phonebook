import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter'
import { Layout } from './Layout/Layout';
import initialContacts from '../contacts.json';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  
  componentDidMount() {
    console.log("componentDidMount");
    const savedContacts = localStorage.getItem('contacts');
    console.log(savedContacts);
    if (savedContacts !== null) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }else{
      this.setState({
        contacts: initialContacts
      });
    }
}
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
}

  onChangeInput = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  
  addName = newName => {
    this.state.contacts.filter
      (contact => 
        contact.name.toLocaleLowerCase().trim() === newName.name.toLowerCase().trim() ||
        contact.number.trim() === newName.number.trim()
    ).length
      ? alert(`${newName.name}: is already in contacts`)
        : this.setState(prevState => {
      return{
          contacts: [...prevState.contacts, newName],
        };
    });
  };



  deleteName = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  filter = () => {
    const { contacts, filter } = this.state;
    const filterName = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filterName;
  };

  render() {
    const { filter } = this.state;

    return (
      <Layout>
        <h1>Phonebook</h1>
        <ContactForm onSave={this.addName} />
        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.onChangeInput} />
        <div>
          <ContactList contacts={this.filter()} onDelete={this.deleteName} />
        </div>
        <GlobalStyle />
      </Layout>
    );
  }
}
