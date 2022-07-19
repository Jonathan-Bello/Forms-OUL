import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import defaultTitular from "./models/titular";
import TitularesForm from "./TitularesForm";
import renderError from "../utils/renderError";
import { useState } from "react";

const Registromarcaform = () => {
  const [conlogo, setConlogo] = useState(true);

  const initialValuesTitular = defaultTitular;

  const initialValues = {
    tipoRegistro: "marca",
    tipoMarca: "sinTipo",
    nombreMarca: "",
    logo: "",
    titulares: [initialValuesTitular],
    descripcion: "",
    enUso: "",
    tieneEstablecimiento: "",
  };

  // TODO : Asignar maximos de caracteres
  const validationSchema = Yup.object({
    tipoRegistro: Yup.string().required(
      "Se requiere que seleciones un tipo de registro"
    ),
    tipoMarca: Yup.string().required(
      "Se requiere que seleciones un tipo de marca"
    ),
    nombreMarca: Yup.string().required("Se requiere que ingreses un nombre"),
    logo: Yup.mixed().nullable(),
    // titulares: Yup.array().of(
    //   Yup.object({
    //     tipoTitular: Yup.string().required(
    //       "Se requiere que seleciones un tipo de titular"
    //     ),
    //     nombre: Yup.string().required("El nombre es requerido"),
    //     apellidoPaterno: Yup.string().required(
    //       "El apellido paterno es requerido"
    //     ),
    //     apellidoMaterno: Yup.string(),
    //     nacionalidad: Yup.string().required("La nacionalidad es requerida"),
    //     telefono: Yup.number()
    //       .required("El teléfono es requerido")
    //       .typeError("El teléfono solo debe contener números"),
    //     email: Yup.string()
    //       .required("El email es requerido")
    //       .email("El email no es válido"),
    //     ID: Yup.string(),
    //     domicilio: Yup.object({
    //       calle: Yup.string().required("La calle es requerida"),
    //       numeroExterior: Yup.string().required(
    //         "El número exterior es requerido"
    //       ),
    //       numeroInterior: Yup.string(),
    //       colonia: Yup.string().required("La colonia es requerida"),
    //       municipio: Yup.string().required("El municipio es requerido"),
    //       estado: Yup.string().required("El estado es requerido"),
    //       codigoPostal: Yup.string().required("El código postal es requerido"),
    //     }),
    //   })
    // ),
    // descripcion: Yup.string().required("La descripción es requerida"),
    // enUso: Yup.string().required("Selecciona si la marca está en uso"),
    // tieneEstablecimiento: Yup.string().required(
    //   "Selecciona si la marca tiene establecimiento"
    // ),
  });

  return (
    <div>
      <h1>Registro marca</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          console.log(values);
        }}
        validate={(values) => {
          const errors = {};

          if (values.tipoRegistro === "marca") {
            if (values.tipoMarca === "sinTipo") {
              errors.tipoMarca = "Se requiere que seleciones un tipo de marca";
            }
          }

          if (conlogo && values.logo === "") {
            errors.logo = "Se requiere que subas un logo";
          }
          return errors;
        }}
      >
        {(formikProps) => (
          <Form>
            <div>
              <h3>Solicitud</h3>
              <label>¿Tipo de marca que solicita?*</label>
              <label>
                Registro de marca
                <Field type="radio" name="tipoRegistro" value="marca" />
              </label>
              <label>
                Registro de Slogan
                <Field
                  type="radio"
                  name="tipoRegistro"
                  value="slogan"
                  onClick={() =>
                    formikProps.setFieldValue("tipoMarca", "sinTipo")
                  }
                />
              </label>
              <ErrorMessage name="tipoRegistro" render={renderError} />
            </div>

            {formikProps.values.tipoRegistro === "marca" && (
              <div>
                <h3>Tipos de marca</h3>
                <label>¿Qué tipo de marca deseas registrar?*</label>
                <label>
                  Marca Nominativa
                  <Field type="radio" name="tipoMarca" value="normativa" />
                </label>
                <label>
                  Marca Innominada
                  <Field type="radio" name="tipoMarca" value="innominada" />
                </label>
                <label>
                  Marca Mixta
                  <Field type="radio" name="tipoMarca" value="mixta" />
                </label>
                <ErrorMessage name="tipoMarca" render={renderError} />
              </div>
            )}

            <div>
              <h3>Marca</h3>
              <div>
                <label>
                  Nombre de tu marca*
                  <Field type="text" name="nombreMarca" />
                </label>
                <ErrorMessage name="nombreMarca" render={renderError} />
              </div>
              <div>
                <label>
                  Mi marca no tiene logo
                  <input
                    type="checkbox"
                    name="logo"
                    onChange={() => {
                      setConlogo(!conlogo);
                      if (conlogo) {
                        formikProps.setFieldValue("logo", "");
                      }
                    }}
                  />
                </label>
              </div>
              {conlogo && (
                <div>
                  <label>
                    Logo de tu marca
                    <Field type="file" name="logo" />
                  </label>
                  <ErrorMessage name="logo" render={renderError} />
                </div>
              )}
            </div>

            <div>
              <h3>Titular</h3>
              <TitularesForm formikProps={formikProps}></TitularesForm>
            </div>

            <div>
              <h3>Información general</h3>
              <div>
                <label>
                  Breve descripción de los productos y/o servicios a proteger*
                  <Field as="textarea" name="descripcion" />
                </label>
                <ErrorMessage name="descripcion" render={renderError} />
              </div>
              <div>
                <label>
                  ¿Está en uso?*
                  <label>
                    Si
                    <Field type="radio" name="enUso" value={"true"} />
                  </label>
                  <label>
                    No
                    <Field type="radio" name="enUso" value={"false"} />
                  </label>
                </label>
                <ErrorMessage name="enUso" render={renderError} />
              </div>
              <div>
                <label>
                  ¿Tu marca cuenta con algún establecimiento?*
                  <label>
                    Si
                    <Field
                      type="radio"
                      name="tieneEstablecimiento"
                      value={"true"}
                    />
                  </label>
                  <label>
                    No
                    <Field
                      type="radio"
                      name="tieneEstablecimiento"
                      value={"false"}
                    />
                  </label>
                </label>
                <ErrorMessage
                  name="tieneEstablecimiento"
                  render={renderError}
                />
              </div>
            </div>
            <div>
              <button type="submit">Registrar</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Registromarcaform;
