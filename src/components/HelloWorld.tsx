import React, {} from "react";

interface IProps {
    message?:string
}

const HelloWorld:React.FunctionComponent<IProps> = (props) =>{

    return(
        <h3>{props.message}</h3>
    )
};
HelloWorld.defaultProps = {
    message:'Hello, World'
};
export default HelloWorld
