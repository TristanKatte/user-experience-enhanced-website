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

// const sdgData = await fetchJson(apiUrl + '/hf_sdgs')
// const stakeholdersData = await fetchJson(apiUrl + '/hf_stakeholders')
// const scoresData = await fetchJson(apiUrl + '/hf_scores')
// const companiesData = await fetchJson(apiUrl + '/hf_companies/1')



// Maak een GET route voor de index
app.get('/', function (request, response) {
  response.render('index', {
      // sdgs: sdgData.data,
      // stakeholder: stakeholdersData.data,
      // score: scoresData.data,
      // company: companiesData.data
});
});

app.get('/dashboard', function (request, response) {
  response.render('dashboard', {
    sdgs: sdgData.data
  });
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

    //GET route voor de sdgs
  app.get('/SDG', function (request, response){
    fetchJson('https://fdnd-agency.directus.app/items/hf_sdgs').then((sdgDataUitDeAPI) => {
      response.render('SDG', {sdgs: sdgDataUitDeAPI.data});
    });
    });

    // Handle questionnaire page GET request
  app.get('/vragenlijst',  (req, res) => {
      res.render('vragenlijst', {sdgs: sdgs[0] });
    });

/***** post routes *****/
app.post('/vragenlijst', function (request, response){
  sdgs.push(request.body.id)
  response.redirect(303,'/vragenlijst')
});



// Stel het poortnummer in waar express op moet gaan luisteren
app.set('port', process.env.PORT || 8000)

// Start express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})