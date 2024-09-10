$(document).ready(function() {
    $('.help-link').click(function(e) {
        e.preventDefault();
        
        var target = $(this).attr('href');
        
        $('.help-section').removeClass('active');
        $(target).addClass('active');
        
        // // Smooth scroll to the target section
        // $('html, body').animate({
        //     scrollTop: $(target).offset().top
        // }, 500);
    });
});

$(document).ready(function() {
    var username=sessionStorage.getItem('username')
if(username){
    $('#loginbtn').text(username)
    $('#logoutbtn').show();
    
    }
    

    $('#help-toggle-btn').click(function() {
        $('.help').toggle(); // Toggle visibility of help section
        
    });
});
function logout(){
    sessionStorage.clear();
    location.href='/'
    $('#logoutbtn').hide();
    $('#loginbtn').text('Login')
}



function approveUser(userId) {
    fetch('/approve_user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user_id: userId })
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 200) {
            location.reload(); // Reload the page to see updated data
        } else {
            alert('Failed to approve user: ' + data.msg);
        }
    })
    .catch(error => alert('Error approving user: ' + error.message));
}

function denyUser(userId) {
    fetch('/deny_user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user_id: userId })
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 200) {
            location.reload(); // Reload the page to see updated data
        } else {
            alert('Failed to deny user: ' + data.msg);
        }
    })
    .catch(error => alert('Error denying user: ' + error.message));
}

function deleteUser(userId) {
    fetch('/delete_user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user_id: userId })
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 200) {
            location.reload(); // Reload the page to see updated data
        } else {
            alert('Failed to delete user: ' + data.msg);
        }
    })
    .catch(error => alert('Error deleting user: ' + error.message));
}


    if ("serviceWorker" in navigator) {
        window.addEventListener("load", function() {
            navigator.serviceWorker.register("/static/service-worker.js")
                .then(function(registration) {
                    console.log("Service Worker registered with scope:", registration.scope);
                }, function(error) {
                    console.log("Service Worker registration failed:", error);
                });
        });
    }

function deletePost(postid){
    fetch('/delete_post',{
        method : 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ postid: postid ,author:username})
    })
    .then(response=> response.json())
    .then(data=>{
        if(data.status==200){
            location.reload();
            console.log(postid)
        }else{
            alert('Failed to delete post:' + data.msg);
        }
    })
    .catch(error => alert('Error deleting user: ' + error.message)
);
}
function sharePost(postid){
    location.href=`/post/${postid}`
}