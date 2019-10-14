var execNames = ["Camille Rovani", "Courtney Jacobs", "Sam McBroom", "Josh Crane", "Alicia Zheng", "Madison Crouch", "Brooke Crouch", "Haley Dues"];

var execPositions = ["President", "Vice President", "Webmaster, Treasurer", "Secretary", "Advocacy Leader", "Advocacy Leader", "Social Chair", "Outreach Chair"];

var execYears = ["Fourth Year", "Third Year", "Third Year", "Third Year", "Third Year", "Second Year", "Second Year", "Second Year"];

var execMajors = ["Majors: Art History, French", "Major: Computer Science", "Majors: Computer Science, Physics", "Major: Interdisciplinary Studies", "Global Sustainability, Spanish", "Majors: Civil Engineering, Global Sustainability", "Majors: Global Sustainability, Environmental Science", "Majors: Civil Engineering, Architecture, Business"];

var execPhotos = ["camille_rovani.png", "courtney_jacobs.png", "sam_mcbroom.png", "josh_crane.png", "alicia_zheng.png", "madison_crouch.png", "brooke_crouch.png", "haley_dues.png"];

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
          document.getElementById("exec").innerHTML += '<div class="exec-member"><div class="exec-photo"><div class="exec-photo-container"><img class=' + photoFits[execPhotos[i]] + ' src="assets/images/' + execPhotos[i] + '"/></div></div><div class="exec-info"><h4>' + execNames[i] + '</h4><p>' + execPositions[i] + '</p><p>' + execYears[i] + '</p><p>' + execMajors[i] + '</p></div></div>';
        }
      }
    });
    photo.src = "assets/images/" + name;
  });
}
