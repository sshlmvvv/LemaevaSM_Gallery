function dialogWithUser() {
  let ticketType;
  let price;

  while (true) {
    ticketType = prompt(
      "Оберіть тип квитка: звичайний / студентський / VIP"
    ).toLowerCase();

    if (ticketType === "звичайний") {
      price = 300;
      break;
    } else if (ticketType === "студентський") {
      price = 150;
      break;
    } else if (ticketType === "vip") {
      price = 600;
      break;
    } else {
      alert("Невідомий тип квитка. Спробуйте ще раз.");
    }
  }

  alert("Вартість вашого квитка: " + price + " грн.");
}

dialogWithUser();

function compareArtStyles() {
  let style1 = prompt("Введіть перший художній напрям:");
  let style2 = prompt("Введіть другий художній напрям:");

  if (!style1 || !style2) {
    alert("Будь ласка, введіть обидва художні напрямки!");
    return;
  }

  if (style1 > style2) {
    alert("Більший за алфавітом художній напрям: " + style1);
  } else if (style2 > style1) {
    alert("Більший за алфавітом художній напрям: " + style2);
  } else {
    alert("Обидва напрямки однакові: " + style1);
  }
}

function redirectToPage() {
  window.location.href =
    "https://artsandculture.google.com/story/fwVBpdiO2XEOjQ";
}

let table = document.getElementById("aboutTable");

table.style.backgroundColor = "#ffdbf4";

table.rows[2].cells[0].textContent = "2015";
