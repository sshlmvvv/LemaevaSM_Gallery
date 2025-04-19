function changeBackground() {
    const originalBackground = document.body.style.backgroundColor;

    document.body.style.backgroundColor = "#ffdbf4";

    setTimeout(function() {
        document.body.style.backgroundColor = originalBackground;
    }, 30000);
}

function BInsideI() {
  const elements = document.querySelectorAll("i > b");
  const phrases = [
    "⭐ Мистецтво, що оживає перед вами ⭐",
    "⭐ Тут кожен штрих розповідає свою історію ⭐",
    "⭐ Мальовничі світи в кожному полотні ⭐",
    "⭐ Доторкнись до емоцій, що захоплюють серце ⭐",
    "⭐ Твори, які надихають до нових відкриттів ⭐",
    "⭐ Картини — мовчазні гучні голоси душі ⭐",
    "⭐ Кожен мазок — нова історія ⭐",
    "⭐ Тут оживає кожен колір і форма ⭐",
    "⭐ Мистецтво без кордонів та часу ⭐",
    "⭐ Поглянь на світ через призму живопису ⭐",
    "⭐ Відчуй магію живопису в кожному образі ⭐",
    "⭐ Живопис — це не просто картини, це емоції ⭐",
    "⭐ Картини, що змінюють реальність ⭐",
    "⭐ Мистецтво без меж — це нескінченні можливості ⭐",
  ];

  let index = 0;

  setInterval(() => {
    elements.forEach((el, i) => {
        el.textContent = phrases[(index + i) % phrases.length];
        el.classList.add("fancy-bold");
    });
    index++;
  }, 10000);
}

BInsideI();

const listUnord = document.querySelector(".list_unord");
listUnord.innerHTML += "<li class='list_item'>Абстракціонізм</li>";

const museumsTitle = document.querySelectorAll("h2.main_subtitle")[0];
museumsTitle.outerHTML = "<h2 class='main_subtitle'>Найвідоміші музеї світу 🖼️</h2>";

const firstArtistBlock = document.querySelector(".artist_block.f p span");
console.log(firstArtistBlock.textContent);
firstArtistBlock.textContent = "емоційній насиченості";

const artistName = document.querySelector("dt");
console.log(artistName.firstChild.nodeValue);
artistName.firstChild.nodeValue = "Леонардо да Вінчі 🎨";

