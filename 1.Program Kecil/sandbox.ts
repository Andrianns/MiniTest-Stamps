let arrNumber: number[] = []

//Reverse Arr number 1-100
for(let i:number = 100 ; i>=1 ; i--){
  arrNumber.push(i)
}

//cek bilangan prima
function isPrima(angka:number):boolean{
  if(angka <2){
    return false
  }

  for(let i:number = 2 ; i<=Math.floor(angka/2);i++){
    if(angka%i == 0){
      return false
    }
  }
  return true
}
// console.log(isPrima(1))

function fooBar(arrNumber:number[]):string{
  let output:string = '';
  for(let i:number = 0 ; i<arrNumber.length ; i++){
    if(!isPrima(arrNumber[i])){
      if(arrNumber[i] %3 ===0 && arrNumber[i]%5===0){
        output+='FooBar,'
      }else if (arrNumber[i] % 3 === 0) {
        output += 'Foo,';
      }else if (arrNumber[i] % 5 === 0) {
        output += 'Bar,';
      }else{
        output+=arrNumber[i]+","
      }
    }
  }
  return output
}

console.log(fooBar(arrNumber))
