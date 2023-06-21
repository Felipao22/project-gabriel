import { Formik, Field, ErrorMessage } from "formik";

export const Contacto = () => {
  const validarNumero = (event) => {
    event.target.value = event.target.value.replace(/[^\d+]/g, "");
  };

  const handleSubmit = (values, { setSubmitting }, e) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
    e.target.reset();
  };

  return (
    <>
      <section className="bg-gradient-to-tr from-custom-gradient-35 via-custom-gradient-51 to-custom-gradient-0">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white dark:text-white">
            Contacto
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-white sm:text-xl">
            Escríbeme para cualquier tipo de duda.
          </p>
          <Formik
            initialValues={{ email: "", name: "", number: "", message: "" }}
            validate={(values) => {
              const errors = {};
              const { email, name, number, message } = values;
              if (!email) {
                errors.email = "Email requerido";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Email incorrecto";
              }
              if (!name || !name.trim().length) {
                errors.name = "Nombre requerido";
              }
              if (!number) {
                errors.number = "Número requerido";
              }
              if (!message || !message.trim().length) {
                errors.message = "Mensaje requerido";
              }
              return errors;
            }}
            onSubmit={handleSubmit}
          >
            {({ handleSubmit, isValid, isSubmitting }) => (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label className="block mb-2 text-sm font-medium text-white">
                    Tú nombre
                  </label>
                  <Field
                    type="text"
                    name="name"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-customBlack text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Gabriel Furik"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-white">
                    Tú email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-customBlack text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="email@site.com"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-white">
                    Tú número
                  </label>
                  <Field
                    type="number"
                    name="number"
                    className="block p-3 w-full text-sm text-customBlack bg-gray-50 rounded-lg border appearance-none border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="3514553749"
                    onInput={validarNumero}
                  />
                  <ErrorMessage
                    name="number"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block mb-2 text-sm font-medium text-white">
                    Tú mensaje
                  </label>
                  <Field
                    as="textarea"
                    rows="6"
                    name="message"
                    className="block p-2.5 w-full text-sm text-customBlack bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Deje su mensaje..."
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting || !isValid}
                  className={`py-3 px-5 text-sm font-medium text-center rounded-lg text-white ${
                    isValid
                      ? "bg-secondary hover:bg-primary focus:ring-4 focus:outline-none cursor-pointer"
                      : "bg-gray-400 cursor-not-allowed"
                  } `}
                >
                  Enviar mensaje
                </button>
              </form>
            )}
          </Formik>
        </div>
      </section>
    </>
  );
};
