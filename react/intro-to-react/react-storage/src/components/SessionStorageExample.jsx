const SessionStorageExample = () => {
    // Set the item into SessionStorage
    // SessionStorage.setItem('username', 'Paul')
    // Retrieve the item from SessionStorage
    const username = SessionStorage.getItem("nonExistentKey");
    console.log(username);
    // As you can see, if you give a key that is invalid, SessionStorage will return null.

    return <p>Username: {username}</p>;
};

export default SessionStorageExample;
