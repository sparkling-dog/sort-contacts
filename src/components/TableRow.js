import Component from './Component.js';

class TableRow extends Component {

    renderTemplate() {
        const contact = this.props.contact;
        return /*html*/ `
            <tr>
                <td>${contact.firstName}</td>
                <td>${contact.lastName}</td>
                <td>${contact.favoriteFruit}</td>
                <td>${contact.age}</td>
            </tr>
        `;
    }
}

export default TableRow;