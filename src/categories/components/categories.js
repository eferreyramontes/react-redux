import React from 'react';
import Category from './category';
import './categories.css';
import Search from '../../widgets/containers/search';
import Media from '../../playlist/components/media';
import { toJS } from 'redux-immutable';

function Categories(props) {
  return (
    <div className="Categories">
      <Search />
      {
        props.search.map((item) =>{
          // Esto no es lo óptimo. deberíamos pasar cada una de
          // las propiedades en vez de usar toJS() porque está
          // creando un objeto por cada elemento. 
          // Lo ponemos a modo de ejemplo de esta función.
          return <Media openModal={props.handleOpenModal} {...item.toJS()} key={item.get('id')}/>
        })
      }
      {
        props.categories.map((item) =>{
          return (
            <Category
              key={item.get('id')}
              {...item.toJS()}
              handleOpenModal={props.handleOpenModal}
            />
          )
        })
      }
    </div>
  )
}

export default Categories
