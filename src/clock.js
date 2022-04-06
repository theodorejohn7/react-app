import React from "react";

class Clock extends React.Component {
    constructor(props) {
      super(props);
      console.log("inside constructor");
      this.state = { date: new Date() };
      this.content ="Timer Initialized";
      this.states = { date: new Date() };
      this.count=0;
// this.content = "background-color: 'yellow';";
    
console.log(this.content);
    // this.state= "{Wed Apr 06 2022 16:45:19 GMT+0530 (India Standard Time)}";
      // this.value=1;
    }
  
    componentDidMount() {
      console.log("timer updated");
      this.content="Timer to be updated";
    //   this.content="hello";
      this.timerID = setInterval(() => this.tick(), 1000);
      this.state=0;
      
    //   this.timerID = this.tick();
    }
  
    componentDidUpdate(){
        console.log('inside component did update');
        this.content="Timer has Updated "+this.count+" secs";
        this.states=this.state;
        // if(this.count==6)
        // this.states=0;

      }
       
    componentWillUnmount() {
      console.log("component will unmount");
      clearInterval(this.timerID);
          
    }
  
    tick() {
      console.log("inside tick()");

      this.count++;
      this.setState({
        date: new Date(),
      });
    }
  
    static getDerivedStateFromProps() {
      console.log("inside getDerivedStateFromProps");
    //   clearInterval(this.timerID);
            return true;
    }
  
    shouldComponentUpdate()
    {
      console.log('inside shouldComponentUpdate');
    //   this.content="Any changes Observed";
    //   console.log(this.state);
      return true;
    }
  
  
    getSnapshotBeforeUpdate() {
      console.log('inside getSnapshotBeforeUpdate');
      return true;
    }
  
    componentDidCatch()
    {
        console.log("component did catch");
    }
  
    render() {
      console.log("inside render");
    //   this.content="Timer Rendered";
    //   this.content="Time Rendered";
      return (
        <div>
          <h1>Hi...!</h1>
          {/* <h2>{this.state}</h2> */}
          {/* <h2  style={this.content}>It is </h2> */}
          <h2>It is {this.states.date.toLocaleTimeString()}.</h2>
          <h1>{this.content}</h1>
        </div>
      );
    }
  }
  
  export default Clock;