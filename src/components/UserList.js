import React, { Component } from 'react';
import contacts from '../data/contacts.js';

import '../styles/App.css';

class UserList extends Component{
	render(){
	let info = contacts.map((contact => {
	  return (
          <div className="container">
	        <img src={contact.picture.thumbnail} />
          <a href={contact.id}>{contact.name.first} {contact.name.last}</a>
          </div>
	  		)
	  })
	)
    return(
      <section>
        {info}
      </section>
    )

	}
}


export default UserList;
