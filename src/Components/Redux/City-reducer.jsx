

export const Cityreducer=(strore,{type,payload})=>{
    switch(type){
        case "CITY_DATA"{
          return {...store,citydata:payload}
        }

        default:{
            return Store;
        }
    }
} 