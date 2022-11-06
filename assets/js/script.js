function game(play1, hour, play2) {
  return `
            <li>
              <img src="assets/img/icons/${play1}.svg" alt="${play1}" />
              <strong>${hour}</strong>
              <img src="assets/img/icons/${play2}.svg" alt="${play2}" />
            </li>
  `
}

function createCard(date, day, game) {
  return `
        <div class="card">
          <h2>${date} <span>${day}</span></h2>
          <ul>
            ${game}
          </ul>
        </div>
  `
}

document.querySelector("#app").innerHTML = `
      <header>
        <img src="assets/img/logo.svg" alt="logo" />
      </header>
      <main id="cards">
        ${createCard(
          "24/11",
          "quinta",
          game("switzerland", "07:00", "cameroon") +
            game("brazil", "16:00", "Serbia")
        )}
        ${createCard(
          "28/11",
          "segunda",
          game("cameroon", "07:00", "serbia") +
            game("brazil", "13:00", "switzerland")
        )}
        ${createCard(
          "02/12",
          "sexta",
          game("serbia", "16:00", "switzerland") +
            game("brazil", "16:00", "cameroon")
        )}
      </main>
`
