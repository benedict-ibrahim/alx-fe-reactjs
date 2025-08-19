import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/formikForm';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="form-container">
        <h1>Controlled Component Form</h1>
        <RegistrationForm />
      </div>
      
      <div className="form-container">
        <h1>Formik Form</h1>
        <FormikForm />
      </div>
    </div>
  );
}

export default App;