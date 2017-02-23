import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.layout.onCreated(function layoutOnCreated() {
    // counters start at 0
    this.gryffindorCounter = 0;
    this.slytherinCounter = 0;
    this.hufflepuffCounter = 0;
    this.ravenclawCounter = 0;
    this.results = 0;
});

Template.hello.events({
    'click #start': function() {
        FlowRouter.go('questionOne');
    }
});

Template.results.events({
    'click #startOver': function() {
        FlowRouter.go('home');
    }
})

Template.layout.events({
    'click #gryffindor1'(event, instance) {
        // increment the counter when button is clicked
        instance.gryffindorCounter = (instance.gryffindorCounter + 1);
        console.log(instance.gryffindorCounter);
        if(instance.gryffindorCounter == 4) {
            FlowRouter.go('gryffindor');
        }
        else {
            FlowRouter.go('questionTwo');
        }
    },
    'click #slytherin1'(event, instance) {
        // increment the counter when button is clicked
        instance.slytherinCounter = (instance.slytherinCounter + 1);
        if(instance.slytherinCounter == 4) {
            FlowRouter.go('slytherin');
        }
        else {
            FlowRouter.go('questionTwo');
        }
    },
    'click #hufflepuff1'(event, instance) {
        // increment the counter when button is clicked
        instance.hufflepuffCounter = (instance.hufflepuffCounter + 1);
        if(instance.hufflepuffCounter == 4) {
            FlowRouter.go('hufflepuff');
        }
        else {
            FlowRouter.go('questionTwo');
        }
    },
    'click #ravenclaw1'(event, instance) {
        // increment the counter when button is clicked
        instance.ravenclawCounter = (instance.ravenclawCounter + 1);
        if(instance.ravenclawCounter == 4) {
            FlowRouter.go('ravenclaw');
        }
        else {
            FlowRouter.go('questionTwo');
        }
    },
    'click #gryffindor2'(event, instance) {
        // increment the counter when button is clicked
        instance.gryffindorCounter = (instance.gryffindorCounter + 1);
        if(instance.gryffindorCounter == 4) {
            FlowRouter.go('gryffindor');
        }
        else {
            FlowRouter.go('questionThree');
        }
    },
    'click #slytherin2'(event, instance) {
        // increment the counter when button is clicked
        instance.slytherinCounter = (instance.slytherinCounter + 1);
        if(instance.slytherinCounter == 4) {
            FlowRouter.go('slytherin');
        }
        else {
            FlowRouter.go('questionThree');
        }
    },
    'click #hufflepuff2'(event, instance) {
        // increment the counter when button is clicked
        instance.hufflepuffCounter = (instance.hufflepuffCounter + 1);
        if(instance.hufflepuffCounter == 4) {
            FlowRouter.go('hufflepuff');
        }
        else {
            FlowRouter.go('questionThree');
        }
    },
    'click #ravenclaw2'(event, instance) {
        // increment the counter when button is clicked
        instance.ravenclawCounter = (instance.ravenclawCounter + 1);
        if(instance.ravenclawCounter == 4) {
            FlowRouter.go('ravenclaw');
        }
        else {
            FlowRouter.go('questionThree');
        }
    },
    'click #gryffindor3'(event, instance) {
        // increment the counter when button is clicked
        instance.gryffindorCounter = (instance.gryffindorCounter + 1);
        if(instance.gryffindorCounter == 4) {
            FlowRouter.go('gryffindor');
        }
        else {
            FlowRouter.go('questionFour');
        }
    },
    'click #slytherin3'(event, instance) {
        // increment the counter when button is clicked
        instance.slytherinCounter = (instance.slytherinCounter + 1);
        if(instance.slytherinCounter == 4) {
            FlowRouter.go('slytherin');
        }
        else {
            FlowRouter.go('questionFour');
        }
    },
    'click #hufflepuff3'(event, instance) {
        // increment the counter when button is clicked
        instance.hufflepuffCounter = (instance.hufflepuffCounter + 1);
        if(instance.hufflepuffCounter == 4) {
            FlowRouter.go('hufflepuff');
        }
        else {
            FlowRouter.go('questionFour');
        }
    },
    'click #ravenclaw3'(event, instance) {
        // increment the counter when button is clicked
        instance.ravenclawCounter = (instance.ravenclawCounter + 1);
        if(instance.ravenclawCounter == 4) {
            FlowRouter.go('ravenclaw');
        }
        else {
            FlowRouter.go('questionFour');
        }
    },
    'click #gryffindor4'(event, instance) {
        // increment the counter when button is clicked
        instance.gryffindorCounter = (instance.gryffindorCounter + 1);
        if(instance.gryffindorCounter == 4) {
            FlowRouter.go('gryffindor');
        }
        else {
            FlowRouter.go('questionFive');
        }
    },
    'click #slytherin4'(event, instance) {
        // increment the counter when button is clicked
        instance.slytherinCounter = (instance.slytherinCounter + 1);
        if(instance.slytherinCounter == 4) {
            FlowRouter.go('slytherin');
        }
        else {
            FlowRouter.go('questionFive');
        }
    },
    'click #hufflepuff4'(event, instance) {
        // increment the counter when button is clicked
        instance.hufflepuffCounter = (instance.hufflepuffCounter + 1);
        if(instance.hufflepuffCounter == 4) {
            FlowRouter.go('hufflepuff');
        }
        else {
            FlowRouter.go('questionFive');
        }
    },
    'click #ravenclaw4'(event, instance) {
        // increment the counter when button is clicked
        instance.ravenclawCounter = (instance.ravenclawCounter + 1);
        if(instance.ravenclawCounter == 4) {
            FlowRouter.go('ravenclaw');
        }
        else {
            FlowRouter.go('questionFive');
        }
    },
    'click #gryffindor5'(event, instance) {
        // increment the counter when button is clicked
        instance.gryffindorCounter = (instance.gryffindorCounter + 1);
        if(instance.gryffindorCounter == 4) {
            FlowRouter.go('gryffindor');
        }
        else {
            FlowRouter.go('questionSix');
        }
    },
    'click #slytherin5'(event, instance) {
        // increment the counter when button is clicked
        instance.slytherinCounter = (instance.slytherinCounter + 1);
        if(instance.slytherinCounter == 4) {
            FlowRouter.go('slytherin');
        }
        else {
            FlowRouter.go('questionSix');
        }
    },
    'click #hufflepuff5'(event, instance) {
        // increment the counter when button is clicked
        instance.hufflepuffCounter = (instance.hufflepuffCounter + 1);
        if(instance.hufflepuffCounter == 4) {
            FlowRouter.go('hufflepuff');
        }
        else {
            FlowRouter.go('questionSix');
        }
    },
    'click #ravenclaw5'(event, instance) {
        // increment the counter when button is clicked
        instance.ravenclawCounter = (instance.ravenclawCounter + 1);
        if(instance.ravenclawCounter == 4) {
            FlowRouter.go('ravenclaw');
        }
        else {
            FlowRouter.go('questionSix');
        }
    },
    'click #gryffindor6'(event, instance) {
        // increment the counter when button is clicked
        instance.gryffindorCounter = (instance.gryffindorCounter + 1);
        if(instance.gryffindorCounter == 4) {
            FlowRouter.go('gryffindor');
        }
        else {
            FlowRouter.go('questionSeven');
        }
    },
    'click #slytherin6'(event, instance) {
        // increment the counter when button is clicked
        instance.slytherinCounter = (instance.slytherinCounter + 1);
        if(instance.slytherinCounter == 4) {
            FlowRouter.go('slytherin');
        }
        else {
            FlowRouter.go('questionSeven');
        }
    },
    'click #hufflepuff6'(event, instance) {
        // increment the counter when button is clicked
        instance.hufflepuffCounter = (instance.hufflepuffCounter + 1);
        if(instance.hufflepuffCounter == 4) {
            FlowRouter.go('hufflepuff');
        }
        else {
            FlowRouter.go('questionSeven');
        }
    },
    'click #ravenclaw6'(event, instance) {
        // increment the counter when button is clicked
        instance.ravenclawCounter = (instance.ravenclawCounter + 1);
        if(instance.ravenclawCounter == 4) {
            FlowRouter.go('ravenclaw');
        }
        else {
            FlowRouter.go('questionSeven');
        }
    },
    'click #gryffindor7'(event, instance) {
        // increment the counter when button is clicked
        instance.gryffindorCounter = (instance.gryffindorCounter + 1);
        if(instance.gryffindorCounter == 4) {
            FlowRouter.go('gryffindor');
        }
        else {
            FlowRouter.go('questionEight');
        }
    },
    'click #slytherin7'(event, instance) {
        // increment the counter when button is clicked
        instance.slytherinCounter = (instance.slytherinCounter + 1);
        if(instance.slytherinCounter == 4) {
            FlowRouter.go('slytherin');
        }
        else {
            FlowRouter.go('questionEight');
        }
    },
    'click #hufflepuff7'(event, instance) {
        // increment the counter when button is clicked
        instance.hufflepuffCounter = (instance.hufflepuffCounter + 1);
        if(instance.hufflepuffCounter == 4) {
            FlowRouter.go('hufflepuff');
        }
        else {
            FlowRouter.go('questionEight');
        }
    },
    'click #ravenclaw7'(event, instance) {
        // increment the counter when button is clicked
        instance.ravenclawCounter = (instance.ravenclawCounter + 1);
        if(instance.ravenclawCounter == 4) {
            FlowRouter.go('ravenclaw');
        }
        else {
            FlowRouter.go('questionEight');
        }
    },
    'click #gryffindor8'(event, instance) {
        // increment the counter when button is clicked
        instance.gryffindorCounter = (instance.gryffindorCounter + 1);
        if(instance.gryffindorCounter == 4) {
            FlowRouter.go('gryffindor');
        }
        else {
            FlowRouter.go('questionNine');
        }
    },
    'click #slytherin8'(event, instance) {
        // increment the counter when button is clicked
        instance.slytherinCounter = (instance.slytherinCounter + 1);
        if(instance.slytherinCounter == 4) {
            FlowRouter.go('slytherin');
        }
        else {
            FlowRouter.go('questionNine');
        }
    },
    'click #hufflepuff8'(event, instance) {
        // increment the counter when button is clicked
        instance.hufflepuffCounter = (instance.hufflepuffCounter + 1);
        if(instance.hufflepuffCounter == 4) {
            FlowRouter.go('hufflepuff');
        }
        else {
            FlowRouter.go('questionNine');
        }
    },
    'click #ravenclaw8'(event, instance) {
        // increment the counter when button is clicked
        instance.ravenclawCounter = (instance.ravenclawCounter + 1);
        if(instance.ravenclawCounter == 4) {
            FlowRouter.go('ravenclaw');
        }
        else {
            FlowRouter.go('questionNine');
        }
    },
    'click #gryffindor9'(event, instance) {
        // increment the counter when button is clicked
        instance.gryffindorCounter = (instance.gryffindorCounter + 1);
        if(instance.gryffindorCounter == 4) {
            FlowRouter.go('gryffindor');
        }
        else {
            FlowRouter.go('questionTen');
        }
    },
    'click #slytherin9'(event, instance) {
        // increment the counter when button is clicked
        instance.slytherinCounter = (instance.slytherinCounter + 1);
        if(instance.slytherinCounter == 4) {
            FlowRouter.go('slytherin');
        }
        else {
            FlowRouter.go('questionTen');
        }
    },
    'click #hufflepuff9'(event, instance) {
        // increment the counter when button is clicked
        instance.hufflepuffCounter = (instance.hufflepuffCounter + 1);
        if(instance.hufflepuffCounter == 4) {
            FlowRouter.go('hufflepuff');
        }
        else {
            FlowRouter.go('questionTen');
        }
    },
    'click #ravenclaw9'(event, instance) {
        // increment the counter when button is clicked
        instance.ravenclawCounter = (instance.ravenclawCounter + 1);
        if(instance.ravenclawCounter == 4) {
            FlowRouter.go('ravenclaw');
        }
        else {
            FlowRouter.go('questionTen');
        }
    },
    'click #gryffindor10'(event, instance) {
        // increment the counter when button is clicked
        instance.gryffindorCounter = (instance.gryffindorCounter + 1);
        if(instance.gryffindorCounter == 4) {
            FlowRouter.go('gryffindor');
        }
        else {
            FlowRouter.go('questionEleven');
        }
    },
    'click #slytherin10'(event, instance) {
        // increment the counter when button is clicked
        instance.slytherinCounter = (instance.slytherinCounter + 1);
        if(instance.slytherinCounter == 4) {
            FlowRouter.go('slytherin');
        }
        else {
            FlowRouter.go('questionEleven');
        }
    },
    'click #hufflepuff10'(event, instance) {
        // increment the counter when button is clicked
        instance.hufflepuffCounter = (instance.hufflepuffCounter + 1);
        if(instance.hufflepuffCounter == 4) {
            FlowRouter.go('hufflepuff');
        }
        else {
            FlowRouter.go('questionEleven');
        }
    },
    'click #ravenclaw10'(event, instance) {
        // increment the counter when button is clicked
        instance.ravenclawCounter = (instance.ravenclawCounter + 1);
        if(instance.ravenclawCounter == 4) {
            FlowRouter.go('ravenclaw');
        }
        else {
            FlowRouter.go('questionEleven');
        }
    },
    'click #gryffindor11'(event, instance) {
        // increment the counter when button is clicked
        instance.gryffindorCounter = (instance.gryffindorCounter + 1);
        if(instance.gryffindorCounter == 4) {
            FlowRouter.go('gryffindor');
        }
        else {
            FlowRouter.go('questionTwelve');
        }
    },
    'click #slytherin11'(event, instance) {
        // increment the counter when button is clicked
        instance.slytherinCounter = (instance.slytherinCounter + 1);
        if(instance.slytherinCounter == 4) {
            FlowRouter.go('slytherin');
        }
        else {
            FlowRouter.go('questionTwelve');
        }
    },
    'click #hufflepuff11'(event, instance) {
        // increment the counter when button is clicked
        instance.hufflepuffCounter = (instance.hufflepuffCounter + 1);
        if(instance.hufflepuffCounter == 4) {
            FlowRouter.go('hufflepuff');
        }
        else {
            FlowRouter.go('questionTwelve');
        }
    },
    'click #ravenclaw11'(event, instance) {
        // increment the counter when button is clicked
        instance.ravenclawCounter = (instance.ravenclawCounter + 1);
        if(instance.ravenclawCounter == 4) {
            FlowRouter.go('ravenclaw');
        }
        else {
            FlowRouter.go('questionTwelve');
        }
    },
    'click #gryffindor12'(event, instance) {
        // increment the counter when button is clicked
        instance.gryffindorCounter = (instance.gryffindorCounter + 1);
        if(instance.gryffindorCounter == 4) {
            FlowRouter.go('gryffindor');
        }
        else {
            FlowRouter.go('questionThirteen');
        }
    },
    'click #slytherin12'(event, instance) {
        // increment the counter when button is clicked
        instance.slytherinCounter = (instance.slytherinCounter + 1);
        if(instance.slytherinCounter == 4) {
            FlowRouter.go('slytherin');
        }
        else {
            FlowRouter.go('questionThirteen');
        }
    },
    'click #hufflepuff12'(event, instance) {
        // increment the counter when button is clicked
        instance.hufflepuffCounter = (instance.hufflepuffCounter + 1);
        if(instance.hufflepuffCounter == 4) {
            FlowRouter.go('hufflepuff');
        }
        else {
            FlowRouter.go('questionThirteen');
        }
    },
    'click #ravenclaw12'(event, instance) {
        // increment the counter when button is clicked
        instance.ravenclawCounter = (instance.ravenclawCounter + 1);
        if(instance.ravenclawCounter == 4) {
            FlowRouter.go('ravenclaw');
        }
        else {
            FlowRouter.go('questionThirteen');
        }
    },
    'click #gryffindor13'(event, instance) {
        // increment the counter when button is clicked
        instance.gryffindorCounter = (instance.gryffindorCounter + 1);
        if(instance.gryffindorCounter == 4) {
            FlowRouter.go('gryffindor');
        }
    },
    'click #slytherin13'(event, instance) {
        // increment the counter when button is clicked
        instance.slytherinCounter = (instance.slytherinCounter + 1);
        if(instance.slytherinCounter == 4) {
            FlowRouter.go('slytherin');
        }
    },
    'click #hufflepuff13'(event, instance) {
        // increment the counter when button is clicked
        instance.hufflepuffCounter = (instance.hufflepuffCounter + 1);
        if(instance.hufflepuffCounter == 4) {
            FlowRouter.go('hufflepuff');
        }
    },
    'click #ravenclaw13'(event, instance) {
        // increment the counter when button is clicked
        instance.ravenclawCounter = (instance.ravenclawCounter + 1);
        if(instance.ravenclawCounter == 4) {
            FlowRouter.go('ravenclaw');
        }
    },
});
