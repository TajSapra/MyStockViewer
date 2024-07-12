export const changeVal=function(val){
    return (dispatch)=>{
        dispatch({
            type:'Change',
            payload:val
        })
    }
}
export const addData = function (data){
    return (dispatch)=>{
        dispatch({
            type:'Data',
            payload: data
        })
    }
}
export const updateTime = function (time){
    return (dispatch)=>{
        dispatch({
            type:'Time',
            payload: time
        })
    }
}
export const updateInterval = function (interval){
    return (dispatch)=>{
        dispatch({
            type:'Interval',
            payload:interval
        })
    }
}