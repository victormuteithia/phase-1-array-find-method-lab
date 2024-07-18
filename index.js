function superbowlWin(data){
    if(data.find(record => record.result === "W")){
        return data.find(record => record.result === "W").year
    }else{
        return undefined
    }
}