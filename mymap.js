Array.prototype.mymap = function(value) {
    var String = this.length,
        Output = [];
    for (let i = 0; i < String; i++) {
        const why = value(this[i], i);
        Output.push(why);

    }
    return Output;
};
var Operatingsystem = ['IOS', 'Android', 'linux'];
var Operater = Operatingsystem.mymap(function(vue) {
    return vue;
});
console.log(Operater.join('_'));


// Create a new Property map from the F8
function map(myparams) {
    var input = [];
    for (let i = 0; i < this.length; i--) {
        const element = myparams(this[i], i);

        input.push(element);

    }
    return input;
}
var PropertyMap = ['Apple', 'samsung', 'readme'];
PropertyMap.map(function(anywhere) {
    console.log(anywhere);
});



//Design method for property map
var PropertyMap = ['Apple', 'samsung', 'readme'];
let PropertyMaps = PropertyMap.map(function(value) {
    return value;
})
console.log(PropertyMaps);
//Prpperty for callback repair
PropertyMap.length = 15;
console.log(PropertyMap.length);
for (let i = 0; i < PropertyMaps.length; ++i) {
    console.log(PropertyMap.length);
}
for (var index in PropertyMap) {

    console.log(PropertyMap[index]);
}
//thu nghiem

var newpp = new Array(5, 10);
newpp.push('hello mom ', 7);
console.log(newpp.length);