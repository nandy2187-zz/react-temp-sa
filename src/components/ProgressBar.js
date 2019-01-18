import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import StepSlice from './StepSlice';

import '../styles/progress-bar.css';


class ProgressBar extends React.Component {

    state = {
        activeStep: 0,
        completed: {},
        totalSteps: this.props.steps && this.props.steps.lenght,
      };

    handleNext = () => {
        console.log('handleNext');
        let activeStep;
    
        if (this.isLastStep() && !this.allStepsCompleted()) {
          // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          const steps = this.props.steps;
          activeStep = steps.findIndex((step, i) => !(i in this.state.completed));
        } else {
          activeStep = this.state.activeStep + 1;
        }
        this.setState({
            activeStep
        });
    };

    handleBack = () => {
        this.setState(state => ({
          activeStep: state.activeStep - 1,
        }));
    };

    handleStep = step => () => {
        this.setState({
          activeStep: step,
        });
    };

    handleComplete = () => {
        const { completed } = this.state;
        completed[this.state.activeStep] = true;
        this.setState({
          completed,
        });
        this.handleNext();
    };

    handleReset = () => {
        this.setState({
          activeStep: 0,
          completed: {},
        });
    };

    completedSteps = () => {
        return Object.keys(this.state.completed).length;
    };

    isLastStep = () => {
        return this.state.activeStep === this.state.totalSteps - 1;
    }
    
    allStepsCompleted = () => {
        return this.completedSteps() === this.state.totalSteps;
    }

    render() {
        console.log(this.props)
        const { classes } = this.props;
        let stepsArray = this.props.steps || [];
        let activeStep = this.state.activeStep;
        let currentContentStep = stepsArray.length ? stepsArray[activeStep] : false;
        let buttonText = currentContentStep ? currentContentStep.buttonText : '';
        let classNameBar = this.props.progressClass + ' progress-bar';
        let contentStep = currentContentStep ? <StepSlice title={currentContentStep.title} urls={currentContentStep.images} class={currentContentStep.className} inputListType={currentContentStep.inputListType} notificationMessage={currentContentStep.notificationMessage}/>: null;
        const connector = (
            <StepConnector
              classes={{
                active: 'active-line',
                completed: 'completed-line',
                disabled: 'disabled-line',
                line: 'line-color',
              }}
            />
          );

        return (
            <div className={classNameBar}>
                <Stepper activeStep={activeStep} connector={connector}>
                    {
                        stepsArray.map((step, index)=> {
                            const props = {};
                            const labelProps = {};
                            return (
                                <Step key={step.id} {...props}>
                                    <StepLabel {...labelProps}></StepLabel>
                                </Step>
                            )
                        })
                    }
                </Stepper>
                <div>
                    {activeStep === stepsArray.lenght ? (
                        <div>
                            completed
                        </div>
                    ):(
                        contentStep
                    )}
                    <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleNext}
                    >
                    {buttonText}
                    </Button>
                </div>
            </div>
        );
    }
}

export default ProgressBar;