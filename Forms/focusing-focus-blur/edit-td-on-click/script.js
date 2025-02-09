let isEditing = false;
let cell = null;
let cellHTML = "";
let textArea = null;

const table = document.getElementById("bagua-table");

table.addEventListener("click", editTd);

function editTd(event) {
  const target = event.target.closest("td, .edit-cancel, .edit-ok");
  if (!target) return;

  if (target.classList.contains("edit-cancel")) {
    finishEditTd(false);
  } else if (target.classList.contains("edit-ok")) {
    finishEditTd(true);
  } else if (target.nodeName == "TD") {
    if (isEditing) return;

    const { innerHTML, clientWidth, clientHeight } = target;

    isEditing = true;
    cell = target;
    cellHTML = innerHTML;

    target.classList.add("edit-td");
    textArea = createTextArea(innerHTML, clientWidth, clientHeight);

    target.innerHTML = "";
    target.append(textArea);
    textArea.focus();

    target.append(createEditControlls());
  }
}

function finishEditTd(saving) {
  if (!cell) return;
  cell.classList.remove("edit-td");
  const innerHTML = saving ? cell.firstChild.value : cellHTML;
  cell.innerHTML = innerHTML;

  isEditing = false;
}

function createTextArea(innerHTML, width, height) {
  const area = document.createElement("textarea");
  area.className = "edit-area";
  area.style = `width: ${width}px; height: ${height}px;`;
  area.value = innerHTML.trim();

  return area;
}

function createEditControlls() {
  const controls = document.createElement("div");
  controls.className = "edit-controls";

  const okBtn = document.createElement("button");
  okBtn.className = "edit-ok";
  okBtn.innerText = "OK";

  const cancelBtn = document.createElement("button");
  cancelBtn.className = "edit-cancel";
  cancelBtn.innerText = "CANCEL";

  controls.append(okBtn);
  controls.append(cancelBtn);

  return controls;
}
