export const calculateHourlyRate = (annualRate) => {
    const floatRate = parseFloat(annualRate);
    return Math.round(floatRate / (40*52) * 100) / 100;
}