const NoUseState = () => {
    const name = document.getElementById("nameInput").value
    
    const submit = () => {
        console.log(name)
        document.getElementById("showName").innerHTML = name
    }
    return(
        <>
        <input type="text" id="nameInput" />
        <button onClick={submit}>Submit</button>
        <h1 id="showName"></h1>
        </>
    )
}

export default NoUseState