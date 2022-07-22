import { Field, FieldArray, ErrorMessage } from "formik";
import defaultSocio from "../models/socio";
import renderError from "../../utils/renderError";
import InputNationalidad from "../../components/InputNationalidad";

const InputArraySocios = ({ formikProps }) => {
  return (
    <div>
      <FieldArray name="socios">
        {({ push, pop }) => (
          <div>
            {formikProps.values.socios.length > 0 &&
              formikProps.values.socios.map((socio, index) => (
                <div key={index}>
                  <h4>Socio {index + 1}</h4>
                  <div>
                    <label>
                      Tipo de socio
                      <Field
                        as="select"
                        name={`socios[${index}].tipoSocio`}
                        placeholder="Socio"
                      >
                        <option value="Fisica">Persona</option>
                        <option value="Moral">Empresa</option>
                      </Field>
                    </label>
                    <ErrorMessage
                      name={`socios[${index}].tipoSocio`}
                      render={renderError}
                    />
                  </div>
                  <div>
                    <label>
                      Nombre*
                      <Field
                        type="text"
                        name={`socios[${index}].nombre`}
                        placeholder="Nombre"
                      />
                    </label>
                    <ErrorMessage
                      name={`socios[${index}].nombre`}
                      render={renderError}
                    />
                  </div>
                  <div>
                    <label>
                      Apellido paterno*
                      <Field
                        type="text"
                        name={`socios[${index}].apellidoPaterno`}
                        placeholder="Apellido paterno"
                      />
                    </label>
                    <ErrorMessage
                      name={`socios[${index}].apellidoPaterno`}
                      render={renderError}
                    />
                  </div>
                  <div>
                    <label>
                      Apellido materno
                      <Field
                        type="text"
                        name={`socios[${index}].apellidoMaterno`}
                        placeholder="Apellido materno"
                      />
                    </label>
                    <ErrorMessage
                      name={`socios[${index}].apellidoMaterno`}
                      render={renderError}
                    />
                  </div>

                  <div>
                    <label>
                      Nacionalidad
                      <InputNationalidad
                        name={`socios[${index}].nacionalidad`}
                      />
                    </label>
                  </div>

                  <div>
                    <label>
                      Fecha de nacimiento*
                      <Field
                        type="date"
                        name={`socios[${index}].fechaNacimiento`}
                        placeholder="Fecha de nacimiento"
                      />
                    </label>
                    <ErrorMessage
                      name={`socios[${index}].fechaNacimiento`}
                      render={renderError}
                    />
                  </div>

                  <div>
                    <label>
                      Estado Civil
                      <Field
                        as="select"
                        name={`socios[${index}].estadoCivil`}
                        placeholder="Estado civil"
                      >
                        <option value="">Seleccione una opción</option>
                        <option value="Soltero">Soltero</option>
                        <option value="Casado">Casado</option>
                        <option value="Divorciado">Divorciado</option>
                        <option value="Viudo">Viudo</option>
                      </Field>
                    </label>
                    <ErrorMessage
                      name={`socios[${index}].estadoCivil`}
                      render={renderError}
                    />
                  </div>

                  <div>
                    <label>
                      Ocupación*
                      <Field
                        type="text"
                        name={`socios[${index}].ocupacion`}
                        placeholder="Ocupación"
                      />
                    </label>
                    <ErrorMessage
                      name={`socios[${index}].ocupacion`}
                      render={renderError}
                    />
                  </div>

                  <div>
                    <label>
                      CURP*
                      <Field
                        type="text"
                        name={`socios[${index}].curp`}
                        placeholder="CURP"
                      />
                    </label>
                    <ErrorMessage
                      name={`socios[${index}].curp`}
                      render={renderError}
                    />
                  </div>

                  <div>
                    <label>
                      RFC*
                      <Field
                        type="text"
                        name={`socios[${index}].rfc`}
                        placeholder="RFC"
                      />
                    </label>
                    <ErrorMessage
                      name={`socios[${index}].rfc`}
                      render={renderError}
                    />
                  </div>

                  <div>
                    <label>
                      Porcentaje*
                      <Field
                        type="number"
                        name={`socios[${index}].porcentaje`}
                        placeholder="%"
                        min={0}
                        max={100}
                      />
                    </label>
                    <ErrorMessage
                      name={`socios[${index}].porcentaje`}
                      render={renderError}
                    />
                  </div>
                </div>
              ))}

            <button type="button" onClick={() => push(defaultSocio)}>
              Agregar Socio
            </button>
            <button type="button" onClick={() => pop()}>
              Eliminar Socio
            </button>
          </div>
        )}
      </FieldArray>
    </div>
  );
};

export default InputArraySocios;
