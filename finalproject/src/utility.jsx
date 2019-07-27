export function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
  
export function genTiles(rowN, colN) {
    var alphaMatrix = [], scoreMatrix = []
    for(var j = 0; j < rowN; j++){
      var row = [], row2 = []
      for(var i = 0; i < colN; i++){
        row.push(String.fromCharCode(getRndInteger(97,123)))
        row2.push(getRndInteger(1,6))
      }
      alphaMatrix.push(row)
      scoreMatrix.push(row2)
    }
    return { alphaMatrix , scoreMatrix }
  }
  
export function validateSelection(rowNo, colNo, address) {    
    if(address.length > 0){
      var lastAddress = address[address.length - 1]
      if(lastAddress[0] - 1 === rowNo && lastAddress[1] === colNo || // left
        lastAddress[0] + 1 === rowNo && lastAddress[1] === colNo || // right
        lastAddress[1] - 1 === colNo && lastAddress[0] === rowNo || // top
        lastAddress[1] + 1 === colNo && lastAddress[0] === rowNo || // bottom
        (lastAddress[0] - 1 === rowNo && lastAddress[1] - 1 === colNo ) || // left top 
        (lastAddress[0] - 1 === rowNo && lastAddress[1] + 1 === colNo ) || // left bottom
        (lastAddress[0] + 1 === rowNo && lastAddress[1] - 1 === colNo ) || // right top 
        (lastAddress[0] + 1 === rowNo && lastAddress[1] + 1 === colNo ) // right bottom
        ) return true
      else return false
    }
    else return true
}  