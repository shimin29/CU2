// Create your routes
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog";
import Navigation from "./components/Navigation";
import BlogPost from "./components/BlogPost";
import Comments from "./components/Comments";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogPost />}>
                {/* The comments route below is a nested route */}
                {/* So it will display as a nested component */}
                    <Route path="comments" element={<Comments />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

/* In this lesson you learnt 5 things

1. Basic routing (with Blog and About and Home page)
2. Navigation with NavLink and Link with active state styling (check App.css)
3. Dynamic routes with URL Parameter (/blog/:id)
4. Nested Routes with Nested Component (Display Comments in Blog Post page)
5. Programmatically Navigate with useNavigate hook
*/