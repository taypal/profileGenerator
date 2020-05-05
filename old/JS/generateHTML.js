const colors = {
    green: {
        wrapperBackground: "173, 232, 128",
        headerBackground: "82, 171, 44",
        headerColor: "black",
        photoBorderColor: "#black"
    },
    blue: {
        wrapperBackground: "40, 49, 237",
        headerBackground: "29, 96, 222",
        headerColor: "white",
        photoBorderColor: "68, 94, 140"
    },
    pink: {
        wrapperBackground: "223, 135, 135",
        headerBackground: "252, 174, 164",
        headerColor: "white",
        photoBorderColor: "252, 88, 88"
    },
    red: {
        wrapperBackground: "255, 18, 18",
        headerBackground: "135, 6, 3",
        headerColor: "white",
        photoBorderColor: "white"
    }
};

function generateHTML(data) {
    return `<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
      <title>Document</title>
  </head>
  <style>
              @page {
                  margin: 0;
              }
      
              *,
              *::after,
              *::before {
                  box-sizing: border-box;
              }
      
              html,
              body {
                  padding: 0;
                  margin: 0;
              }
      
      
              .wrapper {
                  background-color:${colors[data.color].wrapperBackground};
                  padding-top: 80px;
              }
      
              body {
                  background-color: white;
                  font-family: 'Martel Sans', sans-serif;
              }
      
              h1 {
                  font-size: 3em;
                  font-family: 'Source Sans Pro', sans-serif;
                  margin: 0;
                  display: block;
              }
      
              h2 {
                  font-size: 2.5em;
                  font-family: 'Source Sans Pro', sans-serif;
                  margin: 0;
                  display: block;
              }
      
              h3 {
                  font-size: 2em;
                  font-family: 'Source Sans Pro', sans-serif;
                  margin: 0;
                  display: block;
              }
      
              h4 {
                  font-size: 1.5em;
                  font-family: 'Source Sans Pro', sans-serif;
                  margin: 0;
                  display: block;
              }
      
              h5 {
                  font-size: 1.3em;
                  font-family: 'Source Sans Pro', sans-serif;
                  margin: 0;
                  display: block;
              }
      
              h6 {
                  font-size: 1.2em;
                  font-family: 'Source Sans Pro', sans-serif;
                  margin: 0;
                  display: block;
              }
      
              .photo-header {
                  position: relative;
                  margin: 0 auto;
                  margin-bottom: -50px;
                  display: flex;
                  justify-content: center;
                  flex-wrap: wrap;
                  background-color: ${colors[data.color].headerBackground};
                  color: ${colors[data.color].headerColor};
                  padding: 10px;
                  width: 95%;
                  border-radius: 6px;
              }
      
              .photo-header img {
                  width: 250px;
                  height: 250px;
                  border-radius: 50%;
                  object-fit: cover;
                  margin-top: -75px;
                  border: 6px solid ${colors[data.color].photoBorderColor};
                  box-shadow: rgba(0, 0, 0, 0.3) 4px 1px 20px 4px;
              }
      
              .photo-header h1 {
                  margin-top: 10px;
                  width: 100%;
                  text-align: center;
              }

              .photo-header h2 {
                width: 100%;
                text-align: center;
            }
      
              .links-nav {
                  width: 100%;
                  text-align: center;
                  padding: 20px 0;
                  font-size: 1.1em;
              }
      
              .nav-link {
                  display: inline-block;
                  margin: 5px 10px;
              }
      
              .workExp-date {
                  font-style: italic;
                  font-size: .7em;
                  text-align: right;
                  margin-top: 10px;
              }
      
              .container {
                  padding: 50px;
                  padding-left: 100px;
                  padding-right: 100px;
              }
      
              .row {
                  display: flex;
                  flex-wrap: wrap;
                  justify-content: space-between;
                  margin-top: 20px;
                  margin-bottom: 20px;
              }
      
              .card {
                  padding: 20px;
                  border-radius: 6px;
                  background-color: ${colors[data.color].headerBackground};
                  color: ${colors[data.color].headerColor};
                  margin: 20px;
              }
      
              .col {
                  flex: 1;
                  text-align: center;
              }
      
              a,
              a:hover {
                  text-decoration: none;
                  color: inherit;
                  font-weight: bold;
              }
      
              i {
                  padding-right: 3px;
              }
      
              @media print {
                  body {
                      zoom: .75;
                  }
              }
          </style>
  
  <body>
    <div class="wrapper">
        <header class="mainContainer">
            <div class="row">
                <div class="col">
                    <div class="photo-header">
                        <img src="${data.photo}">
                        <h1>${data.name}</h1>
                        <h4>Employed at ${data.company}</h4>
                        <div class="links-nav">
                            <a class="nav-link" href="https://www.google.com/maps/place/${data.location}"
                                target="_blank">${data.location}</a>
                            <a class="nav-link" href="${data.profile}" target="_blank">Github</a>
                            <a class="nav-link" href="${data.blog}" target="_blank">Blog</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="card">
                        <h3>Public Repos</h3>
                        <h3>${data.repos}</h3>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <h3>Followers</h3>
                        <h3>${data.followers}</h3>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="card">
                        <h3>Stars</h3>
                        <h3>14</h3>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <h3>Following</h3>
                        <h3>${data.following}</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</body>
  
  </html>  
      `
}
module.exports = generateHTML