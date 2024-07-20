function calculateDemeritPoints (speed){
  const speedLimit =7=;
  let demeritpoints =0;
  if (speed>speedLimit){
    demeritpoints =math.floor((speed-speedLimit)/5);
  }
  return demeritpoints;
}
function main(){
  const speed =parseInt(prompt(Enter the speed of the vehicle(in km/h):));
  const demeritpoints = calculateDemeritPoints(speed);
  if (demeritPoints>0){
    console.log("points:",demeritsPoints);
    if (demeritPoints>12){
      console.log("license suspended)
                  }
  }else{
    console.log ("ok");
  }
}
