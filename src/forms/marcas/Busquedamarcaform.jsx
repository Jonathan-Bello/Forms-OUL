import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import renderError from "../utils/renderError";

const Busquedamarcaform = () => {
  const initialValues = {
    solicitante: {
      nombre: "",
      apellidoPaterno: "",
      apellidoMaterno: "",
      telefono: "",
      email: "",
    },
    nombresMarca: {
      option1: "",
      option2: "",
      option3: "",
    },
    descripcion: "",
  };

  // TODO : Asignar maximos de caracteres
  const validationSchema = Yup.object({
    solicitante: Yup.object({
      nombre: Yup.string().required("El nombre es requerido"),
      apellidoPaterno: Yup.string().required(
        "El apellido paterno es requerido"
      ),
      apellidoMaterno: Yup.string(),
      telefono: Yup.number()
        .required("El teléfono es requerido")
        .typeError("El teléfono solo debe contener números"),
      email: Yup.string()
        .required("El email es requerido")
        .email("El email no es válido"),
    }),
    nombresMarca: Yup.object({
      option1: Yup.string().required("El nombre es requerido"),
      option2: Yup.string(),
      option3: Yup.string(),
    }),
    descripcion: Yup.string().required("La descripción es requerida"),
  });

  return (
    <div>
      <h1>Busquedamarcaform</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          console.log(values);
        }}
      >
        <Form>
          <h3>Información solicitante</h3>
          <div>
            <label>
              Nombre*
              <Field
                name="solicitante.nombre"
                type="text"
                placeholder="Nombre"
              />
            </label>
            <ErrorMessage name="solicitante.nombre" render={renderError} />
          </div>
          <div>
            <label>
              Apellido paterno*
              <Field
                name="solicitante.apellidoPaterno"
                type="text"
                placeholder="Apellido paterno"
              />
            </label>
            <ErrorMessage
              name="solicitante.apellidoPaterno"
              render={renderError}
            />
          </div>
          <div>
            <label>
              Apellido materno<span>(opcional)</span>
              <Field
                name="solicitante.apellidoMaterno"
                type="text"
                placeholder="Apellido materno"
              />
            </label>
            <ErrorMessage
              name="solicitante.apellidoMaterno"
              render={renderError}
            />
          </div>
          <div>
            <label>
              Teléfono*
              <Field
                name="solicitante.telefono"
                type="tel"
                placeholder="Teléfono"
              />
            </label>
            <ErrorMessage name="solicitante.telefono" render={renderError} />
          </div>
          <div>
            <label>
              Correo Electrónico*
              <Field
                name="solicitante.email"
                type="email"
                placeholder="ejemplo@email.com"
              />
            </label>
            <ErrorMessage name="solicitante.email" render={renderError} />
          </div>

          <section>
            <h4>Nombres de la marca</h4>
            <div>
              <label>
                opcion 1*
                <Field
                  name="nombresMarca.option1"
                  type="text"
                  placeholder="Opción 1"
                />
              </label>
              <ErrorMessage name="nombresMarca.option1" render={renderError} />
            </div>
            <div>
              <label>
                opcion 2<span>(opcional)</span>
                <Field
                  name="nombresMarca.option2"
                  type="text"
                  placeholder="Opción 2"
                />
              </label>
              <ErrorMessage name="nombresMarca.option2" render={renderError} />
            </div>
            <div>
              <label>
                opcion 3<span>(opcional)</span>
                <Field
                  name="nombresMarca.option3"
                  type="text"
                  placeholder="Opción 3"
                />
              </label>
              <ErrorMessage name="nombresMarca.option3" render={renderError} />
            </div>
          </section>

          <section>
            <label>
              Breve descripción de los productos y/o servicios para los que
              utilizarás tu marca.*
              <Field
                name="descripcion"
                type="text"
                as="textarea"
                placeholder="Descripción"
              />
            </label>
            <ErrorMessage name="descripcion" render={renderError} />
          </section>

          <button type="submit">Enviar</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Busquedamarcaform;
