var execNames = [
  "Sam McBroom",
  "Brooke Crouch",
  "Michael Nicklas",
  "Riley Phillips",
  "Courtney Jacobs",
  "Madison Crouch",
  "Natalie Finman",
  "Haley Dues",
  "Alicia Zheng",
  "Chelsea Ulrich"
];

var execPositions = [
  "President, Webmaster",
  "Vice President",
  "Vice President",
  "Secretary",
  "Treasurer",
  "Social Chair",
  "Social Chair",
  "Outreach Chair",
  "Advocacy Chair",
  "Advocacy Chair"
];

var execYears = [
  "Fourth Year",
  "Third Year",
  "Fourth Year",
  "Second Year",
  "Fourth Year",
  "Third Year",
  "Fourth Year",
  "Third Year",
  "Fourth Year",
  "Third Year"
];

var execMajors = [
  "Majors: Computer Science, Physics",
  "Majors: Global Sustainability, Environmental Science",
  "Majors: Global Sustainability, Environmental Science",
  "Major: English",
  "Major: Computer Science",
  "Majors: Civil Engineering, Global Sustainability",
  "Major: Unknown",
  "Major: Civil Engineering",
  "Majors: Global Sustainability, Spanish",
  "Major: Psychology"
];

var execPhotos = [
  "sam_mcbroom",
  "brooke_crouch",
  "michael_nicklas",
  "riley_phillips",
  "courtney_jacobs",
  "madison_crouch",
  "natalie_finman",
  "haley_dues",
  "alicia_zheng",
  "chelsea_ulrich"
];

function addExec() {
  var photoFits = {};
  [].forEach.call(execPhotos, function(name) {
    var photo = new Image();
    photo.addEventListener("load", function() {
      if (photo.width > photo.height) {
        photoFits[name] = "wide";
      } else {
        photoFits[name] = "tall";
      }
      if (Object.keys(photoFits).length === execNames.length) {
        for (i = 0; i < execNames.length; i++) {
          document.getElementById("exec").innerHTML += '<div class="exec-member"><div class="exec-photo"><div class="exec-photo-container"><img class=' + photoFits[execPhotos[i]] + ' src="assets/images/' + execPhotos[i] + '.png"/></div></div><div class="exec-info"><h4>' + execNames[i] + '</h4><p>' + execPositions[i] + '</p><p>' + execYears[i] + '</p><p>' + execMajors[i] + '</p></div></div>';
        }
      }
    });
    photo.src = "assets/images/" + name + ".png";
  });
}
