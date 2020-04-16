function superReducedString(s) {

   for (let i = 0; i < s.length; i++){
        if (s[i + 1]){
            if (s[i] === s[i + 1]){
                s = s.slice(i + 2)
            }

        }
   }

   return s
}

console.log(superReducedString("aabbc"))
