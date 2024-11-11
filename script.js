function clearError() {
    document.getElementById('Error').textContent = '';
    document.getElementById('input').value = ''; // Clear the input field

}

function putvalue() {
    const input = document.getElementById('input').value;
    const errorSpan = document.getElementById('Error');
    const tableContainer = document.getElementById('table-container');

    errorSpan.textContent = '';

    if (input === "" || isNaN(input)) {
        errorSpan.textContent = 'Please enter any number';
    } else {
        document.getElementById('table-container').innerHTML = "";
        const number = parseInt(input);

        // Create a new table
        const table = document.createElement('table');
       
        table.setAttribute('id', `table-multiplication-${number}`);
        
        // Create table header
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        const th1 = document.createElement('th');
        th1.textContent = 'Multiplication Expression';
        const th2 = document.createElement('th');
        th2.textContent = 'Result';
        headerRow.appendChild(th1);
        headerRow.appendChild(th2);
        thead.appendChild(headerRow);
        table.appendChild(thead);

        // Create table body
        const tbody = document.createElement('tbody');
        for (let i = 1; i <= 10; i++) {
            const row = tbody.insertRow();
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            cell1.textContent = `${number} * ${i} =`;
            cell2.textContent = number * i;
        }
        table.appendChild(tbody);

        // Append the new table to the container
        tableContainer.appendChild(table);
    }
}
function clearAll() {
    document.getElementById('table-container').innerHTML = '';
    clearError();
    document.getElementById('input').value = '';

}