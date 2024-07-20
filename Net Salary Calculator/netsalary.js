function calculateNetSalary(basicSalary,benefit){
  const taxRate = 0.2
  const nhifRate = 0.1
  const nssfRate = 0.2
  
  const grossSalary = basicSalary+benefit;
  const tax = grossSalary*taxRate
  const nhif = grossSalary*nhifRate
  const nssf = grossSalary*nssfRate

  const netSalary = grossSalary-(tax+nhif+nssf)
  return {
    grossSalary
    tax
    nhif
    nssf
    netSalary
};
}
const basicSalary = 40,000;
const benefit = 2,000;
const result =calculateNetSalary(basicSalary,benefit);
console.log("Net salary calculation Result:");
console.log("Gross salary:",result.grossSalary);
console.log("Tax:",result.tax);
console.log("NHIF Deduction:",result.nhif);
console.log("NSSF Deduction:",result.nssf);
console.log("Net salary:",result.netsalary);




