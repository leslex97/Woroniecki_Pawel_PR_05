class MathTools {

    add(a, b) {
        
        let res = a + b;
        if(a == null || b == null){return "NaN" };
        return res;
    };

    sub(a, b) {
        let res = a - b;
        if(a == null || b == null){return "NaN" };
        return res;
    };

    mul(a, b) {
        let res = a * b;
        if(a == null || b == null){return "NaN" };
        return res;
    };

    div(a, b) {
        let res = a / b;
        if(a == null || b == null){return "NaN" };
        return res;
    };

    pow(a, b) {
        let res = a ** b;
        if(a == null || b == null){return "NaN" };
        return res;
    }





}

module.exports.MathTools = MathTools;

