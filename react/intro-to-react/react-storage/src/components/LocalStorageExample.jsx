const LocalStorageExample = () => {
    // Set the item into localStorage
    // localStorage.setItem('username', 'Paul')
    // Retrieve the item from localStorage
    const username = localStorage.getItem("nonExistentKey");
    console.log(username);
    // As you can see, if you give a key that is invalid, localStorage will return null.

    return <p>Username: {username}</p>;
};

export default LocalStorageExample; 
