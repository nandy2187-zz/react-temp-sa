import React from 'react';
import HeaderLogo from './HeaderLogo';
import ProgressBar from './ProgressBar';
import steps from '../temporary-data/steps';



class App extends React.Component{
    
    render(){
        //this variable is temporal until we decide if the logo image is something fixed or dynamic.
        let logoUrl = "https://d3dmzhdwhxl7fz.cloudfront.net/assets/senioradvisor/senioradvisor-logo-b48b59f65ab8602a11834f1ba04caa50.png";
        return (
            <div className="container mobile-ux">
                <HeaderLogo logoUrl={logoUrl}/>
                <div className="content-container">
                    <ProgressBar steps={steps} progressClass={'purple-stepper'} customStepperClass ={'stepper-container'}/>
                </div>
            </div>
        )
    }
}

export default App;