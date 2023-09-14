
// Function to calculate the Mean of an array of numbers 
export const calculateMean = (data: number[]) => {
    const sum: number = data.reduce((acc, value) => acc + value, 0);
    return sum / data.length;
}

// Function to calculate the Median of an array of numbers
export const calculateMedian = (data: number[]) => {
    const sortedData: number[] = [...data].sort((a, b) => a - b);
    const middle = Math.floor(sortedData.length / 2);

    if (sortedData.length % 2 === 0) {
        return (sortedData[middle - 1] + sortedData[middle] / 2)
    } else {
        return sortedData[middle];
    }
}

// Function to calculate the Mode of an array of numbers 
export const calculateMode = (data: number[]) => {
    let frequencyMap: {[key: string]: number} = {};
    data.forEach(value => {
        if(frequencyMap[value]){
            frequencyMap[value]++;
        } else {
            frequencyMap[value] = 1
        }
    });

    let mode: any = null;
    let maxFrequency: number = 0;
    let value: any;
    for(value in frequencyMap){
        if(frequencyMap[value] > maxFrequency){
            mode = value;
            maxFrequency = frequencyMap[value];
        } 
    }
    return parseInt(mode);
}