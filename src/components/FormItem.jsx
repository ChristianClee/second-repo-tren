import React from "react";

function FormItem({ post, number }) {



    return (
                <div className="body">
                    <div className="inscript">
                <div className="inscript__title">{number} {post.title}</div>
                        <div className="inscript__description">{post.body}</div>
                    </div>
                    <button className="button">delete</button>
                </div>
    )
}
export default FormItem