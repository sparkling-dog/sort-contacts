import Component from './Component.js';

class TableHeader extends Component {


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