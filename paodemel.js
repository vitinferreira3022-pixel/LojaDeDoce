PAODEMEL.JS
async function iniciarCompra() {

    const { value: email } = await Swal.fire({
        title: "Identificação",
        input: "email",
        inputLabel: "Seu e-mail para o pedido",
        inputPlaceholder: "exemplo@doce.com",
        confirmButtonColor: "#250625"
    });

    if (!email) return;


    const { value: password } = await Swal.fire({
        title: "Segurança",
        input: "password",
        inputLabel: "Digite sua senha",
        inputPlaceholder: "Sua senha secreta",
        confirmButtonColor: "#250625",
        inputAttributes: {
            maxlength: "10",
            autocapitalize: "off",
            autocorrect: "off"
        }
    });

    if (!password) return;


    const { value: date } = await Swal.fire({
        title: "Data de Entrega",
        input: "date",
        inputLabel: "Quando deseja receber seu Bruxolito?",
        confirmButtonColor: "#250625"
    });


    const { value: quantidade } = await Swal.fire({
        title: "Escolha quantas unidades você deseja:",
        input: "select",
        inputOptions: {
            "1": "1 Unidade",
            "2": "2 Unidades",
            "3": "3 Unidades",
            "4": "4 Unidades",
            "5": "5 Unidades"
        },
        inputPlaceholder: "Selecione a quantidade",
        showCancelButton: true,
        confirmButtonColor: "#250625",

        inputValidator: (value) => {
            if (!value) {
                return "Você precisa selecionar uma quantidade!";
            }
        }
    });

    if (quantidade) {
        Swal.fire({
            title: 'Pedido Realizado!',
            text: `Você adicionou ${quantidade} item(s) ao carrinho.`,
            html: `O <b>Bruxolito</b> será enviado para <b>${email}</b> no dia <b>${date}</b>.`,
            icon: "success",
            confirmButtonColor: "#250625"
        });
    }


}