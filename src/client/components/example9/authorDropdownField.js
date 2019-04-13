import React from 'react';


export const authorDropdownField = ({ label, input, authors, meta }) => {
  //console.log("field", field);
  return (
    <div className="form-group">
      <label>{label}</label>
      <select {...input} className="form-control">
        <option value="">Select author</option>
        {authors.map(author => 
          <option key={author.id} value={author.id}>{author.name}</option>        
          )
        }
      </select>
      {meta.touched && meta.error &&
      <span className="error">{meta.error}</span>}
  </div>
  )
}