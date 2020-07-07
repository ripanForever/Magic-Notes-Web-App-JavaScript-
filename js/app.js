//console.log("Welcome to Magic Notes..");

//When a user click add note
shownotes();
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {

    let addTxt = document.getElementById('addTxt');
    let addTitle=document.getElementById('addTitle');
    let notes = localStorage.getItem('notes');

    if(addTxt.value, addTitle.value == 0){
        alert('You have not added any note and title also..');
    }
    else{
        if (notes == null) {
            notesObj = [];
        }
        else {
            notesObj = JSON.parse(notes);
        }

        let myObj={
            title: addTitle.value,
            text: addTxt.value
        };
        notesObj.push(myObj);
        localStorage.setItem('notes', JSON.stringify(notesObj));//update localstorage with elements
        addTxt.value = "";
        addTitle.value="";
    }
    //console.log(notesObj);

    shownotes();
});

//shownotes function used to show elements from localstorage
function shownotes() {
    let notes = localStorage.getItem('notes');

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    let html = ""
    notesObj.forEach(function (element, index) {
        html += `
        <div class="container my-2 mx-2"
        <div class="card" style="width: 18rem; Border: 2px solid rgb(194, 152, 152);">
        
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text">${element.text}</p>
          <button id="${index}" onclick="deletenote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
      </div>
      </div>
                `;

    });
    let noteElm=document.getElementById('notes');
    if(notesObj.length != 0){
        noteElm.innerHTML=html;
    }
    else{
        noteElm.innerHTML="You do not have any notes...."
    }
   
    

}

function deletenote(index){
    //console.log("i am deleting", index);
    let notes = localStorage.getItem('notes');

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    shownotes();

}
