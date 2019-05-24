import Component from './Component.js';

class TableRow extends Component {

    renderTemplate() {
        return /*html*/ `
            <tr>
                <td>Table Row</td>
            </tr>
        `;
    }
}

export default TableRow;