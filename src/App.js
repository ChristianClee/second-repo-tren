import React, { useState } from "react";
import FormItem from "./components/FormItem";
import FormList from "./components/FormList";
import "./components/style/Style.css"


function App() {
    const [posts, setPosts] = useState(
        [
            { id: 0, language: "JuvaScript", description: "this language is most integrated in web development among others" },
            { id: 1, language: "JuvaScript", description: "this language is most integrated in web development" },
            { id: 2, language: "JuvaScript", description: "this language is most integrated" },
        ]
    )
    const [posts1, setPosts1] = useState(
        [
            { id: 3, language: "python", description: "this language is most simple for understanding its basic concept" },
            { id: 4, language: "node js", description: "this language is most simple for understanding" },
            { id: 5, language: "ecma script", description: "this language is most simple" },
        ]
    )
    

    
    

    return (
        <div className="wrapper">
            <div className="container">
                <FormList data={posts} title={"first language"} />
                <FormList data={posts1} title={"second language"} />
            </div>
        </div>
    )
}

export default App