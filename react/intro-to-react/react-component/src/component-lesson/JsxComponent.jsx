function JsxComponent(){
    //This is an example of a JSX Component
    const element = <h1>This is a JSX Component</h1>
    const anotherElement = <p>This is another JSX Component</p>
    //This will give you [object Object] [object Object]
    // const combinedElement = element + anotherElement

    //This is how you actually do it
    const combinedElement = (
        <>
        {element}
        {anotherElement}
        </>
    )

    // You just return the JSX Component to render it
    return combinedElement

    //Question: Can you write another component, combine it with the 'element' component, and then render it?
}

export default JsxComponent