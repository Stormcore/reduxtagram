import React from 'react'
import {Link} from 'react-router'
import CSSTransitionGroup from 'react-addons-css-transition-group'

const Photo = React.createClass({
  render () {
    const {post, i, comments} = this.props
    return (
      <figure className='grid-figure'>
        <div className='grid-photo-wrap'>
          <Link to={`/view/${post.code}`}>
            <img src={post.display_src} className='grid-photo' />
          </Link>
          <CSSTransitionGroup transitionName='like'
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
            <span key={post.likes} className='likes-heart'>
              {post.likes}
            </span>
          </CSSTransitionGroup>
        </div>
      </figure>
    )
  }
})

export default Photo
