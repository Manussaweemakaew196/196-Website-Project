<SCRIPT LANGUAGE="JavaScript">
<!-- Begin
function greeting() {
var today = new Date();
var hrs = today.getHours();
document.writeln("<CENTER>");

document.write("");
document.writeln("<BR>");
document.write("<H1>สวัสดี "); 
if (hrs < 6)
document.write("วันใหม่");
else if (hrs < 12)
document.write("ตอนเช้า");
else if (hrs <= 18)
document.write("ตอนบ่าย");
else
document.write("ตอนเย็น");
document.writeln("!</H1>");
document.write("คุณเข้าชมหน้านี้ในวันที่ ");
dayStr = today.toLocaleString();
document.write(dayStr);
document.writeln("</CENTER>");
}
function montharr(m0, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11)
{
this[0] = m0;
this[1] = m1;
this[2] = m2;
this[3] = m3;
this[4] = m4;
this[5] = m5;
this[6] = m6;
this[7] = m7;
this[8] = m8;
this[9] = m9;
this[10] = m10;
this[11] = m11;
}
function calendar()
{
var monthNames = "JanFebMarAprMayJunJulAugSepOctNovDec";
var today = new Date();
var thisDay;
var monthDays = new montharr(31, 28, 31, 30, 31, 30, 31, 31, 30,31, 30, 31);
year = today.getYear() + 0;
thisDay = today.getDate();
if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))
monthDays[1] = 29;
nDays = monthDays[today.getMonth()];
firstDay = today;
firstDay.setDate(1); 
testMe = firstDay.getDate();
if (testMe == 2)
firstDay.setDate(0); 
startDay = firstDay.getDay();
document.writeln("<CENTER>");
document.write("<TABLE BORDER>");
document.write("<TR><TH COLSPAN=7>");
document.write(monthNames.substring(today.getMonth() * 3,
(today.getMonth() + 1) * 3));
document.write(". ");
document.write(year);
document.write("<TR><TH>sun<TH>mon<TH>tue<TH>wed<TH>thu<TH>fri<TH>sat");
document.write("<TR>");
column = 0;
for (i=0; i<startDay; i++) {
document.write("<TD>");
column++;
}
for (i=1; i<=nDays; i++) {
document.write("<TD>");
if (i == thisDay)
document.write("<FONT COLOR=\"#FF0000\">")
document.write(i);
if (i == thisDay)
document.write("</FONT>")
column++;
if (column == 7) {
document.write("<TR>"); 
column = 0;
}
}
document.write("</TABLE>");
document.writeln("</CENTER>");
}
greeting();
document.write("</br>");
calendar();
document.write("");
// End -->
</SCRIPT>