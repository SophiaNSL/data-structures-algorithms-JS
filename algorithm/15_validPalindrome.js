// LeetCode 125

const isPalindrome = (s) => {
    let p1 = 0;
    let p2 = s.length -1;

    while(p1 < p2){
        while(!isValidChar(s.charAt(p1))){
            p1++;
        }
        while(!isValidChar(s.charAt(p2))){
            p2--;
        }

        if(s.charAt(p1).toLowerCase() !== s.charAt(p2).toLowerCase()){
            return false;
        }

        p1++;
        p2--;
    }
    return true;
}

const isValidChar = (char) => {
    let validChars = 'abcdefghijklmnopqrstuvwxyz0123456789';

    return validChars.indexOf(char.toLowerCase()) > -1;
}

const s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s));