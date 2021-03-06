
var bio =
{
    "name": "Jack Grigorieff",
    "role": "Software Developer",
    "contacts" :
    {
	"mobile":"",
	"email":"JackGrig@yahoo.com",
	"github":"",
	"twitter":"",
	"location":"1222 Park Avenue , Woodburn, OR"
    },
     "welcomeMessage" : "Hello , welcome to resume project",
     "skills" :
     [
	
	"C#","C++","Cli","Assembler",".Net","Power Shell","WPF","XML","HTML","WordML","SSML","Autocad","COM","Agile","TFS","Unit Testing","InstallShield","Telerik","ReSharper",
        "Parallel programming","Cuda","Python",
     ],
     "bioPic":"Images/fry.jpg",
     "display" : "function"
    
    

};
var education =
{
  "schools" :
  [
    {
       "name" :"Portland State Unversity",
        "location" : "Portland, Oregon",
       "degree" :"Computer Science",  
       "majors" :["Computer Science"],  
       "dates" :"1990",  
       "url" :"" 
	
    }
  ],
  "onlineCourses":
  [
    {
       "title" :"Intro HTML and CSS",  
       "school" :"Udacity",  
       "dates" :"2015",  
       "url" :"http://www.Udacity.com"  
      
    },
   {
       "title" :"JavaScript Basics",  
       "school" :"Udacity",  
       "dates" :"2015",  
       "url" :"http://www.Udacity.com"  
      
    }
       
  ],
     "display" : "function"
    
    
};

var work =
{
   "jobs" : 
    [
	{
	    "employer" : "EasyPower" ,
	    "title" : "Senior Software Engineer",
            "location" : "7730 SW Mohawk St. , Tualatin, OR 97062",
            "dates" : "1996 - Present",
	    "description" : "Worked on small team maintaining and developing EasyPower visual power system analysis and design software.  \nSoftware was updated from Fortran to C to C++ and C# on Windows platform.  We utilize TFS with  Agile methods with continous build and Unit testing.  \nDesigned and written interface software to Autocad, Excel, Word, Web and Realtime SCADA."
     
	},
	{
	    "employer" : "Data Solutions" ,
	    "title" : "Software Engineer",
            "location" : "Oregon City, Oregon",
	    "dates" : "1993-1996",
	    "description" : "Data capture and conversion into custom cdrom format."
     
	}
 ,
	{
	    "employer" : "ADC" ,
	    "title" : "Software Engineer",
            "location" : "Lake Oswego, Oregon",
	    "dates" : "1990-1993",
	    "description" : "Media duplication and conversion."
     
	} ,
	{
	    "employer" : "ADP" ,
	    "title" : "Programmer",
            "location" : "Portland, Oregon",
	    "dates" : "1983-1990",
	    "description" : "Diagnostic programmer."
     
	} ],
    "display" : "function"
 };

var projects =
{
   "projects" :
   [
     {
	"title" :"EasyPower",  
	"dates" :"1996 - 2015",  
	"description" :"Electrical Power System Windows based analysis and design tool. ",  
	"images" :"Images/EasyPower.png"
    },
     {
	"title" :"StartTray",  
	"dates" :"2013",  
	"description" :"3D visualization tool to show how power cables are distributed in a faciltiy and calculate load factor so tray/conduit is not overloaded.  Coded in C# WPF MVVM",  
	"images" :"Images/SmartTray.png"
    }
  
    
   ],
    "display" : "function"
     
};

bio.display = function ()
{
  $("#header").append(HTMLheaderName.replace("%data%",bio.name ));  
 $("#header").append(HTMLheaderRole.replace("%data%",bio.role ));
 $("#header").append(HTMLbioPic.replace("%data%",bio.bioPic ));
  $("#header").append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage ));
 $("#header").append(HTMLemail.replace("%data%",bio.contacts.email ));




    if ( bio.skills.length > 0    )
    {
        $("#header").append(HTMLskillsStart);
        for ( var skill in bio.skills )
        {
            $("#skills").append(HTMLskills.replace("%data%",bio.skills[skill]));
        }
    }
};

work.display = function ()
{
    for ( var job in work.jobs )
    {
        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(HTMLworkEmployer.replace("%data%",work.jobs[job].employer)+
                                      HTMLworkTitle.replace("%data%",work.jobs[job].title));
        $(".work-entry:last").append( HTMLworkLocation.replace("%data%",work.jobs[job].location));
        $(".work-entry:last").append(HTMLworkDates.replace("%data%",work.jobs[job]["dates"]));
        $(".work-entry:last").append(HTMLworkDescription.replace("%data%",work.jobs[job].description));
        
    }
};

projects.display = function ()
{
    for ( var p in projects.projects )
    {   
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%",projects.projects[p].title)) ; 
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%",projects.projects[p].dates)) ;
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%",projects.projects[p].description)) ; 
        $(".project-entry:last").append(HTMLprojectImage.replace("%data%",projects.projects[p].images)) ; 
    }
};
education.display = function ()
{
    for ( var e in education.schools )
    {   
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(HTMLschoolName.replace("%data%",education.schools[e].name )) ; 
        $(".education-entry:last").append(HTMLschoolDegree.replace("%data%",education.schools[e].degree)) ; 
        $(".education-entry:last").append(HTMLschoolDates.replace("%data%",education.schools[e].dates)) ; 
        $(".education-entry:last").append(HTMLschoolLocation.replace("%data%",education.schools[e].location )) ; 
        $(".education-entry:last").append(HTMLschoolMajor.replace("%data%",education.schools[e].majors)) ; 
  
    }
    if (education.onlineCourses.length > 0) 
        $(".education-entry:last").append(HTMLonlineClasses);
   for ( var e in education.onlineCourses )
    {   
         $(".education-entry:last").append(HTMLonlineTitle.replace("%data%",education.onlineCourses[e].title)) ; 
        $(".education-entry:last").append(HTMLonlineSchool.replace("%data%",education.onlineCourses[e].school)) ; 
        $(".education-entry:last").append(HTMLonlineDates.replace("%data%",education.onlineCourses[e].dates )) ; 
        $(".education-entry:last").append(HTMLonlineURL.replace("%data%",education.onlineCourses[e].url)) ; 
  
    }
};

bio.display();
//skills.display();
projects.display();
work.display();
education.display();

$(document).click(function(loc)
{
  // your code goes here
  logClicks(loc.pageX,loc.pageY);
});

function inName( name )
{
    console.log(name);
    var l = [];
    l = name.split(" ")
    var str = l[0];
    var first = str[0].toUpperCase() + str.slice(1).toLowerCase();
    var second = l[1].toUpperCase();
    return first+" "+second ;
    
}

$('#main').append(internationalizeButton);



$("#mapDiv").append(googleMap);