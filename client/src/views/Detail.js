import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

function POKEMON(name) {
  const query = gql`
  {
    pokemon(name:"${name}") {
      id
      number
      name
      image
      types
      height {
        minimum
        maximum
      }
      weight {
        minimum
        maximum
      }
      evolutions {
        name
      }
    }
  }
`;
  return query;
}

function Detail() {
  let { name } = useParams();
  console.log(name);
  const { loading, error, data } = useQuery(POKEMON(name));
  console.log(data);
  if (data) {
    const { image } = data.pokemon;
  }
  return (
    <>
      <div className='submenu'>
        <Link to='/pokedex'>{`< Back`}</Link>
      </div>
      <div>
        {loading ? (
          <p>Loading</p>
        ) : (
          <div className='detail'>
            <div className='detail__card'>
              <div className='detail__image'>
                <img src={data.pokemon.image} />
              </div>
            </div>
            <div className='table'>
              <div className='table__row table__row--head'>
                <div className='table__item'>{data.pokemon.name}</div>
                <div className='table__item'>No.{data.pokemon.number}</div>
              </div>
              <div className='table__row'>
                <div className='table__item'>Type</div>
                <div className='table__item'>{data.pokemon.types}</div>
              </div>
              <div className='table__row'>
                <div className='table__item'>Height</div>
                <div className='table__item'>{data.pokemon.height.minimum}</div>
              </div>
              <div className='table__row'>
                <div className='table__item'>Weight</div>
                <div className='table__item'>{data.pokemon.weight.minimum}</div>
              </div>
              <div className='table__row'>
                <div className='table__item'>Evolutions</div>
              </div>
              {data.pokemon.evolutions && (
                <div className='table__row'>
                  <div className='table__item'>
                    <ul className='table__list'>
                      {data.pokemon.evolutions.map((evo) => (
                        <li key={evo.name}>{evo.name}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Detail;
