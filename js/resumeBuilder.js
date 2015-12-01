var bio = {
	"name": "Candice Pascual",
	"role": "Librarian",
	"contacts": {
		"email": "cpascual36@hotmail.com",
		"github": "cpascual36",
		"location": "Largo, Florida, US"
	},
	"picture": "images/me.jpg",
	"welcomeMessage": "I'm currently working as a Librarian in Largo, Florida, United States.  Thanks for stopping by!",
	"skills": ["Research", "Reference", "Communicaion", "Skills Acquisition"]
};

var work = {
	"jobs": [
		{
			"employer": "Everest University",
			"title": "Librarian",
			"location": "Largo, Florida, US",
			"datesWorked": "March 2007 - Present",
			"description": "Tech-savy, user-focuased librarian with experience providing reference assistance and information literacy instruction"+
			" in an academic library. Knowledge of many aspects of librarianship including emerging technologies, collection development, marketing,"+
			" outreach, and circulation. Experience collaborating with colleagues and patrons in a dynamic environment.",
			"url": "http://www.everestuniversity.edu"
		},
		{
			"employer": "University of South Florida",
			"title": "Senior Library Technical Assistant",
			"location": "Saint Petersburg, Florida, US",
			"datesWorked": "May 2004 - March 2007",
			"description": "Assisted visitors in finding information and effectively using library resources and services.",
			"url": "http://www.usf.edu"
		}		
	]
};

var education = {
	"schools": [
		{	
			"name": "University of South Florida",
			"location": "Tampa, Florida, US",
			"degree": "M.L.I.S.",
			"major": "Library and Information Science",
			"datesAttended": "2004 - 2005",
			"url": "http://www.usf.edu"
		},	
		{	
			"name": "State University of New York at Buffalo",
			"location": "Bufalo, New York, US",
			"degree": "M.B.A.",
			"major": "Business Administration",
			"datesAttended": "1995 - 1997",
			"url": "Http://www.buffalo.edu"
		},
		{ 
			"name": "State University of New York at Stony Brook",
			"location": "Stony Brook, New York, US",
			"degree": "B.A.",
			"major": "Psychology",
			"datesAttended": "1989 - 1993",
			"url": "http://www.stonybrook.edu"
		}	
	],
	"onlineCourses": [
		{
			"title": "Intro to JQuery",
			"school": "Udacity",
			"completed": "July 2015",
			"url": "https://www.udacity.com/course/ud245"
		},
		{
			"title": "Javascript Basics",
			"school": "Udacity",
			"completed": "July 2015",
			"url": "https://www.udacity.com/course/ud804"
		},
		{
			"title": "How To Use Git and GitHub",
			"school": "Udacity",
			"completed": "June 2015",
			"url": "https://www.udacity.com/course/ud775"
		},
		{
			"title": "Intro to HTML and CSS",
			"school": "Udacity",
			"completed": "May 2015",
			"url": "https://www.udacity.com/course/ud304"
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "Online Portfolio",
			"datesWorked": "June 2015",
			"description": "Created an online portfolio of work as part of Udacity's Front-End Web Developer Nanodegree.",
			"images": ["images/PortfolioPicture.JPG"],
			"url": "https://github.com/cpascual36/build-a-portfolio-site_5"
		}
	]
};


bio.display = function() {
	"use strict";
	var formattedName = HTMLheaderName.replace('%data%', bio.name);
	var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
	var formattedBioPic = HTMLbioPic.replace('%data%', bio.picture);
	var formattedWelcomeMsg = HTMLWelcomeMsg.replace('%data%', bio.welcomeMessage);
	var formattedContactInfo = [];

	formattedContactInfo.push(HTMLemail.replace('%data%', bio.contacts.email));
	formattedContactInfo.push(HTMLgithub.replace('%data%', bio.contacts.github));
	formattedContactInfo.push(HTMLlocation.replace('%data%', bio.contacts.location));

	$('#header').prepend(formattedRole);
	$('#header').prepend(formattedName);
	$('#header').append(formattedBioPic);
	$('#header').append(formattedWelcomeMsg);

	if(bio.skills.length > 0) {
		$('#header').append(HTMLskillsStart);

		for(var i in bio.skills) {
			$('#skills').append(HTMLskills.replace('%data%', bio.skills[i]));
		}

	}

	for(var i in formattedContactInfo) {
		$('#topContacts').append(formattedContactInfo[i]);
		$('#footerContacts').append(formattedContactInfo[i]);
	}

}

bio.display();

work.display = function() {

	if(work.jobs.length > 0) {
	
		$('#workExperience').append(HTMLworkStart);

		for(var i in work.jobs) {
			var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[i].employer).replace('#', work.jobs[i].url);
			var formattedWorkTitle = HTMLworkTitle.replace('%data%', work.jobs[i].title);
			var formattedWorkLocation = HTMLworkLocation.replace('%data%', work.jobs[i].location);
			var formattedDatesWorked = HTMLworkDates.replace('%data%', work.jobs[i].datesWorked);
			var formattedWorkDescription = HTMLworkDescription.replace('%data%', work.jobs[i].description);

			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

			$('.work-entry:last').append(formattedEmployerWorkTitle);
			$('.work-entry:last').append(formattedWorkLocation);
			$('.work-entry:last').append(formattedDatesWorked);
			$('.work-entry:last').append(formattedWorkDescription);
		}

	}

};

work.display();

projects.display = function() {

	if(projects.projects.length > 0) {

		for(var i in projects.projects) {
			$('#projects').append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace('%data%', projects.projects[i].title).replace('#', projects.projects[i].url);
			var formattedProjectDates = HTMLprojectDates.replace('%data%', projects.projects[i].datesWorked);
			var formattedProjectDescription = HTMLprojectDescription.replace('%data%', projects.projects[i].description);

			$('.project-entry:last').append(formattedProjectTitle);
			$('.project-entry:last').append(formattedProjectDates);
			$('.project-entry:last').append(formattedProjectDescription);

			for(var img in projects.projects[i].images) {
				var formattedProjectImage = HTMLprojectImage.replace('%data%', projects.projects[i].images[img]);
				$('.project-entry:last').append(formattedProjectImage);
			}

		}

	}

}

projects.display();

education.display = function() {

	if(education.schools.length > 0 || education.onlineCourses.length > 0) {

		for(var i in education.schools) {
			$('#education').append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace('%data%', education.schools[i].name).replace('#', education.schools[i].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace('%data%', education.schools[i].datesAttended);
			var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', education.schools[i].location);			
			var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', education.schools[i].major);

			$('.education-entry:last').append(formattedSchoolName + formattedSchoolDegree);
			$('.education-entry:last').append(formattedSchoolDates);
			$('.education-entry:last').append(formattedSchoolLocation);
			$('.education-entry:last').append(formattedSchoolMajor);
		}

		if(education.onlineCourses.length > 0) {
			$('#education').append(HTMLonlineClasses);

			for(var i in education.onlineCourses) {				
				$('#education').append(HTMLschoolStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[i].title).replace('#', education.onlineCourses[i].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[i].school);
				var formattedOnlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[i].completed);
				var formattedOnlineURL = HTMLonlineURL.replace('%data%', education.onlineCourses[i].url).replace('#', education.onlineCourses[i].url);

				$('.education-entry:last').append(formattedOnlineTitle + formattedOnlineSchool);
				$('.education-entry:last').append(formattedOnlineDates);
				$('.education-entry:last').append(formattedOnlineURL);
			}

		}
		
	}
}

education.display();

$('#mapDiv').append(googleMap);