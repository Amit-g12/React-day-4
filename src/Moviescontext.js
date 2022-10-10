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
        this.setState({director:"Budda tera fudi dya"})
    }

    changemovie=()=>{
        this.setState({movie:"land le le mera"})
    }

        render(){
            return <Moviesprovider.Provider value={{...this.state}}>
                {this.props.children}
            </Moviesprovider.Provider>
        }
}

export default Moviescontext