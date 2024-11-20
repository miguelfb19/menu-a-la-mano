import Swal from "sweetalert2";

export const inputPassword = async (action) => {
  
  let color;
  switch (action) {
    case "eliminar":
      color = "text-red-500";
      break;
    case "editar":
      color = "text-darkOrange";
      break;
    case "agregar":
      color = "text-blue-500";
      break;
    default:
      break;
  }

  const { value: password } = await Swal.fire({
    title: "Ingresa la contraseña",
    input: "password",
    html: `La contraseña de admin. es necesaria para <span class="${color} font-bold">${action}</span> la receta`,
    confirmButtonColor: "#ffa622",
    inputAttributes: {
      maxlength: "15",
      autocapitalize: "off",
      autocorrect: "off",
    },
  });

  return password;
};

export const confirmPassword = () => {
  Swal.fire({
    title: "Contraseña correcta",
    icon: "success",
    confirmButtonColor: "#ffa622",
  });
};

export const deniedPassword = () => {
  Swal.fire({
    title: "Contraseña incorrecta",
    icon: "error",
    confirmButtonColor: "#ffa622",
  });
};
