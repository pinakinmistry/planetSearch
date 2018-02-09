import reducer from './SearchPlanet';
import * as actionTypes from '../actions/actionTypes';

describe('should return initial state on passing wrong actiontypes',()=>{
    it('should return a state in empty actiontypes',()=>{
        expect(reducer({
            loading: true,
            searchProfile: null,
            error:null,
            loading1: true,
            planetInfo:null,
            planetinfoStart:true
        },{})).toEqual({
            loading: true,
            searchProfile: null,
            error:null,
            loading1: true,
            planetInfo:null,
            planetinfoStart:true
        })
    })

    it('should have planetoptions',()=>{
        expect(reducer({
            loading: true,
            searchProfile: null,
            error:null,
            loading1: true,
            planetInfo:null,
            planetinfoStart:true,
            planetOption:null
        },{type:actionTypes.PLANET_OPTION_SUCCESS,
            response:'someresponse'})).toEqual({
                loading: true,
                searchProfile: null,
                error:null,
                loading1: false,
                planetInfo:null,
                planetinfoStart:true,
                planetOption:'someresponse'
            })
    })
    it('should have  profle info',()=>{
        expect(reducer({
            loading: true,
            searchProfile: null,
            error:null,
            loading1: true,
            planetInfo:null,
            planetinfoStart:true,
            planetOption:null
        },{type:actionTypes.SEARCH_PROFILE_SUCCESS,
            response:'someresponse'})).toEqual({
                loading: false,
                searchProfile: 'someresponse',
                error:null,
                loading1: true,
                planetInfo:null,
                planetinfoStart:true,
                planetOption:null
            })
    })

})