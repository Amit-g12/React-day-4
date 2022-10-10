import React from "react";



export const Moviesprovider= React.createContext()

class Moviescontext extends React.Component{

    constructor(){
        super()
        this.state={
            director:"Cristopher Nolan",
            movie:"Inception",
            changedirector: this.changedirector,
            changemovie: this.changemovie
        }
    }

    changedirector=()=>{
        this.setState({director:"Amit"})
    }

    changemovie=()=>{
        this.setState({movie:"Django"})
    }

        render(){
            return <Moviesprovider.Provider value={{...this.state}}>
                {this.props.children}
            </Moviesprovider.Provider>
        }
}

export default Moviescontext