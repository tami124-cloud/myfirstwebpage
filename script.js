document.getElementById("yesBtn").addEventListener("click", function() {

document.getElementById("message").innerText = "as you should 😏";
});

document.getElementById("noBtn").addEventListener("mouseover", function() {
	let x = Math.random() * (window.innerWidth - 100);
	let y = Math.random() * (window.innerHeight - 50);
	this.style.left = `${x}px`;
this.style.top = `${y}px`;
});