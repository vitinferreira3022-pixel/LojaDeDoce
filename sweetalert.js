$(document).ready(function () {
    Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
    });

    $("#btninfo").click(function () {

        $("#Titulo_danger").hide();
        $("#Titulo_info").show();

        swal.fire({
            title: "Botao info clicado",
            text: "Titulo danger foi escondido",
            icon: "success"
        });


    });
    $("#btndanger").click(function () {

        $("#Titulo_info").hide();
        $("#Titulo_danger").show();

        swal.fire({
            title: "Botao danger clicado",
            text: "Titulo info foi escondido",
            icon: "success"
        });


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