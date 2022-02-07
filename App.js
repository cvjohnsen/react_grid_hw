class App extends React.Component {
    render(){
        return(
            <div className="grid-container">
                <div className="item1">
                <h5>Dashboard</h5>
                <h5>Widget</h5>
                <h5>Reviews</h5>
                <h5>Customer</h5>
                <h5>Online Analysis</h5>
                <h5>Setting</h5>
                </div>

                 <div className="item2">
                 <h4>Reviews</h4>
                <h1>1,281</h1>   
                </div>

                 <div className="item3">
                    <h4>Average Rating</h4>
                    <h1>4.6</h1>
                 </div>

                 <div className="item4">
                <h4>Sentiment Analysis </h4>
                <h2>960</h2>
                <h2>122</h2>
                <h2>321</h2>   
                 </div>

                 <div className="item5">
                 <h4>Web Visitors </h4>
                <h1>821</h1> 
                    <div className="container">
                         <br/>
                          <br/>
                           <br/>
                            <br/>
                             <br/>
                              <br/>
                               <br/> 
                                <br/>
                                 <br/>
                                  <br/>
                                   <br/>
                                    <br/>
                                     <br/>
                                      <br/>
                                       <br/>
                                       <br/>
                                       <br/>
                                                        
                    </div>  
                 </div>
                
            </div>
        )
    }
}

// class Review extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h5>Reviews</h5>
//                 <h1>1,281</h1>
//             </div>
//         )
//     }
// }

// class Average extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h5>Average Rating</h5>
//                 <h1>4.6</h1>
//             </div>
//         )
//     }
// }

// class Sentiment extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h5>Sentiment Analysis </h5>
//                 <h1>960</h1>
//                 <h1>122</h1>
//                 <h1>321</h1>
//             </div>
//         )
//     }
// }

// class Web extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h5>Web Visitors </h5>
//                 <h1>821</h1>
//             </div>
//         )
//     }
// }













ReactDOM.render(<App/>, document.getElementById('root'));