var formattedRole = HTMLheaderRole.replace("%data%", "International IT Architect");
var formattedName = HTMLheaderName.replace("%data%", "Tyler Damon");
var skills = ["Programming"," Chinese"," International Business"];
var bio = {
  "name": "Tyler",
  "age": 28,
  "role": "International Business and IT Consultant",
  "contactinfo": "DamonSolutions@gmail.com",
  "skills": skills
};
var work = {
  "job1": "English Teacher",
  "job2": "internship with the State Department"
};
var education = {
  "name": "The George Washington University",
  "dates attended": "2011 - 2013",
  "degree": "Masters"
}
bio.welcomemessage = "Hey, I'm Tyler, Learning Programming in Guangzhou"
bio["city"] = "Boulder, Colorado";

$("#main").append(work.job1);
$("#main").append(education.name);
$("#main").append(bio.name);
$("#main").append(bio.welcomemessage);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


