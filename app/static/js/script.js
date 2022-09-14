const portfolioCard = {
	image1: "/app/static/images/new-imgs/dsk-portfolio-card.svg",
	image2: "/app/static/images/new-imgs/mobile-card-img-3.svg",
	image3: "/app/static/images/new-imgs/mobile-card-img-1.svg",
	image4: "/app/static/images/new-imgs/Snapshoot-Portfolio_1.svg",
	title: ["Tonic", "Multi-Post Stories", "Facebook 360", "Uber Navigation"],
	badge1: [`Canopy <img src="/app/static/images/Counter.svg">`, `backend <img src="/app/static/images/Counter.svg">`, 'dev'],
	badge2: [`Facebook <img src="/app/static/images/Counter.svg">`, `backend <img src="/app/static/images/Counter.svg">`, 'dev'],
	badge3: [`Uber <img src="/app/static/images/Counter.svg">`, `backend <img src="/app/static/images/Counter.svg">`, 'dev'],
	paragraph: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
	language1 : ['html', 'css', 'javascript'],
	language2 : ['html', 'RubyOnRails','css', 'javascript'],
	button: 'See Poroject'
}

function renderLanguagesLi(languages){
	return 	`

	${languages.map(lans => `<li>${lans}</li>`).join(' ')}
	`;
}

const cardOne = `
  <div class="works-section">
		<img src=${portfolioCard.image1} alt="background image" class="work-img">
    <div class="left-frame">
			<h1 class="work-title">${portfolioCard.title[0]}</h1>
			<ul class="works-badges">
				${renderLanguagesLi(portfolioCard.badge1)}
			</ul>
			<p class="works-para">${portfolioCard.paragraph}</p>
			<ul class="tech-list">${renderLanguagesLi(portfolioCard.language1)}</ul>
			<button type="submit" onclick="loadModalPopup()">${portfolioCard.button}</button>
		</div>
	</div>
`;

const cardTwo = `
  <div class="works-section">
    <div class="left-frame">
			<h1 class="work-title">${portfolioCard.title[1]}</h1>
			<ul class="works-badges">
				${renderLanguagesLi(portfolioCard.badge2)}
			</ul>
			<p class="works-para">${portfolioCard.paragraph}</p>
			<ul class="tech-list">${renderLanguagesLi(portfolioCard.language2)}</ul>
			<button type="submit" onclick="loadModalPopup()">${portfolioCard.button}</button>
		</div>
		<img src=${portfolioCard.image2} alt="background image" class="work-img">
	</div>
`;


const cardThree = `
  <div class="works-section">
		<img src=${portfolioCard.image3} alt="background image" class="work-img">
    <div class="left-frame">
			<h1 class="work-title">${portfolioCard.title[2]}</h1>
			<ul class="works-badges">
				${renderLanguagesLi(portfolioCard.badge2)}
			</ul>
			<p class="works-para">${portfolioCard.paragraph}</p>
			<ul class="tech-list">${renderLanguagesLi(portfolioCard.language2)}</ul>
			<button type="submit" onclick="loadModalPopup()">${portfolioCard.button}</button>
		</div>
	</div>
`;

const cardFour = `
  <div class="works-section">
    <div class="left-frame">
			<h1 class="work-title">${portfolioCard.title[3]}</h1>
			<ul class="works-badges">
				${renderLanguagesLi(portfolioCard.badge3)}
			</ul>
			<p class="works-para">${portfolioCard.paragraph}</p>
			<ul class="tech-list">${renderLanguagesLi(portfolioCard.language2)}</ul>
			<button type="submit" onclick="loadModalPopup()">${portfolioCard.button}</button>
		</div>
		<img src=${portfolioCard.image4} alt="background image" class="work-img">
	</div>
`;


const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
const card4 = document.getElementById("card4");
card1.insertAdjacentHTML('beforeend', cardOne);
card2.insertAdjacentHTML("beforeend", cardTwo);
card3.insertAdjacentHTML("beforeend", cardThree);
card4.insertAdjacentHTML("beforeend", cardFour);
