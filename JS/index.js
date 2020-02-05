var fs = require('fs');
var inquirer = require("inquirer");
var axios = require("axios");
var generateHTML = require("./generateHTML");
var pdf = require('html-pdf');
var options = { format: 'Letter' };


//questions
function init() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is your GitHub username?",
                name: "username"
            },
            {
                type: "input",
                mesage: "What is your favorite color?",
                name: "color"
            }])



        // api call
        .then(function ({ username, color }) {
            const queryURL = `https://api.github.com/users/${username}`;
            axios.get(queryURL).then(function (response) {

                let photo = response.data.avatar_url;
                let name = response.data.login;
                let location = response.data.location;
                let company = response.data.company;
                let profile = response.data.html_url;
                let bio = response.data.bio;
                let repos = response.data.public_repos;
                let followers = response.data.followers;
                let following = response.data.following;

                console.log(photo, name, location, profile, bio, repos, followers, following);


                const html = generateHTML({ color, photo, name, location, company, profile, bio, repos, followers, following });

                console.log(html);

                pdf.create(html, options).toFile('../Assets/example.pdf', function (err, res) {
                    if (err) return console.log(err);
                    console.log(res);
                });


            })
        })
}
// call function
init();
