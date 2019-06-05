import React from 'react';
import Header from "./Layout/header";
import Sidebar from "./Sidebar/sidebar";
import Mainbar from "./Mainbar/mainbar";
import Navbar from "./Navbar/navbar";

class App extends React.Component {
 render(){
   return(
     <div>
       <Header />
       <Sidebar />
       <Navbar />
       <Mainbar />

       
     </div>
   )
 }
}

export default App;