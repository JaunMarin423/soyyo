import serve from './server';

const app = serve.server();

// starting server
app.set('PORT', 3000);
app.listen(app.get('PORT'), () => {
    console.log(`Application running on the port ${String(app.get('PORT'))}`);
});
