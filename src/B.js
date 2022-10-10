import React, { useContext } from "react";

import { Moviesprovider } from './Moviescontext';

function A(){
    const obj=useContext(Moviesprovider)
    function Change(){
        obj.changedirector()
    }
    return <div style={{backgroundColor:'red'}}>
        <h1>This is A child</h1>
        <h1>This is the obj from moviescontext {obj.movie}</h1>
        <br />
        <button onClick={Change} style={{margin:'10px'}}>Change</button>
    </div>
}
export default A