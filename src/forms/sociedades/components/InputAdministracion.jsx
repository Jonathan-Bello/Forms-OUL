import { ErrorMessage, Field } from "formik";
import { useState } from "react";
import renderError from "../../utils/renderError";
import InputNombreData from "./InputNombreData";

const InputAdministracion = ({ formikProps }) => {
  const [otroValue, setOtroValue] = useState(false);

  return (
    <section>
      <h3>Administración</h3>
      <span>
        Este tipo de Sociedades requiere obligatoriamente de un Consejo de
        Administración.
      </span>
      <div>
        <label>
          ¿Cómo quieres que esté administrada tu sociedad?*
          <Field as="select" name="administracion.tipoAdministracion">
            <option value="">Seleccione una opción</option>
            <option value="Administrador único">Administrador Único</option>
            <option value="Consejo de Administración">
              Consejo de Administración
            </option>
          </Field>
        </label>
        <ErrorMessage
          name="administracion.tipoAdministracion"
          render={renderError}
        />
      </div>

      {formikProps.values.administracion.tipoAdministracion ===
        "Administrador único" && (
        <div>
          <label>
            ¿Quién es el administrador de la sociedad?*
            <Field
              as="select"
              name="administracion.administradorUnico"
              placeholder="Nombre del administrador"
            >
              <option value="">Seleccione una opción</option>
              {formikProps.values.socios.map((socio, index) => (
                <option
                  key={index}
                  value={JSON.stringify({
                    nombre: socio.nombre,
                    apellidoPaterno: socio.apellidoPaterno,
                    apellidoMaterno: socio.apellidoMaterno,
                  })}
                >
                  {socio.nombre} {socio.apellidoPaterno}
                </option>
              ))}
              <option value="Otro">Otro</option>
            </Field>
            <ErrorMessage name="administracion.administradorUnico" />
            <div>
              {formikProps.values.administracion.administradorUnico ===
                "Otro" && (
                <InputNombreData
                  namegroup="administracion.otroAdministrador"
                  isRequired={true}
                />
              )}
            </div>
          </label>
        </div>
      )}

      {formikProps.values.administracion.tipoAdministracion ===
        "Consejo de Administración" && (
        <div>
          <label>
            Presidente
            <Field
              as="select"
              placeholder="Nombre del presidente"
              name="administracion.consejoAdministrativo.presidente"
            >
              <option value="">Seleccione una opción</option>
              {formikProps.values.socios.map((socio, index) => (
                <option
                  key={index}
                  value={JSON.stringify({
                    nombre: socio.nombre,
                    apellidoPaterno: socio.apellidoPaterno,
                    apellidoMaterno: socio.apellidoMaterno,
                  })}
                >
                  {socio.nombre} {socio.apellidoPaterno}
                </option>
              ))}
              <option value="Otro">Otro</option>
            </Field>
          </label>
          <ErrorMessage
            name="administracion.consejoAdministrativo.presidente"
            render={renderError}
          />
          {formikProps.values.administracion.consejoAdministrativo
            .presidente === "Otro" && (
            <InputNombreData
              namegroup={"administracion.consejoAdministrativo.otroPresidente"}
              isRequired={true}
            />
          )}
        </div>
      )}

      <div>
        <label>¿Quién será el comisario de la sociedad?(Opcional)</label>
        <InputNombreData
          namegroup="administracion.comisario"
          isRequired={false}
        />
      </div>
    </section>
  );
};

export default InputAdministracion;
