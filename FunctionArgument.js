var f1=function ()
{
    console.log("Function argument");
}

var f2 = function(fn)
{
    fn();
};

f2(f1);