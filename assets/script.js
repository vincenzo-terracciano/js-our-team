/* Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata in cui mostrare una card per ciascun componente.
(trovate l’array del team all’interno della cartella in allegato) */

/* Select DOM elements */
const cardsEl = document.querySelector("#cards .row");
const formEl = document.getElementById("member-form")

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "assets/img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "assets/img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "assets/img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "assets/img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "assets/img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "assets/img/female3.png"
  }
];
console.log(teamMembers);

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.querySelector('input[name="name"]').value
  console.log(name);
  
  const role = document.querySelector('input[name="role"]').value
  console.log(role);
  
  const email = document.querySelector('input[name="email"]').value
  console.log(email);
  
  const img = document.querySelector('input[name="image"]').value
  console.log(img);

  const member = {name, role, email, img};
 
  const markup = getMemberMarkup(member);
  cardsEl.innerHTML += markup
  
})

/* functions */
function getMemberMarkup(memberObj) {
  const { name, role, email, img } = memberObj
  
  const markup = `
  <div class="col-12 col-md-6 col-lg-4">
    <div class="card bg-dark d-flex flex-row">
      <div class="card-left">
        <img src="${img}" alt="" width=150>
      </div>
      <div class="card-right p-3">
        <h3 class="text-white">${name}</h3>
        <div class="text-white">${role}</div>
        <div class="text-primary">${email}</div>
      </div>
    </div>

  </div>
  `
  return markup
}

function renderTeamMembers(teamMembers, cardsEl) {
  for (let i = 0; i < teamMembers.length; i++) {
    const thisMember = teamMembers[i];
    console.log(thisMember);

    const markup = getMemberMarkup(thisMember)
    cardsEl.innerHTML += markup
  }
}

renderTeamMembers(teamMembers, cardsEl);

