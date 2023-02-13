import React from "react";
import FormItem from "./FormItem"


function FormList({ posts, title }) {
    return (
        <div>
            <h2 style={{textAlign:"center"}}>{title}</h2>
            {posts.map((post, index )=> {
                return <FormItem number={index + 1} post={post} key={post.id} />
            })}
        </div>
    )
}

export default FormList