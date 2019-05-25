(function() {
    `use strict`;
        var canvas = document.querySelector(`#myClock`),
        canvasContext = canvas.getContext(`2d`),
        // clock settings
        cX = canvas.width / 2,
        cY = canvas.width / 2,
        endX,
        endY,
        radius = 150,
        // time settings
        date,
        hours,
        minutes,
        seconds;
        initTime();
        //Check for browser support
        if (canvasContext.getContext) {
            drawClock();
    } else {
        //Do something
    }
    setInterval(animateClock, 1000);
    
    // get yoour system time
    function initTime(){
        date = new Date();
        hours = date.getHours() % 12;
        minutes = date.getMinutes();
        seconds = date.getSeconds();
    }
    
    //animate the clock
    function animateClock() {
        clearCanvas();
        refreshTime();
        drawClock();
    }
    
    // clear the canvas
    function clearCanvas() {
        canvasContext.clearRect(0, 0, canvas.width, canvas.height);
    }
    
    // refresh time after 1 second
    function refreshTime(){
        seconds += 1;
        if (Math.floor((seconds / 60)) != 0) { minutes += 1; seconds %= 60; }
        if (Math.floor((minutes / 60)) != 0) { hours += 1; minutes %= 60; }
    }
    
    //draw or redraw Clock after time refrexh function is called
    function drawClock() {
        drawClockBackground();
        drawMinutesHand();
        drawHoursHand();
        drawSecondsHand();
    }
    
    function drawHand(beginX, beginY, endX, endY) {
        canvasContext.beginPath();
        canvasContext.moveTo(beginX, beginY);
        canvasContext.lineTo(endX, endY);
        canvasContext.stroke();
        canvasContext.closePath();
    }
    
    // draw Hand for minutes
    function drawMinutesHand(){
        var rotationUnit = minutes + seconds / 60,
            rotationFactor = Math.PI / 30,
            rotation = rotationUnit * rotationFactor,
            handLength = 0.9 * radius;
        endX = cX + handLength * Math.sin(rotation);
        endY = cY - handLength * Math.cos(rotation);
        drawHand(cX, cY, endX, endY);
    }
    
    // draw Hand for hours
    function drawHoursHand(){
        var rotationUnit = 5 * hours + minutes  / 12,
            rotationFactor = Math.PI / 30,
            rotation = rotationUnit * rotationFactor,
            handLength = 0.6 * radius;
        endX = cX + handLength * Math.sin(rotation);
        endY = cY - handLength * Math.cos(rotation);
        drawHand(cX, cY, endX, endY);
    }
    
    function drawSecondsHand() {
        var rotationUnit = seconds,
            rotationFactor = Math.PI / 30,
            rotation = rotationUnit * rotationFactor,
                handLength = 1 * radius;
        endX = cX + handLength * Math.sin(rotation);
        endY = cY - handLength * Math.cos(rotation);
        drawHand(cX, cY, endX, endY);
    }

    
    function drawClockBackground() {
        var correction = 1 / 300,
            shiftUnit = 1 / 170,
            shiftFactor = 1 / 30,
            angleInitialPostition = 2,
            angleCurrentPositionBegin = 0,
            angleCurrentPositionEnd = 0,
            repeat = 60,
            lineWidth = 10;
        for (var i=0; i < repeat; i+=1) {
            angleCurrentPositionBegin = angleInitialPostition - (i * shiftFactor) - correction;
            angleCurrentPositionEnd = angleCurrentPositionBegin + shiftUnit;
                if(i % 5 == 0) lineWidth = 20;
                else lineWidth = 10;
                drawArcAtPosition(cX, cY, radius, angleCurrentPositionBegin * Math.PI, angleCurrentPositionEnd * Math.PI, false, lineWidth);
        }
        drawLittleCircle(cX, cY);
    }
    
    function drawArcAtPosition(cX, cY, radius, startAngle, endAngle, counterClockwise, lineWidth) {
        canvasContext.beginPath();
        canvasContext.arc(cX, cY, radius, startAngle, endAngle, counterClockwise);
        canvasContext.lineWidth = lineWidth;
        canvasContext.strokeStyle = "blue";
        canvasContext.stroke();
        canvasContext.closePath();
    }
    
    function drawLittleCircle(cX, cY) {
        drawArcAtPosition(cX, cY, 4, 0* Math.PI, false, 4);
    }
    })();