/* global $ _ opspark */
$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        $('#section-bio').css('background-color', 'gray');
        
        $('#section-quotes').css('padding-right', '300px');
        // uncomment this to inspect all available data; delete when done //
        // console.log(data);
        
        // EXAMPLE: Looping over top rated recordings; replace with your code //
        // let topRated = data.discography.topRated;
        // _.map(topRated, function(value, key, collection) {
        //     // $('#list-top-rated').append($("<li>").text(value.title).css('font-style', 'italic'));
            // $('#list-top-rated').append($("<li>").text(value.artist).css('font-weight', 'bold').fadeIn(300));
            // $('#list-top-rated').append($("<li>").text(value.release).css('font-style', 'italic'));
            // $('#list-top-rated').append($("<li>").text(value.year).css('font-style', 'italic'));
            // });
            
            
            
             let topRated = data.discography.topRated;
             
             
        _.map(topRated, function(value, key, collection) {
            let $item = $("<li>").addClass("topListItem")
            .append($('<div>').addClass("album").text(value.title))
                .append($('<div>').addClass("artist").text(value.artist))
                    .append($('<div>').addClass("release").text(value.release))    
                        .append($('<div>').addClass("year").text(value.year))
                           .data("art", value.art); 
            $('#list-top-rated').append($item);
            });
        console.log("topRated", topRated[0].art);       
            let recordings = data.discography.recordings;
        _.map(recordings, function (value, key, collection){
            let $item = $("<li>").addClass("recordItem")
            .append($('<div>').addClass("album").text(value.title))
                .append($('<div>').addClass("artist").text(value.artist))
                    .append($('<div>').addClass("release").text(value.release))    
                        .append($('<div>').addClass("year").text(value.year))
                           .data("art", value.art); 
                           $('#list-top-rated')
                            .append($item);
        });
        $("div.album").css("font-style", "italic");
            $("div.artist").css("font-weight", "bold").css("padding-left", "3px");
            $("div.release").css("padding-left", "5px");
            $("div.year").css("padding-left", "5px");
           
        
    let image = $('<div>').addClass("image-container").attr("id", "image-container-recording")
        .append($("<img>").attr("id", "recording-image").attr("src", data.discography.topRated[0].art).addClass("image"));
    $("image-container-recording").css;
            $('#header-top-rated').after(image);
        
    let photos = data.images.billy;    
    var i = 1;
    $('#image-billy').click(function swap(){
        $('#image-billy').attr('src', photos[i]);    
            i++;
            if (i===photos.length){
                i = 0;
            }
    });
       
    
  
// 8


$('.topListItem').on("click", function(){
    var photo = $(this).data("art");
    $('#recording-image').attr('src', photo);
});

let imageRecords = $('<div>').addClass("image-container").attr("id", "image-contaainer-recording")
        .append($("<img>").attr("id", "second-image").attr("src", data.discography.recordings[0].art).addClass("image"));
    $("image-container-recording").css;
    $('.topListItem').last().after(imageRecords);

$('.recordItem').on("click", function(){
    var photo = $(this).data("art");
    $('#second-image').attr('src', photo);
});


// 9
let rider = data.rider;


var createTable = function(riderData){
    var createRow = function(instrument){
        var $row = $("<tr>");
        var $type = $("<td>").text(instrument.type);
        var $desc = $("<td>").text(instrument.desc);
        $row.append($type);
        $row.append($desc);
        return $row;
    };
    var $table = $("<table>");
    var $rows = riderData.map(createRow);
    $table.append($rows);
    return $table;
};
createTable(rider).appendTo("body");




        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});


