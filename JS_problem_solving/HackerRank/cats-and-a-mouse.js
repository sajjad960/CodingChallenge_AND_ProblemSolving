// Complete the catAndMouse function below.
function catAndMouse(x, y, z) {
    let result = '';
    const CatAUnit = Math.abs(z - x);
    const CatBUnit = Math.abs(z - y);
    console.log(CatAUnit, CatBUnit);
    if (CatAUnit === CatBUnit) return "Mouse C"
    CatAUnit < CatBUnit ? result = 'Cat A' : result = "Cat B";
    return result;
}