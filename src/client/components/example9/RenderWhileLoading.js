import React from 'react';
import { branch, renderComponent } from "recompose";

const LoadingPlaceholder = () =>{
  return (
    <div>...loading</div>
  )
}

const renderWhileLoading = (propName = 'data') =>
  branch(
    props => props[propName] && props[propName].loading,
    renderComponent(LoadingPlaceholder),
  );
export default renderWhileLoading;  


//https://www.apollographql.com/docs/react/react-apollo-migration.html
