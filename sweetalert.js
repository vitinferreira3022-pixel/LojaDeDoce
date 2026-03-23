$(document).ready(function () {
    Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
    });
    
    $("#chocolates").click(function () {

        $("#bala").hide();
        $("#bolo").hide();
        $("#pirulito").hide();
        $("#chocolate").show();

    });
    $("#todos").click(function () {

        $("#bala").show();
        $("#bolo").show();
        $("#pirulito").show();
        $("#chocolate").show();

    });
     $("#balas").click(function () {

        $("#bala").show();
        $("#bolo").hide();
        $("#pirulito").hide();
        $("#chocolate").hide();

    });
     $("#pirulitos").click(function () {

        $("#bala").hide();
        $("#bolo").hide();
        $("#pirulito").show();
        $("#chocolate").hide();

    });
});