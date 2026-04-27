export class Palindrom  {
  constructor(value = null ,factors = []){
    this.value = value
    this.factors = factors
  }
}

export class Palindromes {
  constructor(min ,max){
    this.minPali = min
    this.maxPali = max
  }
  static generate( {maxFactor,minFactor} ) {
    if( minFactor > maxFactor) throw new Error('min must be <= max')

    let minPali = new Palindrom()
    let maxPali = new Palindrom()
    
    for (let i = minFactor; i <= maxFactor; i++) {
      for (let j = i; j <= maxFactor; j++) {
         let sum = (i*j).toString()
         if ( sum === sum.split('').reverse().join('')){
           if ( !minPali.value || Number(sum) < minPali.value ) minPali = new Palindrom(Number(sum),[[i,j]])
           else if ( minPali.value === Number(sum)) minPali.factors.push([i,j])
           if ( !maxPali.value || Number(sum) > maxPali.value ) maxPali = new Palindrom(Number(sum),[[i,j]])
           else if ( maxPali.value === Number(sum)) maxPali.factors.push([i,j])
         }
      }
    }
    return new Palindromes( minPali , maxPali)
  }
  get smallest(){
    return this.minPali
  }
  get largest(){
    return this.maxPali
  }
}
