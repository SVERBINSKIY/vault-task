import React, {useState} from 'react';

import {EditableRow, ReadOnlyRow} from './Row';

import './index.scss';

const Table = ({headers, data, editProductHandler, deleteProductHandler}) => {
  const [editRowId, setEditRowId] = useState(null);
  const [editFormData, setEditFormData] = useState({});

  const handleEditClick = (row) => {
    setEditRowId(row.id);
    setEditFormData(row);
  }
  const handleCancelClick = () => {
    setEditRowId(null);
  }
  const handleSaveClick = () => {
    editProductHandler(editFormData);
    setEditRowId(null);
  }
  const handleEditFormChange = (event) => {
    event.preventDefault();

    const newFormData = {...editFormData};
    newFormData[event.target.getAttribute('name')] = event.target.value;

    setEditFormData(newFormData);
  }
  const handleDeleteRow = (row) => {
    deleteProductHandler(row);
  }

  return (
    <form>
      <table className="editable-table">
        <thead>
        <tr>
          {headers.map((header) => <th key={header.name}>{header.name}</th>)}
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        {data.map((row) => (
          <>
            {editRowId === row.id ? (
              <EditableRow
                row={row}
                key={row.id}
                handleCancelClick={handleCancelClick}
                handleSaveClick={handleSaveClick}
                handleEditFormChange={handleEditFormChange}
              />
            ) : (
              <ReadOnlyRow
                row={row}
                key={row.id}
                handleEditClick={handleEditClick}
                handleDeleteRow={handleDeleteRow}
              />
            )}
          </>
        ))}
        </tbody>
      </table>
    </form>
  );
}

export default Table;
