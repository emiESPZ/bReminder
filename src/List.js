import React from 'react';

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article className='person' key={id}>
            <img src={image} alt={name}></img>
            <div>
              <h4>Name: {name}</h4>
              <p>Age: {age}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};
export default List;
