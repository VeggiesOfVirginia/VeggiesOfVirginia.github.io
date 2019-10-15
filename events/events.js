var eventNames = [
  "The Great Vegan Bake-Off",
  "Vegan Mac n Cheese Cook-Off",
  "Vegan Thanksgiving Potluck",
  "Plant-Based Pledge & Earth Week"
];

var eventInfos = [
  "After a tremendously successful Vegan Mac n Cheese Cook-Off last semester, we are excited to announce this semester's cook-off event, The Great Vegan Bake-Off! Fellow students and community members will compete for the best vegan dessert (anything from pies to brownies to cupcakes to cookies). People can either register to enter the competition for free or pay $5 to attend as a taster. There will be three awards given (Judge's Choice, People's Choice, and Most Creative) with some awesome prizes including gift-cards, treats and matted photos from Hoowithaview! Tasters will also have the opportunity to enter a raffle. Additionally, we have some great judges including former mayor Dave Norris and UVA Dining Executive Pastry Chef Anisa Bakhti-Suroosh!",
  "In our first annual Vegan Mac n Cheese Cook-Off, seven adventurous chefs brought their own versions of vegan mac n cheese to compete for super cool prizes including Roots gift cards, vegan snacks, and beautiful matted photos of UVA courtesy of <a href=\"https://www.instagram.com/hoowithaview/\" style=\"text-decoration: none\" target=\"_blank\">@Hoowithaview</a>. We had some great judges including former Mayor and long-time vegan Dave Norris, former Teen-Chop winner Veronica Seguin, and fourth year food-loving omnivore, Alex Smith-Scales. We sold around 50 tickets to the event and had plenty of vegan mac for everyone. Special shoutout to Judge's Choice winner Carrington Kernodle, People's Choice winner Nora Pehrson, and Most Creative winner Paige Summers. We hope to do more cook-off events like this one in the future!",
  "Every November we invite UVA students and members of the Charlottesville community to join us for one of our biggest events of the year. There is always a wide variety of dishes (including desserts) and everyone leaves completely full and happy! This year we accepted donations for Ranger's Refuge at Gallastar Farms in lieu of bringing a dish, and raised $75 to do good while eating well.",
  "A week-long campaign to encourage UVA students and faculty to eat more plant-based for Earth Week! Throughout the week, Veggies of Virginia sends daily reminders about the pledge and some of the environmental benefits of living plant-based, along with helpful tips and tricks for eating plant-based in Charlottesville! The club organizes various events throughout the week, and at the end of the week, we celebrate Earth Day with a fun potluck!"
];

var eventDates = [
  "Sunday, Mar. 3, 2019",
  "Sunday, Oct. 21, 2018",
  "Saturday, Oct. 10, 2018",
  "Sunday, Apr. 15 - 22, 2018"
];

var eventSemesters = [
  "spring2019-events",
  "fall2018-events",
  "fall2018-events",
  "spring2018-events"
];

function addEvents() {
  for (i = 0; i < eventNames.length; i++) {
    document.getElementById(eventSemesters[i]).innerHTML += '<div class="event"><div class="event-title"><p>' + eventNames[i] + '</p><p>' + eventDates[i] + '</p></div><p>' + eventInfos[i] + '</p></div>';
  }
  var body = document.body;
  var html = document.documentElement;
  var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
  document.body.style.minHeight = height + "px";
}
