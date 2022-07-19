import { Field, FieldArray, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import renderError from "../utils/renderError";

const Sociedadform = () => {
  const initialValues = {
    tipoSociedad: "",

  }

  return (
    <div>
      <h1>Constitución de Sociedades</h1>

      <Formik>
        <Form>
          <section>
            <h3>Tipo de sociedad</h3>
            
          </section>
        </Form>
      </Formik>
    </div>
  );
};

export default Sociedadform;
