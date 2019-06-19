export default {
    documentpaper: {
      padding: 15,
      border: "1px solid #ccc",
      boxShadow: "none",
      height: 100,
      overflow: "hidden",
      textOverflow: "ellipses",
      "&:hover": {
        border: "1px solid #04bcda"
      }
    },
    documentpaper_body: {
      display: "flex",
      justifyContent: "space-between"
    },
    descriptionicon: {
      color: "#00BCD4",
      marginRight: 13
    },
    documentpaper_title: {
      display: "flex",
      justifyContent: "space-between",
      lineHeight: "1.8rem",
      fontWeight: 700,
      fontSize: 14
    },
  
    paperparagraph: {
      display: "flex",
      margin: "8px 0px 5px 0px",
      fontSize: 15
    },
  
    infoicon: {
      position: "relative",
      top: 15,
      borderRadius: "50%",
      color: "#ccc",
      padding: 3,
      width: 17,
      height: 17,
      "&:hover": {
        backgroundColor: "#cccccc5c"
      }
    }
  
    // papertext: {
    //   display: "flex",
    //   flexDirection: "Column"
    // }
  };
  