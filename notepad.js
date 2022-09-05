let mainNote = document.getElementById('note-button');

mainNote.addEventListener('click', () => {


let noteContainer = document.createElement('div');
noteContainer.classList.add('note-container');
document.body.appendChild(noteContainer);

let addTheNote = document.createElement('button');
addTheNote.classList.add('add-the-note');
noteContainer.appendChild(addTheNote);

let spanAdd = document.createElement('span');
spanAdd.classList.add('add');
addTheNote.appendChild(spanAdd);

// let addNote = document.createElement('div');
// addNote.classList.add('add-note');
// noteContainer.appendChild(addNote);

addTheNote.addEventListener('click', () => {

    let note = document.createElement('div');
    note.classList.add('note');
    document.body.appendChild(note);

    let noteAction = document.createElement('div');
    noteAction.classList.add('note-action');
    note.appendChild(noteAction);

    let buttonSave = document.createElement('button');
    buttonSave.classList.add('save');
    buttonSave.innerHTML = `<i class="fa fa-arrow-left" aria-hidden="true"></i>`;
    noteAction.appendChild(buttonSave);

    let buttonEdit = document.createElement('button');
    buttonEdit.classList.add('edit');
    buttonEdit.innerHTML = `<i class="fa fa-pencil" aria-hidden="true"></i>`;
    noteAction.appendChild(buttonEdit);

    let notePad = document.createElement('div');
    notePad.classList.add('notepad');
    note.appendChild(notePad);

    let noteTitle = document.createElement('input');
    noteTitle.classList.add('title');
    noteTitle.setAttribute('type', 'text');
    noteTitle.setAttribute('placeholder', 'Title...');
    notePad.appendChild(noteTitle);

    let noteTask = document.createElement('textarea');
    noteTask.classList.add('task');
    noteTask.setAttribute('cols', '30');
    noteTask.setAttribute('rows', '10');
    notePad.appendChild(noteTask);


    buttonSave.addEventListener('click', () => {
        let titleValue = noteTitle.value;
        let noteValue = noteTask.value;

        note.remove();

        if (!titleValue && !noteValue) {
            return;
        };

        let noteOut = document.createElement('div');
        noteOut.classList.add('add-note');
        noteContainer.appendChild(noteOut);

        let mainNoteOut = document.createElement('button');
        mainNoteOut.classList.add('note-out');
        noteOut.appendChild(mainNoteOut);

        let noteOutTitle = document.createElement('div');
        noteOutTitle.classList.add('note-out-title');
        noteOutTitle.innerHTML = titleValue;
        mainNoteOut.appendChild(noteOutTitle);

        let noteOutNote = document.createElement('div');
        noteOutNote.classList.add('note-out-note');
        noteOutNote.innerHTML = noteValue;
        mainNoteOut.appendChild(noteOutNote);

        let deleteNoteOut = document.createElement('button');
        deleteNoteOut.classList.add('delete-note-out');
        deleteNoteOut.innerHTML = `<i class="fa fa-trash" aria-hidden="true"></i>`;
        noteOut.appendChild(deleteNoteOut);

        deleteNoteOut.addEventListener('click', () => {
            noteOut.remove();
        })


        let newtitle = titleValue;
        let newNote = noteValue;

        mainNoteOut.addEventListener('click', () => {
            console.log(`clicked`);

            // mainNoteOut.remove();

            let titleEdit = newtitle;
            let noteEdit = newNote;

            let note = document.createElement('div');
            note.classList.add('note');
            document.body.appendChild(note);

            let noteAction = document.createElement('div');
            noteAction.classList.add('note-action');
            note.appendChild(noteAction);

            let buttonSave = document.createElement('button');
            buttonSave.classList.add('save');
            buttonSave.innerHTML = `<i class="fa fa-arrow-left" aria-hidden="true"></i>`;
            noteAction.appendChild(buttonSave);

            // let buttonEdit = document.createElement('button');
            // buttonEdit.classList.add('edit');
            // buttonEdit.innerHTML = `<i class="fa fa-pencil" aria-hidden="true"></i>`;
            // noteAction.appendChild(buttonEdit);

            let notePad = document.createElement('div');
            notePad.classList.add('notepad');
            note.appendChild(notePad);

            let noteTitle = document.createElement('input');
            noteTitle.classList.add('title');
            noteTitle.setAttribute('type', 'text');
            noteTitle.setAttribute('placeholder', 'Title...');
            noteTitle.value = newtitle;
            notePad.appendChild(noteTitle);

            let noteTask = document.createElement('textarea');
            noteTask.classList.add('task');
            noteTask.setAttribute('cols', '30');
            noteTask.setAttribute('rows', '10');
            noteTask.innerHTML = newNote;
            notePad.appendChild(noteTask);

            mainNoteOut.remove();

            buttonSave.addEventListener('click', () => {
                let titleValue = noteTitle.value;
                let noteValue = noteTask.value;

                note.remove();

                let noteOut = document.createElement('div');
                noteOut.classList.add('add-note');
                noteContainer.appendChild(noteOut);

                let mainNoteOut = document.createElement('button');
                mainNoteOut.classList.add('note-out');
                noteOut.appendChild(mainNoteOut);

                let noteOutTitle = document.createElement('div');
                noteOutTitle.classList.add('note-out-title');
                noteOutTitle.innerHTML = titleValue;
                mainNoteOut.appendChild(noteOutTitle);

                let noteOutNote = document.createElement('div');
                noteOutNote.classList.add('note-out-note');
                noteOutNote.innerHTML = noteValue;
                mainNoteOut.appendChild(noteOutNote);

            })

            
            })
        })

    })

})