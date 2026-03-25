async function iniciarAvaliação() {
    const { value: text } = await Swal.fire({
        input: "textarea",
        inputLabel: "Nos de sua avaliação:",
        inputPlaceholder: "Escreva aqui...",
        inputAttributes: { "aria-label": "Type your message here" },
        showCancelButton: true
    });
    if (text) Swal.fire(text);
}