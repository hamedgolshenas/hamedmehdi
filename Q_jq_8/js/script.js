console.log("check");
$(document).ready(function () {
    $('#home-dropdown')
    $("#links-dropdown").hide();
    $("#pages-dropdown").hide();
    $("#home-dropdown").hide();
    $("#home").click(function () {
        $("#home-dropdown").toggle("slow");
        
    });
    $('#pages').click(function(){
        $("#pages-dropdown").toggle('slow');
    });
    
    $('#links').click(function(){
        $("#links-dropdown").toggle('slow');
    });
});