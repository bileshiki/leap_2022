let a = 3000;
let b = 27500;
let c = 100000;

function getfee(isMember) {
    return (isMember ? '3000₮' : '27500₮');
}

console.log(getfee(true));