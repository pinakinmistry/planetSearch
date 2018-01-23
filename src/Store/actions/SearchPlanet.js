import * as actionTypes from '../actions/actionTypes';
import axios from 'axios'

export const search_Profile=()=>{
    return {
        type: actionTypes.SEARCH_PROFILE_START
    }
}
export const searchProfileSuccess= (response)=>{
    return{
        type: actionTypes.SEARCH_PROFILE_SUCCESS,
        response:response
    }
}
export const searchProfileFail= (error)=>{
    return{
        type: actionTypes.SEARCH_PROFILE_FAIL,
        err:error
    }
}
export const searchInit=()=>{
    return dispatch=>{
        dispatch(search_Profile());

        axios.get('https://swapi.co/api/people/1/')
        .then((res)=>{
            dispatch(searchProfileSuccess(res))
        })
        .catch((err)=>{
            dispatch(searchProfileFail(err));
        })
    }
}

export const planetOptionStart=()=>{
    return {
        type:actionTypes.PLANET_OPTION_START
    }
}
export const planetOptionSuccess=(res)=>{
    return {
        type:actionTypes.PLANET_OPTION_SUCCESS,
        response:res
    }
}
export const planetOptionFail=(error)=>{
    return{
        type:actionTypes.PLANET_OPTION_FAIL,
        error:error
    }
}
export const planets=()=>{
    return dispatch=>{
        dispatch(planetOptionStart());

        axios.get('https://swapi.co/api/planets/')
        .then((res)=>{
            dispatch(planetOptionSuccess(res))
        })
        .catch((err)=>{
            dispatch(planetOptionFail(err));
        })
    }
}

export const planetinfoStart=()=>{
    return{
        type:actionTypes.PLANET_INFO_START
    }
}
export const planetinfoSuccess=(res)=>{
    return {
        type: actionTypes.PLANET_INFO_SUCCESS,
        response:res
    }
}
export const planetinfoFail=(err)=>{
    return{
        type: actionTypes.PLANET_OPTION_FAIL,
        error:err
    }
}

export const planetInfo=(url)=>{
    const planetUrl= url;
    if(planetUrl){
        return dispatch=>{
            dispatch(planetinfoStart());
            axios.get(url)
            .then((res)=>{
                dispatch(planetinfoSuccess(res))
            })
            .catch((err)=>{
                dispatch(planetinfoFail(err));
            })
        }
    }
    
}