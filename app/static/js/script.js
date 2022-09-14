const portfolioCard = {
	image: "/app/static/images/new-imgs/dsk-portfolio-card.svg",
	image2: "/app/static/images/new-imgs/mobile-card-img-1.svg",
	image4: "/app/static/images/new-imgs/mobile-card-img-4.svg",
	image3: "/app/static/images/new-imgs/mobile-card-img-3.svg",
	title: "Tonic",
	badges: [`Canopy <img src="/app/static/images/Counter.svg">`, `backend <img src="/app/static/images/Counter.svg">`, 'dev'],
	paragraph: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
	languages : ['html', 'css', 'javascript'],
	button: 'See Poroject'
}

function renderLanguagesLi(languages){
	return 	`

	${languages.map(lans => `<li>${lans}</li>`).join(' ')}
	`;
}

const recentWorks = `
  <div class="works-section">
		<img src=${portfolioCard.image} alt="background image" class="work-img">
    <div class="left-frame">
			<h1 class="work-title">${portfolioCard.title}</h1>
			<ul class="works-badges">
				${renderLanguagesLi(portfolioCard.badges)}
			</ul>
			<p class="works-para">${portfolioCard.paragraph}</p>
			<ul class="tech-list">${renderLanguagesLi(portfolioCard.languages)}</ul>
			<button type="submit" onclick="loadModalPopup()">${portfolioCard.button}</button>
		</div>
	</div>
`;


const root = document.getElementById("card1");
root.insertAdjacentHTML('beforeend', recentWorks)
