var canvas, ctx, flag = false,
        prevX = 0,
        currX = 0,
        prevY = 0,
        currY = 0,
        dot_flag = false;

    var x = "black",
        y = 2;
    
    function init() {
        canvas = document.getElementById('can');
        ctx = canvas.getContext("2d");
        w = canvas.width;
        h = canvas.height;
    
        canvas.addEventListener("mousemove", function (e) {
            findxy('move', e)
        }, false);
        canvas.addEventListener("mousedown", function (e) {
            findxy('down', e)
        }, false);
        canvas.addEventListener("mouseup", function (e) {
            findxy('up', e)
        }, false);
        canvas.addEventListener("mouseout", function (e) {
            findxy('out', e)
        }, false);
    }
    
    function color(obj) {
        switch (obj.id) {
            case "violet":
                x ="#9C27B0";
                break;
            case "darkBlue":
                x ="#0D47A1";
                break;
            case "lightBlue":
                x ="#03A9F4";
                break;        
            case "green":
                x = "#4CAF50";
                break;
            case "lime":
                x = "#CDDC39";
                break;
            case "yellow":
                x = "#FFEB3B";
                break;
            case "orange":
                x = "#FF9800";
                break;
            case "brown":
                x = "#795548";
                break;
            case "red":
                x = "#B71C1C";
                break;
            case "lightGrey":
                x ="#BDC3C7";
                break;    
            case "darkGrey":
                x ="#707B7C";
                break;    
            case "black":
                x = "#000";
                break;
            case "white":
                x = "white";
                break;
        }
        if (x == "white") y = 14;
        else y = 2;
    
    }

    function size(obj) {
        switch (obj.id) {
            case "s1":
                y = 1;
                break; 
            case "s2":
                y = 2;
                break;
            case "s5":
                y = 5;
                break;
            case "s10":
                y = 8;
                break;    
        }
    }
    
    function draw() {
        ctx.beginPath();
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(currX, currY);
        ctx.strokeStyle = x;
        ctx.lineWidth = y;
        ctx.stroke();
        ctx.closePath();
    }
    
    function erase() {
        //var m = confirm("Do you want to delete your drawing?");
        //if (m) {
            ctx.clearRect(0, 0, w, h);
            document.getElementById("canvasimg").style.display = "none";
        //}
    }
    
    function findxy(res, e) {
        if (res == 'down') {
            prevX = currX;
            prevY = currY;
            currX = e.clientX - canvas.offsetLeft;
            currY = e.clientY - canvas.offsetTop;
    
            flag = true;
            dot_flag = true;
            if (dot_flag) {
                ctx.beginPath();
                ctx.fillStyle = x;
                ctx.fillRect(currX, currY, 2, 2);
                ctx.closePath();
                dot_flag = false;
            }
        }
        if (res == 'up' || res == "out") {
            flag = false;
        }
        if (res == 'move') {
            if (flag) {
                prevX = currX;
                prevY = currY;
                currX = e.clientX - canvas.offsetLeft;
                currY = e.clientY - canvas.offsetTop;
                draw();
            }
        }
    }
