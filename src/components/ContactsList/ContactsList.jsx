import { ContactList } from "./ContactsList.styled"
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

export const ContactsList = () => {
  const contacts = useSelector(state => state.contacts);
        return(
            <ContactList>
            {contacts.map(item => {
              return(
                <li key={item.id}>
                  <span>{item.name}:</span> 
                  <span>{item.number}</span> 
                  <button 
                    
                  >delete</button>
                </li>
              )
            })}
            </ContactList>
        )
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    number: PropTypes.string,
  }))
}