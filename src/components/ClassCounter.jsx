import React, { Component } from 'react';

class ClassCounter extends Component {
    state = {
        name:"",
        count:0,
    } 

    componentDidMount() {
        document.title = `clicked ${this.state.count} times`;
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) { //means if count changed
            console.log("document title updating");
            document.title = `clicked ${this.state.count} times`;
        }
    }
    render() { 
        return (
            <div>
                <input type="text" onChange={(e) => this.setState({ name : e.target.value})}/>
                <button onClick={() => this.setState({ count : this.state.count + 1})}>
                    count : {this.state.count}
                </button>
            </div>
        );
    }
}
 
export default ClassCounter;










// import React, { Component } from 'react';
// class ClassCounter extends React.Component {
//     state = {
//         count: 0 
//     }
//     addOneHandler = () => {
//         this.setState( (prevState) => {
//             return { count: prevState.count + 1 } ;
//         }) ;
//     };

//     // addFiveHandler = () => {
//     //     for( let i = 0; i < 5; i++ ) {
//     //         setCount((prevCount) => prevCount + 1);
//     //     }
//     // };
//     render() { 
//         return ( 
//             <div>
//                 <h2>count - {this.state.count} </h2>
//                 <button onClick={this.addOneHandler}> Add one </button>
//                 {/* <button onClick={this.addFiveHandler}> Add Five </button> */}
//             </div>
//         );
//     }
// }
// export default ClassCounter;