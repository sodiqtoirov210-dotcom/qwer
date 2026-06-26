
const display = document.getElementById("display");
const input = document.querySelector(".input");
const output = document.querySelector(".output");

// Ekran bo'limi
let joriyson = "0";    
let oldingiSon = "";   
let operator = "";     
let yangiSonmi = false; 


function ekranYangilash() {
  input.textContent = joriyson;
}

// Tugmalar bo'limi
document.querySelectorAll(".num").forEach(tugma => {
  tugma.addEventListener("click", () => {
    const son = tugma.textContent;

    if (joriyson === "0" || yangiSonmi) {
      joriyson = son;
      yangiSonmi = false;
    } else {
      joriyson += son;
    }

    ekranYangilash();
  });
});

// 5. Operator tugmalari
document.querySelectorAll(".sign").forEach(tugma => {
  tugma.addEventListener("click", () => {
    const amal = tugma.textContent;

    if (amal === "A/C") {
      joriyson = "0";
      oldingiSon = "";
      operator = "";
      output.textContent = "";
      ekranYangilash();
      return;
    }

    if (amal === "del") {
      joriyson = joriyson.slice(0, -1) || "0";
      ekranYangilash();
      return;
    }

    if (amal === "%") {
      joriyson = String(parseFloat(joriyson) / 100);
      ekranYangilash();
      return;
    }

    if (amal === "=") {
      if (!operator || !oldingiSon) return;
      
      const a = parseFloat(oldingiSon);
      const b = parseFloat(joriyson);
      
      output.textContent = `${oldingiSon} ${operator} ${joriyson} =`;
      
      switch (operator) {
        case "+": joriyson = String(a + b); break;
        case "-": joriyson = String(a - b); break;
        case "x": joriyson = String(a * b); break;
        case "/": joriyson = b !== 0 ? String(a / b) : "Xato!"; break;
      }
      
      operator = "";
      oldingiSon = "";
      yangiSonmi = true;
      ekranYangilash();
      return;
    }

    // +, -, x, / bosildi
    oldingiSon = joriyson;
    operator = amal;
    output.textContent = `${joriyson} ${amal}`;
    yangiSonmi = true;
  });
});

// 6. Klaviatura bilan ishlash
document.addEventListener("keydown", (e) => {
  if (e.key >= "0" && e.key <= "9") {
    document.querySelector(`[data-son="${e.key}"]`)?.click();
  }
  if (["+", "-", "*", "/"].includes(e.key)) {
    // operator tugmasini topib bosish
  }
  if (e.key === "Enter") {
    document.querySelector(".sign:last-child").click();
  }
  if (e.key === "Backspace") {
    document.getElementById("del").click();
  }
  if (e.key === "Escape") {
    document.getElementById("AC").click();
  }
});

ekranYangilash();