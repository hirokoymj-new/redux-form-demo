import React from 'react';


export const bookDropdownField = ({ label, input, books, meta }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <select {...input} className="form-control">
        <option value="">Select book</option>
        {books.map(book => 
          <option key={book.id} value={book.id}>{book.name}</option>        
          )
        }
      </select>
      {meta.touched && meta.error &&
      <span className="error">{meta.error}</span>}
  </div>
  )
}
