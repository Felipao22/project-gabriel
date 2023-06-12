// import { Formik } from 'formik';

// export const Contacto = () => {
//   const validarNumero = (event) => {
//     event.target.value = event.target.value.replace(/[^\d+]/g, '');
//   };

//   return(
// <>
//  <section className="bg-gradient-to-tr from-custom-gradient-35 via-custom-gradient-51 to-custom-gradient-0">
//   <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
//       <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white dark:text-white">Contacto</h2>
//       <p className="mb-8 lg:mb-16 font-light text-center text-white sm:text-xl">Escríbeme para cualquier tipo de duda.</p>
//       <Formik
//        initialValues={{ email: '', name: '', number: '', message: '' }}
//        validate={values => {
//         const errors = {};
//         if (!values.email) {
//           errors.email = 'Required';
//         } else if (
//           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//         ) {
//           errors.email = 'Invalid email address';
//         }
//         return errors;
//       }}
//       onSubmit={(values, { setSubmitting }) => {
//         setTimeout(() => {
//           alert(JSON.stringify(values, null, 2));
//           setSubmitting(false);
//         }, 400);
//       }}
//     >
//       {({
//         values,
//         errors,
//         touched,
//         handleChange,
//         handleBlur,
//         handleSubmit,
//         isSubmitting,
//         /* and other goodies */
//       }) => (
//         <form onSubmit={handleSubmit} className="space-y-8">
//           <div>
//               <label  className="block mb-2 text-sm font-medium text-white">Tú nombre</label>
//               <input type="name"  
//             value={values.name} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Gabriel Furik" required />
//           {errors.name && touched.name && errors.name}
//           </div>
//           <div>
//               <label  className="block mb-2 text-sm font-medium text-white">Tú email</label>
//               <input type="email" 
//             value={values.email} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="email@site.com" required />
//           {errors.email && touched.email && errors.email}
//           </div>
//           <div>
//               <label className="block mb-2 text-sm font-medium text-white">Tú número</label>
//               <input type="text" onInput={validarNumero}  
//             value={values.number} inputMode="numeric" pattern="[0-9]+" name="number" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border appearance-none border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="3514553749" required />
//           {errors.number && touched.number && errors.number}
//           </div>
//           <div className="sm:col-span-2">
//               <label  className="block mb-2 text-sm font-medium text-white">Tú mensaje</label>
//               <textarea rows="6"  
//             value={values.message} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Deje su mensaje..."></textarea>
//           {errors.message && touched.message && errors.message}
//           </div>
//           <button type="submit" disabled={isSubmitting} className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-secondary sm:w-fit hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
//             Enviar mensaje
//             </button>
//           <button type="submit" disabled={isSubmitting}>
//             Submit
//           </button>
//         </form>
//       )}
//      </Formik>
//      </div>
//     </section>
//     </>
// );
//       }
 

// import React, { useState } from 'react';
// import { Formik } from 'formik';

// export const Contacto = () => {
//   const [formValues, setFormValues] = useState({
//     email: '',
//     name: '',
//     number: '',
//     message: ''
//   });

