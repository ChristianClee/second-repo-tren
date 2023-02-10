import React, { useState } from "react";

function FormItem(data) {
    const post = data.data.post;
    const title = data.data.title;

    return (
        
        <div className="wrapper">
            <div className="container">
                <h2 className="">{title}</h2>
                <div className="body">
                    <div className="inscript">
                        <div className="inscript__title">{post.language}</div>
                        <div className="inscript__description">{post.description}</div>
                    </div>
                    <button className="button">delete</button>
                </div>
            </div>
        </div>
        
    )
}
export default FormItem