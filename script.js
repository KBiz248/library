const library = [];

const form = document.getElementById('form');

form.addEventListener('submit', (e) => {e.preventDefault()});

let data = {};

function getInput(e){
    data[e.name] = e.value;
    console.log(data);

}

function Book(title, author, pages, readStatus, index) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.index = library.length;
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

    clearForm();
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
        card.style='display: grid; grid-template-rows: 50px 50px; grid-template-columns: 150px 150px; width: 300px; margin:10px; backdrop-filter: blur(5px); background: radial-gradient(transparent 50%, green);';
        card.id = `book${library.length - 1}`;
        console.log(card.id);

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
      //document.getElementById('cardArea').appendChild(div)
      card.appendChild(div); 
    }

    {
    let button = document.createElement('button');
    button.textContent = 'x';
    button.id = library.length - 1;
    console.log(button.id);
    button.style='position: absolute; right: 0px; height: 1.5rem; width: 1.5rem; border-radius: 5px; margin: 5px;';
    
    //use e.target.id in following functions
    button.addEventListener('click' , (e) => library.splice(e.target.id, 1));
    //above function removes book from library[], but then the index key is no longer accurate
    
    //function to remove book card goes here or in rem() down below
    //rem() was removed
    button.addEventListener('click', (e) => document.getElementById(`book${e.target.id}`).remove());

    //index reset goes here
    button.addEventListener('click', () => indexReset());
    card.appendChild(button)
    console.log(library)
    }
    }

    //this function may be unnecessary. only needed if index key is used later
    //check syntax of these loops vs loops in clearForm() down below
    function indexReset(){
        let i = 0;
        for(const book of library){
            book.index = i;
            i++;
        }
        
        //below is just for checking
        for(const b of library){
            console.log(b.index)
        }
    }

function toggleForm(){
    let form = document.getElementById('form');
    let formButton = document.getElementById('formButton');

    form.classList.toggle('hidden');
    
    if(form.classList.contains('hidden')){
        formButton.textContent = 'Add a new book?'
        formButton.classList.toggle('whileDisplayingForm');
    } else {
        formButton.textContent = 'Finished adding books?';
        formButton.classList.toggle('whileDisplayingForm');
        
    }
    

}

function clearForm(){
const textInputs = document.querySelectorAll('input[type="text"]');
const radioInputs = document.querySelectorAll('input[type="radio"]');
for(item of textInputs){item.value=''};
for(option of radioInputs){option.checked=false};

/*
for(item of radioInputs){
}
//play with this to see if radio buttons can be unchecked

answer- yes, but you can't use 'item' for both loops.
*/

data = {};
}
