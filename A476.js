let title_input = document.getElementsByClassName("title_input_box")[0];
let description_input = document.getElementsByClassName(
  "description_input_box"
)[0];
let lists = document.getElementsByClassName("lists")[0];
let save_it = (the_event) => {
  let title = title_input.value;
  let key = "AR7" + title_input.value;
  let value = description_input.value;
  localStorage.setItem(key, value);
  title_input.value = "";
  description_input.value = "";
  lists.innerHTML =
    lists.innerHTML +
    `<li key_data="${key}">
    <div>
      <span class="title_tag_1">Title:</span> ${title}<br /><span
        class="description_tag_1"
        >Description:</span
      >
      ${value}<br />
      <button class="edit_button" onclick="edit_it(this)">Edit</button>
      <button class="delete_button" onclick="delete_it(this)">
        Delete
      </button>
    </div>
  </li>`;
};
let delete_it = (the_event) => {
  let key = the_event.parentElement.parentElement.getAttribute("key_data");
  this_list = the_event.parentElement.parentElement;
  this_list.remove();
  localStorage.removeItem(key);
};
let keys = [];
for (let i = 0; i < localStorage.length; i++) {
  let key = localStorage.key(i);
  keys.push(key);
}
let todo_keys = keys.filter((key) => {
  return key.startsWith("AR7");
});

for (let i = 0; i < todo_keys.length; i++) {
  let title = todo_keys[i].slice(3);
  let key = todo_keys[i];
  let value = localStorage.getItem(key);
  lists.innerHTML =
    lists.innerHTML +
    `<li key_data="${key}">
    <div>
      <span class="title_tag_1">Title:</span> ${title}<br /><span
        class="description_tag_1"
        >Description:</span
      >
      ${value}<br />
      <button class="edit_button" onclick="edit_it(this)">Edit</button>
      <button class="delete_button" onclick="delete_it(this)">
        Delete
      </button>
    </div>
  </li>`;
}
let edit_it = (the_event) => {
  let key = the_event.parentElement.parentElement.getAttribute("key_data");
  let title = key.slice(3);
  let value = localStorage.getItem(key);
  let this_list = the_event.parentElement.parentElement;
  this_list.outerHTML = `<li key_data="${key}">
  <div>
    <span class="title_tag_1">Title:</span>
    <input type="text" class="edit_title_input" /><br /><span
      class="description_tag_1"
      >Description:</span
    >
    <input type="text" class="edit_description_input" /><br />
    <button class="done_button" onclick="done_it(this)">Done</button>
  </div>
</li>`;
  let edit_title_input = document.getElementsByClassName("edit_title_input")[0];
  edit_title_input.value = title;
  let edit_description_input = document.getElementsByClassName(
    "edit_description_input"
  )[0];
  edit_description_input.value = value;
};
let done_it = (the_event) => {
  console.log(the_event.parentElement.parentElement);
  let title_input_box =
    the_event.parentElement.parentElement.children[0].children[1];
  let description_input_box =
    the_event.parentElement.parentElement.children[0].children[4];
  let new_title = title_input_box.value;
  let new_description = description_input_box.value;
  let old_key = the_event.parentElement.parentElement.getAttribute("key_data");
  new_key = "AR7" + new_title;
  localStorage.removeItem(old_key);
  let key = new_key;
  let title = new_title;
  let value = new_description;
  localStorage.setItem(key, value);
  let this_list = the_event.parentElement.parentElement;
  this_list.outerHTML = `<li key_data="${key}">
  <div>
    <span class="title_tag_1">Title:</span> ${title}<br /><span
      class="description_tag_1"
      >Description:</span
    >
    ${value}<br />
    <button class="edit_button" onclick="edit_it(this)">Edit</button>
    <button class="delete_button" onclick="delete_it(this)">
      Delete
    </button>
  </div>
</li>`;
};
