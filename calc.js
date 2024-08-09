const display = document.getElementById("display");

function working(a)
{
   display.value += a;
}
function operateDisplay()
{
    try{
    display.value = eval(display.value);
    }
    catch(x)
    {
        display.value = `Error`;
    }
}
function clearDisplay()
{
    display.value = "";
}