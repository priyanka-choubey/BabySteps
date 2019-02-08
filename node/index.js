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
      {return res.json({
        "fulfillmentMessages": [
          {"text":
                  {"text": ["before"]}
        }
        ],
        "source":""
      });

      }

      }

      if(req.body.queryResult.intent.displayName=="getnutrientinfo")
      {if(speech.length>req.body.queryResult.parameters.food.length && req.body.queryResult.parameters.food!=NULL)
        {
          speech=req.body.queryResult.parameters.food;
        }
        console.log(`https://edamam-edamam-nutrition-analysis.p.rapidapi.com/api/nutrition-data?nutrition-type=logging&ingr=${speech}`);
      unirest.get(`https://edamam-edamam-nutrition-analysis.p.rapidapi.com/api/nutrition-data?nutrition-type=logging&ingr=${speech}`)
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
        });

      }


      if(req.body.queryResult.intent.displayName=="Queries")
      {console.log(`https://faroo-faroo-web-search.p.rapidapi.com/api?q=${speech}`);
          unirest.get(`https://faroo-faroo-web-search.p.rapidapi.com/api?q=${speech}`)
        .header("X-RapidAPI-Key", "2864e4a849msha7843c68b9a60a0p1a0ad9jsn7ccaff59977c")
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
    access_token: "q5oL0z4NTKEXO9kdBfCf8H4lkFiiePKo"
  });

  console.log(req.body.queryResult.parameters.appoint_date);



  var options = {
    calendar_id: "cal_XF0JJtB2PkrVNlWA_wcg05lmqbWGFrJ5ARqCZhg",
    event_id: "unique-event-id",
    summary: "Health appointment",
    description: "Gynaecologist appointment",
    start: "2019-02-15T12:00:00Z",
    end: "2019-02-15T12:30:00Z",
    location: {
      description: "Board room"
    }
  };

  client.createEvent(options)
    .then(function () {
        // Success


        return res.json({
          "fulfillmentMessages": [
            {"text":
                    {"text": ["ho gya"]}
          }
          ],
          "source":""
        });


    console.log("ho gya");
    });

}






});


restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
