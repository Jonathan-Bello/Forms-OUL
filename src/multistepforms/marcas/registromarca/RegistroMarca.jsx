import { useState } from "react";
import { Formik, Form } from "formik";
import Input1 from "./formSections/Input1";
import Input2 from "./formSections/Input2";
import validationSchema from "./formModels/validationSchema";

const RegistroMarca = () => {
  const steps = ["Input1", "Input2"];
  const [activeStep, setActiveStep] = useState(0);
  const isLastStep = activeStep === steps.length - 1;

  const handleSubmit = (values, actions) => {
    if (isLastStep) {
      submitForm(values, actions);
    } else {
      console.log("incre");
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  };

  const submitForm = (values, actions) => {
    // TODO: Aqui agrega peticiones a firebase
    console.log(values);
    actions.setSubmitting(false);
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => setActiveStep(activeStep - 1);

  const renderStep = (step) => {
    switch (step) {
      case 0:
        return <Input1 />;
      case 1:
        return <Input2 />;
      default:
        return <div>No hay pasos</div>;
    }
  };

  return (
    <div>
      <h1>Registro de Marca</h1>

      {activeStep === steps.length ? (
        <h1>Bob</h1>
      ) : (
        <Formik
          initialValues={{
            nombre: "",
            apellido: "",
          }}
          validationSchema={validationSchema[activeStep]}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              {renderStep(activeStep)}

              <div>
                {activeStep !== 0 && (
                  <button onClick={handleBack}>Atras</button>
                )}
                <button disabled={isSubmitting} type="submit">
                  {isLastStep ? "Verificar" : "Siguiente"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default RegistroMarca;
