var arr=[];
var table;
$(document).on('click', '#b1', function(){
        table=document.getElementById("t1");
    })
 $(document).on('click', '#b2', function(){
        table=document.getElementById("t22");
    })
$(document).on('click', '#b3', function(){
       table=document.getElementById("t3");
    })
    $(document).ready(function () {
        $('tr').click(function () {
            $(document).ready(function () {
                $('tr').click(function () {
                  $('tr').find("input").css('background-color', 'white');
                    $(this).find("input").css('background-color', '#e2ebf3');
                });
            });
        });
    });
$(document).on('click', 'td', function() {
    var that = $(this);
    var i = that.index();
    var n = 9;
    that.closest('table').find('td').removeClass('red');
    for (m=0;m<=n;m++) {
      that.closest('table').find('tr').eq(m).find('td').eq(i).find("input").css('background-color', '#e2ebf3');
    }
  });

function bufunc1()
{
    document.getElementById("b1").style.border= "2px solid #bbdefb";
    document.getElementById("b2").style.border= "none";
    document.getElementById("b3").style.border= "none";
    document.getElementById("d1").style.display = "block";
    document.getElementById("d2").style.display = "none";
    document.getElementById("d3").style.display = "none";
}
function bufunc2()
{
    document.getElementById("b2").style.border= "2px solid #bbdefb";
    document.getElementById("b1").style.border= "none";
    document.getElementById("b3").style.border= "none";
    document.getElementById("d2").style.display = "block";
    document.getElementById("d1").style.display = "none";
    document.getElementById("d3").style.display = "none";
}
function bufunc3()
{
    document.getElementById("b3").style.border= "2px solid #bbdefb";
    document.getElementById("b2").style.border= "none";
    document.getElementById("b1").style.border= "none";
    document.getElementById("d3").style.display = "block";
    document.getElementById("d1").style.display = "none";
    document.getElementById("d2").style.display = "none";
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
