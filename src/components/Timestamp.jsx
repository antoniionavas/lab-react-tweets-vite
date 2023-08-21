function Timestamp(props) {
    console.log(props)
      const {time} = props
      return (
        <span className="timestamp"> {time} </span>
      );
    }
    
    export default Timestamp;
    