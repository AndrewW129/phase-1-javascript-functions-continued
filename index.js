// code your solution here

function saturdayFun(action = 'roller-skate') {
    return `This Saturday, I want to ${action}!`
}

saturdayFun()

function mondayWork(location = 'go to the office') {
    return `This Monday, I will ${location}.`
}

mondayWork()

// const starHighlight = wrapAdjective('*')
// const starCompliment = 'a hard worker'
// const lineHighlight = wrapAdjective('||')
// const lineCompliment = 'a dedicated programmer'


function wrapAdjective(highlight = 'special') {
    return function (adjective) {
        return `You are ${highlight}${adjective}${highlight}!`
    }
}
