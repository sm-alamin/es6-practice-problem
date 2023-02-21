// ****************************Practice Problem-2 *********************
// Write an arrow function where it will do the following:
// a) It will take an array where the array elements will be the
// name of your friends
// b) Check if the length of each element is even, push elements
// with even length to a new array and return the result
// Print the result.

//function declaration
const checkEvenFriendsName = () => {
    const stringInput = document.getElementById('second-problem-input').value;
    const friends = stringInput.split(",");
    let newFriendList =[];
    for (const friend of friends) {
        if (friend.length % 2 === 0) {
            newFriendList.push(friend);
        }
    }
    return newFriendList;
}

document.getElementById('btn-second-problem').addEventListener('click', function(){
    index += 1;
    const title = document.getElementById('title-second-problem').innerText;
    const checkEvenFriend = checkEvenFriendsName();
   
    // function calling
   const result = checkEvenFriend.join(",");
   displayCalculation(title, result);

})
