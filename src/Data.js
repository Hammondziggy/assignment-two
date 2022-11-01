import React from 'react'

const data = ({data, loading}) => {
  if(loading) {
    return <h2>loading...</h2>;
  }
  return (
    <ul className ="list-group mb-4">
      {data.map(data => {
      <li key ={data.id} className ="list-group-item">{data.title}
      </li>
      })}
    </ul>
  );
};