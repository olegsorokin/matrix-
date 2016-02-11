;
var a11 = document.getElementById('a11'),
    a12 = document.getElementById('a12'),
    a13 = document.getElementById('a13'),
    a21 = document.getElementById('a21'),
    a22 = document.getElementById('a22'),
    a23 = document.getElementById('a23'),
    a31 = document.getElementById('a31'),
    a32 = document.getElementById('a32'),
    a33 = document.getElementById('a33'),
    b11 = document.getElementById('b11'),
    b12 = document.getElementById('b12'),
    b13 = document.getElementById('b13'),
    b21 = document.getElementById('b21'),
    b22 = document.getElementById('b22'),
    b23 = document.getElementById('b23'),
    b31 = document.getElementById('b31'),
    b32 = document.getElementById('b32'),
    b33 = document.getElementById('b33'),
    c11 = document.getElementById('c11'),
    c12 = document.getElementById('c12'),
    c13 = document.getElementById('c13'),
    c21 = document.getElementById('c21'),
    c22 = document.getElementById('c22'),
    c23 = document.getElementById('c23'),
    c31 = document.getElementById('c31'),
    c32 = document.getElementById('c32'),
    c33 = document.getElementById('c33');


function Summ(A,B)
{
    var m = A.length, n = A[0].length, C = [];
    for (var i = 0; i < m; i++)
     { C[i] = [];
       for (var j = 0; j < n; j++) C[i][j] = parseInt(A[i][j])+parseInt(B[i][j]);
     }
    return C;
}

function summAB() {
var A = [
  [a11.value, a12.value, a13.value],
  [a21.value, a22.value, a23.value],
  [a31.value, a32.value, a33.value]
];
var B = [
  [b11.value, b12.value, b13.value],
  [b21.value, b22.value, b23.value],
  [b31.value, b32.value, b33.value]
];
    c11.value = (Summ(A,B)[0][0]);
    c12.value = (Summ(A,B)[0][1]);
    c13.value = (Summ(A,B)[0][2]);
    c21.value = (Summ(A,B)[1][0]);
    c22.value = (Summ(A,B)[1][1]);
    c23.value = (Summ(A,B)[1][2]);
    c31.value = (Summ(A,B)[2][0]);
    c32.value = (Summ(A,B)[2][1]);
    c33.value = (Summ(A,B)[2][2]);
}