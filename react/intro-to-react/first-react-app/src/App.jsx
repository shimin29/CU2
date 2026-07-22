import puppyImage from './assets/puppy-image.jpg'

function App() {
  return(
    <>
    <h1>My first Customised React Page</h1>
    <p>You can put whatever you want inside this React App inside here</p>
    {/* This is the React method of importing image and using it  这个是第一种*/}
    <img src={puppyImage} alt="An image of a funny puppy" />
    {/* This is how you would normally use img tags. */}
    {/* The difference is that you MUST remember that the path is relative FROM index.html */}
    {/* That means you must link it ASSUMING you are from index.html's root folder */}
    {/* That is why you see you need to add / src first before going into / assets 有两种method show 照片 这个是第二种  */}
    <img src="/src/assets/puppy-image.jpg" alt="alternate way to show dog image" />    
    </>
  )
}

export default App