import React from "react";
import FormItem from "./FormItem"

function FormList({ data: posts , title}) {
    // console.log("posts",posts)
    console.log("title",title)
    return (
        posts.map(post => {
            // console.log("post", post)
            return <FormItem data={{ post: post, title: title }} key={post.id}  />
            }
        )
    )
}

export default FormList