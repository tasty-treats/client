var app = app || {};

(function(module) {

    const API_URL = 'http://localhost:3000/treats';

    function Treat(raw) {
        this.id = raw.id;
        this.name = raw.name;
        this.description = raw.description;
    }

    Treat.all = [];

    Treat.fetchAll = callback => {
        $.getJSON(API_URL)
            .then(rawTreats => {
                Treat.all = rawTreats.map(rawTreat => new Treat(rawTreat));
                callback();
            });
    }

    Treat.fetchOne = (id, callback) => {

        $.getJSON(API_URL + '/' + id).then(rawTreat => {
            callback(new Treat(rawTreat));
        })
    }

    module.Treat = Treat;

})(app);