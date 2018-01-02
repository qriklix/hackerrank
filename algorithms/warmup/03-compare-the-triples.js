function solve(a0, a1, a2, b0, b1, b2){
  let alice =
    (a0 > b0 ? 1 : 0) +
    (a1 > b1 ? 1 : 0) +
    (a2 > b2 ? 1 : 0)
   let bob =
     (b0 > a0 ? 1 : 0) +
     (b1 > a1 ? 1 : 0) +
     (b2 > a2 ? 1 : 0)

   return [alice, bob]
}
