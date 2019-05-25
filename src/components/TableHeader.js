import Component from './Component.js';

class TableHeader extends Component {

    render() {
        const tableHead = this.renderDOM();
        const onSort = this.props.onSort;
        const buttons = tableHead.querySelectorAll('button');
        
        const propertyArray = ['firstName', 'lastName', 'favoriteFruit', 'age'];

        buttons.forEach((button, i) => {
            button.addEventListener('click', () => {
                onSort({ property: propertyArray[i] });
            });
        });

        return tableHead;
    }

    renderTemplate() {
        return /*html*/ `
            <thead>
                <tr>
                    <th><button>First Name: </button></th>
                    <th><button>Last Name: </button></th>
                    <th><button>Favorite fruit: </button></th>
                    <th><button>Age: </button></th>
                </tr>
            </thead>
        `;
    }
}

export default TableHeader;