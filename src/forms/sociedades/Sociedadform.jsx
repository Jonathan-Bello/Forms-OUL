import { Field, FieldArray, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import renderError from "../utils/renderError";
import InputAdministracion from "./components/InputAdministracion";
import InputArraySocios from "./components/InputArraySocios";
import defaultSocio from "./models/socio";
import defaultNameData from "./models/namedata";
import InputArchivos from "./components/InputArchivos";

const Sociedadform = () => {
  // TODO: agregar validadción de numero de socios y porcentajes que den 100%

  const initialValues = {
    tipoSociedad: "",
    nombresMarca: {
      opcion1: "",
      opcion2: "",
      opcion3: "",
    },
    giro: "",
    socios: [defaultSocio],
    domicilio: {
      calle: "",
      numeroExterior: "",
      numeroInterior: "",
      colonia: "",
      municipio: "",
      estado: "",
      codigoPostal: "",
    },
    administracion: {
      tipoAdministracion: "",
      administradorUnico: defaultNameData,
      otroAdministrador: defaultNameData,
      consejoAdministrativo: {
        presidente: defaultNameData,
        otroPresidente: defaultNameData,
        vicePresidente: defaultNameData,
        otroVicePresidente: defaultNameData,
      },
      comisario: defaultNameData,
    },
    archivos: {},
  };

  const validationSchema = Yup.object({
    tipoSociedad: Yup.string().required("El tipo de sociedad es requerido"),
    nombresMarca: Yup.object({
      opcion1: Yup.string().required("El nombre de opcion es requerido"),
      opcion2: Yup.string().required("El nombre de opcion es requerido"),
      opcion3: Yup.string().required("El nombre de opcion es requerido"),
    }),
    giro: Yup.string().required("Definir el giro de la empresa es requerido"),
    socios: Yup.array().of(
      Yup.object({
        tipoSocio: Yup.string().required("El tipo de socio es requerido"),
        nombre: Yup.string().required("El nombre es requerido"),
        apellidoPaterno: Yup.string().required(
          "El apellido paterno es requerido"
        ),
        apellidoMaterno: Yup.string(),
        nacionalidad: Yup.string().required("La nacionalidad es requerida"),
        fechaNacimiento: Yup.date()
          .required("La fecha de nacimiento es requerida")
          .typeError("El formato de la fecha de nacimiento es incorrecto"),
        estadoCivil: Yup.string().required("El estado civil es requerido"),
        ocupacion: Yup.string().required("La ocupación es requerida"),
        curp: Yup.string().required("La CURP es requerida"),
        rfc: Yup.string().required("El RFC es requerido"),
        // porcentaje: Yup.string()
        //   .required("El porcentaje es requerido")
        //   .matches(
        //     /^[0-9]{1,2}(\.?[0-9]{0,2})?$/,
        //     "El porcentaje debe ser un número entre 0 y 100 con dos decimales"
        //   ),
        porcentaje: Yup.number()
          .min(0, "El porcentaje debe ser mayor o igual a 0")
          .max(100, "El porcentaje debe ser menor o igual a 100")
          .required("El porcentaje es requerido")
          .typeError(
            "El porcentaje debe ser un número entre 0 y 100 con dos decimales"
          ),
      })
    ),
  });

  return (
    <div>
      <h1>Constitución de Sociedades</h1>

      <Formik
        initialValues={initialValues}
        // validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);

          // adminitrador Unico
          if (
            values.administracion.tipoAdministracion === "Administrador único"
          ) {
            values.administracion.administradorUnico === "Otro"
              ? (values.administracion.administradorUnico = {
                  ...values.administracion.otroAdministrador,
                })
              : (values.administracion.administradorUnico = JSON.parse(
                  values.administracion.administradorUnico
                ));
          }

          // consejo Administrativo
          if (
            values.administracion.tipoAdministracion ===
            "Consejo de Administración"
          ) {
            values.administracion.consejoAdministrativo.presidente === "Otro"
              ? (values.administracion.consejoAdministrativo.presidente = {
                  ...values.administracion.consejoAdministrativo.otroPresidente,
                })
              : (values.administracion.consejoAdministrativo.presidente =
                  JSON.parse(
                    values.administracion.consejoAdministrativo.presidente
                  ));
          }

          // console.log(values);
          const data = values;
          delete data.administracion.otroAdministrador;
          delete data.administracion.consejoAdministrativo.otroPresidente;
          console.log(data);
        }}
      >
        {(formikProps) => (
          <Form>
            <section>
              <h3>Tipo de sociedad</h3>
              <label>
                Tipo de sociedad
                <Field as="select" name="tipoSociedad">
                  <option value="">Seleccione una opción</option>
                  <option value="S.A.C.V.">
                    Sociedad Anónima de Capital Variable (S.A. DE C.V.)
                  </option>
                  <option value="S.A.P.I.C.V.">
                    Sociedad Anónima Promotora de Inversión de Capital Variable
                    (S.A.P.I. DE C.V.)
                  </option>
                  <option value="S.C">Sociedad Civil (S.C)</option>
                </Field>
              </label>
              <ErrorMessage name="tipoSociedad" render={renderError} />
            </section>

            <section>
              <h3>Datos Generales</h3>
              <div>
                <h4>¿Cómo quieres que se llame tu empresa?</h4>
                <span>
                  Favor de mencionar tres opciones de denominaciones, en orden
                  de preferencia, para que verifiquemos la disponibilidad.
                </span>
                <div>
                  <label>
                    Opción 1
                    <Field type="text" name="nombresMarca.opcion1" />
                  </label>
                  <ErrorMessage
                    name="nombresMarca.opcion1"
                    render={renderError}
                  />
                </div>
                <div>
                  <label>
                    Opción 2
                    <Field type="text" name="nombresMarca.opcion2" />
                  </label>
                  <ErrorMessage
                    name="nombresMarca.opcion2"
                    render={renderError}
                  />
                </div>
                <div>
                  <label>
                    Opción 3
                    <Field type="text" name="nombresMarca.opcion3" />
                  </label>
                  <ErrorMessage
                    name="nombresMarca.opcion3"
                    render={renderError}
                  />
                </div>
              </div>
              <div>
                <label>
                  ¿A qué se dedicará tu empresa?*
                  <Field type="text" as="textarea" name="giro" />
                </label>
                <ErrorMessage name="giro" render={renderError} />
              </div>
            </section>

            <section>
              <h3>Socios</h3>
              <InputArraySocios formikProps={formikProps} />
            </section>

            <section>
              <h3>Domicilio Fiscal</h3>
              <span>
                Es el lugar físico en donde se establece la sociedad mercantil,
                con el fin de llevar a cabo el desempeño de sus funciones o bien
                en donde se tendrá su establecimiento principal
              </span>
              <div>
                <div>
                  <label>
                    Calle*
                    <Field
                      type="text"
                      name={`domicilio.calle`}
                      placeholder="Calle"
                    />
                  </label>
                  <ErrorMessage name={`domicilio.calle`} render={renderError} />
                </div>
                <div>
                  <label>
                    Número exterior*
                    <Field
                      type="text"
                      name={`domicilio.numeroExterior`}
                      placeholder="Número exterior"
                    />
                  </label>
                  <ErrorMessage
                    name={`domicilio.numeroExterior`}
                    render={renderError}
                  />
                </div>
                <div>
                  <label>
                    Número interior<span>(opcional)</span>
                    <Field
                      type="text"
                      name={`domicilio.numeroInterior`}
                      placeholder="Número interior"
                    />
                  </label>
                  <ErrorMessage
                    name={`domicilio.numeroInterior`}
                    render={renderError}
                  />
                </div>
                <div>
                  <label>
                    Colonia<span>(opcional)</span>
                    <Field
                      type="text"
                      name={`domicilio.colonia`}
                      placeholder="Colonia"
                    />
                  </label>
                  <ErrorMessage
                    name={`domicilio.colonia`}
                    render={renderError}
                  />
                </div>
                <div>
                  <label>
                    Alcaldia o Municipio*
                    <Field
                      type="text"
                      name={`domicilio.municipio`}
                      placeholder="Alcaldia o Municipio"
                    />
                  </label>
                  <ErrorMessage
                    name={`domicilio.municipio`}
                    render={renderError}
                  />
                </div>
                <div>
                  <label>
                    Estado*
                    <Field
                      type="text"
                      name={`domicilio.estado`}
                      placeholder="Estado"
                    />
                  </label>
                  <ErrorMessage
                    name={`domicilio.estado`}
                    render={renderError}
                  />
                </div>
                <div>
                  <label>
                    Código postal*
                    <Field
                      type="text"
                      name={`domicilio.codigoPostal`}
                      placeholder="Código postal"
                    />
                  </label>
                  <ErrorMessage
                    name={`domicilio.codigoPostal`}
                    render={renderError}
                  />
                </div>
              </div>
            </section>

            <InputAdministracion formikProps={formikProps} />

            <InputArchivos {...formikProps} />
            <div>
              <button type="submit">Enviar</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Sociedadform;
