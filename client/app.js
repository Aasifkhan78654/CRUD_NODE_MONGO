$(document).ready(function() {
    Sammy('body', async function(App) {
        App.get('/', async function() {
            await this.partial('components/add-user.html')
            await $.getScript('components/add-user.js');
        })
        App.run();
    });
});