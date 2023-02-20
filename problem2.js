// ****************************Practice Problem-2 *********************
// Write an arrow function where it will do the following:
// a) It will take an array where the array elements will be the
// name of your friends
// b) Check if the length of each element is even, push elements
// with even length to a new array and return the result
// Print the result.

//function declaration
const checkEvenFriendsName = (friends) => {
    let newFriendList =[];
    for (const friend of friends) {
        if (friend.length % 2 === 0) {
            newFriendList.push(friend);
        }
    }
    return newFriendList;
}
//calling the function
const friends = ["Jakir", "Abdullah Al Mamun", "Jubayer", "Masdudur Rahman", "Riad Ahmed Apu", 'Jamia', "Rasel", "Jami"];
const newList = checkEvenFriendsName(friends);
console.log(newList);