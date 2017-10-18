var katzDeli = [];
var indexNum = 0;
function takeANumber(katzDeliLine, name){
  indexNum++;
  katzDeliLine.push(`Welcome, ${name}. You are number ${indexNum}`);
  return katzDeliLine;
}
