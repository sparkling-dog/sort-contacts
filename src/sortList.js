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

export default sortList;