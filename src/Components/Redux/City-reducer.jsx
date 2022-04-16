

export const Cityreducer=(store,{type,payload})=>{
    switch(type){
        case "CITY_DATA"{
          return {...store,citydata:payload}
        }

        default:{
            return Store;
        }
    }
} 