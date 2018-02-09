import React, {Component} from 'react';
import * as actionTypes from '../../Store/actions/index';
import {connect} from 'react-redux';
import Spinner from '../../components/UI/spinner/spinner';
import {Redirect} from 'react-router-dom';
import classes from './SearchPlanet.css';
import Planet from '../../components/Planet/planet';
import Planetdescription from '../../components/planetDescription/planetDescription'

export class SearchPlanet extends Component{
  state={
      suggestions: null,
      planetObject:{},
      inputValue:"",
      optionVisibility: false
  }

    componentDidMount(){
         this.props.onsearchInit();
         this.props.planets();        
    }
    onOptionClickHandler=(url, val)=>{
        this.setState({
            inputValue:val,
            optionVisibility:false
        })
        this.props.optionClickHandler(url);
    }

    inputHandler = (e)=>{
        let options=null,
            planetObj={};
            this.setState({
                inputValue: e.target.value,
                optionVisibility: e.target.value.length > 0
            })
           
        if(!this.props.loading1){
            options=this.props.planetOption.data.results;
            
            for (var i=0; i<options.length; i++) {
                planetObj[options[i].name] = options[i].url;
              }
            
            const suggestionNames= Object.keys(planetObj).filter(name=>{
                  return (name.toLowerCase()).indexOf((e.target.value).toLowerCase()) > -1
              })
            this.setState({
                planetObject:{...suggestionNames},
                suggestions:{...planetObj},

            })    
        }         
    }
    render(){
        let  people= null, peopleData= null;
        if(this.props.loading){
          people =<Spinner/>
        }
        else{
            peopleData=  this.props.searchProfile.data;
            people= (<div><h1>Welcome {peopleData.name}</h1>
                    <h3>Your Profile details:</h3>
                    <ul className={classes.profileDetails}>
                        <li>Birth Year: {peopleData.birth_year}</li>
                        <li>Gender: {peopleData.gender}</li>
                        <li>Height: {peopleData.height}</li>
                        <li>Skin color: {peopleData.skin_color}</li>
                    </ul>
                    </div>)
        }
        let errorMessage= null;
        if(this.props.error){
            errorMessage=<p style={{color:'red',fontWeight:'bold'}}>{this.props.error.message}</p>
        }

        let authenticatedUser= null;
        if(!this.props.isAuthenticated){
            authenticatedUser=<Redirect to="/"/>
        }

        let suggestedOptions= null;
        if(this.state.planetObject){
            suggestedOptions=  Object.keys(this.state.planetObject).map(plnOpt=>{
                   return <Planet key={plnOpt}  click={()=>this.onOptionClickHandler(this.state.suggestions[this.state.planetObject[plnOpt]], this.state.planetObject[plnOpt])}
                   planetval={this.state.planetObject[plnOpt]}/>
                   
               })    
        }
        return(
            <div className={classes.SearchPage}>
                {people}
                {errorMessage}
                {authenticatedUser}
                <div className={classes.SearchBox}>
                <input type="text" placeholder="Enter Planet Name to be searched"
                 onChange={this.inputHandler} value={this.state.inputValue}/>
                 {this.state.optionVisibility ? <ul>{suggestedOptions}</ul> : null}
                </div>
                {!this.props.planetinfoStart ?<Planetdescription planetInfo = {this.props.planetInfo.data}/> :null}
                
            </div>
            
        ) 
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        onsearchInit:()=> dispatch(actionTypes.searchInit()),
        planets:()=>dispatch(actionTypes.planets()),
        optionClickHandler: (url)=> dispatch(actionTypes.planetInfo(url))
    }
}
const mapStateToProps=(state)=>{
    return{
        loading:state.sp.loading,
        loading1:state.sp.loading1,
        error:state.sp.error,
        searchProfile: state.sp.searchProfile,
        planetOption: state.sp.planetOption,
        isAuthenticated: state.auth.token !== null,
        planetInfo: state.sp.planetInfo,
        planetinfoStart: state.sp.planetinfoStart
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchPlanet);