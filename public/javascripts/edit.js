'use strict'

$(document).ready(() => {

        var id = parseInt(window.location.pathname.split('/')[2])
            // console.log('id is', id);

        $('.editPost').click((event) => {
            event.preventDefault()
            var theTitle = $('#title').val();
            var theBody = $('#body').val();
            // console.log('i was clicked');
            $.ajax({
                    url: `/profile/${id}`,
                    method: 'PUT',
                    dataType: 'json',
                    data: {
                        theID: id,
                        title: theTitle,
                        body: theBody
                    }
                })
                .done(() => {
                    window.location.href = '/profile'
                })
                .fail(() => {
                    window.location.href = '/profile'
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
                })
                .fail(() => {
                    window.location.href = '/profile'
                })
        })
    }) //end document.ready
