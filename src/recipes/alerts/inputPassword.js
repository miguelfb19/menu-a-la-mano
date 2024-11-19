import Swal from "sweetalert2";

export const inputPassword = async () => {
  const { value: password } = await Swal.fire({
    title: "Ingresa la contraseña",
    input: "password",
    inputLabel: "La contraseña de admin. es necesaria para esta acción",
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
