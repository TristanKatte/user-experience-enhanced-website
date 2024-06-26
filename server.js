// Importeer het npm pakket express uit de node_modules map
import express from 'express'

// Importeer de zelfgemaakte functie fetchJson uit de ./helpers map
import fetchJson from './helpers/fetch-json.js'

// Maak een nieuwe express app aan
const app = express()

// Stel ejs in als template engine
app.set('view engine', 'ejs')

// Stel de map met ejs templates in
app.set('views', './views')

// Gebruik de map 'public' voor statische resources, zoals stylesheets, afbeeldingen en client-side JavaScript
app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }))

// Stel het basis endpoint in
const apiUrl = 'https://fdnd-agency.directus.app/items'
const sdgs = []






// Maak een GET route voor de index
app.get('/', function (request, response) {
  response.render('index');
});

app.get('/dashboard', function (request, response) {
  response.render('dashboard');
});

//GET route voor de calculator
app.get('/calculator', function (request, response){

    fetchJson('https://fdnd-agency.directus.app/items/hf_sdgs').then((sdgDataUitDeAPI) => {
		  response.render('calculator', {sdgs: sdgDataUitDeAPI.data });
    
	});
  });


  //GET route voor de stakeholders
  app.get('/stakeholder', function (request, response){
    fetchJson('https://fdnd-agency.directus.app/items/hf_stakeholders').then((stakeholderDataUitDeAPI) => {
      response.render('stakeholder', {stakeholders: stakeholderDataUitDeAPI.data});
    });
    });

    // Handle questionnaire page GET request
  app.get('/vragenlijst',  (req, res) => {
    if (sdgs.length == 0) {
      res.redirect(302, '/calculator')
    }
      res.render('vragenlijst', {sdgs: sdgs[0] });
    });

/***** post routes *****/
app.post('/vragenlijst', function (request, response){
  sdgs.push(request.body.id)
  response.redirect(303,'/vragenlijst')
});

app.post('/dashboard', function (request, response){
  response.render('/dashboard')
  response.redirect(303,'/dashboard')
});



// Stel het poortnummer in waar express op moet gaan luisteren
app.set('port', process.env.PORT || 8000)

// Start express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})
