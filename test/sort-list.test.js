/* eslint quotes: off*/

const test = QUnit.test;

QUnit.module('sortList');

const cantu = 
    {
        "age": 28,
        "firstName": "Cantu",
        "lastName": "Sullivan",
        "favoriteFruit": "banana"
    };

const pruitt = 
    {
        "age": 32,
        "firstName": "Pruitt",
        "lastName": "Montgomery",
        "favoriteFruit": "apple"
    };

const george = 
    {
        "age": 28,
        "firstName": "George",
        "lastName": "Nicholson",
        "favoriteFruit": "strawberry"
    };



const contacts = [cantu, pruitt, george];

test('sort by first name', assert => {
    // Arrange
    const sortOptions = {
        property: 'firstName'
        
    };
    // Act
    const sorted = sortList(contacts, sortOptions);

    // Assert
    assert.deepEqual(sorted, [cantu, george, pruitt]);
});

function sortList(contacts, sortOptions) {
    const property = sortOptions.property;
    return contacts.slice().sort((a, b) => {
        if(a[property] > b[property]) {
            return 1;
        }
        else if(b[property] > a[property]) {
            return -1;
        }
        return 0;
    });
}