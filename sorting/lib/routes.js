FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('layout', {main: 'hello'});
    }
}),

FlowRouter.route('/gryffindor', {
    name: 'gryffindor',
    action() {
        BlazeLayout.render('results', {results: 'gryffindor'});
    }
}),

FlowRouter.route('/hufflepuff', {
    name: 'hufflepuff',
    action() {
        BlazeLayout.render('results', {results: 'hufflepuff'});
    }
}),

FlowRouter.route('/slytherin', {
    name: 'slytherin',
    action() {
        BlazeLayout.render('results', {results: 'slytherin'});
    }
}),

FlowRouter.route('/ravenclaw', {
    name: 'ravenclaw',
    action() {
        BlazeLayout.render('results', {results: 'ravenclaw'});
    }
}),

FlowRouter.route('/one', {
    name: 'questionOne',
    action() {
        BlazeLayout.render('layout', {main: 'questionOne'});
    }
}),

FlowRouter.route('/two', {
    name: 'questionTwo',
    action() {
        BlazeLayout.render('layout', {main: 'questionTwo'});
    }
}),

FlowRouter.route('/three', {
    name: 'questionThree',
    action: function(params) {
        BlazeLayout.render('layout', {main: 'questionThree'});
    }
}),

FlowRouter.route('/four', {
    name: 'questionFour',
    action: function(params) {
        BlazeLayout.render('layout', {main: 'questionFour'});
    }
}),

FlowRouter.route('/five', {
    name: 'questionFive',
    action: function(params) {
        BlazeLayout.render('layout', {main: 'questionFive'});
    }
}),

FlowRouter.route('/six', {
    name: 'questionSix',
    action: function(params) {
        BlazeLayout.render('layout', {main: 'questionSix'});
    }
}),

FlowRouter.route('/seven', {
    name: 'questionSeven',
    action: function(params) {
        BlazeLayout.render('layout', {main: 'questionSeven'});
    }
}),

FlowRouter.route('/eight', {
    name: 'questionEight',
    action: function(params) {
        BlazeLayout.render('layout', {main: 'questionEight'});
    }
}),

FlowRouter.route('/nine', {
    name: 'questionNine',
    action: function(params) {
        BlazeLayout.render('layout', {main: 'questionNine'});
    }
}),

FlowRouter.route('/ten', {
    name: 'questionTen',
    action: function(params) {
        BlazeLayout.render('layout', {main: 'questionTen'});
    }
}),

FlowRouter.route('/eleven', {
    name: 'questionEleven',
    action: function(params) {
        BlazeLayout.render('layout', {main: 'questionEleven'});
    }
}),

FlowRouter.route('/twelve', {
    name: 'questionTwelve',
    action: function(params) {
        BlazeLayout.render('layout', {main: 'questionTwelve'});
    }
}),

FlowRouter.route('/thirteen', {
    name: 'questionThirteen',
    action: function(params) {
        BlazeLayout.render('layout', {main: 'questionThirteen'});
    }
})
