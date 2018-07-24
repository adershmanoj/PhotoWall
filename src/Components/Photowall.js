import React from 'react';
import PropTypes from 'prop-types'; 
import {Link} from 'react-router-dom'

import Photo from './Photo'; 

const PhotoWall = props => {
  return (
      <div>
        <Link onClick={props.onNavigate} to="/AddPhoto" className='addIcon'></Link>
        <div className="photoGrid">
          {props.posts.sort((x,y) => y.id - x.id ).map((post) => <Photo key={post.id} post={post} {...props} index={post.id} />)}
        </div>
      </div>
      )
};

PhotoWall.propTypes = {
  posts: PropTypes.array.isRequired,
}

export default PhotoWall;