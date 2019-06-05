export default {
    grid: {
      display: "flex"
    },
  
    alldocument: {
      width: 256,
      backgroundColor: "white",
      position: "fixed",
      top: 100,
      left: 300
    },
  
    unorderedlist: {
      margin: 0,
      padding: 0,
      "& li": {
        listStyleType: "none"
      }
    },
    all: {
      padding: "10px 10px 10px 32px",
      fontSize: 13,
      opacity: 0.8,
      fontFamily: "sans-serif",
      borderBottomRightRadius: 15,
      borderTopRightRadius: 15,
      backgroundColor: "#00bcd41c",
      marginBottom: 20
    },
  
    list: {
      padding: "10px 10px 10px 32px",
      fontSize: 13,
      opacity: 0.8,
      fontFamily: "sans-serif",
      borderBottomRightRadius: 15,
      borderTopRightRadius: 15,
      marginBottom: 20,
      "&:hover": {
        backgroundColor: "#cccccc2e"
      }
    },
  
    horizental: {
      border: "0.5px solid #ccc"
    }
  };
  