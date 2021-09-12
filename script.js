let imgList = document.getElementById('container-img__list')
let albumsList = document.getElementById('container-albums__list');

async function getAlbumsList() {
  let responseList = await fetch('http://jsonplaceholder.typicode.com/albums')
  let resultAlbumsList = await responseList.json();
  albumsList.innerHTML = resultAlbumsList.map((data) => {
    return `<li value="${data.id}"> Id: ${data.id} Title: ${data.title}. UserId: ${data.userId}</li>`;
  }).join('');
};

getAlbumsList().then(() => getLogo());

async function getPhotos(id = 1) {
  let responseAlbums = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`);
  let resultAbums = await responseAlbums.json(); 
  let out = '<div>';
  for( let i in resultAbums ) {
    out += `<li class="logo"><img src='${resultAbums[i].url}'</li>`
  }
  out += '</div>'
  imgList.innerHTML = out;
};

albumsList.addEventListener('click', elem => {
  let result = elem.target.value;
    getPhotos(result);
})

{/* //     const list = document.createElement('div');
//     list.innerHTML = r.map(n => `
//       <div class="item">
//         <div>UserId: ${n.userId}</div>
//         <div>Id: ${n.id}</div>
//         <div>Title: ${n.title}</div>
//       </div>
//     `).join('');
//     document.body.append(list);
//   });
 */}
