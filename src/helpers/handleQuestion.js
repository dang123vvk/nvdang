export const checkAnswer = (isSubmit = false, selected = '', answer = '') => {
    if (isSubmit) {
        if (selected === answer) {
            return true
        }
    }
    return false
}
export const displayTime = (timer = 120) => {
    return `${String(parseInt(timer / 60))}m ${String(timer % 60)}s`
}
export const checkAnswers = (count = 5, selected = {}, answers = []) => {
    const list = answers.slice(0, count);
    let countAnswer = 0
    for (let i = 0; i < list.length; i++) {
        if (selected[list[i].id] === list[i].answer) {
            countAnswer += 1
        }
    }
    return `${String(countAnswer)}/${String(count)}`
}