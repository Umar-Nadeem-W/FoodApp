function Capitalize(s){
    let rem = s.slice(1, s.length);
    let ans = s[0].toUpperCase() + rem;
    return ans;

}

export {Capitalize};