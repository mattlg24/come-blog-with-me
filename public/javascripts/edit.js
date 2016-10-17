'use strict'

$(document).ready(() => {

    var id = parseInt(window.location.pathname.split('/')[2])
    console.log('id is', id);

    $('.editPost').click(() => {
        console.log('i was clicked');
        $.ajax({
            url: `/posts/${id}`,
            method: 'PUT',
            dataType: 'json',
            data: {
                theID: id
            }
        })
    })


    $('.deletePost').click((event) => {
        event.preventDefault()
        $.ajax({
                url: `/profile/${id}`,
                type: 'DELETE',
                dataType: 'json',
                data: {
                    theID: id
                }
            })
            .done(() => {
                window.location.href = '/profile'
                console.log('post deleted');
            })
            .fail(() => {
                window.location.href = '/profile'
                console.log('post deleted');
            })
    })


})

// function deletePostListener() {
//     $('.btn-delete-post').click(() => {
//         $.ajax({
//             url: `/posts/${id}`,
//             method: 'DELETE',
//             success: () => {
//                 console.log('post deleted')
//             },
//         })
//     })
// }


// const attachListeners = function(book) {
//     $('#deleteBook').click((event) => {
//       event.preventDefault();
////     });
//
//       const options = {
//         dataType: 'json',
//         type: 'DELETE',
//         url: `/books/${book.id}`
//       };
//
//       $.ajax(options)
//         .done(() => {
//           window.location.href = '/index.html';
//         })
//         .fail(() => {
//           Materialize.toast('Unable to delete book', 3000);
//         });
//     });
