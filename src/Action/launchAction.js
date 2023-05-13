import axios from "axios"

export const startGetAllLaunch=()=>{
    return(dispatch,getState)=>{
        axios.get('https://api.spacexdata.com/v3/launches')
            .then((response)=>{
                const data=response.data
            if(data.hasOwnProperty('errors')){
                alert(data.errors)
            }
            else{
                console.log(data)
                dispatch(getLaunch(data))
            }
            })
            .catch((err)=>{
                console.log(err)
            })
    }
}

export const startGetUpcomingLaunch=()=>{
    return(dispatch,getState)=>{
        axios.get('https://api.spacexdata.com/v3/launches/upcoming')
            .then((response)=>{
                const data=response.data
            if(data.hasOwnProperty('errors')){
                alert(data.errors)
            }
            else{
                console.log(data)
                dispatch(getLaunch(data))
            }
            })
            .catch((err)=>{
                console.log(err)
            })
    }
}

export const startGetLaunchSuccess=()=>{
    return(dispatch,getState)=>{
        axios.get(`https://api.spacexdata.com/v3/launches?launch_success=true`)
            .then((response)=>{
                const data=response.data
            if(data.hasOwnProperty('errors')){
                alert(data.errors)
            }
            else{
                console.log(data)
                dispatch(getLaunch(data))
            }
            })
            .catch((err)=>{
                console.log(err)
            })
    }
}
export const startGetLaunchFailed=()=>{
    return(dispatch,getState)=>{
        axios.get(`https://api.spacexdata.com/v3/launches?launch_success=false`)
            .then((response)=>{
                const data=response.data
            if(data.hasOwnProperty('errors')){
                alert(data.errors)
            }
            else{
                console.log(data)
                dispatch(getLaunch(data))
            }
            })
            .catch((err)=>{
                console.log(err)
            })
    }
}


const getLaunch=(launch)=>{
    return {
        type:'GET_LAUNCHES',
        payload:launch
    }
}