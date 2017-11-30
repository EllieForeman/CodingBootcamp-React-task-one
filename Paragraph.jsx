import React from "react";

// a component can only have one top-level element
// so we wrap everything in a <main> tag
const Paragraph = ({children}) => (
    <main>
        <p className="lorem">
        { children ? <p>{ children } </p> : <p>Hello World</p>}
        </p>

    </main>
);

export default Paragraph;



// const Paragraph = ({message}) => (
//     <main>
//         <p className="lorem">
//         { message ? <p>{ message } </p> : <p>Hello World</p>}
//         </p>

//     </main>
// );

// export default Paragraph;