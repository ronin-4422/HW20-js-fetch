let listArea = document.getElementById('albumsList');
let photosArea = document.getElementById('pictures');
let ul = document.getElementById('listSpace');
let li = document.createElement('li');
let albumIdx;
let photosLink = 'https://jsonplaceholder.typicode.com/photos?albumId=id';
let fullLink;

function initFetch(fullLink) {
  fetch(fullLink).then((data) => {
    console.log(data);
    return data.json();
  }).then((data) => {
    photosArea.innerHTML = data.map((pictures) => {
      let img = `<img src=${pictures.url}/>`;
      return img;
    })
  })
};

let albums = fetch('https://jsonplaceholder.typicode.com/albums')
.then ((data) => {
  console.log(data);
  return data.json();
})
.then((data) =>{
  ul.innerHTML = data.map((album) =>{
    li = `<li>${album.title}</li>`;
    return li;
  }).join('');
  initFetch('https://jsonplaceholder.typicode.com/photos?albumId=1');
  ul.addEventListener('click', (e) => {
    e.preventDefault();
    let element = data.find((album) => album.title === e.target.textContent);
    albumIdx = element.Id;
    console.log(albumIdx);
    fullLink = photosLink + albumIdx;

    initFetch(fullLink);
  })
})

// fetch('https://jsonplaceholder.typicode.com/albums')
//   .then(r => r.json())
//   .then(r => {
//     const list = document.createElement('div');
//     list.innerHTML = r.map(n => `
//       <div class="item">
//         <div>UserId: ${n.userId}</div>
//         <div>Id: ${n.id}</div>
//         <div>Title: ${n.title}</div>
//       </div>
//     `).join('');
//     document.body.append(list);
//   });

