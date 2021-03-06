var resourceNames = ["Veggies of Virginia FAQ", "Eating in Charlottesville", "Vegan Job Guide", "A Week of Meals"];

var resourceInfos = ["Check out the guide <a href=\"assets/files/vov_faq.pdf\">here</a>!", "Check out the guide <a href=\"https://docs.google.com/document/d/e/2PACX-1vSPZx6u8PyHS87C_0ZfNnhpJcn3xWhrm0INdHZto6GIMXuq5e5bc1_xHaET4OHsleZi8T9lOjQOpQxN/pub\">here</a>!", "Check out the guide <a href=\"assets/files/vegan_jobs.pdf\">here</a>!", "Check out the menu <a href=\"assets/files/menu_0.pdf\">here</a>!"];

var resourceDates = ["Monday, Nov. 12, 2018", "Monday, Nov. 12, 2018", "Monday, Nov. 12, 2018", "Monday, Nov. 12, 2018"];

var resourceDivs = ["guides", "guides", "guides", "menus"];

function addResources() {
  for (i = 0; i < resourceNames.length; i++) {
    document.getElementById(resourceDivs[i]).innerHTML += '<div class="resource"><div class="resource-title"><p>' + resourceNames[i] + '</p><p>Last Updated: ' + resourceDates[i] + '</p></div><p>' + resourceInfos[i] + '</div>';
  }
}
