import React from 'react';
import Header from "./Layout/header";
import Sidebar from "./Sidebar/sidebar";
import Mainbar from "./Mainbar/mainbar";
import Navbar from "./Navbar/navbar";
import Tabsitem from "./Mycomponent/tabs";
import Alldocument from './Aboutzegal/alldocument';

class App extends React.Component {
 render(){
   return(
     <div>
       <Header />
       <Sidebar />
       <Navbar />
       <Alldocument />
       <Tabsitem />
       <Mainbar />       
     </div>
   )
 }
}

export default App;