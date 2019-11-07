import React from 'react';
import { movieList } from '~utils/constants'

const TableHeader = () => (
  <div>
    <div><span>id</span></div>
    <div><span>Nombre</span></div>
    <div><span>F. publicación</span></div>
    <div><span>Estado</span></div>
  </div>
);

const TableBody = ({ id, name, date, status }) => (
  <div>
    <div>{id}</div>
    <div>{name}</div>
    <div>{date}</div>
    <div>{status}</div>
    <div>
      <button>edit</button>
      <button>delete</button>
    </div>
  </div>
)

const renderTableBody = (movie =>
  <TableBody
    key={movie.id}
    id={movie.id}
    name={movie.name}
    date={movie.date}
    status={movie.status}
  />
)

export const TableView = () => (
  <div>
    <TableHeader />
    {movieList.map(renderTableBody)}
  </div>
)

