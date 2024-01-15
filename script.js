let istatus = document.querySelector("h5");
let check = 0;
let addFriend = document.querySelector(".addBtn");
// let removeFriend = document.querySelector(".removeBtn");

addFriend.addEventListener("click",function(){
    if(check == 0){
        istatus.innerHTML = "Friends";
        istatus.style.color = "green";
        addFriend.innerHTML = "Remove Friend";
        addFriend.style.backgroundColor = "#dadada";
        addFriend.style.color = "black";
        check = 1;
    } else {
        istatus.innerHTML = "Stranger";
        istatus.style.color = "Red";
        addFriend.innerHTML = "Add Friend";
        addFriend.style.backgroundColor = "#5f9ea0";
        addFriend.style.color = "white";
        check = 0;
    }
})

// removeFriend.addEventListener("click", function() {
//     istatus.innerHTML = "Strangers";
//     istatus.style.color = "red";
// })
