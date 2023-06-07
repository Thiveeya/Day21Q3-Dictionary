const container = document.createElement("div");
container.className = "container-fluid";


const head = document.createElement("h1");
head.innerHTML = "DICTIONARY";

const division = document.createElement("div");
division.className = "example container-fluid";
division.innerHTML = `
  <input type="text" placeholder="Search..." id="txt">
  <button type="search" class="button-81" id="sear">Search</button>
`;

const ptag = document.createElement("p");
ptag.className = "message";


const division1 = document.createElement("div");
division1.className = "result";

container.append(head, ptag, division, division1);
document.body.append(container);

const fetchData = () => {
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${txt.value}`)
    .then((response) => response.json())
    .then((data) => {
      const { definition } = data[0].meanings[0].definitions[0];
      division1.innerHTML = `
        <p><b>Definition:</b> ${definition}</p>
      `;
    })
    .catch(() => {
      division1.innerHTML = `<p><b>This is Error: Enter the correct word</b></p>`;
    });
};

const dictinoryinput = document.getElementById("sear");
dictinoryinput.addEventListener("click", fetchData);