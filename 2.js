let dataKey = ['dumb', 'ways', 'the', 'best'];
let word = 'dumbways';

function check(dataKey) {
    if (word.includes(dataKey)) {
        console.log(dataKey + ' => ' + true);
    } else {
        console.log(dataKey + ' => ' + false);
    }
}