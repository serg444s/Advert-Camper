import css from "./CamperForm.module.css"
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';



const CamperForm = () => { 

    const validationSchema = Yup.object().shape({
        name: Yup.string()
          .required('Name is required')
          .min(2, 'Name must be at least 2 characters long'),
        email: Yup.string()
          .required('Email is required')
          .email('Invalid email address'),
        bookingDate: Yup.date()
          .required('Booking date is required')
          .min(new Date(), 'Booking date cannot be in the past'),
        comment: Yup.string(),
      });

    return (<div className={css.container}>
        <h3 className={css.title}>Book your campervan now</h3>
        <p className={css.text}>Stay connected! We are always ready to help you.</p>

        <Formik
        initialValues={{ name: '', email: '', bookingDate: '', comment: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          // Эмуляция отправки формы
          setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            setSubmitting(false);
            window.location.reload(); // Обновление страницы после отправки формы
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className={css.form}>
            <div>
              <Field type="text" name="name" placeholder="Name" className={css.input}/>
              <ErrorMessage name="name" as="span" style={{ color: 'red' }} />
            </div>
  
            <div>
              <Field type="email" name="email" placeholder="Email" className={css.input}/>
              <ErrorMessage name="email" as="span" style={{ color: 'red' }} />
            </div>
  
            <div>
              <Field type="date" name="bookingDate" placeholder="Booking date" className={css.input}/>
              <ErrorMessage name="bookingDate" as="span" style={{ color: 'red' }} />
            </div>
  
            <div>
              <Field as="textarea" name="comment" placeholder="Comment" className={css.textarea}/>
            </div>
  
            <button type="submit" disabled={isSubmitting} className={css.btn}>
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
    
    )
}
export default CamperForm;