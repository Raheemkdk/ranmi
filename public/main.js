// const searching = document.querySelector('button').addEventListener('click', school)
// function school(){
//   const userInput = document.querySelector('input').value
//   curl "https://api.districtapi.dev/v1/districts?address=12865+Main+St+Apple+Valley+CA" \
//   -H "X-API-Key: da_live_92ac9ce4aa17e4d8b01655d6465a32935e579765ff7ab55652a7249303f7f93c"
// fetch(`https://api.districtapi.dev/v1/districts/search`)
//   .then(res => res.json())
//   .then(data => {
//     console.log(data)
//   })
// }
console.log('I am here')
let visInformation = document.querySelector('#output')
const searching = document.querySelector('button').addEventListener('click', school)
function school() {
const userInput = document.querySelector('input').value;

  fetch(`https://api.districtapi.dev/v1/districts?address=${encodeURIComponent(userInput)}`, {
    headers: {
      'X-API-Key': 'da_live_92ac9ce4aa17e4d8b01655d6465a32935e579765ff7ab55652a7249303f7f93c'
    }
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
    visInformation.innerText = data
    
  })
  .catch(error => {
    console.error(error);
  });
}

// const thumbUp = document.getElementsByClassName("fa-thumbs-up");
// const unpaid = document.getElementsByClassName("unpaidBtn");
// const thumbDown = document.getElementsByClassName("fa-thumbs-down");
// const trash = document.getElementsByClassName("fa-trash-o");


// Array.from(unpaid).forEach(function (element) {
//   element.addEventListener('click', function () {

//     // element.innerText = element.innerText === 'Paid' ? 'Unpaid' : 'Paid'
//     // // need a : after the green
//     // element.style.background = element.innerText === 'Paid' ? 'green' : ''
//     const id = element.dataset.id
//     // const unpaidStat = element.innerText === 'Unpaid' ? true : false;
//     // console.log(unpaidStat)
//     // const msg = this.parentNode.parentNode.childNodes[3].innerText
//     // const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
//     fetch('messages', {
//       method: 'put',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         // 'unpaid': unpaidStat,
//         'id': id
//       })
//     })
//       .then(response => {
//         if (response.ok) return response.json()
//       })
//       .then(data => {
//         console.log(data)
//         window.location.reload(true)
//       })
//   });
// });

// // Array.from(thumbUp).forEach(function(element) {
// //       element.addEventListener('click', function(){
// //         const name = this.parentNode.parentNode.childNodes[1].innerText
// //         const msg = this.parentNode.parentNode.childNodes[3].innerText
// //         const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
// //         fetch('messages', {
// //           method: 'put',
// //           headers: {'Content-Type': 'application/json'},
// //           body: JSON.stringify({
// //             'name': name,
// //             'msg': msg,
// //             'thumbUp':thumbUp
// //           })
// //         })
// //         .then(response => {
// //           if (response.ok) return response.json()
// //         })
// //         .then(data => {
// //           console.log(data)
// //           window.location.reload(true)
// //         })
// //       });
// // });

// Array.from(thumbDown).forEach(function (element) {
//   element.addEventListener('click', function () {
//     const name = this.parentNode.parentNode.childNodes[1].innerText
//     const msg = this.parentNode.parentNode.childNodes[3].innerText
//     const thumbDown = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
//     fetch('direction', {
//       method: 'put',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         'name': name,
//         'msg': msg,
//         'thumbUp': thumbDown
//       })
//     })
//       .then(response => {
//         if (response.ok) return response.json()
//       })
//       .then(data => {
//         console.log(data)
//         window.location.reload(true)
//       })
//   });
// });

// Array.from(trash).forEach(function (element) {
//   element.addEventListener('click', function () {
//     console.log('Seth was here')
//     const name = this.parentNode.parentNode.childNodes[1].innerText
//     const msg = this.parentNode.parentNode.childNodes[3].innerText
//     fetch('messages', {
//       method: 'delete',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         'name': name,
//         'msg': msg
//       })
//     }).then(function (response) {
//       window.location.reload()
//     })
//   });
// });
