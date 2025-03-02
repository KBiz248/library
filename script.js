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

//for(let i = 0; i < library.length; i++){
    //console.log(library[i])
//  }

for (const book of library){
   
    
        let card = document.createElement('div');
        card.style='display: grid; grid-template-rows: 50px 50px; grid-template-columns: 150px 150px;'
    

    {
        let div = document.createElement('div');
        div.textContent=book.title;
        div.style='grid-area: 1/1/2/2'
        card.appendChild(div);
        document.getElementById('cardArea').appendChild(card);
    }

    {
      let div = document.createElement('div');
      div.textContent=book.author;
      div.style='grid-area: 2/2/3/3'
      document.getElementById('cardArea').appendChild(div)
      card.appendChild(div); 
    }

   
   
    }
