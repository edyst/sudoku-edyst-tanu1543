var arr=[];
var table;
var ctr=1;
$(document).on('click', '#b1', function(){
       ctr=1;
        table=document.getElementById("t1");
    })
 $(document).on('click', '#b2', function(){
       ctr=2;
        table=document.getElementById("t22");
    })
$(document).on('click', '#b3', function(){
    ctr=3;
       table=document.getElementById("t3");
    })
    function funcy(pos, blockcheck) {
        for (let i = 1; i <= 81; i++) {
            document.getElementById(`${i}`).classList.remove("animate")
        }
        var ctr = 0;
        var g1;
        var g2;
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                ctr++;
                if (ctr == pos) {
                    g1 = i;
                    g2 = j;
                    break;
                }
            }
        }
        var a = g1;
        var b = g2;
        //for row//
        for (var j = 0; j <= 8; j++) {
            const cellid1 = a * 9 + j + 1;
            document.querySelector(`#cell-${cellid1} input`).classList.add("animate");
        }
        //for column//
        for (var i = 0; i <= 8; i++) {
            const cellid1 = i * 9 + b + 1;
            document.querySelector(`#cell-${cellid1} input`).classList.add("animate");
        }
        var x = document.getElementsByClassName(blockcheck)
        for (var k = 0; k < x.length; k++) {
            x[k].classList.add("animate");
        }
        }
    function easysudoku() {
        var modify = document.getElementById("easy");
        document.getElementById("hard").removeAttribute("style");
        document.getElementById("medium").removeAttribute("style");
        modify.setAttribute("style", "background-color: #BBDEFB");
        const board = [
            [2,0,5,0,0,9,0,0,4],
            [0,0,0,0,0,0,3,0,7],
            [7,0,0,8,5,6,0,1,0],
            [4,5,0,7,0,0,0,0,0],
            [0,0,9,0,0,0,1,0,0],
            [0,0,0,0,0,2,0,8,5],
            [0,2,0,4,1,8,0,0,6],
            [6,0,8,0,0,0,0,0,0],
            [1,0,0,2,0,0,7,0,8]
        ]
        for (i = 0; i < 9; i++) {
            for (j = 0; j < 9; j++) {
                const cellid = i * 9 + j + 1
                if (board[i][j] === 0) {
                    document.querySelector(`#cell-${cellid} input`).value = ""
                    document.querySelector(`#cell-${cellid} input`).classList.remove("prefilled");
                    document.querySelector(`#cell-${cellid} input`).readOnly = false;
                } else {
                    document.querySelector(`#cell-${cellid} input`).value = board[i][j]
                    document.querySelector(`#cell-${cellid} input`).classList.add("prefilled");
                    document.querySelector(`#cell-${cellid} input`).readOnly = true;
                }
            }
        }
    }
    
    function mediumsudoku() {
        document.getElementById("hard").removeAttribute("style");
        document.getElementById("easy").removeAttribute("style");
        var modify = document.getElementById("medium");
        modify.setAttribute("style", "background-color: #BBDEFB");
        const board = [
            [0,0,6,0,9,0,2,0,0],
            [0,0,0,7,0,2,0,0,0],
            [0,9,0,5,0,8,0,7,0],
            [9,0,0,0,3,0,0,0,6],
            [7,5,0,0,0,0,0,1,9],
            [1,0,0,0,4,0,0,0,5],
            [0,1,0,3,0,9,0,8,0],
            [0,0,0,2,0,1,0,0,0],
            [0,0,9,0,8,0,1,0,0]
        ]
        for (i = 0; i < 9; i++) {
            for (j = 0; j < 9; j++) {
                const cellid = i * 9 + j + 1
                if (board[i][j] === 0) {
                    document.querySelector(`#cell-${cellid} input`).value = ""
                    document.querySelector(`#cell-${cellid} input`).readOnly = false;
                    document.querySelector(`#cell-${cellid} input`).classList.remove("prefilled");
                } else {
                    document.querySelector(`#cell-${cellid} input`).value = board[i][j]
                    document.querySelector(`#cell-${cellid} input`).classList.add("prefilled");
                    document.querySelector(`#cell-${cellid} input`).readOnly = true;
                }
            }
        }
    }
    
    function hardsudoku() {
        var modify = document.getElementById("hard");
        modify.setAttribute("style", "background-color: #BBDEFB;");
        document.getElementById("easy").removeAttribute("style");
        document.getElementById("medium").removeAttribute("style");
        const board = [
            [0,0,0,8,0,0,0,0,0],
            [7,8,9,0,1,0,0,0,6],
            [0,0,0,0,0,6,1,0,0],
            [0,0,7,0,0,0,0,5,0],
            [5,0,8,7,0,9,3,0,4],
            [0,4,0,0,0,0,2,0,0],
            [0,0,3,2,0,0,0,0,0],
            [8,0,0,0,7,0,4,3,9],
            [0,0,0,0,0,1,0,0,0]
        ]
        for (i = 0; i < 9; i++) {
            for (j = 0; j < 9; j++) {
                const cellid = i * 9 + j + 1
                if (board[i][j] === 0) {
                    document.querySelector(`#cell-${cellid} input`).value = ""
                     document.querySelector(`#cell-${cellid} input`).classList.remove("prefilled");
                    document.querySelector(`#cell-${cellid} input`).readOnly = false;
                } else {
                    document.querySelector(`#cell-${cellid} input`).value = board[i][j]
                    document.querySelector(`#cell-${cellid} input`).classList.add("prefilled");
                    document.querySelector(`#cell-${cellid} input`).readOnly = true;
                }
            }
        }
    }
