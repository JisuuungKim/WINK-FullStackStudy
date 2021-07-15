module.exports = function (app,User) {
    app.post('/board', function(req,res) {
        const user = new User();
        user.title = req.body.title;
        user.body = req.body.body;

        user.save(function(err) {
            if(err) {
                console.error(err);
                res.json({message: '생성 실패'});
                return;
            }
            res.json({message: '생성 성공'});
        });
    });
}