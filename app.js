const main = document.querySelector(".main");

//Header elementini oluşturma

let header = document.createElement("div");
header.style.minHeight = "5vh";
header.style.minWidth = "100vw";
header.style.background = "rgba(0,0,0,0.5)";
header.style.position = "fixed";
header.style.zIndex = "1";


let logo = document.createElement("h2");
logo.textContent = "JAVASCRIPT";
logo.style.fontSize = "2rem";
logo.style.letterSpacing = "5px";
logo.style.marginLeft = "20px";
logo.style.color = "white";

header.appendChild(logo);
main.appendChild(header);

//Resim bölümü kodları

let image = document.createElement("section");
image.style.position = "absolute";
image.style.top = "0";
image.style.minHeight = "50vh";
image.style.minWidth = "100vw";
image.style.background = 
"linear-gradient(rgba(0,0,0,0.5), transparent), url('image.jpg')";
image.style.backgroundSize = "cover";
image.style.backgroundPosition = "center";
image.style.objectFit = "cover";
image.style.objectPosition = "center";
image.style.display = "flex";
image.style.justifyContent = "center";
image.style.alignItems = "center";
main.appendChild(image);

//Slogan bölümü

let Slogan = document.createElement("h1");
Slogan.textContent = "JavaScript eğitimine katıl!";
Slogan.style.fontSize = "3rem";
Slogan.style.color = "white";
Slogan.style.letterSpacing = "2px";
Slogan.style.minWidth = "100vw";
Slogan.style.textAlign = "center";
Slogan.style.textShadow = "5px 5px 5px black";
image.appendChild(Slogan);

//Buton bölümü

let buton = document.createElement("div");
buton.style.position = "absolute";
buton.style.top = "70%"; 
buton.style.padding = "0.5rem 2rem";
buton.style.color = "white";
buton.style.fontSize = "1.5rem";
buton.style.border = "2px solid white";
buton.textContent = "Giriş Yap";
buton.style.cursor = "pointer";

image.appendChild(buton);


//Rezervasyon bölümü

let sectionbooking = document.createElement("section");

sectionbooking.style.position = "absolute";
sectionbooking.style.top = "50%";
sectionbooking.style.height = "40vh";
sectionbooking.style.minWidth = "100vw";
main.appendChild(sectionbooking);

let booking = document.createElement("div");
booking.style.height = "100%";
booking.style.width = "50%";
booking.style.margin = "auto";
booking.style.display = "flex";
booking.style.justifyContent = "center"; 
sectionbooking.appendChild(booking);

let imagediv = document.createElement("div");
imagediv.style.width = "600px";
imagediv.style.borderRight = "1px solid rgba(0,0,0,0.2)";
let imagebooking = document.createElement("img");
imagebooking.src="image1.jpg";
imagebooking.style.height = "100%";
imagebooking.style.padding = "0.5rem 0.5rem";
imagediv.appendChild(imagebooking);
booking.appendChild(imagediv);


let inputdiv = document.createElement("div");
inputdiv.style.width = "600px";
inputdiv.style.padding = "0.5rem 2rem";
inputdiv.style.display = "flex";
inputdiv.style.flexDirection = "column";
inputdiv.style.justifyContent = "center";
inputdiv.style.alignItems = "center";

let inputinfos = ["Name", "Surname", "Phone", "E-mail"];

for (let i = 1; i <= 4; i++){
let input = document.createElement("input");
input.placeholder = inputinfos[i - 1];
input.style.padding = "0.5rem";
input.style.outline = "none";
input.style.border = "1px solid rgba(0,0,0,0.2)";
input.style.fontSize = "1.5rem";
input.style.marginTop = "20px";
inputdiv.appendChild(input);
booking.appendChild(inputdiv);
}

let submit = document.createElement("div");
submit.textContent = "GÖNDER";
submit.style.padding = "0.5rem 5rem";
submit.style.marginTop = "50px";
submit.style.background = "green";
submit.style.color = "white";
submit.style.fontSize = "1.2rem";
submit.style.fontWeight = "bold";
submit.style.letterSpacing = "5px";
submit.style.cursor = "pointer";
inputdiv.appendChild(submit);


//İletişim bölümü

let setcontact = document.createElement("section");
setcontact.style.position = "absolute";
setcontact.style.minHeight = "50vh";
setcontact.style.minWidth = "50vw";
setcontact.style.left = "50%";
setcontact.style.transform = "translateX(-50%)";
setcontact.style.top = "90%";
setcontact.style.marginTop = "20px";
setcontact.style.borderTop = "1px solid rgba(0,0,0,0.2)";
main.appendChild(setcontact);

let contact = document.createElement("div");
contact.style.position = "absolute";
contact.style.minWidth = "50vw";
contact.style.minHeight = "100%";
contact.style.display = "flex";
contact.style.flexDirection = "column";
contact.style.textAlign = "center";
contact.style.alignItems = "center";

setcontact.appendChild(contact);

let contactheader = document.createElement("h1");
contactheader.style.letterSpacing = "5px";
contactheader.style.fontSize = "5rem";
contactheader.style.opacity = "0.4";
contactheader.textContent = "İLETİŞİM";
contact.appendChild(contactheader);


let address = document.createElement("p");
address.style.width = "25%";
address.textContent = "Adres: Sivas Cumhuriyet Üniversitesi 58140 KAMPÜS/SİVAS";
contact.appendChild(address);   

let phone = document.createElement("p");
phone.style.width = "50%";
phone.textContent = "Telefon: 555 123-213";
contact.appendChild(phone);  


let email = document.createElement("p");
email.style.width = "50%";
email.textContent = "E-mail: javascriptinfo@jointravel.com";
contact.appendChild(email);  


document.querySelectorAll("p").forEach((item => {
    item.style.marginTop = "20px";
}));