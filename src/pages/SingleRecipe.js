/* Core */
import React, { Component } from 'react';
import { recipeData } from '../data/tempDetails'; 
import { Link } from 'react-router-dom'; 




export default class SingleRecipe extends Component {
	constructor (props) {
		super(props); 
		const id = this.props.match.params.id;
		this.state = {
			recipe: recipeData, 
			id, 
			loading: false
		}

	}



  render() {
  	const{image_url, publisher, publisher_url, source_url, title, ingredients
  	} = this.state.recipe; 
    if(this.state.loading) {
    	return(
    			<div className="container">
    				<div class="row">
    					<div className="col-10 mx-auto col-md-6 my-3">
    						<h2 className="text-uppercase text-orange text-center">
    							loading recipe...
    						</h2>
    					</div>
    				</div>
    			</div>
    		)
    }

    return (
    		<div className="container my-5">
    			<div className="row">
    				<div className="col-10 mx-auto col-md-6 my-3">
    					<Link to="/recipes" className="btn btn-warning mb-5 text-uppercase">
    						Back to Recipes
    					</Link>
    					<img src={image_url} className="d-block w-100" style={{maxHeight:"30rem"}} alt="recipe" />
    				</div>
    				<div className="col-10 mx-auto col-md-6 my-3">

    				</div>

    			</div>
    		</div>
    	)
  }
}
