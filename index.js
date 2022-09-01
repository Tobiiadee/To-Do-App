

let form_el = document.createElement('form');

let inputTitle = document.createElement('input');

let inputTask = document.createElement('textarea');

let InputSave = document.createElement('input');

window.addEventListener('load', () => {

    document.InputSave.addEventListener('click', (e) => {
        e.preventDefault();

        console.log("this is a test");

        let title = inputTitle.value;
        let task = inputTask.value;

       let taskOut = document.createElement('div');
       taskOut.classList.add('task-out');
       document.body.appendChild(taskOut);

       let taskList = document.createElement('div');
       taskList.childElementCount.classList.add('task-list');
       taskOut.appendChild(taskList);

       let taskTitleInput = document.createElement('input');
       taskTitleInput.classList.add('task-title');
       taskOut.appendChild(taskTitleInput);

       let taskInput = document.createElement('textarea');
       taskInput.classList.add('task');
       taskInput.setAttribute('cols', '30')
       taskInput.setAttribute('rows', '5')
       taskOut.appendChild(taskInput);
       
    });

});