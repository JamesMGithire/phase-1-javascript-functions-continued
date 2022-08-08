// code your solution here
function saturdayFun(toDo = "roller-skate"){
    return `This Saturday, I want to ${toDo}!`;
}

function mondayWork(toDo = "go to the office"){
    return `This Monday, I will ${toDo}.`;
}

function wrapAdjective(parentPar1 = "*"){
    return (function(par1="special"){
        return `You are ${parentPar1}${par1}${parentPar1}!`;
    });
}