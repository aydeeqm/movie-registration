import React from 'react';
import { ReactComponent as RemoveIcon } from '~assets/delete.svg';
import { ReactComponent as EditIcon } from '~assets/edit.svg';

const TableHeader = () => (
  <div className="table-header has-background-white-ter">
    <div className="sz-title has-text-grey"><span>Id</span></div>
    <div className="sz-title has-text-grey"><span>Nombre</span></div>
    <div className="sz-title has-text-grey"><span>F. publicación</span></div>
    <div className="sz-title has-text-grey"><span>Estado</span></div>
  </div>
);

const TableBody = ({ id, name, date, status, onDelete, onEdit, index }) => (
  <div className="table-body">
    <div>{id}</div>
    <div>{name}</div>
    <div>{date}</div>
    <div>{status ? 'Activo' : 'Inactivo'}</div>
    <div className="table__body-button">
      <button id={id} onClick={onEdit} data-id={index} ><EditIcon /></button>
      <button id={id} onClick={onDelete}><RemoveIcon /></button>
    </div>
  </div>
)

export const TableView = ({ movies, onDelete, onEdit }) => (
  <div>
    <TableHeader />
    {movies.length > 0 && movies.map((movie, index) =>
      <TableBody
        key={movie.id}
        id={movie.id}
        index={index}
        name={movie.name}
        date={movie.date}
        status={movie.status}
        onDelete={onDelete}
        onEdit={onEdit}
      />)
    }
  </div>
)

