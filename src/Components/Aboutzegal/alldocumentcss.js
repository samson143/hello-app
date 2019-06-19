export default {
    alldocument: {
      width: 356,
      backgroundColor: "white",
      position: "fixed",
      top: 128,
      left: 331,
      bottom: 0,
      paddingTop: 20,
      paddingRight: 20,
      overflowY: "auto",
        
      '&::-webkit-scrollbar': {
        width: '0.6em'
      },
      '&::-webkit-scrollbar-track': {
        '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.3)'
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'darkgrey',
        outline: '1px solid slategrey',
        borderRadius: "5px"
      }
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
  