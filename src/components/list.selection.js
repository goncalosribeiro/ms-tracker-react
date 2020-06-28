import React from 'react';

const ListSelection = props => {
  return (
    props.mode === 'movie' ? (<div className='search-type'>
      <div className='type' onClick={props.type}>POPULAR</div>
      <div className='type' onClick={props.type}>NOW PLAYING</div>
      <div className='type' onClick={props.type}>TOP RATED</div>
      <div className='type' onClick={props.type}>UPCOMING</div>
    </div>) :
      (<div className='search-type'>
        <div className='type' onClick={props.type}>POPULAR</div>
        <div className='type' onClick={props.type}>ON THE AIR</div>
        <div className='type' onClick={props.type}>AIRING TODAY</div>
        <div className='type' onClick={props.type}>TOP RATED</div>
      </div>)
  );
}

export default ListSelection;