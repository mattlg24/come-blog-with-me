$(document).ready(() => {

    console.log('i am listening');

    $('.deleteBook').click((event) => {
        console.log(event);
    })

})




function deletePostListener() {
    $('.btn-delete-post').click(() => {
        $.ajax({
            url: `/posts/${id}`,
            method: 'DELETE',
            success: () => {
                console.log('post deleted')
            },
        })
    })
}
