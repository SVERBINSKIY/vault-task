import React from 'react';

export const ReadOnlyRow = ({row, handleEditClick, handleDeleteRow}) => {
  return (
    <tr>
      {Object.keys(row).map((el) => (
        <td key={row[el]}>{row[el]}</td>
      ))}
      <td className="editable-table__actions">
        <button
          type="button"
          onClick={() => handleEditClick(row)}
        >
          Edit
        </button>
        <button
          type="button"
          onClick={() => handleDeleteRow(row)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export const EditableRow = ({ row, handleCancelClick, handleSaveClick, handleEditFormChange}) => {
  return (
    <tr>
      {Object.keys(row).map((el) => (
        <td key={row[el]}>
          <input
            type="text"
            name={el}
            placeholder="Enter value..."
            defaultValue={row[el]}
            onChange={(event => handleEditFormChange(event))}
            required
          />
        </td>
      ))}
      <td className="editable-table__actions">
        <button type="button" onClick={() => handleCancelClick()}>Cancel</button>
        <button type="button" onClick={() => handleSaveClick()}>Save</button>
      </td>
    </tr>
  );
}

