import React from "react";
import classes from "./MyButton.module.css"

function MyButton({children, ...prop}) {
    // console.log(prop)
    return (
        <button
            {...prop}
            className={classes.btn}
        >   
            {children}
        </button>
    )
}
export default MyButton;