import * as Yup from "yup";

export default [
  Yup.object().shape({
    nombre: Yup.string().required("El nombre es requerido"),
  }),
  Yup.object({
    apellido: Yup.string().required("El apellido es requerido"),
  }),
];

// export default Yup.object({
//   nombre: Yup.string().required("El nombre es requerido"),
//   apellido: Yup.string().required("El apellido es requerido"),
// })