
function square1(obj) {
    var a = obj.num1.value;
    var h = obj.num2.value;
    var s = a * h;
    if (s > 0) {
        obj.res.value = s;
    }
    else {
        obj.res.value = 'Error';
    }

}

function square2(obj) {
    var b = obj.num1.value;
    var h = obj.num2.value;
    var s = b * h;
    if (s > 0) {
        obj.res.value = s;
    }
    else {
        obj.res.value = 'Error';
    }
}

function square3(obj) {
    var a = obj.num1.value;
    var b = obj.num2.value;
    var sin = obj.num3.value;
    if (sin > 90 && sin < -90) {
        obj.res.value = 'Error';
    }
    else {
        sin = (sin * Math.PI) / 180;
        var s = (a * b * Math.sin(sin)).toFixed(3);
        if (s > 0) {
            obj.res.value = s;
        }
        else {
            obj.res.value = 'Error';
        }
    }

}

function square4(obj) {
    var a = obj.num1.value;
    var b = obj.num2.value;
    var sin = obj.num3.value;
    if (sin > 90) {
        obj.res.value = 'Error';
    }
    else {
        sin = (sin * Math.PI) / 180;
        var s = ((a * b * Math.sin(sin)) / 2).toFixed(3);
        if (s > 0) {
            obj.res.value = s;
        }
        else {
            obj.res.value = 'Error';
        }
    }
}

function square5(obj) {
    var a = obj.num1.value;
    var r = obj.num2.value;
    var s = 2 * a * r;
    if (s > 0) {
        obj.res.value = s;
    }
    else {
        obj.res.value = 'Error';
    }
}

function square6(obj) {

    var r = obj.num2.value;
    var sin = obj.num1.value;
    if (sin > 90) {
        obj.res.value = 'Error';
    }
    else {
        sin = (sin * Math.PI) / 180;
        var s = ((4 * r * r) / Math.sin(sin)).toFixed(3);
        if (s > 0) {
            obj.res.value = s;
        }
        else {
            obj.res.value = 'Error';
        }
    }
}

function rFact(num) {
    if (num === 0)
        return 1;
    else
        return num * rFact(num - 1);
}

function Cycle(obj) {
    var x = obj.num1.value;
    var sum = 1;
    var i = 1;
    if (x < 1) {
        while (Math.abs((Math.pow(x, i)) / (rFact(i))) >= 0.0003) {
            sum = sum + (Math.pow(x, i)) / (rFact(i));
            i++;
        }
        obj.res.value = '~ ' + sum.toFixed(5);
    }
    else {
        obj.res.value = 'Error';
    }
}

function array() {
    var data = document.getElementsByClassName("Value");
    var sum = 0;
    for (var i = 0; i < data.length; i++) {
        sum += +data[i].value;
    }
    if (15 == (sum / 3)) {
        document.getElementById("rez").value = 'Yes';
    }
    else {
        document.getElementById("rez").value = 'No';
    }
}

function getRandomInt(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min));
}

function Random() {
    document.getElementById("rez2").value = getRandomInt(document.getElementById("min").value, document.getElementById("max").value);
}

function getArray(n) {
    var max = 100;
    var min = 0;
    let arr = new Array(n);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = getRandomInt(min, max);
    }
    return arr;
}

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}

function getResultArray(a) {
    if (a.length > 0) {
        return a.sort(compareNumeric)
    }
}

function mat(array) {
    var n = Math.sqrt(array.length)
    var c = 0;
    var matrix = [];
    for (i = 0; i < n; i++) {
        matrix[i] = [];
    }
    for (row = n - 1; row >= 0; row--) {
        if (row % 2 == 1) {
            for (i = 0; i < n; i++) {
                matrix[i][row] = array[c++];
            }
        }
        else {
            for (i = n - 1; i >= 0; i--) {
                matrix[i][row] = array[c++];
            }
        }
    }
    return matrix;
}

(function () {
    var table = document.createDocumentFragment();
    var arr = mat(getResultArray(getArray(16)));
    for (var i = 0; i < 4; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < 4; j++) {
            var td = document.createElement('td');
            td.innerHTML = arr[i][j];
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.getElementById('matrix').appendChild(table);
})();
