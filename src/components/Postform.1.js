import React, { Component } from 'react'

class Postform extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            body: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }
    onSubmit(e){
        e.preventDefault();

        const post = {
            title : this.state.title,
            body : this.state.body
        };
        fetch('https://jsonplaceholder.typicode.com/posts',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(post)
        })
        .then(res => res.json())
        .then(data => console.log(data));
    }
  render() {
    return (
      <div>
          <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
            <div className="form-list">
                <label className="lab">Title:</label>
                <br/>
                <input type="text" name="title" onChange={this.onChange} value={this.state.title} />
            </div>
            <br/>
            <div className="form-list">
                <label className="lab">Body:</label>
                <br/>
                <textarea name="body" value={this.state.body} onChange={this.onChange} cols="60" rows="10"></textarea>                           
            </div>
            <br/>
            <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
export default Postform;