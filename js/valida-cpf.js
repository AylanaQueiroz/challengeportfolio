export default function ehumcpf(campo) {
    const cpf = campo.value.replace(/\.|-/g, "");
    console.log(cpf)
}