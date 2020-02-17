function mostrar()
{var planeta;
 planeta = prompt("Ingrese un planeta: ");
    switch(planeta){
        case "venus":
        case "mercurio":
            alert("acá hace mas calor");
            break;
        case "tierra":
            alert("acá es donde vivimos");
            break;
        case "marte":
        case "jupiter":
        case "saturno":
        case "neptuno":
        case "urano":
            alert("acá hace mas frio");
            break;
        default:
            alert("Este no es un planeta ");

    }
}
