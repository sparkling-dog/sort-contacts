import Component from './Component.js';
import contacts from '../../data/contacts.js';
import Header from './Header.js';
import ContactTable from './ContactTable.js';
import sortList from '../sortList.js';

class App extends Component {
    render() {
        const dom = this.renderDOM();

        const header = new Header();
        const headerDOM = header.render();

        const contactTable = new ContactTable({ 
            contacts,
            onSort: sortOptions => {
                const sorted = sortList(contacts, sortOptions);
                contactTable.update({ contacts: sorted });
            }
        });
        const contactTableDOM = contactTable.render();

        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);
        main.appendChild(contactTableDOM);

        return dom;
    }


    renderTemplate() {
        return /*html*/ `
            <div>
                <main>
                </main>
            </div>
        `;
    }
}

export default App;