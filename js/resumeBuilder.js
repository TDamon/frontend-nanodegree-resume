var formattedRole = HTMLheaderRole.replace("%data%", "International IT Architect");

var formattedName = HTMLheaderName.replace("%data%", "Tyler Damon");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);