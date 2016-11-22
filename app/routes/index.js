var router = function(app){
    app.route('/')
        .get(function(req, res){
           res.sendFile(process.cwd()+'/app/public/index.html'); 
        });
}

module.exports = router;