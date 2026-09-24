function calculateResult() {
    const name = document.getElementById('name').value;
    const math = parseFloat(document.getElementById('math').value);
    const science = parseFloat(document.getElementById('science').value);

    if(!name || isNaN(math) || isNaN(science)) {
        alert("Please fill all valid inputs.");
        return;
    }

    const total = math + science;
    const percentage = (total / 200) * 100;
    
    let grade = 'F';
    let status = 'Fail';
    
    if (percentage >= 90) { grade = 'A'; status = 'Pass'; }
    else if (percentage >= 75) { grade = 'B'; status = 'Pass'; }
    else if (percentage >= 50) { grade = 'C'; status = 'Pass'; }

    const displayDiv = document.getElementById('result-display');
    displayDiv.innerHTML = `
        <h3>Result for ${name}</h3>
        <p><strong>Total Marks:</strong> ${total} / 200</p>
        <p><strong>Percentage:</strong> ${percentage.toFixed(2)}%</p>
        <p><strong>Grade:</strong> ${grade}</p>
        <p><strong>Status:</strong> ${status}</p>
    `;
}