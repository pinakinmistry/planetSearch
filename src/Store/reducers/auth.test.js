import auth from './Auth';
import * as actionTypes from '../actions/actionTypes';

describe('authreducer',()=>{
    it('should return initial state if pass invalid action types',()=>{
        expect(auth(undefined, {})).toEqual({
            error:null,
            token:null,
            userId:null,
            loading:false
        })
    });
    it('should save a token upon login',()=>{
        expect(auth({
            error:null,
            token:null,
            userId:null,
            loading:false
        
        }, {type:actionTypes.AUTH_SUCCESS,
            idToken:'sometoken',
            userId:'someid'})).toEqual({
                error:null,
                token:'sometoken',
                userId:'someid',
                loading:false
            
            })
    })
})