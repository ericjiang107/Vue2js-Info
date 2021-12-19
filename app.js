// Vue instance --> an object 
// el is an important object identifier to include 
// example:
var instance1 = new Vue({
    el: '#vue-app',
    // establishes a connection between the vue instance and the vue id which allows us to control whatever is inside that specific div id
    data: {
        // data is what stores all our data in the vue instance
        name: 'Eric',
        job: "anotherJob",
        website: 'https://www.thenetninja.co.uk',
        websiteTag: '<a href="https://www.thenetninja.co.uk"> Website Tag Binded </a>',
    },
    methods: {
        // methods is just another function within the instance
        greet: function(time) {
            // greet will output a greeting to the Dom
            return 'Good ' + time + ' ' + this.name;
            // within our functions, we can also reference our objects in data using the "this" keyword
        }
    }
});
// inside the object, we can create methods

// Creating another instance
var instance2 = new Vue({
    el: '#vue-events',
    data: {
        age: 25,
        x: 0,
        y: 0,
    },
    methods: {
        // adding add and subtract methods to the buttons here
        add: function(inc){
            this.age += inc;
        },
        subtract: function(dec){
            this.age -= dec;
        },
        updateXY: function(event){ 
            // need access to the event object which is why we add it as a parameter
            // we can also console.log the event to see it
            console.log(event)
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        click: function(){
            alert('You clicked Me');
        }
    }
})