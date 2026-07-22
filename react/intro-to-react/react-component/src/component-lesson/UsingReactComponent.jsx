import ReactComponent from "./ReactComponent";

function UsingReactComponent(){
    return(
        // <> and </> is called an empty tag 
        <>
        <ReactComponent/>
        <ReactComponent/>
        <ReactComponent/>
        <ReactComponent/>
        </>
        //The reason why we use empty tag
        //is because React can only return ONE parent element at a time.
        //So we use an empty tag to wrap the child components together, return it as ONE tag.
    )
}

export default UsingReactComponent