
const initsatae={type:"CITY_DATA",citydata:[]}
export const Cityreducer=(store=initsatae,{type,payload})=>{
    switch(type){
        case "CITY_DATA":{
          return {...store,citydata:payload}
        }

        default:{
            return store;
        }
    }
} 