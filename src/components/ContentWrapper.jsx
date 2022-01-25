import React from "react";
import ContentRowTop from "./ContentRowTop";
import TopBar from "./TopBar"
import Footer from "./Footer"
import '../assets/css/app.css'

function ContentWrapper(){
    return(
        <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
                <TopBar/>
                <ContentRowTop/>
                <Footer/>
            </div>
        </div>    
    )
}

export default ContentWrapper