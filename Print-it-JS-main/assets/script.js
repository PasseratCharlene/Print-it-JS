const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
let index=0
const size=slides.length
const arrowLeft=document.querySelector(".arrow_left")
arrowLeft.addEventListener("click",(e)=>{
	index--
	if(index < 0){
		index=size-1
	}
	updateSlider(slides, index)
})

const arrowRight=document.querySelector(".arrow_right")
arrowRight.addEventListener("click",(e)=>{
	index++
	if(index>=size){
		index=0
	}
	updateSlider(slides, index)
})

function displayImage(slides,index){
	const image=document.querySelector(".banner-img")
	image.src=`./assets/images/slideshow/${slides[index].image}`
}

function updateDotsSelector(index){
	const dotElts=Array.from(document.querySelectorAll(".dot"))
	// faire une boucle qui parcoure dotElts
		// si dot=index on va ajouter la classe .dot_selected
		// si dot!=index et dot à la classe .dot_selected il faut supprimer la classe .dot_selected

	for(let i = 0; i< dotElts.length; i++){
		if(i===index){
			dotElts[i].classList.add("dot_selected")
		}
		else if (i!=index && dotElts[i].classList.contains("dot_selected")){
			dotElts[i].classList.remove("dot_selected")
		}
	}
}

function updateTagline(slides, index) {
    const taglineElement = document.querySelector(".tagLine");
    taglineElement.innerHTML = slides[index].tagLine;
}

function updateSlider(slides, index){
	displayImage(slides, index)
	updateDotsSelector(index)
	updateTagline(slides, index);
}





