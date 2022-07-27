function spinWords(string){
  let str = string.split(" ")
  
  str.forEach((n,index)=>{
    if(n.length >= 5){
      let to = n.split("").reverse().join("")
      str[index] = to
    }
  })
  return str.join(" ")
}

spinWords("Welcome")