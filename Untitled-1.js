<><script>
    window.setInterval (BlinkIt, 500);
    var color = "violet";
    function BlinkIt () { }
    var blink = document.getElementById ("blink");
    color = (color == "#ffffff")? "red" : "#ffffff";
    blink.style.color = color;
    blink.style.fontSize='36px';
</script><div id="blink">Hola!</div><div id="blink" onclick="parent.location='http://norfipc.com'">
        Aguante el Rock!</div></>