import React, {Component} from 'react';

class AddPhoto extends Component {
  
  handleSubmit(e) {
    e.preventDefault();
    
    const imageLink = e.target.elements.Link.value;
    const description = e.target.elements.Description.value;
    const post = {
      id: Number(new Date()),
      description,
      imageLink
    }
    
    if(description && imageLink) {
      this.props.addPost(post);
      this.props.history.push('/');
    }
  }
  
  render() {
    return (
      <div>
        <div className='form'>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input type='text' placeholder='Link' name='Link' />
            <input type='text' placeholder='Description' name='Description' />
            <button>Post</button>
          </form>
        </div>
      </div>
    )
  }
}
export default AddPhoto;