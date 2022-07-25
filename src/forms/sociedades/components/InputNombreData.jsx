import { Field, ErrorMessage } from "formik";
import renderError from "../../utils/renderError";

const InputNombreData = ({ namegroup, isRequired }) => {
  return (
    <>
      <div>
        <label>
          Nombre{isRequired && "*"}
          <Field
            type="text"
            name={`${namegroup}.nombre`}
            placeholder="Nombre"
          />
        </label>
        <ErrorMessage name={`${namegroup}.nombre`} render={renderError} />
      </div>
      <div>
        <label>
          Apellido Paterno{isRequired && "*"}
          <Field
            type="text"
            name={`${namegroup}.apellidoPaterno`}
            placeholder="Apellido Paterno"
          />
        </label>
        <ErrorMessage
          name={`${namegroup}.apellidoPaterno`}
          render={renderError}
        />
      </div>
      <div>
        <label>
          Apellido Materno
          <Field
            type="text"
            name={`${namegroup}.apellidoMaterno`}
            placeholder="Apellido Materno"
          />
        </label>
        <ErrorMessage
          name={`${namegroup}.apellidoMaterno`}
          render={renderError}
        />
      </div>
    </>
  );
};

export default InputNombreData;
