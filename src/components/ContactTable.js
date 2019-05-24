import Component from './Component.js';
import TableHeader from './TableHeader.js';
import TableRow from './TableRow.js';


class ContactTable extends Component {

    render() {
        const table = this.renderDOM();
        const tableHeader = new TableHeader();
        const tableHeaderDOM = tableHeader.render();

        const tableBody = table.querySelector('tbody');

        const tableRow = new TableRow();
        const tableRowDOM = tableRow.render();

        tableBody.appendChild(tableRowDOM);
        table.insertBefore(tableHeaderDOM, tableBody);

        return table;

    }

    renderTemplate() {
        return /*html*/ `
            <table>
                <tbody>
                </tbody>
            </table>
        `;
    }
}

export default ContactTable;