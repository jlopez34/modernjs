//Metacharacter Symbols
re = /^h/i;         //Must start with
re = / world$/i;    //Must ends with
re = /^hello$/i;    //Must begin and end with
re = /h.llo/i;      //Matches any ONE character
re = /h*llo/i;      //Matches any character 0 or more times
re = /gre?a?y/i;    //Optional character
re = /gre?a?y\?/i;  //Escape character

// Brackets [] - Character Sets
re = /gr[ae]y/i;        //Must be an a or e
re = /[GF]ray/i;        //Must be an G or F, i is used to be sensecase
re = /^[GF]ray/i;       //Match anything except a G or F 
re = /[A-Z]ray/;        //Match any uppercase letter
re = /[a-z]ray/;        //Match any lowercase letter
re = /[A-Za-z]ray/;     //Match any lowercase letter
re = /[0-9]ray/;        //Match any digit

// Braces {} - Quatifiers
re = /Hel{2}o/i;        //Must occur exactly {m} amount of times
re = /Hel{2,4}o/i;        //Must occur between {m,n} amount of times
re = /Hel{2,}o/i;        //Must occur at least {m,} times

//Paretheses () - Grouping
re = /^([0-9]x){3}$/;

//String to match
const str =  '3x3x3x';

//Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str){
    if(re.test(str)){
        console.log(`${str} matches ${re}`);
    }else{
        console.log(`${str} does not match ${re}`);
    }
}

reTest(re,str);
