export function isTriangle(a: number, b:number, c:number): boolean{
    if(a > 0 && b > 0 && c > 0){
        if(a < (b+c) && b < (a+c) && c < (a+b)){
            return true;
        }
    }
    return false;
}

export function classifyTriangle(a: number, b:number, c:number): string{
    let triangleType = "NONE";
    if(isTriangle(a, b, c)){
        if(a != b && a != c && b != c){
            triangleType = "ESCALENO";
        }
        else if(a === b && b ===c){
            triangleType = "EQUILATERO";
        }
        else{
            triangleType = "ISOSCELES"
        }

    }

    return triangleType;
}

console.log(classifyTriangle(10, 10, 12));
