import { Field, FieldArray, ErrorMessage } from "formik";
import InputNationalidad from "./components/InputNationalidad";
import defaultTitular from "./models/titular";

const TitularesForm = ({ formikProps }) => {
  const renderError = (message) => <b>{message}</b>;

  const initialValuesTitular = defaultTitular;

  return (
    <FieldArray name="titulares">
      {(arrayHelpers) => (
        <div>
          {formikProps.values.titulares.length > 0 &&
            formikProps.values.titulares.map((titular, index) => (
              <div key={index}>
                <h4>Titular {index + 1}</h4>
                <div>
                  <label>
                    Tipo de titular
                    <Field
                      as="select"
                      name={`titulares[${index}].tipoTitular`}
                      placeholder="Titular"
                    >
                      <option value="Fisica">Persona</option>
                      <option value="Moral">Empresa</option>
                    </Field>
                  </label>
                  <ErrorMessage
                    name={`titulares[${index}].tipoTitular`}
                    render={renderError}
                  />
                </div>
                <div>
                  <label>
                    Nombre*
                    <Field
                      type="text"
                      name={`titulares[${index}].nombre`}
                      placeholder="Nombre"
                    />
                  </label>
                  <ErrorMessage
                    name={`titulares[${index}].nombre`}
                    render={renderError}
                  />
                </div>
                <div>
                  <label>
                    Apellido paterno*
                    <Field
                      type="text"
                      name={`titulares[${index}].apellidoPaterno`}
                      placeholder="Apellido paterno"
                    />
                  </label>
                  <ErrorMessage
                    name={`titulares[${index}].apellidoPaterno`}
                    render={renderError}
                  />
                </div>
                <div>
                  <label>
                    Apellido materno<span>(opcional)</span>
                    <Field
                      type="text"
                      name={`titulares[${index}].apellidoMaterno`}
                      placeholder="Apellido materno"
                    />
                  </label>
                  <ErrorMessage
                    name={`titulares[${index}].apellidoMaterno`}
                    render={renderError}
                  />
                </div>
                <div>
                  <label>
                    Nacionalidad
                    <InputNationalidad
                      name={`titulares[${index}].nacionalidad`}
                    />
                  </label>
                </div>
                <div>
                  <label>
                    Teléfono<span>(opcional)</span>
                    <Field
                      type="tel"
                      name={`titulares[${index}].telefono`}
                      placeholder="Teléfono"
                    />
                  </label>
                  <ErrorMessage
                    name={`titulares[${index}].telefono`}
                    render={renderError}
                  />
                </div>
                <div>
                  <label>
                    Correo Electrónico*
                    <Field
                      type="email"
                      name={`titulares[${index}].email`}
                      placeholder="ejemplo@email.com"
                    />
                  </label>
                  <ErrorMessage
                    name={`titulares[${index}].email`}
                    render={renderError}
                  />
                </div>
                <div>
                  <label>
                    ID
                    <Field
                      type="file"
                      name={`titulares[${index}].ID`}
                      placeholder="ID"
                    />
                  </label>
                  <ErrorMessage
                    name={`titulares[${index}].ID`}
                    render={renderError}
                  />
                </div>
                {/* Domicilio */}
                <div>
                  <h5>Domicilio</h5>
                  <div>
                    <label>
                      Calle*
                      <Field
                        type="text"
                        name={`titulares[${index}].domicilio.calle`}
                        placeholder="Calle"
                      />
                    </label>
                    <ErrorMessage
                      name={`titulares[${index}].domicilio.calle`}
                      render={renderError}
                    />
                  </div>
                  <div>
                    <label>
                      Número exterior*
                      <Field
                        type="text"
                        name={`titulares[${index}].domicilio.numeroExterior`}
                        placeholder="Número exterior"
                      />
                    </label>
                    <ErrorMessage
                      name={`titulares[${index}].domicilio.numeroExterior`}
                      render={renderError}
                    />
                  </div>
                  <div>
                    <label>
                      Número interior<span>(opcional)</span>
                      <Field
                        type="text"
                        name={`titulares[${index}].domicilio.numeroInterior`}
                        placeholder="Número interior"
                      />
                    </label>
                    <ErrorMessage
                      name={`titulares[${index}].domicilio.numeroInterior`}
                      render={renderError}
                    />
                  </div>
                  <div>
                    <label>
                      Colonia<span>(opcional)</span>
                      <Field
                        type="text"
                        name={`titulares[${index}].domicilio.colonia`}
                        placeholder="Colonia"
                      />
                    </label>
                    <ErrorMessage
                      name={`titulares[${index}].domicilio.colonia`}
                      render={renderError}
                    />
                  </div>
                  <div>
                    <label>
                      Alcaldia o Municipio*
                      <Field
                        type="text"
                        name={`titulares[${index}].domicilio.municipio`}
                        placeholder="Alcaldia o Municipio"
                      />
                    </label>
                    <ErrorMessage
                      name={`titulares[${index}].domicilio.municipio`}
                      render={renderError}
                    />
                  </div>
                  <div>
                    <label>
                      Estado*
                      <Field
                        type="text"
                        name={`titulares[${index}].domicilio.estado`}
                        placeholder="Estado"
                      />
                    </label>
                    <ErrorMessage
                      name={`titulares[${index}].domicilio.estado`}
                      render={renderError}
                    />
                  </div>
                  <div>
                    <label>
                      Código postal*
                      <Field
                        type="text"
                        name={`titulares[${index}].domicilio.codigoPostal`}
                        placeholder="Código postal"
                      />
                    </label>
                    <ErrorMessage
                      name={`titulares[${index}].domicilio.codigoPostal`}
                      render={renderError}
                    />
                  </div>
                </div>
              </div>
            ))}
          <button
            type="button"
            onClick={() => arrayHelpers.push(initialValuesTitular)}
          >
            Agregar Titular
          </button>
          <button type="button" onClick={() => arrayHelpers.pop()}>
            Eliminar Titular
          </button>
        </div>
      )}
    </FieldArray>
  );
};

export default TitularesForm;
