page('/', () => app.Treat.fetchAll(app.TreatView.initListView));
page('/create', app.TreatView.initCreateView);
page('/:id', ctx => app.Treat.fetchOne(ctx.params.id, app.TreatView.initDetailsView));
page.start();