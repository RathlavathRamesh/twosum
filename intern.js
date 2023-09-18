const getsum=(arr,target)=>{
     let map=new Map();
  for (let i=0;i<arr.length;i++){
     map.set(arr[i],i);
   }
   
   console.log(map)
   let indx=[]
   
   for(i=0;i<arr.length;i++){
      let num=target-arr[i];
      if(map.has(num)===true && map.get(num)!==i){
         indx.push(i);
         indx.push(map.get(num));
         break
      }
   }
   console.log(indx)
   
}


getsum([2,7,11,15],9);
