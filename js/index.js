const btns = document.querySelectorAll('.btn');
const results = document.querySelectorAll('.result');
let votes = {};
let language;
btns.forEach(btn => {
    

    btn.addEventListener('click', () => {
        btns.forEach(b => b.style.backgroundColor = '');
        btn.style.backgroundColor = 'green';
        language = btn.textContent;
        console.log(language);
        
        
        
        
    });
});
function updateResults() {
    results.forEach(result => {
        const language = result.querySelector('p').textContent;
        const voteCount = votes[language] || 0;
        console.log(voteCount,'voteCount');
        
        const percentage = (voteCount / Object.values(votes).reduce((a, b) => a + b, 0)) * 100;
        console.log(percentage,'percentage');
        
        result.querySelector('progress').value = percentage;
        result.querySelector('p:last-child').textContent = `${percentage.toFixed(2)}%`;
    });
}
function submit() {
    if(language){
        if(votes[language]){
            votes[language]++;
        }else{
            votes[language] = 1;
        }
    }else{
        alert('please select a language');
        return;
    }
    updateResults();
    console.log(votes);
    
    btns.forEach(btn => {
        btn.style.backgroundColor = '#ced6e1';
        language = '';
    });
    
}
// function reset() {
//     btns.forEach(btn => {
//         btn.style.backgroundColor = '#ced6e1';
//         language = '';
//     });
//     votes = {};
//     updateResults();
// }
