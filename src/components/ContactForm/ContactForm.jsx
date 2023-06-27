// import { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from 'components/ui';
import { StyledForm, Label, Input, Error } from './ContactForm.styled';

const schema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required('Name is required'),
  number: Yup.string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Number is required'),
});

// !=====functional component

export const ContactForm = ({ onSubmit }) => {
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    await onSubmit(values.name, values.number);
    setSubmitting(false);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <StyledForm>
          <Label htmlFor="name">
            Name
            <Field
              type="text"
              name="name"
              as={Input}
              placeholder="Enter name"
            />
            <ErrorMessage name="name" component={Error} />
          </Label>
          <Label htmlFor="number">
            Number
            <Field
              type="text"
              name="number"
              as={Input}
              placeholder="Enter number"
            />
            <ErrorMessage name="number" component={Error} />
          </Label>
          <Button type="submit" disabled={isSubmitting}>
            Add contact
          </Button>
        </StyledForm>
      )}
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

// !====class

// export class ContactForm extends Component {
//   static propTypes = {
//     onSubmit: PropTypes.func.isRequired,
//   };

//   state = {
//     name: '',
//     number: '',
//   };

//   handleSubmit = (values, { resetForm }) => {
//     const { onSubmit } = this.props;

//     onSubmit(values.name, values.number);
//     resetForm();
//   };

//   render() {
//     return (
//       <Formik
//         initialValues={{ name: '', number: '' }}
//         validationSchema={schema}
//         onSubmit={this.handleSubmit}
//       >
//         <StyledForm>
//           <Label htmlFor="name">
//             Name
//             <Field
//               type="text"
//               name="name"
//               as={Input}
//               placeholder="Enter name"
//             />
//             <ErrorMessage name="name" component={Error} />
//           </Label>
//           <Label htmlFor="number">
//             Number
//             <Field
//               type="text"
//               name="number"
//               as={Input}
//               placeholder="Enter number"
//             />
//             <ErrorMessage name="number" component={Error} />
//           </Label>
//           <Button type="submit">Add contact</Button>
//         </StyledForm>
//       </Formik>
//     );
//   }
// }
