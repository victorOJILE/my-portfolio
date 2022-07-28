let elCls = (cls) => document.getElementsByClassName(cls);
let navbar_toggler = elCls("navbar-toggler")[0];
let collapse = elCls("collapse")[0];
navbar_toggler.addEventListener("click", () =>
  collapse.classList.toggle("show")
);
let intro = document.querySelector(".description p");
let header = document.querySelector(".description h1");
setTimeout(() => {
  header.classList.remove('hide-des');
}, 300);
setTimeout(() => {
  intro.classList.remove('hide-des');
}, 1000);

function isVisble(elem) {
	let coords = elem.getBoundingClientRect();
	let windowHeight = document.documentElement.clientHeight;
	let topVisible = coords.top > 0 && coords.top < windowHeight;
	let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;
	return topVisible || bottomVisible;
}

function addAnim(element) {
    element.style.visibility = 'visible';
    if(isVisble(element)) {
    element.classList.add('slide-anim');
  }else {
    element.style.visibility = 'hidden';
    element.classList.remove('slide-anim');
  }
}
window.addEventListener("scroll", () => addAnim(intro));
window.addEventListener("scroll", () => addAnim(header));

let contact_form = document.getElementById('contact-form');
let contact_div = elCls('contact-div')[0];
function hideSideContact() {
  if(isVisble(contact_form)) {
    contact_div.style.display = 'none';
  }else {
    contact_div.style.display = 'block';
  }
}
window.addEventListener('scroll', hideSideContact);


let back_to_top = document.getElementById('back-to-top');
back_to_top.onclick = () => document.body.scrollIntoView();
window.addEventListener('scroll', () => {
  if(document.documentElement.scrollTop > window.innerHeight) {
    back_to_top.classList.remove('hide');
  }else {
    back_to_top.classList.add('hide');
  }
})










