let exec = [
  {name: "Haley Dues", position: "President", year: "Fourth", majors: "Civil Engineering", photo: "haley_dues"},
  {name: "Riley Phillips", position: "Vice President", year: "Third", majors: "English", photo: "riley_phillips"},
  {name: "Chyna Brown", position: "Treasurer", year: "Fourth", majors: "English", photo: "chyna_brown"},
  {name: "Brooke Crouch", position: "Social Chair", year: "Fourth", majors: "Global Sustainability, Environmental Science", photo: "brooke_crouch"},
  {name: "Madison Crouch", position: "Advocacy Chair", year: "Fourth", majors: "Civil Engineering, Global Sustainability", photo: "madison_crouch"},
  {name: "Jamie Staeben", position: "Webmaster", year: "Fourth", majors: "Astrophysics, Computer Science", photo: "jamie_staeben"}
];

function addExec() {
  exec.forEach(e => {
    let photo = new Image();
    photo.addEventListener("load", () => {
      const fit = photo.width > photo.height ? "wide" : "tall";
      document.getElementById("exec").innerHTML += `<div class="exec-member"><div class="exec-photo"><div class="exec-photo-container"><img class="${fit}" src="assets/images/${e.photo}.png"/></div></div><div class="exec-info"><h4>${e.name}</h4><p>${e.position}</p><p>${e.year} Year</p><p>${e.majors}</p></div></div>`;
    });
    photo.src = `assets/images/${e.photo}.png`;
  });
}
