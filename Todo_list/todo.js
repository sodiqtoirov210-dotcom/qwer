const API = "https://jsonplaceholder.typicode.com/todos";
const searchInput = document.getElementById("schearInput");

searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        qidirish();
    }
});

function qidirish() {
    const qidiruv = searchInput.value.toLowerCase().trim();

    const liLar = document.querySelectorAll("#todolist li");

    liLar.forEach(li => {
        const text = li.querySelector("span").textContent.toLowerCase();

        if (text.includes(qidiruv)) {
            li.style.display = "flex";
        } else {
            li.style.display = "none";
        }
    });
}


//get
async function datas() {
  const res = await fetch(`${API}?_limit=4`);
  const todos = await res.json();
  todos.forEach(todo => liYasa(todo)); 
}

// Li yaratish
function liYasa(todo) {
  const royxat = document.getElementById("todolist");
  const li = document.createElement("li");
  li.dataset.id = todo.id;

  li.innerHTML = `
    <span class="${todo.completed ? 'bajarildi' : ''}">${todo.title}</span>
    <div class="tugma">
      <button class="editBtn" onclick="tahrirlash(${todo.id})"></button>
      <button class="delet" onclick="ochirish(${todo.id})"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 32 32">
<path d="M 15 4 C 14.476563 4 13.941406 4.183594 13.5625 4.5625 C 13.183594 4.941406 13 5.476563 13 6 L 13 7 L 7 7 L 7 9 L 8 9 L 8 25 C 8 26.644531 9.355469 28 11 28 L 23 28 C 24.644531 28 26 26.644531 26 25 L 26 9 L 27 9 L 27 7 L 21 7 L 21 6 C 21 5.476563 20.816406 4.941406 20.4375 4.5625 C 20.058594 4.183594 19.523438 4 19 4 Z M 15 6 L 19 6 L 19 7 L 15 7 Z M 10 9 L 24 9 L 24 25 C 24 25.554688 23.554688 26 23 26 L 11 26 C 10.445313 26 10 25.554688 10 25 Z M 12 12 L 12 23 L 14 23 L 14 12 Z M 16 12 L 16 23 L 18 23 L 18 12 Z M 20 12 L 20 23 L 22 23 L 22 12 Z"></path>
</svg></button>
    </div>
  `;

  li.querySelector("span").addEventListener("click", () => {
    yangilash(todo.id, li.querySelector("span"));
  });

  royxat.appendChild(li);
}

// POST
async function qoshish() {
  const input = document.getElementById("newTodo");
  const matn = input.value.trim(); 

  if (matn === "") return alert("Bo'sh input qo'shilmaydi!"); 

  const res = await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: matn,
      completed: false,
      userId: 1
    })
  });

  const yangiTodo = await res.json();
  liYasa(yangiTodo);
  input.value = "";
}

// PUT
async function tahrirlash(id) {
  const yangiMatn = prompt("Yangi vazifa matni:");
  if (!yangiMatn) return;

  const res = await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: yangiMatn,
      completed: false,
      userId: 1
    })
  });

  const data = await res.json(); // ✅
  const li = document.querySelector(`li[data-id="${id}"]`);
  li.querySelector("span").textContent = data.title;
}

// DELETE
async function ochirish(id) {
  await fetch(`${API}/${id}`, { method: "DELETE" });
  const li = document.querySelector(`li[data-id="${id}"]`);
  li.remove();
}

// PATCH
async function yangilash(id, span) { 
  const bajarildi = span.classList.contains("bajarildi");

  await fetch(`${API}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ completed: !bajarildi })
  });

  span.classList.toggle("bajarildi");
}

// Tugmalar
document.getElementById("qoshTugma").addEventListener("click", qoshish);
document.getElementById("newTodo").addEventListener("keydown", (e) => {
  if (e.key === "Enter") qoshish();
});

datas();