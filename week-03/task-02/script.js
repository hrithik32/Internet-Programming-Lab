function MultiplicationTable() {
    const number = document.getElementById('numberInput').value;
    const resultDiv = document.getElementById('result');

    const num = Number(number);


    let table = `\n Multiplication table for ${num}:\n\n`;
    for (let i = 1; i <= 10; i++) {
        table += `${num} x ${i} = ${num * i}\n`;
    }

    
    resultDiv.textContent = table;
}document.getElementById('generateBtn').addEventListener('click', MultiplicationTable);
