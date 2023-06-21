import React, { Component } from 'react';
import shortid from 'shortid';
import Notiflix from 'notiflix';

import { Container, Section } from 'components/ui';

import {
  ContactFilter,
  ContactForm,
  ContactList,
  ContactStats,
} from 'components';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }

  addContact = (name, number) => {
    const { contacts } = this.state;
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    const existingName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    const existingNumber = contacts.find(
      contact =>
        contact.number.replace(/[^\d]/g, '') === number.replace(/[^\d]/g, '')
    );

    if (existingName) {
      Notiflix.Notify.failure(
        `Contact with this name - ${contact.name} already exists!`
      );
      return;
    } else if (existingNumber) {
      Notiflix.Notify.failure(
        `Contact with this number - ${contact.number} already exists!`
      );
      return;
    } else {
      this.setState(prevState => ({
        contacts: [contact, ...prevState.contacts],
      }));
      Notiflix.Notify.success(
        `${contact.name} has been added to  your phonebook`
      );
    }
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const totalContactCount = contacts.length;
    const visibleContacts = this.getVisibleContacts();

    return (
      <Container>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.addContact} />
          <ContactFilter value={filter} onChange={this.changeFilter} />
          <ContactStats totalContactCount={totalContactCount} />

          <ContactList
            contacts={visibleContacts}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </Container>
    );
  }
}
