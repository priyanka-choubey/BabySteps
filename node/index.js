"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const unirest = require("unirest");

const restService = express();

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.use(bodyParser.json());

restService.post("/echo", function(req, res) {
  var speech =
    req.body.queryResult.queryText;


      console.log(req.body.queryResult.intent.displayName);

      if(req.body.queryResult.intent.displayName=="Vaccines")
      {
      /*unirest.get(`https://edamam-edamam-nutrition-analysis.p.rapidapi.com/api/nutrition-data?ingr=${speech}`)
        .header("X-RapidAPI-Key", "2864e4a849msha7843c68b9a60a0p1a0ad9jsn7ccaff59977c")
        .end(function (result) {
        console.log(result.status, result.headers, result.body);
        return res.json({
          "fulfillmentMessages": [
            {"text":
                    {"text": ["Calories"+ result.body.calories +" " + "Type of diet"+ result.body.dietLabels[0] ]}
          }
          ],
          "source":""
        });
      });*/

      console.log(req.body);
      if(req.body.queryResult.parameters.when_vaccine=='before')
      {unirest.get(`http://8087c0de.ngrok.io/vaccines/before/?format=json`)
		.header("")
          .end(function (result) {
          console.log(result.status, result.headers, result.body);
          return res.json({
            "fulfillmentMessages": [
              {"text":
                      {"text": [result.body.title+" "+result.body.description]}
            }
            ],
            "source":""
          });
          });

      }

      }

      if(req.body.queryResult.intent.displayName=="getnutrientinfo")
      {if(speech.length>req.body.queryResult.parameters.food.length)
        {
          speech=req.body.queryResult.parameters.food;
        }
        console.log(`https://edamam-edamam-nutrition-analysis.p.rapidapi.com/api/nutrition-data?nutrition-type=logging&ingr=${speech}`);
      unirest.get(`https://edamam-edamam-nutrition-analysis.p.rapidapi.com/api/nutrition-data?nutrition-type=logging&ingr=${speech}`)
        .header("X-RapidAPI-Key", "")
        .end(function (result) {
        console.log(result.status, result.headers, result.body);
        return res.json({
          "fulfillmentMessages": [
            {"text":
                    {"text": ["Calories"+ result.body.calories +" " + "Type of diet"+ result.body.dietLabels[0] ]}
          }
          ],
          "source":""
        });
        });

      }


      if(req.body.queryResult.intent.displayName=="Queries")
      {console.log(`https://faroo-faroo-web-search.p.rapidapi.com/api?q=${speech}`);
          unirest.get(`https://faroo-faroo-web-search.p.rapidapi.com/api?q=${speech}`)
        .header("X-RapidAPI-Key", "")
        .end(function (result) {
          console.log(result.status, result.headers, result.body);
          return res.json({
            "fulfillmentMessages": [
              {"text":
                      {"text": [result.body.results[0].kwic]}
            }
            ],
            "source":""
          });
        });

      }


  if(req.body.queryResult.intent.displayName=="Appointment")
  {
  var Cronofy = require('cronofy');

  var client = new Cronofy({
    access_token: ""
  });

  console.log(req.body.queryResult.parameters.appoint_date);

const timeZoneOffset='+05:30';

const dateTimeStart = new Date(Date.parse(req.body.queryResult.parameters.appoint_date.split('T')[0] + 'T' + req.body.queryResult.parameters.appoint_time.split('T')[1].split('+')[0] + timeZoneOffset));
const dateTimeEnd = new Date(new Date(dateTimeStart).setHours(dateTimeStart.getHours() + 1));

  var options = {
    calendar_id: "",
    event_id: "unique-event-id",
    summary: "Health appointment",
    description: "Gynaecologist appointment",
    start: dateTimeStart,
    end: dateTimeEnd,
    location: {
      description: "Board room"
    }
  };

  client.createEvent(options)
    .then(function () {
        // Success
	console.log(req.body.queryResult.languageCode);
        if(req.body.queryResult.languageCode=="hi")
        {console.log(req.body.queryResult.parameters.appoint_date);


          return res.json({
            "fulfillmentMessages": [
              {"text":
                      {"text": ["Aapka appointment "+req.body.queryResult.parameters.appoint_date.split('T')[0]+" tareek ko "+ req.body.queryResult.parameters.appoint_time.split('T')[1].split('+')[0]+" bje krdiya. Shukriya hamari sevayon ka labh uthane ke lye"]}
            }
            ],
            "source":""
          });
        }

        else if(req.body.queryResult.languageCode=="en")
{
          console.log(req.body.queryResult.parameters.appoint_date);
          return res.json({
            "fulfillmentMessages": [
              {"text":
                      {"text": ["Your appointment has been booked on "+ req.body.queryResult.parameters.appoint_date.split('T')[0] +" from " +  req.body.queryResult.parameters.appoint_time.split('T')[1].split('+')[0]+". Thank you for using our services"]}
            }
            ],
            "source":""
          });
        }





    });

}






});


restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});

