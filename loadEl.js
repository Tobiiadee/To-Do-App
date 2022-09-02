let addTask = document.getElementById('main-submit');

addTask.addEventListener('click', () => {

   let transform_el = document.createElement('div');
   transform_el.classList.add('transform');
   document.body.appendChild(transform_el);

   let span_el = document.createElement('div');
   span_el.classList.add('span');
   transform_el.appendChild(span_el);

   let form_el = document.createElement('form');
   form_el.classList.add('task-form');
   transform_el.appendChild(form_el);

   let inputTitle = document.createElement('input');
   inputTitle.classList.add('task-in-title');
   inputTitle.setAttribute('placeholder', 'title..')
   transform_el.appendChild(inputTitle);  
   
   let inputTask = document.createElement('textarea');
   inputTask.classList.add('task-in');
   inputTask.setAttribute('placeholder', 'What do you need to do?..');
   inputTask.setAttribute('cols', '30');
   inputTask.setAttribute('rows', '10');
   transform_el.appendChild(inputTask);

   let onNotTask = document.createElement('div');
   onNotTask.classList.add('not-task');
   onNotTask.textContent = "";
   form_el.appendChild(onNotTask);
   

   let InputSave = document.createElement('input');
   InputSave.classList.add('save')
   InputSave.setAttribute('type', 'submit');
   InputSave.setAttribute('value', 'save');
   transform_el.appendChild(InputSave);



      InputSave.addEventListener('click', (e) => {
         e.preventDefault();
      let title = inputTitle.value;
      let task = inputTask.value;


      if (!task) {
         onNotTask.textContent = "Please fill in your task...";
         return;
      }

         transform_el.remove(); 

         let taskOut = document.createElement('div');
         taskOut.classList.add('task-out');
         document.body.appendChild(taskOut);

         let taskList = document.createElement('div');
         taskList.classList.add('task-list');
         taskOut.appendChild(taskList);

         let taskTitle = document.createElement('input');
         taskTitle.classList.add('task-title');
         taskTitle.setAttribute('type', 'text');
         taskTitle.setAttribute('readonly', 'readonly');
         taskList.appendChild(taskTitle);
         taskTitle.value = title;

         let taskInput = document.createElement('textarea');
         taskInput.classList.add('task');
         taskInput.setAttribute('cols', '30');
         taskInput.setAttribute('rows', '5');
         taskInput.setAttribute('readonly', 'readonly');
         taskList.appendChild(taskInput);
         taskInput.innerHTML = task;

         let action = document.createElement('div');
         action.classList.add('action');
         taskList.appendChild(action);

         let taskEdit = document.createElement('button');
         taskEdit.classList.add('edit');
         action.appendChild(taskEdit);
         taskEdit.innerHTML = "Edit";

         taskEdit.addEventListener('click', () => {

            if (taskEdit.innerHTML == "Edit") {
            taskInput.removeAttribute('readonly');
            taskInput.focus();

            taskTitle.removeAttribute('readonly');
            taskTitle.focus();

            taskEdit.innerHTML = "save";
          }

          else {
            taskInput.setAttribute('readonly', 'readonly');

            taskTitle.setAttribute('readonly', 'readonly');
            
            taskEdit.innerHTML = "Edit";
          }
      
         })

         let taskDelete = document.createElement('button');
         taskDelete.classList.add('delete');
         taskDelete.innerHTML = "Delete Task";
         action.appendChild(taskDelete);

         taskDelete.addEventListener('click', () => {

            taskOut.remove();

         });
         

});   

});


