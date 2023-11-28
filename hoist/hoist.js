console.log(hello);                                   
var hello = 'world';                                 
// 'undefined' because hello is declared after the log


var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
//'magnet' because the function changed the value of needle


var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
//'only okay' again the function changes the value of brendan and console logs it after
// i did not see line 20.... line 20 console logs brendan outside of the function. my guess is that since its outside of the function brendan is declared as 'super cool' globally


var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
//'chicken' 'half-chicken' chicken because it was delcared globall and logged outside of the function, and half chicken because the function changed the val of food then logged it after. my guess is that food ends at the 'gone' value


mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
//'chicken' 'fish' 'fish 'fish'
//mean does not count as a function so it doesnt run

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
//'undefined' 'rock' 'r&b' 'disco' first log is undefined because it was logged before genre was declared, when function is ran it changes genre to rock then console logs then changes to r&b then logs and after function is over a log outside of function logs genre which is globally declared as disco


dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
//'san jose' 'seattle' 'burbank' 'san jose' dojo is delcared as san jose then gets logged, learn function gets called which turns dojo to seattle and logs it then turns dojo to burbank and logs again, once function ends outside of function dojo is logged once more which is globally declared as san jose

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// 'Chicago' '65' 'True'  function takes in two values name and students. if students is greater than 50 then theyre not hiring if its less than or equal to 0 theyre closed for now
// 'Berkley '0' 'closed for now
