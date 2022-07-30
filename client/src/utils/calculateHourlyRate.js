export const calculateHourlyRate = (annualRate) => {
    const floatRate = parseFloat(annualRate);
    return floatRate / (40*52);
}