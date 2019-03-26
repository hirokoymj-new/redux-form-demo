import { compose, lifecycle, withHandlers, withProps } from 'recompose';

const submit = (values)=>{
  console.log('submit')
  console.log("values", values);
  alert(values);
  //Save database
  //axios('http://www.example.com', data);
}

const withSubmit = withHandlers({
  mySubmit: (props) => (values)=>{
    submit(values);
  }
});

export default withSubmit;
