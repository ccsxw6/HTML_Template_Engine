const path = require("path"); //The Path module provides a way of working with directories and file paths.
//example - dirname() returns the directories of a path
const fs = require("fs");

// path.resolve, resolves the specified paths into an absolute path
const templatesDir = path.resolve(__dirname, "../templates"); //__dirname is current directory
// console.log(templatesDir) renders C:\Users\cstanfi2\Downloads\Bootcamp\template\HTML_Template_Engine\templates
// adds templates to the end of the overall directory(html_template_engine)

// const render = function(employees) {} -- employees is an array of objects from app.js 
const render = employees => {
  const html = [];

  html.push(...employees
    //The filter() method creates an array filled with all array 
    // elements that pass a test (provided as a function).
    //.filter(function(employee) {
    //   employee.getRole() === "manager"   ---- if getrole = manager? 
    // })
    .filter(employee => employee.getRole() === "Manager")
    // The map() method creates a new array with the results of calling a 
    // function for every array element.
    // The map() method calls the provided function once for each element in an array, in order.
    //.map(function(manager) {
    //   renderManager(manager)
    // })
    .map(manager => renderManager(manager))
  );
  html.push(...employees
    .filter(employee => employee.getRole() === "Engineer")
    .map(engineer => renderEngineer(engineer))
  );
  html.push(...employees
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => renderIntern(intern))
  );

  return renderMain(html.join(""));

};

// creating renderManager function     function(manager) {}
const renderManager = manager => {
// path.resolve() method is used to resolve a sequence of path-segments to an absolute path. It works by processing the 
// sequence of paths from right to left, prepending each of the paths until the absolute path is created. 
// The resulting path is normalized and trailing slashes are removed as required.
// If no path segments are given as parameters, then the absolute path of the current working directory is used.
// The fs.readFileSync() method is an inbuilt application programming interface of fs module which is used 
// to read the file and return its content.  
//fs.readFileSync( path, options )  - path = (path.resolve(templatesDir, "manager.html"), options = "utf8"
// so it's resolving templatesDir, and manager.html
// templatesDir = C:\Users\cstanfi2\Downloads\Bootcamp\template\HTML_Template_Engine\templates
// path.resolve(templatesDir, "manager.html" = C:\Users\cstanfi2\Downloads\Bootcamp\template\HTML_Template_Engine\templates\manager.html
// now, fs.readFileSync reads the above file, and returns the contents in that file
// so template = the content in manager.html???
let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"), "utf8");
// going into that specific file, 
  template = replacePlaceholders(template, "name", manager.getName());
  template = replacePlaceholders(template, "role", manager.getRole());
  template = replacePlaceholders(template, "email", manager.getEmail());
  template = replacePlaceholders(template, "id", manager.getId());
  template = replacePlaceholders(template, "officeNumber", manager.getOfficeNumber());
  return template;
};

const renderEngineer = engineer => {
  let template = fs.readFileSync(path.resolve(templatesDir, "engineer.html"), "utf8");
  template = replacePlaceholders(template, "name", engineer.getName());
  template = replacePlaceholders(template, "role", engineer.getRole());
  template = replacePlaceholders(template, "email", engineer.getEmail());
  template = replacePlaceholders(template, "id", engineer.getId());
  template = replacePlaceholders(template, "github", engineer.getGithub());
  return template;
};

const renderIntern = intern => {
  let template = fs.readFileSync(path.resolve(templatesDir, "intern.html"), "utf8");
  template = replacePlaceholders(template, "name", intern.getName());
  template = replacePlaceholders(template, "role", intern.getRole());
  template = replacePlaceholders(template, "email", intern.getEmail());
  template = replacePlaceholders(template, "id", intern.getId());
  template = replacePlaceholders(template, "school", intern.getSchool());
  return template;
};

const renderMain = html => {
  const template = fs.readFileSync(path.resolve(templatesDir, "main.html"), "utf8");
  return replacePlaceholders(template, "team", html);
};



//A regular expression is an object that describes a pattern of characters. Regular expressions are used to perform 
// pattern-matching and "search-and-replace" functions on text.
//Modifiers are used to perform case-insensitive and global searches - EX: var patt = /w3schools/i
// i is modifier. i - case insesitive, m = perform multliline search, g = perform a global match(rather than stopping at first match)

//                          function(template, placeholder, value){}
const replacePlaceholders = (template, placeholder, value) => {
  // setting variable pattern to a new regular expression 
  // searches for placeholder? 
  const pattern = new RegExp("{{ " + placeholder + " }}", "gm");

  //The replace() method searches a string for a specified value, or a regular expression, and returns 
  // a new string where the specified values are replaced.
  // replace pattern / value? 
  return template.replace(pattern, value);
};

module.exports = render;
