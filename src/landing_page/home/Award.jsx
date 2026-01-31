function Award(){
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 p-5">
                    <img src="/media/images/largestBroker.svg"></img>
                </div>
                <div className="col-6 p-5">
                    <h2>Largest stock broker in India</h2>
                    <p>2+ million Trader client contribute to over 15% of all retail order 
                        volume in India by trading and investing in:
                    </p>
                    <div className="row mt-5">
                        <div className="col-6">
                            <ul>
                                <li><p>Future and Options</p></li>
                                <li><p>Commodity derivatives</p></li>
                                <li><p>Currency derivatives</p></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li><p>Stoks & IPOs</p></li>
                                <li><p>Direct mutual funds</p></li>
                                <li><p>Bonds and Govt. securities</p></li>
                            </ul>
                        </div>
                    </div>
                    <img src="/media/images/pressLogos.png" style={{width:"90%"}}></img>
                </div>
            </div>
        </div>
    )
}

export default Award;