// declare a variable to store return cat
// check this logic
// z -x and z - y and return which one give less unit
// if unit is same for both cat return Mouse C

function catAndMouse(x, y, z) {
    let result = '';
    const CatAUnit = Math.abs(z - x);
    const CatBUnit = Math.abs(z - y);
    console.log(CatAUnit, CatBUnit);
    if (CatAUnit === CatBUnit) return "Mouse C"
    CatAUnit < CatBUnit ? result = 'Cat A' : result = "Cat B";
    return result;
}

console.log(catAndMouse(21, 95, 58));