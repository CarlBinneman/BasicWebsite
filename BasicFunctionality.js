const myImage = document.querySelector("img");
const myParagraph = document.querySelector("p");
const myLink = document.querySelector("a");
let switchCheck = 0;

ShowSet_0();

myImage.onclick = function () {
	if (switchCheck === 0) {
		switchCheck = 1;
		ShowSet_1();
	} else {
		switchCheck = 0;
		ShowSet_0();
	}
	// console.log(switchCheck);
};

function ShowSet_0 () {
	myImage.setAttribute("src", "Images/website-drawing-scan.png");
	myParagraph.textContent = "The above is a hand rendering from : ";
	myLink.textContent = "The Mozilla Website";
	myLink.setAttribute(
		"href",
		"https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/What_will_your_website_look_like"
	);
}

function ShowSet_1 () {
	myImage.setAttribute(
		"src",
		"Images/example-red-square-grunge-stamp-260nw-327662909.jpg"
	);
	myParagraph.textContent = "The above is a stock image from : ";
	myLink.textContent = "Shutterstock";
	myLink.setAttribute(
		"href",
		"https://www.shutterstock.com/search/example+stamp"
	);
}
