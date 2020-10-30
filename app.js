'use strict'

var divAlbumes = document.querySelector("#albumes")
var listAlbum = []

fetch('https://jsonplaceholder.typicode.com/photos')
  .then(data => data.json())
  .then(albumes => {
    listAlbum = albumes.data
    console.log(listAlbum)


    listAlbum.map((album, i) => {
      let title = document.createElement('h2')

      title.innerHTML = i + album.title

      divAlbumes.appendChild(title)
    })
  })