//   const validarNumero = (event) => {
//     event.target.value = event.target.value.replace(/[^\d+]/g, '');
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormValues((prevValues) => ({
//       ...prevValues,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (values, { setSubmitting }) => {
//     setTimeout(() => {
//       alert(JSON.stringify(values, null, 2));
//       setSubmitting(false);
//     }, 400);
//   };

//   return (
//     <>
//       <section className="bg-gradient-to-tr from-custom-gradient-35 via-custom-gradient-51 to-custom-gradient-0">
//         <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
//           <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white dark:text-white">Contacto</h2>
//           <p className="mb-8 lg:mb-16 font-light text-center text-white sm:text-xl">Escríbeme para cualquier tipo de duda.</p>
//           <Formik
//             initialValues={formValues}
//             onSubmit={handleSubmit}
//           >
//             {({ values, errors, touched, handleSubmit, isSubmitting }) => (
//               <form onSubmit={handleSubmit} className="space-y-8">
//                 <div>
//                   <label className="block mb-2 text-sm font-medium text-white">Tú nombre</label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={values.name}
//                     onChange={handleChange}
//                     className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
//                     placeholder="Gabriel Furik"
//                     required
//                   />
//                   {errors.name && touched.name && errors.name}
//                 </div>
//                 <div>
//                   <label className="block mb-2 text-sm font-medium text-white">Tú email</label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={values.email}
//                     onChange={handleChange}
//                     className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
//                     placeholder="email@site.com"
//                     required
//                   />
//                   {errors.email && touched.email && errors.email}
//                 </div>
//                 <div>
//                   <label className="block mb-2 text-sm font-medium text-white">Tú número</label>
//                   <input
//                     type="text"
//                     name="number"
//                     value={values.number}
//                     onChange={handleChange}
//                     onInput={validarNumero}
//                     className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border appearance-none border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
//                     placeholder="3514553749"
//                     required
//                   />
//                   {errors.number && touched.number && errors.number}
//                 </div>
//                 <div className="sm:col-span-2">
//                   <label className="block mb-2 text-sm font-medium text-white">Tú mensaje</label>
//                   <textarea
//                     rows="6"
//                     name="message"
//                     value={values.message}
//                     onChange={handleChange}
//                     className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//                     placeholder="Deje su mensaje..."
//                   ></textarea>
//                   {errors.message && touched.message && errors.message}
//                 </div>
//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-secondary sm:w-fit hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
//                 >
//                   Enviar mensaje
//                 </button>
//               </form>
//             )}
//           </Formik>
//         </div>
//       </section>
//     </>
//   );
// };


import { Formik, Field, ErrorMessage } from 'formik';

export const Contacto = () => {
  const validarNumero = (event) => {
    event.target.value = event.target.value.replace(/[^\d+]/g, '');
  };

  const handleSubmit = (values, { setSubmitting }, e) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
    e.target.reset()
  };

  return (
    <>
      <section className="bg-gradient-to-tr from-custom-gradient-35 via-custom-gradient-51 to-custom-gradient-0">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white dark:text-white">Contacto</h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-white sm:text-xl">Escríbeme para cualquier tipo de duda.</p>
          <Formik
            initialValues={{ email: '', name: '', number: '', message: '' }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = 'Requerido';
              } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = 'Email incorrecto';
              }
              if (!values.name) {
                errors.name = 'Requerido';
              }
              if (!values.number) {
                errors.number = 'Requerido';
              }
              if (!values.message) {
                errors.message = 'Requerido';
              }
              return errors;
            }}
            onSubmit={handleSubmit}
          >
            {({ handleSubmit, isValid, isSubmitting }) => (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label className="block mb-2 text-sm font-medium text-white">Tú nombre</label>
                  <Field
                    type="text"
                    name="name"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Gabriel Furik"
                    
                  />
                  <ErrorMessage name="name" component="div" className="text-red-500" />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-white">Tú email</label>
                  <Field
                    type="email"
                    name="email"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="email@site.com"
                    
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500" />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-white">Tú número</label>
                  <Field
                    type="number"
                    name="number"
                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border appearance-none border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="3514553749"
                    
                    onInput={validarNumero}
                  />
                  <ErrorMessage name="number" component="div" className="text-red-500" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block mb-2 text-sm font-medium text-white">Tú mensaje</label>
                  <Field
                    as="textarea"
                    rows="6"
                    name="message"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Deje su mensaje..."
                    
                  />
                  <ErrorMessage name="message" component="div" className="text-red-500" />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting || !isValid}
                  className={`py-3 px-5 text-sm font-medium text-center rounded-lg text-white ${
                    isValid ? 'bg-secondary hover:bg-primary focus:ring-4 focus:outline-none cursor-pointer' : 'bg-gray-400'
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

