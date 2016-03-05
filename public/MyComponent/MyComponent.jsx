import React from 'react';
import SubComponentA from './subcomponents/SubComponentA';

/**
 * Component seed to demonstrate how to build a component.
 * For Component Lifecycle API go to:
 * https://facebook.github.io/react/docs/component-specs.html
 *
 * For component Documentation go to:
 * <INSERT DOC URL>
 */
export default class MyComponent extends React.Component {

    // ---------------------------------------------------
    // VIEW LIFECYCLE. THESE ARE CALLED BY REACT AUTOMATICALLY
    // ALL METHODS ARE OPTIONAL
    // ----------------------------------------------------
	constructor() {
		super();
		this.bindMethods();
        this.state = {userName:null};
	}

    componentDidMount() {
        var state = this.props.meta.state;
        this.setState(state);
    }

    // ---------------------------------------------------
    // MOVEMENT LIFECYCLE.
    // THESE ARE ALL CALLED BY THE LAYOUT MANAGER.
    // ----------------------------------------------------

	//Resize callbacks
	resizeStart() {
		console.log('resize started');
	}

	resize() {
		console.log('resize happening');
	}

	resizeStop() {
		console.log('resize stopped');
	}

	//drag callbacks
	dragStart() {
		console.log('drag started');
	}

	drag() {
		console.log('drag happening');
	}

	dragStop() {
		console.log('drag stopped');
	}

    requestData(category, zipcode) {
        var url - ".api/" + category + "/" + zipcode;
        $.ajax({
            url: url,
        context: document.body
            }).done(function(data) {
        console.log(data);
            });
    }




    // ---------------------------------------------------
    // ACTUAL CODE FOR COMPONENT THAT DOES ANYTHING
    // ----------------------------------------------------

    /**
     * Make the following methods accessible outside component
     * @return {[type]} [description]
     */
    bindMethods() {
        this.resizeStart = this.resizeStart.bind(this);
        this.resize = this.resize.bind(this);
        this.resizeStop = this.resizeStop.bind(this);
        this.dragStart = this.dragStart.bind(this);
        this.drag = this.drag.bind(this);
        this.dragStop = this.dragStop.bind(this);
    }

    assetFieldChanged(event) {
        var text = event.target.value;
        this.setState({userName:text}, function() {
            this.props.meta.state =  this.state;
        });
    }

	/**
	 * Create component HTML
	 * @return {[type]} [description]
	 */
  	render() {
        this.requestData("music", "10001");
	    return (
        <div className='mother'>
            <p style={{fontSize:'200%'}}> Find an Event </p>

    		<div className=' food'>
                <p style={{color:'white'}}>Comedy: {this.state.userName} </p>
                <br/>
                <button style={{backgroundColor:'blue'}} type="button" onclick="alert('Hi')">Search Comedy Events !</button>
                
            </div>
            <br></br>
            <div className='music'>
                <p style={{color:'white'}}>Music: {this.state.userName} </p>
                <br/>
                <button style={{backgroundColor:'blue'}} type="button" onclick="alert('Hi')">Search music Events!</button>
               
            </div>
            <div className='nightlife'>
                <p style={{color:'white'}}>Nightlife: {this.state.userName} </p>
                <br/>
                <button style={{backgroundColor:'blue'}} type="button" onclick="alert('Hi')">Search Nightlife Events !</button>
               
            </div>
        </div>
	    );
  	}
}