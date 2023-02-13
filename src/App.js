import React, { useRef, useState } from "react";
import FormList from "./components/FormList";
import MyButton from "./components/UI/buttons/MyButton"
import MyInput from "./components/UI/inputs/MyInput"


import "./components/style/Style.css"



function App() {
    const [posts, setPosts] = useState(
        [
            { id: 0, title: "JuvaScript", body: "this language is most integrated in web development among others" },
            { id: 1, title: "JuvaScript", body: "this language is most integrated in web development" },
            { id: 2, title: "JuvaScript", body: "this language is most integrated" },
        ]
    )
   
    let [title, setTitle] = useState({ title: "", body: "" });
    // let [body, setBody] = useState("helloo");
    const bodyInputRef = useRef();
    
    // console.log(bodyInputRef)

    function addNewPost(event) {
        event.preventDefault()
        setPosts([...posts, {...post, id: Date.now()}])
        setTitle({ title: "", body: "" })
        // setTitle(post.body = "")

        
    }


    return (
        <div className="wrapper">
            <div className="container">
                <form>
                    <MyInput
                        onChange={event => setTitle({ ...post, title: event.target.value })}
                        value={post.title}
                        type="text"
                        placeholder="post's name"
                    />
                    <MyInput
                        onChange={event => setTitle({ ...post, body: event.target.value })}
                        value={post.body}
                        type="text"
                        placeholder="post's name"
                    />
                    
                    <MyButton onClick={addNewPost}>create element</MyButton>
                </form>
                <FormList posts={posts} title={"first language"} />
            </div>
        </div>
    )
}

export default App