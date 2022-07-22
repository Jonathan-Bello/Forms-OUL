import { ErrorMessage, Field } from "formik";
import renderError from "../../utils/renderError";

const InputAdministracion = ({ formikProps }) => {
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
                <option key={index} value={socio.nombre}>
                  {socio.nombre} {socio.apellidoPaterno}
                </option>
              ))}
              <option value="Otro">Otro</option>
            </Field>
            <ErrorMessage name="administracion.administradorUnico" />
            <div>
              {formikProps.values.administracion.administradorUnico ===
                "Otro" && (
                <>
                  <div>
                    <label>
                      Nombre*
                      <Field
                        type="text"
                        name="administracion.otroAdministrador.nombre"
                        placeholder="Nombre"
                      />
                    </label>
                    <ErrorMessage
                      name="administracion.otroAdministrador.nombre"
                      render={renderError}
                    />
                  </div>

                  <div>
                    <label>
                      Apellido Paterno*
                      <Field
                        type="text"
                        name="administracion.otroAdministrador.apellidoPaterno"
                        placeholder="Apellido Paterno"
                      />
                    </label>
                    <ErrorMessage
                      name="administracion.otroAdministrador.apellidoPaterno"
                      render={renderError}
                    />
                  </div>

                  <div>
                    <label>
                      Apellido Materno*
                      <Field
                        type="text"
                        name="administracion.otroAdministrador.apellidoMaterno"
                        placeholder="Apellido Materno"
                      />
                    </label>
                    <ErrorMessage
                      name="administracion.otroAdministrador.apellidoMaterno"
                      render={renderError}
                    />
                  </div>
                </>
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
        </div>
      )}
      <div>
        <label>¿Quién será el comisario de la sociedad?(Opcional)</label>
        <div>
          <label>
            Nombre
            <Field type="text" name="administracion.comisario.nombre" />
          </label>
          <ErrorMessage
            name="administracion.comisario.nombre"
            render={renderError}
          />
        </div>
        <div>
          <label>
            Apellido paterno
            <Field
              type="text"
              name="administracion.comisario.apellidoPaterno"
            />
          </label>
          <ErrorMessage
            name="administracion.comisario.apellidoPaterno"
            render={renderError}
          />
        </div>
        <div>
          <label>
            Apellido materno
            <Field
              type="text"
              name="administracion.comisario.apellidoMaterno"
            />
          </label>
          <ErrorMessage
            name="administracion.comisario.apellidoMaterno"
            render={renderError}
          />
        </div>
      </div>
    </section>
  );
};

export default InputAdministracion;
