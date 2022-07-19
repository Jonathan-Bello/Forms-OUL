import { Field, FieldArray, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

import renderError from "../utils/renderError";

const Comprobacionmarca = () => {
  const initMarca = {
    numeroRegistro: "",
    numeroExpediente: "",
  };

  const initialValues = {
    marcas: [initMarca],
    tipoTitular: "",
    personaFisica: {
      nombre: "",
      apellidoPaterno: "",
      apellidoMaterno: "",
    },
    personaMoral: {
      razonSocial: "",
    },
    nombreMarca: "",
  };

  // TODO : Asignar maximos de caracteres
  const validationSchema = Yup.object({
    marcas: Yup.array().of(
      Yup.object({
        numeroRegistro: Yup.string().notRequired(),
        numeroExpediente: Yup.string().notRequired(),
      })
    ),
    tipoTitular: Yup.string().required("El tipo de titular es requerido"),
    personaFisica: Yup.object({
      nombre: Yup.string(),
      apellidoPaterno: Yup.string(),
      apellidoMaterno: Yup.string(),
    }),
    personaMoral: Yup.object({
      razonSocial: Yup.string(),
    }),
    nombreMarca: Yup.string().required("El nombre de la marca es requerido"),
  });

  return (
    <div>
      <h1>Comprobación de uso en línea</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          console.log(values);
        }}
        validate={(values) => {
          const errors = {};
          // validar que se seleciona un numero de registro o numero de expediente para cada marca
          values.marcas.forEach((marca, index) => {
            if (marca.numeroRegistro == "" && marca.numeroExpediente == "") {
              errors[`marcas[${index}].numeroRegistro`] =
                "El numero de registro o numero de expediente es requerido";
            }
          });

          // validar que se ingresen los datos de la persona física
          if (values.tipoTitular === "personaFisica")
            if (values.personaFisica.nombre == "")
              errors["personaFisica.nombre"] = "El nombre es requerido";
          if (values.personaFisica.apellidoPaterno == "")
            errors["personaFisica.apellidoPaterno"] =
              "El apellido paterno es requerido";

          if (values.tipoTitular === "personaMoral")
            if (values.personaMoral.razonSocial == "")
              errors["personaMoral.razonSocial"] =
                "La razón social es requerida";

          return errors;
        }}
      >
        {({ values, errors }) => (
          <Form>
            <section>
              <FieldArray name="marcas">
                {({ push, remove }) => (
                  <div>
                    <h3>Información de marca</h3>
                    {values.marcas.length > 0 &&
                      values.marcas.map((marca, index) => (
                        <div key={index}>
                          <div>
                            <label>
                              Número de registro*
                              <Field
                                name={`marcas[${index}].numeroRegistro`}
                                type="text"
                                placeholder="Número de registro"
                              />
                            </label>
                            <ErrorMessage
                              name={`marcas[${index}].numeroRegistro`}
                              render={renderError}
                            />
                          </div>
                          <div>
                            <label>
                              Número de expediente*
                              <Field
                                name={`marcas[${index}].numeroExpediente`}
                                type="text"
                                placeholder="Número de expediente"
                              />
                            </label>
                            <ErrorMessage
                              name={`marcas[${index}].numeroExpediente`}
                              render={renderError}
                            />
                          </div>
                          {errors[`marcas[${index}].numeroRegistro`] && (
                            <div>
                              {renderError(
                                errors[`marcas[${index}].numeroRegistro`]
                              )}
                            </div>
                          )}
                          <button type="button" onClick={() => remove(index)}>
                            Eliminar
                          </button>
                        </div>
                      ))}
                    <button type="button" onClick={() => push(initMarca)}>
                      Agregar
                    </button>
                  </div>
                )}
              </FieldArray>
            </section>

            <section>
              <h3>¿Quién es el titular de la marca?*</h3>
              <div>
                <label>
                  Persona
                  <Field
                    name="tipoTitular"
                    type="radio"
                    value="personaFisica"
                  />
                </label>
                <label>
                  Empresa
                  <Field name="tipoTitular" type="radio" value="personaMoral" />
                </label>
                <ErrorMessage name="tipoTitular" render={renderError} />
              </div>
            </section>

            {values.tipoTitular === "personaFisica" && (
              <section>
                <div>
                  <label>
                    Nombre*
                    <Field
                      name="personaFisica.nombre"
                      type="text"
                      placeholder="Nombre"
                    />
                  </label>
                  {errors["personaFisica.nombre"] && (
                    <>{renderError(errors["personaFisica.nombre"])}</>
                  )}
                </div>
                <div>
                  <label>
                    Apellido paterno*
                    <Field
                      name="personaFisica.apellidoPaterno"
                      type="text"
                      placeholder="Apellido paterno"
                    />
                  </label>
                  {errors["personaFisica.apellidoPaterno"] && (
                    <>{renderError(errors["personaFisica.apellidoPaterno"])}</>
                  )}
                </div>
                <div>
                  <label>
                    Apellido materno<span>(opcional)</span>
                    <Field
                      name="personaFisica.apellidoMaterno"
                      type="text"
                      placeholder="Apellido materno"
                    />
                  </label>
                  <ErrorMessage
                    name="personaFisica.apellidoMaterno"
                    render={renderError}
                  />
                </div>
              </section>
            )}

            {values.tipoTitular === "personaMoral" && (
              <section>
                <div>
                  <label>
                    Razon social*
                    <Field
                      name="personaMoral.razonSocial"
                      type="text"
                      placeholder="Razon social"
                    />
                  </label>
                  {errors["personaMoral.razonSocial"] && (
                    <>{renderError(errors["personaMoral.razonSocial"])}</>
                  )}
                </div>
              </section>
            )}

            <section>
              <label>
                ¿Cuál es el nombre de tu marca?*
                <Field
                  name="nombreMarca"
                  type="text"
                  placeholder="Nombre de marca"
                />
              </label>
              <ErrorMessage name="nombreMarca" render={renderError} />
            </section>
            <button type="submit">Enviar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Comprobacionmarca;
