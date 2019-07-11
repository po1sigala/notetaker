const cheerio = require("cheerio");
const axios = require("axios");
console.log(
    "\n**************************\n" +
        "grabbing all the plays from cbs toronto vs golden state\n" +
        "\n********************************\n"
);
axios
    .get("https://www.espn.com/nba/playbyplay?gameId=401134820")
    .then(function(response) {
        var $ = cheerio.load(response.data);
        var results = [];
        $("td.game-details").each(function(i, element) {
            var gameEvent = $(element).text();
            results.push({
                gameEvent: gameEvent
            });
        });
        console.log(results);
    });
