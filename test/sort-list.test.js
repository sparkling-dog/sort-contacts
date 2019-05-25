/* eslint quotes: off*/
import sortList from '../src/sortList.js';

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
        "age": 9,
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

test('sort by age', assert => {
    // Arrange
    const sortOptions = {
        property: 'age'
        
    };
    // Act
    const sorted = sortList(contacts, sortOptions);

    // Assert
    assert.deepEqual(sorted, [george, cantu, pruitt]);
});

test('sort by fruit', assert => {
    // Arrange
    const sortOptions = {
        property: 'favoriteFruit'
        
    };
    // Act
    const sorted = sortList(contacts, sortOptions);

    // Assert
    assert.deepEqual(sorted, [pruitt, cantu, george]);
});

