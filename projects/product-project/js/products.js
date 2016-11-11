$(function () {
  // ALL YOUR CODE GOES BELOW HERE //
$(document).ready(function() {
$.getJSON("data/product.json", function(products){



$("<body>")
    .addClass("shop");

let $section = $("<section>")
                .addClass("allProducts")
                    .append($("<h3>").text("one might purchase phones here"))

//filter
$("body").append("<select type='searchBar' class='tool' name='search'> <option value='allPhones' selected>all phones</option><option value='cases' selected>Cases</option></select>");
    
var selection = ($(':selected').val());

console.log(($(':selected').val()));
// console.log(($('input:searchbar')).val());
// if selection = 

// items
_.map(products, function(value, i, object) {
   
  
    let page =   $('#container')
            .append($('<section>'))
                .addClass("allPhones")
                    .append($('<div>')
                        .text('Description ' + value.desc))
                        .append($('<div>')
                        .text('price ' + value.price))
                        .append($('<div>')
                        .text('specs ' + value.specs))
                                .append($('<img src>')
                                    .attr("src", "img/product/thumbs/" + products[i].image)
                                        .addClass("phoneImage")
                                            .data("pic", value.image))
                                                .data("specs", value.specs);
       
   
   
});


var cases = _.filter(products, function(val, i, coll){
    return val.type === "case";
});

var phones = _.filter(products, function(val, i, coll){
    return val.type === "phone";
});


console.log("cases", cases);
console.log("phone", phones);


$('.tool').change(function(){
    
    if (selection === "phones"){
        _.map(phones, function(value, i, object) {
   
  
    let page =   $('#container')
            .append($('<section>'))
                .addClass("allPhones")
                    .append($('<div>')
                        .text('Description ' + value.desc))
                        .append($('<div>')
                        .text('price ' + value.price))
                        .append($('<div>')
                        .text('specs ' + value.specs))
                                .append($('<img src>')
                                    .attr("src", "img/product/thumbs/" + products[i].image)
                                        .addClass("phoneImage")
                                            .data("pic", value.image))
                                                .data("specs", value.specs);
       
   
   
});
        
        
    } else if (selection === "case"){
    
    _.map(cases, function(value, i, object) {
   
  
    let page =   $('#container')
            .append($('<section>'))
                .addClass("allPhones")
                    .append($('<div>')
                        .text('Description ' + value.desc))
                        .append($('<div>')
                        .text('price ' + value.price))
                        .append($('<div>')
                        .text('specs ' + value.specs))
                                .append($('<img src>')
                                    .attr("src", "img/product/thumbs/" + products[i].image)
                                        .addClass("phoneImage")
                                            .data("pic", value.image))
                                                .data("specs", value.specs);
       
   
   
});
    
    }    
    // } else if (){
        
    // }
    
    $('#container')
            .append($('<section>'))
                .addClass("allPhones")
                    .append($('<div>')
                        .text('Description ' + value.desc))
                        .append($('<div>')
                        .text('price ' + value.price))
                        .append($('<div>')
                        .text('specs ' + value.specs))
                                .append($('<img src>')
                                    .attr("src", "img/product/thumbs/" + products[i].image)
                                        .addClass("phoneImage")
                                            .data("pic", value.image))
                                                .data("specs", value.specs);
});



//highlighted
$('.phoneImage').on('mouseenter', function(){
    $('.phoneImage').removeClass("highlighted");
    $(this).addClass("highlighted");
    // let info = $('.highlighted').append("<section>").text("will it blend?");
});


//IMPORTANT EXAMPLE LINES
//$(this).remove()
//$(this).after(price);

//variable for all phone info



// $(".phoneImage").on('click', function(){
// //append all info 
// var specs = $(this).data("specs");
// $(this).append("<div>").text(specs);
// console.log("specsTest", specs);


});  
});
  // ALL YOUR CODE GOES ABOVE HERE //
});