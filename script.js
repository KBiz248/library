const library = [];

const form = document.getElementById('form');

form.addEventListener('submit', (e) => {e.preventDefault()});

const data = {};

function getInput(e){
    data[e.name] = e.value;
    console.log(data);

}

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

function addBookToLibrary(){
    title=data.title;
    author=data.author;
    pages=data.pages;
    readStatus=data.readStatus;
    library.push(new Book(title, author, pages, readStatus));
    console.log(library);
    console.log(library[(library.length)-1]);
    //console.log(formData('form'));
    displayBook();

    
}

//addBookToLibrary('hobbit', 'tolkien', 'many', 'yes');
//addBookToLibrary('animorphs', 'applegate', 'just a few', 'oh yeah');
//addBookToLibrary('new title', 'a person', 'no idea', 'not yet')

//for(let i = 0; i < library.length; i++){
    //console.log(library[i])
//  }

/*
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
      div.textContent=`by ${book.author}`;
      div.style='grid-area: 2/2/3/3'
      document.getElementById('cardArea').appendChild(div)
      card.appendChild(div); 
    }

   
   
    }*/

    function displayBook(){
        let card = document.createElement('div');
        card.style='display: grid; grid-template-rows: 50px 50px; grid-template-columns: 150px 150px;'
    

    {
        let div = document.createElement('div');
        div.textContent=library[(library.length)-1].title;
        div.style='grid-area: 1/1/2/2'
        card.appendChild(div);
        document.getElementById('cardArea').appendChild(card);
    }

    {
      let div = document.createElement('div');
      div.textContent=`by ${library[(library.length)-1].author}`;
      div.style='grid-area: 2/2/3/3'
      document.getElementById('cardArea').appendChild(div)
      card.appendChild(div); 
    }
    }

function toggleForm(){
    let form = document.getElementById('form');
    let formButton = document.getElementById('formButton');

    form.classList.toggle('hidden');

    if(form.classList.contains('hidden')){
        formButton.textContent = 'Add a new book?'
    } else{
        formButton.textContent = 'Finished adding books?'
    }
    

}