function func()
{
    var ctrn=0;
    for (var i = 0; i<9; i++) {
        var sum=0;
        for (var j = 0; j<9; j++) {
            sum=sum+arr[i][j];
        }  
        console.log(sum)
        if(sum!=45)
        {
            ctrn=1;
            break;
        }
     }
     if(ctrn==1)
     {
         alert("something wrong try again");
         return false;
     }
     return true;
}
function func1()
{
    var ctrn=0;
    for (var i = 0; i<9; i++) {
        var sum=0;
        for (var j = 0; j<9; j++) {
            sum=sum+arr[j][i];
        }  
        console.log(sum)
        if(sum!=45)
        {
            ctrn=1;
            break;
        }
     }
     if(ctrn==1)
     {
         alert("something wrong try again");
         return false;
     }
     return true;
}
function boxs() {
    var ctrn=0;
    for (var i = 0; i<9; i++) {
        for (var j = 0; j<3; j++) {
            sum=sum+arr[i][j];
        }  
        if(i==2||i==5||i==8)
        {
        if(sum!=45)
        {
            ctrn=1;
            break;
        }
        else
        {
            sum=0;
        }
        }
     }
     if(ctrn==1)
     {
         alert("something wrong try again");
         return false;
     }
     for (var i = 0; i<9; i++) {
        for (var j = 3; j<6; j++) {
            sum=sum+arr[i][j];
        }  
        if(i==2||i==5||i==8)
        {
        if(sum!=45)
        {
            ctrn=1;
            break;
        }
        else
        {
            sum=0;
        }
        }
     }
     if(ctrn==1)
     {
         alert("something wrong try again");
         return false;
     }
     for (var i = 0; i<9; i++) {
        for (var j = 6;j<9; j++) {
            sum=sum+arr[i][j];
        }  
        if(i==2||i==5||i==8)
        {
        if(sum!=45)
        {
            ctrn=1;
            break;
        }
        else
        {
            sum=0;
        }
        }
     }
     if(ctrn==1)
     {
         alert("something wrong try again");
         return false;
     }
     return true; 
}
function boxdup() {
    var ctrn=0;
    var s=new Set();
    for (var i = 0; i<9; i++) {
        for (var j = 0; j<3; j++) {
           if(s.has(arr[i][j]))
           {
            ctrn=1;
            break;
           }
          s.add(arr[i][j]);
        }
        if(i==2||i==5||i==8)
        {
            var s=new Set(); 
        }
        if(ctrn==1)
        {
            break;
        }  
    }
     if(ctrn==1)
     {
         alert("something wrong try again");
         return false;
     }
     for (var i = 0; i<9; i++) {
        for (var j = 3; j<6; j++) {
           if(s.has(arr[i][j]))
           {
            ctrn=1;
            break;
           }
          s.add(arr[i][j]);
        }
        if(i==2||i==5||i==8)
        {
            var s=new Set(); 
        }
        if(ctrn==1)
        {
            break;
        }  
    }
     if(ctrn==1)
     {
         alert("something wrong try again");
         return false;
     }
     for (var i = 0; i<9; i++) {
        for (var j = 6; j<9; j++) {
           if(s.has(arr[i][j]))
           {
            ctrn=1;
            break;
           }
          s.add(arr[i][j]);
        }
        if(i==2||i==5||i==8)
        {
            var s=new Set(); 
        }
        if(ctrn==1)
        {
            break;
        }  
    }
     if(ctrn==1)
     {
         alert("something wrong try again");
         return false;
     }
     return true;  
}
function dupr()
{
    var ctrn=0;
    for (var i = 0; i<9; i++) {
        var s=new Set();
        for (var j = 0; j<9; j++) {
           if(s.has(arr[i][j]))
           {
            ctrn=1;
            break;
           }
          s.add(arr[i][j]);
        }
        if(ctrn==1)
        {
            break;
        }  
    }
     if(ctrn==1)
     {
         alert("something wrong try again");
         return false;
     }
     return true;
}
function dupc()
{
    var ctrn=0;
    for (var i = 0; i<9; i++) {
        var s=new Set();
        for (var j = 0; j<9; j++) {
           if(s.has(arr[j][i]))
           {
            ctrn=1;
            break;
           }
          s.add(arr[i][j]);
        }
        if(ctrn==1)
        {
            break;
        }  
    }
     if(ctrn==1)
     {
         alert("something wrong try again");
         return false;
     }
     return true;
}
function funcval()
{arr=[]
if(!table)
{
    table=document.getElementById("t1")
}
for (var i = 0, row; row = table.rows[i]; i++) {
    var t=[]
    for (var j = 0, col; col = row.cells[j]; j++) {
     var k=col.querySelector("input").value;
     if(k=="")
     {
     t.push(0);
     }
     else{
      t.push(Number(k));
     }
    }
    console.log(t)
    arr.push(t);
}
var k=func()&&func1()&&dupr()&&dupc&&boxs()&&boxdup();
if(k)
{
    alert("congratulations completed");
}
}  

