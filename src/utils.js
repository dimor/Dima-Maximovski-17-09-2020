export const convertDegree=(value,isCelcius)=>{

    if(isCelcius){
        return `${value}°C`;
    }else{
       return `${((value*9/5)+32).toFixed(2)}°F`;
    }
}

