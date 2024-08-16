//your JS code here. If required
let para = document.createElement("p");
para.setAttribute("id", "status");

para.innerText = "Enter the Metaverse";

let btn = document.createElement("button");
btn.setAttribute("id", "enterBtn");
btn.innerText = "Enter";
document.body.append(para, btn);

btn.addEventListener("click", () => {
  let h = document.createElement("h1");
	let paraId = para.getAttribute('id');

	para.removeAttribute('id');
	h.setAttribute('id',paraId)
  h.innerText = "Entered Metaverse";
  para.replaceWith(h);
});


