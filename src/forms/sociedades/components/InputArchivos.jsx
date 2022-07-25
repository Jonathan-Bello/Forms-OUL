import { ErrorMessage, Field } from "formik";
import renderError from "../../utils/renderError";
const InputArchivos = ({ values }) => {
  return (
    <section>
      <h3>Archivos</h3>

      {/* {values.socios.map((socio, index) => (
        <div key={index}>
          <h4>Socio {socio.nombre}</h4>
        </div>
      ))} */}

      {values.socios
        .filter((socio) => socio.tipoSocio === "Fisica")
        .map((socio, index) => (
          <div key={index}>
            <h4>Socio {socio.nombre}</h4>
            <Field type="hideen" />
            <label>
              Documento de identidad*
              <Field
                type="file"
                name={`archivos[${index}].socio[${index}].documentoIdentidad`}
                placeholder="Documento de identidad"
              />
              <ErrorMessage
                name={`archivos[${index}].documentoIdentidad`}
                render={renderError}
              />
            </label>
          </div>
        ))}
    </section>
  );
};

export default InputArchivos;
