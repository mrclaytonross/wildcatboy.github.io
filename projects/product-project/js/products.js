$(function () {
  // ALL YOUR CODE GOES BELOW HERE //
$(document).ready(function() {
$.getJSON("data/product.json", function(products){


 let page =   $('#container')
            .append($('<ul>'))
                .addClass("allPhones");
   


// items
var pageSet = _.map(products, function(value, i, object) {
   
let content =  $(page).append($('<li>').addClass(value.type)
        .text('type ' + value.type + 'price ' + value.price)
            .append($('<img src>')
                .attr("src", "img/product/thumbs/" + products[i].image)
                    .addClass("phoneImage")
                        .data("pic", value.image))
                            .data("specs", value.specs));
                   
});






//filter
var justCases = products.filter(function(x){
    return x.type === "case";
})
var justPhones = products.filter(function(x){
    return x.type === "phone";
})


console.log(justCases);

$("body").prepend("<select id='selecting' type='filterBar' class='tool' name='filter'> <option value='selectOne' selected>Select</option> <option value='phones' select>phones</option><option value='cases' select>Cases</option></select>");

var selection = $('.tool option:selected');


$('#selecting').change(function (){
    var selection = $('.tool option:selected').val();
    console.log('noted');
    if(selection === "cases"){
        $('li').remove();
            _.map(justCases, function(value, i, object) {
                $(page).append($('<li>').addClass(value.type)
                        .text('type ' + value.type + 'price ' + value.price + value.desc)
                            .append($('<img src>')
                                .attr("src", "img/product/thumbs/" + products[i].image)
                                    .addClass("phoneImage")
                                        .data("pic", value.image))
                                            .data("specs", value.specs));
                                   
    });  
    } else if (selection === "phones"){
        $('li').remove();
         _.map(justPhones, function(value, i, object) {
            $(page).append($('<li>').addClass(value.type)
                    .text('type ' + value.type + 'price ' + value.price + value.desc)
                        .append($('<img src>')
                            .attr("src", "img/product/thumbs/" + products[i].image)
                                .addClass("phoneImage")
                                    .data("pic", value.image))
                                        .data("specs", value.specs));
                               
    });
    
    } else {
        $('li').remove();
        var pageSet = _.map(products, function(value, i, object) {
   
        let content =  $(page).append($('<li>').addClass(value.type)
                .text('type ' + value.type + 'price ' + value.price)
                    .append($('<img src>')
                        .attr("src", "img/product/thumbs/" + products[i].image)
                            .addClass("phoneImage")
                                .data("pic", value.image))
                                    .data("specs", value.specs));
                           
        }); 
            }
});


// search

let search = $( ".allPhones" ).prepend
("<input type='text' name='search' placeholder='Search...' id='search' />")
.prepend("<input id='submit' type='submit' value='go' />");
   
    
$('input').change(function (){
    var input = document.getElementById("search").value;   
    $('li').remove();
    _.map(products, function(value, i, object) {
        if (value.desc.search(input) >= 0){
            $(page).append($('<li>').addClass(value.type)
                .text('type ' + value.type + 'price ' + value.price + value.desc)
                    .append($('<img src>')
                        .attr("src", "img/product/thumbs/" + products[i].image)
                            .addClass("phoneImage")
                                .data("pic", value.image))
                                    .data("specs", value.specs));
        }    
    });    
});


// sort

let sort = $( ".allPhones" ).prepend
('<form id="myForm"><input type="radio" name="sort" id="sort" value="other" checked> default sort<br><input type="radio" name="sort" value="price"> sort from least expensive<br><input type="radio" name="sort" value="stock"> sort by least to most stocked<br><input type="submit"></form>')

var sorted = products.sort(function(x,y){
                return parseFloat(x.price) - parseFloat(y.price)
            }) 
var sortedStock = products.sort(function(x,y){
                return parseFloat(x.stock) - parseFloat(y.stock)
            })             

$('#myForm input').on('change', function() {
   var selection = ($('input[name=sort]:checked', '#myForm').val()); 
        if (selection === 'price'){
            $('li').remove();
             _.map(sorted, function(value, i, object) {
                let content =  $(page).append($('<li>').addClass(value.type)
                        .text('type ' + value.type + 'price ' + value.price)
                            .append($('<img src>')
                                .attr("src", "img/product/thumbs/" + products[i].image)
                                    .addClass("phoneImage")
                                        .data("pic", value.image))
                                            .data("specs", value.specs));
                   
            });
            console.log('sorted ', sorted);
        } else if (selection === 'stock'){
            $('li').remove();
             _.map(sortedStock, function(value, i, object) {
                let content =  $(page).append($('<li>').addClass(value.type)
                        .text('type ' + value.type + 'price ' + value.price + "STOCK" + value.stock)
                            .append($('<img src>')
                                .attr("src", "img/product/thumbs/" + products[i].image)
                                    .addClass("phoneImage")
                                        .data("pic", value.image))
                                            .data("specs", value.specs));
                   
            });
        } else {
            $('li').remove();
            var pageSet = _.map(products, function(value, i, object) {
            let content =  $(page).append($('<li>').addClass(value.type)
                    .text('type ' + value.type + 'price ' + value.price)
                        .append($('<img src>')
                            .attr("src", "img/product/thumbs/" + products[i].image)
                                .addClass("phoneImage")
                                    .data("pic", value.image))
                                        .data("specs", value.specs));
                   
});
        }
});











//highlighted
// $('.phoneImage').on('mouseenter', function(){
//     $('.phoneImage').removeClass("highlighted");
//     $(this).addClass("highlighted");
//     // let info = $('.highlighted').append("<section>").text("will it blend?");
// });


// $(".phoneImage").on('click', function(){
// //append all info 
// var specs = $(this).data("specs");
// $(this).append("<div>").text(specs);
// console.log("specsTest", specs);


});  
});
  // ALL YOUR CODE GOES ABOVE HERE //
});