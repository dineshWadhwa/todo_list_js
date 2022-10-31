let todobtn = document.getElementById("todobtn");
let newtask = document.querySelector("new-task");
let inputfield = document.getElementById("inputfield");
let list_el = document.querySelector("#tasks");

todobtn.addEventListener("click", (e) => {
  let task = inputfield.value;
  if (!task) {
    alert("Please fill out the task");
    return;
  }

  //main div
    let task_el = document.createElement("div");
    task_el.classList.add("task");

  //   content div
    let task_content_el = document.createElement("div");
    task_content_el.classList.add("content");

   task_el.appendChild(task_content_el);

  //  input text
    let task_input_el = document.createElement("input");
    task_input_el.classList.add("text");
    task_input_el.type = "text";
    task_input_el.value = task;
    task_input_el.setAttribute("readonly", "readonly");
    task_content_el.appendChild(task_input_el);

  //  main  btn div
    let  task_actions_el = document.createElement('div');
    task_actions_el.classList.add('actions');

  //   edit btn
   let task_edit_el = document.createElement('button');
    task_edit_el.classList.add('edit');
    task_edit_el.innerText = 'Edit';

  //   delete btn
    let task_delete_el = document.createElement('button');
  		task_delete_el.classList.add('delete');
  		task_delete_el.innerText = 'Delete';

  		task_actions_el.appendChild(task_edit_el);
  		task_actions_el.appendChild(task_delete_el);

  		task_el.appendChild(task_actions_el);

    list_el.appendChild(task_el);
    inputfield.value = "" ;


    //edit btn ()
    task_edit_el.addEventListener('click', ()=>{
      if (task_edit_el.innerText.toLowerCase() == "edit") {
          task_edit_el.innerText = "Save";
          task_input_el.removeAttribute("readonly");
          task_input_el.focus();
      } else {
          task_edit_el.innerText = "Edit";
          task_input_el.setAttribute("readonly", "readonly");
      }

   } )

   //delete btn ()
   task_delete_el.addEventListener('click', (e) => {
    var txt;
    if (confirm("Are yor sure you want to delete ?")) {
        list_el.removeChild(task_el);

    } else {
      txt = "You pressed Cancel!";
    }
    
  });
})
