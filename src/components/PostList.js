import React, { Component } from 'react';

import './PostList.css';

import Post from './Post';

class PostList extends Component {

  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "https://picsum.photos/id/218/4752/3168.jpg"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe algum poema?",
        comments: [
          {
            id: 1,
            author: {
              name: "Noel Rosa",
              avatar: "https://i.picsum.photos/id/145/4288/2848.jpg"
            },
            content: "Mussum Ipsum, cacilds vidis litro abertis. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Si num tem leite então bota uma pinga aí cumpadi! Paisis, filhis, espiritis santis."
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "José da Silva",
          avatar: "https://i.picsum.photos/id/1062/5092/3395.jpg"
        },
        date: "10 Out 2019",
        content: "Quem terminou o desafio de introdução ao React?",
        comments: [
          {
            id: 1,
            author: {
              name: "Mateus Almeida",
              avatar: "https://i.picsum.photos/id/201/5184/3456.jpg"
            },
            content: "Eu!"
          },
          {
            id: 2,
            author: {
              name: "Júlia Juliana",
              avatar: "https://i.picsum.photos/id/1027/2848/4272.jpg"
            },
            content: "Já passei da parte dos posts."
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Renan Serafim",
          avatar: "https://i.picsum.photos/id/1005/5760/3840.jpg"
        },
        date: "02 Jan 2020",
        content: "Que dia bom para estudar React!",
        comments: [ ]
      }
    ]
  };

  render(){
    return (
      <div className="post-list">
        <div>
          {this.state.posts.map(
            post => (
              <Post key={post.id} post={post} />
            )
          )}
        </div>
      </div>
    )
  }
}

export default PostList;