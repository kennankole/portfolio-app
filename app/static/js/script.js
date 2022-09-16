
const portfolioCard = {
	image1: "/app/static/images/new-imgs/dsk-portfolio-card.svg",
	image2: "/app/static/images/new-imgs/mobile-card-img-3.svg",
	image3: "/app/static/images/new-imgs/mobile-card-img-1.svg",
	image4: "/app/static/images/new-imgs/Snapshoot-Portfolio_1.svg",
	image5: "/app/static/images/new-imgs/mobile-card-img-4.svg",
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
  <div class="works-section mobile">
		<img src=${portfolioCard.image1} alt="background image" class="work-img">
    <div class="left-frame">
			<h1 class="work-title">${portfolioCard.title[0]}</h1>
			<ul class="works-badges">
				${renderLanguagesLi(portfolioCard.badge1)}
			</ul>
			<p class="works-para">${portfolioCard.paragraph}</p>
			<ul class="tech-list">${renderLanguagesLi(portfolioCard.language1)}</ul>
			<button type="submit" class="modal-btn" onclick="loadModalPopup()">${portfolioCard.button}</button>
		</div>
	</div>
`;

const cardTwo = `
  <div class="works-section mobile">
    <div class="left-frame">
			<h1 class="work-title">${portfolioCard.title[1]}</h1>
			<ul class="works-badges">
				${renderLanguagesLi(portfolioCard.badge2)}
			</ul>
			<p class="works-para">${portfolioCard.paragraph}</p>
			<ul class="tech-list">${renderLanguagesLi(portfolioCard.language2)}</ul>
			<button type="submit" class="modal-btn" onclick="loadModalPopup()">${portfolioCard.button}</button>
		</div>
		<img src=${portfolioCard.image2} alt="background image" class="work-img">
	</div>
`;


const cardThree = `
  <div class="works-section">
		<img src=${portfolioCard.image3} alt="background image" class="work-img">
    <div class="left-frame">
			<h1 class="work-title">${portfolioCard.title[0]}</h1>
			<ul class="works-badges">
				${renderLanguagesLi(portfolioCard.badge2)}
			</ul>
			<p class="works-para">${portfolioCard.paragraph}</p>
			<ul class="tech-list">${renderLanguagesLi(portfolioCard.language2)}</ul>
			<button type="submit" class="modal-btn mobile" onclick="loadModalPopup()">${portfolioCard.button}</button>
		</div>
	</div>
`;

const cardFour = `
  <div class="works-section mobile">
    <div class="left-frame">
			<h1 class="work-title">${portfolioCard.title[3]}</h1>
			<ul class="works-badges">
				${renderLanguagesLi(portfolioCard.badge3)}
			</ul>
			<p class="works-para">${portfolioCard.paragraph}</p>
			<ul class="tech-list">${renderLanguagesLi(portfolioCard.language2)}</ul>
			<button type="submit" class="modal-btn" onclick="loadModalPopup()">${portfolioCard.button}</button>
		</div>
		<img src=${portfolioCard.image4} alt="background image" class="work-img">
	</div>
`;

const cardThreeMobile = `
  <div class="works-section mobile">
		<img src=${portfolioCard.image5} alt="background image" class="work-img">
    <div class="left-frame mobile">
			<h1 class="work-title mobile">${portfolioCard.title[0]}</h1>
			<ul class="works-badges mobile">
				${renderLanguagesLi(portfolioCard.badge1)}
			</ul>
			<p class="works-para mobile">${portfolioCard.paragraph}</p>
			<ul class="tech-list mobile">${renderLanguagesLi(portfolioCard.language1)}</ul>
			<button type="submit" class="modal-btn mobile" onclick="loadModalPopup()">${portfolioCard.button}</button>
		</div>
	</div>
`;

const cardFourMobile = `
  <div class="works-section mobile">
	<img src=${portfolioCard.image4} alt="background image" class="work-img">
    <div class="left-frame mobile">
			<h1 class="work-title mobile">${portfolioCard.title[1]}</h1>
			<ul class="works-badges mobile">
				${renderLanguagesLi(portfolioCard.badge1)}
			</ul>
			<p class="works-para mobile">${portfolioCard.paragraph}</p>
			<ul class="tech-list mobile">${renderLanguagesLi(portfolioCard.language1)}</ul>
			<button type="submit" class="modal-btn mobile" onclick="loadModalPopup()">${portfolioCard.button}</button>
		</div>
	</div>
`;

const cardTwoMobile = `
  <div class="works-section mobile">
	<img src=${portfolioCard.image2} alt="background image" class="work-img">
    <div class="left-frame mobile">
			<h1 class="work-title mobile">${portfolioCard.title[0]}</h1>
			<ul class="works-badges mobile">
				${renderLanguagesLi(portfolioCard.badge1)}
			</ul>
			<p class="works-para mobile">${portfolioCard.paragraph}</p>
			<ul class="tech-list mobile">${renderLanguagesLi(portfolioCard.language1)}</ul>
			<button type="submit" class="modal-btn mobile" onclick="loadModalPopup()">${portfolioCard.button}</button>
		</div>
	</div>
`;

const cardOneMobile = `
  <div class="works-section mobile">
		<img src=${portfolioCard.image3} alt="background image" class="work-img">
    <div class="left-frame mobile">
			<h1 class="work-title mobile">${portfolioCard.title[0]}</h1>
			<ul class="works-badges mobile">
				${renderLanguagesLi(portfolioCard.badge1)}
			</ul>
			<p class="works-para mobile">${portfolioCard.paragraph}</p>
			<ul class="tech-list mobile">${renderLanguagesLi(portfolioCard.language1)}</ul>
			<button type="submit" class="modal-btn mobile" onclick="loadModalPopup()">${portfolioCard.button}</button>
		</div>
	</div>
`;
const modalWindow = {
	image: "/app/static/images/new-imgs/modal-img-dsktp.svg",
	mobileImage: "/app/static/images/new-imgs/mobile-detail-1.svg",
	desktopTitle: "Tonic",
	modalPara: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
							Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
							when an unknown printer took a galley of type and scrambled it 1960s with the 
							releaLorem Ipsum is simply dummy text of the printing and typesetting industry. 
							Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
							when an unknown printer took a galley of type and scrambled it 1960s with the 
							releorem Ipsum is simply dummy text of the printing and typesetting industry. 
							Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the 
							releawn printer took a galley of type and scrambled it 1960s with the releaLorem 
							Ipsum is simply dummy text of the printing and typesetting industry. 
							Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
							when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
	mobilePara: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
							Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
							when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
							It has survived not only five centuries, but also the leap into electronic typesetting, 
							remaining essent`,
	technologies: ["html", "css", "javascript", "github", "ruby", "Bootstrap"],
	lineImg: "/app/static/images/new-imgs/Vector-4.svg",
	buttons: [`See live  <img src="/app/static/images/new-imgs/Icon-Export.svg">`, `Source demo <img src="/app/static/images/new-imgs/github.svg">`]
}


