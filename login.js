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


    if (date) {
        Swal.fire({
            icon: 'success',
            title: 'Pedido Realizado!',
            html: `O <b>Bruxolito</b> será enviado para <b>${email}</b> no dia <b>${date}</b>.`,
            confirmButtonColor: "#250625"
        });
    }
}