const library = [];

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

function addBookToLibrary(tit, auth, pag, readStat){
    library.push(new Book(tit, auth, pag, readStat));
}

addBookToLibrary('hobbit', 'tolkien', 'many', 'yes');
addBookToLibrary('animorphs', 'applegate', 'just a few', 'oh yeah');
addBookToLibrary('new title', 'a person', 'no idea', 'not yet')

for(let i = 0; i < library.length; i++){
    console.log(library[i])
}