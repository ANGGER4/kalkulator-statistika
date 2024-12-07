document.getElementById('calculateBtn').addEventListener('click', function() {
    const input = document.getElementById('inputData').value;
    const numbers = input.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));

    if (numbers.length === 0) {
        alert('Silakan masukkan angka yang valid.');
        return;
    }

    const mean = calculateMean(numbers);
    const median = calculateMedian(numbers);
    const mode = calculateMode(numbers);

    document.getElementById('mean').innerText = `Rata-rata: ${mean}`;
    document.getElementById('median').innerText = `Median: ${median}`;
    document.getElementById('mode').innerText = `Modus: ${mode}`;
});

function calculateMean(numbers) {
    const total = numbers.reduce((acc, num) => acc + num, 0);
    return (total / numbers.length).toFixed(2);
}

function calculateMedian(numbers) {
    numbers.sort((a, b) => a - b);
    const mid = Math.floor(numbers.length / 2);
    return numbers.length % 2 !== 0 ? numbers[mid] : ((numbers[mid - 1] + numbers[mid]) / 2).toFixed(2);
}

function calculateMode(numbers) {
    const frequency = {};
    numbers.forEach(num => {
        frequency[num] = (frequency[num] || 0) + 1;
    });

    const maxFreq = Math.max(...Object.values(frequency));
    const modes = Object.keys(frequency).filter(num => frequency[num] === maxFreq);

    return modes.length === 1 ? modes[0] : modes.join(', ');
}