var app = app || {};

(function(module) {

    const TreatView = {};

    TreatView.initListView = () => {
        $('.view').hide();
        $('#list-view').show();
        
        $('#list-view ul').empty();

        $('#list-view ul').append(app.Treat.all.map(treat => {
            return `<li><a href="./${treat.id}">${treat.name}</a></li>`;
        }))
    }

    TreatView.initDetailsView = treat => {
        $('.view').hide();
        $('#details-view').show();
        console.log(treat);
    }

    TreatView.initCreateView = () => {
        $('.view').hide();
        $('#create-view').show();
    }

    module.TreatView = TreatView;


})(app);