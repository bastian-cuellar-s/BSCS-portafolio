// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Bastián",
  middleName: "",
  lastName: "Cuellar Salinas",
  message: " Passionate about learning and leveraging technology to drive positive change and make a difference in the world. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/bastian-cuellar-s",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/profile.php?id=100094333365773",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/bastian.cuellar.s/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/bastian-cuellar-salinas/",
    },
    {
      image: "fa-twitter",
      url: "https://twitter.com/bastian_scs",
    },
  ],  
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/hashirshoaeb.png"),
  imageSize: 375,
  message:
    "My name is Bastián Cuellar. I hold a degree in Computer Engineering from the Pontifical Catholic University of Valparaiso. As a lifelong learner, I am passionate about exploring and growing in the field of software engineering. I am eager to contribute to the community and make a positive impact through my work. Currently, I am focused on expanding my knowledge and skills in various programming languages and technologies. I actively engage in personal projects and open-source initiatives to further enhance my learning. I am excited to continue my journey in software engineering, continuously expanding my expertise and embracing new challenges.",
  resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "bastian-cuellar-s", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "JavaScript", value: 80 },
    { name: "VueJs", value: 75 },
    { name: "React", value: 65 },
    { name: "Laravel", value: 80 },
    { name: "PHP", value: 75 },
    { name: "SQL", value: 70 },
    { name: "C/C++", value: 55 },
    { name: "HTML/CSS", value: 55 },
  ],
  softSkills: [
    { name: "Empathy", value: 90 },
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 85 },
    { name: "Adaptability", value: 80 },
    { name: "Problem Solving", value: 75 },
    { name: "Creativity", value: 70 },
    { name: "Organization", value: 65 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "bastian.cuellar.s@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Independent FullStack Developer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: '2021 – Present',
    },
    {
      role: 'Consultant and IT Advisor',
      companylogo: require('../assets/img/boeing.png'),
      date: 'July 2020 – June 2022',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