const modals = `
		<section id="my-modal">
			<div class="heading modal">
				<h1>${portfolioCard.title[0]}</h1>
				<span class="close">&times;</span>
			</div>
			<ul class="works-badges">
				${renderLanguagesLi(portfolioCard.badge1)}
			</ul>
			<img src="${modalimage}" alt="background image">
			<div class="bottom-container">
				<div class="para">
					<p>${modalmodalPara}</p>
				</div>
				<div class="technologies">
					<ul class="tech-list modal">
						${renderLanguagesLi(modaltechnologies)}
					</ul>
					<div class="demo-btns">
					<ul class="buttons">
						${renderLanguagesLi(modalbuttons)}
					<ul>
					</div>
				</div>
			</div>
		</section>
	</div>
`;

const mobileMod = `
	<section id="my-mobile-modal">
		<div class="heading modal">
			<h1>${portfolioCard.title[0]}</h1>
			<span class="close-mobile">&times;</span>
		</div>
		<ul class="works-badges mobile modal">
			${renderLanguagesLi(portfolioCard.badge1)}
		</ul>
		<img src="${modalmobileImage}" alt="background image">
		<div class="bottoms-container">
			<div class="mob-para modal">
				<p>${modalmobilePara}</p>
			</div>
			<div class="mob-tech">
				<ul class="tech-list mobile modal">${renderLanguagesLi(portfolioCard.language1)}</ul>
				</ul>
				<img src="${modallineImg}" alt="seperator image">
				<div class="demo-btns">
				<ul class="buttons">
					${renderLanguagesLi(modalbuttons)}
				<ul>
				</div>
			</div>
		</div>
	</section>
`



// Desktop
document.getElementById("card1").insertAdjacentHTML('beforeend', cardOne);
document.getElementById("card2").insertAdjacentHTML("beforeend", cardTwo);
document.getElementById("card3").insertAdjacentHTML("beforeend", cardThree);
document.getElementById("card4").insertAdjacentHTML("beforeend", cardFour);
// Mobile
document.getElementById('mobile1').insertAdjacentHTML("beforeend", cardOneMobile);
document.getElementById("mobile2").insertAdjacentHTML("beforeend", cardFourMobile);
document.getElementById("mobile3").insertAdjacentHTML("beforeend", cardThreeMobile);
document.getElementById("mobile4").insertAdjacentHTML("beforeend", cardTwoMobile);

document.body.innerHTML += mobileMod;
document.body.innerHTML += modals;



// Modal close
function close(){
	document.getElementById("my-modal").style.display = 'none';
}

function closeMobile(){
	document.getElementById("my-mobile-modal").style.display = 'none';
}

// Modal load
function loadModalPopup(){
	let span = document.getElementsByClassName("close")[0];
	if (document.body.clientWidth > 768){
		document.getElementById("my-modal").style.display = 'block';
		span.addEventListener("click", close);
	} else if (document.body.clientWidth <= 768) {
        let spann = document.getElementsByClassName("close-mobile")[0];
		document.getElementById("my-mobile-modal").style.display = 'block';
		spann.addEventListener("click", closeMobile);
	}	
}


const form = document.getElementById('form');
const femail = document.getElementById("email");
const fname = document.getElementById("name");
const fmessage = document.getElementById("subject");
const error = document.querySelector("small");

form.addEventListener('submit', (e) => {
	if(femail.value !== femail.value.toLowerCase()){
		error.innerHTML = "Email should be in lower case";
		error.style.display = 'block';
		e.preventDefault();
	}
})

// Local Storage 


function saveUserData(){
	const data = {
		name: localStorage.setItem('Name', fname.value),
		email: localStorage.setItem("Email", femail.value),
		message: localStorage.setItem("Message", fmessage.value)
	};
	return data;
}

femail.value = localStorage.getItem("Email");
fname.value = localStorage.getItem("Name");
fmessage.value = localStorage.getItem("Message");

saveUserData();

fname.onchange = saveUserData()
femail.onchange = saveUserData();
fmessage.onchange = saveUserData();




