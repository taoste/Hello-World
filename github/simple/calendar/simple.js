function Simple_Calendar()
{
   var    cal_CalendarCalendarData=new    Array(20);     
   var    cal_Calendarmadd=new    Array(12);     
   var    cal_CalendarTheDate=new    Date();     
   var    cal_CalendartgString="甲乙丙丁戊己庚辛壬癸";     
   var    cal_CalendardzString="子丑寅卯辰巳午未申酉戌亥";     
   var    cal_CalendarnumString="一二三四五六七八九十";     
   var    cal_CalendarmonString="正二三四五六七八九十冬腊";     
   var    cal_CalendarweekString="日一二三四五六";     
   var    cal_CalendarcYear;     
   var    cal_CalendarcMonth;     
   var    cal_CalendarcDay;     
   var    cal_CalendarcHour;     
   var    cal_CalendarcDateString;     
   var    cal_CalendarDateString;
   var    cal_CalendarWeekDayString;     
   
   var    CnYear;
   var    shortCnMonth="";
   var    yearString;
   var    monthString;
   var    dayString;
   var    weekString; 
   var    Browser=navigator.appName;     
      
   cal_Calendarinit=function()
   {       
       cal_CalendarCalendarData[0]=0x41A95;     
       cal_CalendarCalendarData[1]=0xD4A;     
       cal_CalendarCalendarData[2]=0xDA5;     
       cal_CalendarCalendarData[3]=0x20B55;     
       cal_CalendarCalendarData[4]=0x56A;     
       cal_CalendarCalendarData[5]=0x7155B;     
       cal_CalendarCalendarData[6]=0x25D;     
       cal_CalendarCalendarData[7]=0x92D;     
       cal_CalendarCalendarData[8]=0x5192B;     
       cal_CalendarCalendarData[9]=0xA95;     
       cal_CalendarCalendarData[10]=0xB4A;     
       cal_CalendarCalendarData[11]=0x416AA;     
       cal_CalendarCalendarData[12]=0xAD5;     
       cal_CalendarCalendarData[13]=0x90AB5;     
       cal_CalendarCalendarData[14]=0x4BA;     
       cal_CalendarCalendarData[15]=0xA5B;     
       cal_CalendarCalendarData[16]=0x60A57;     
       cal_CalendarCalendarData[17]=0x52B;     
       cal_CalendarCalendarData[18]=0xA93;     
       cal_CalendarCalendarData[19]=0x40E95;     
       cal_Calendarmadd[0]=0;     
       cal_Calendarmadd[1]=31;     
       cal_Calendarmadd[2]=59;     
       cal_Calendarmadd[3]=90;     
       cal_Calendarmadd[4]=120;     
       cal_Calendarmadd[5]=151;     
       cal_Calendarmadd[6]=181;     
       cal_Calendarmadd[7]=212;     
       cal_Calendarmadd[8]=243;     
       cal_Calendarmadd[9]=273;     
       cal_Calendarmadd[10]=304;     
       cal_Calendarmadd[11]=334;     
     }     
      
   cal_CalendarGetBit=function(m,n)     
   {       
         return    (m>>n)&1;     
   }     
      
   cal_Calendare2c=function()     
   {         
       var    total,m,n,k;     
       var    isEnd=false;     
       var    tmp=cal_CalendarTheDate.getYear();     
       if    (tmp<1900)      tmp+=1900;     
       total=(tmp-2001)*365     
           +Math.floor((tmp-2001)/4)     
           +cal_Calendarmadd[cal_CalendarTheDate.getMonth()]     
           +cal_CalendarTheDate.getDate()     
           -23;     
       if    (cal_CalendarTheDate.getYear()%4==0&&cal_CalendarTheDate.getMonth()>1)     
           total++;     
       for(m=0;;m++)     
       {         
           k=(cal_CalendarCalendarData[m]<0xfff)?11:12;     
           for(n=k;n>=0;n--)     
           {     
               if(total<=29+cal_CalendarGetBit(cal_CalendarCalendarData[m],n))     
               {       
                   isEnd=true;     
                   break;     
               }     
               total=total-29-cal_CalendarGetBit(cal_CalendarCalendarData[m],n);     
           }     
           if(isEnd)break;     
       }     
       cal_CalendarcYear=2001    +    m;     
       cal_CalendarcMonth=k-n+1;     
       cal_CalendarcDay=total;     
       if(k==12)     
       {     
           if(cal_CalendarcMonth==Math.floor(cal_CalendarCalendarData[m]/0x10000)+1)     
               cal_CalendarcMonth=1-cal_CalendarcMonth;     
           if(cal_CalendarcMonth>Math.floor(cal_CalendarCalendarData[m]/0x10000)+1)     
               cal_CalendarcMonth--;     
       }     
       cal_CalendarcHour=Math.floor((cal_CalendarTheDate.getHours()+3)/2);     
   }     
      
   cal_CalendarGetcDateString=function()     
   {   
       var    tmp="";     
       tmp+=cal_CalendartgString.charAt((cal_CalendarcYear-4)%10);        //年干     
       tmp+=cal_CalendardzString.charAt((cal_CalendarcYear-4)%12);        //年支     
       tmp+="年";     
       CnYear=tmp;     
       if(cal_CalendarcMonth<1)     
       {       
           shortCnMonth+="闰";     
           shortCnMonth+=cal_CalendarmonString.charAt(-cal_CalendarcMonth-1);     
       }     
       else     
           shortCnMonth+=cal_CalendarmonString.charAt(cal_CalendarcMonth-1);     
       shortCnMonth+="月";     
       shortCnMonth+=(cal_CalendarcDay<11)?"初":((cal_CalendarcDay<20)?"十":((cal_CalendarcDay<30)?"廿":"卅"));     
       if(cal_CalendarcDay%10!=0||cal_CalendarcDay==10)     
           shortCnMonth+=cal_CalendarnumString.charAt((cal_CalendarcDay-1)%10);     
       
       tmp+=shortCnMonth;
       cal_CalendarcDateString=tmp;     
       return    tmp;     
   }     
      
   cal_CalendarGetDateString =function()     
   {       
       var    tmp="";     
       var    t1=cal_CalendarTheDate.getYear();     
       if    (t1<1900)t1+=1900;     
       yearString=t1;
       monthString=(cal_CalendarTheDate.getMonth()+1);
       dayString=cal_CalendarTheDate.getDate();
       weekString=cal_CalendarTheDate.getDay(); 
       cal_CalendarWeekDayString ="星期"+cal_CalendarweekString.charAt(weekString);
       tmp+=yearString     
                 +"年"     
                 +monthString+"月"     
                 +dayString+"日";     
       cal_CalendarDateString=tmp;     
       return    tmp;     
    
   }     

  cal_CalendarSolarTerm=function(DateGL)
  {
      var SolarTermStr=new Array(
            "小寒","大寒","立春","雨水","惊蛰","春分",
            "清明","谷雨","立夏","小满","芒种","夏至",
            "小暑","大暑","立秋","处暑","白露","秋分",
            "寒露","霜降","立冬","小雪","大雪","冬至");
      var DifferenceInMonth=new Array(
            1272060,1275495,1281180,1289445,1299225,1310355,
            1321560,1333035,1342770,1350855,1356420,1359045,
            1358580,1355055,1348695,1340040,1329630,1318455,
            1306935,1297380,1286865,1277730,1274550,1271556);
      var DifferenceInYear=31556926;
      var BeginTime=new Date(1901/1/1);
      BeginTime.setTime(947120460000);
         for(;DateGL.getFullYear()<BeginTime.getFullYear();){
            BeginTime.setTime(BeginTime.getTime()-DifferenceInYear*1000);
         }
         for(;DateGL.getFullYear()>BeginTime.getFullYear();){
            BeginTime.setTime(BeginTime.getTime()+DifferenceInYear*1000);
         }
         for(var M=0;DateGL.getMonth()>BeginTime.getMonth();M++){
            BeginTime.setTime(BeginTime.getTime()+DifferenceInMonth[M]*1000);
         }
         if(DateGL.getDate()>BeginTime.getDate()){
            BeginTime.setTime(BeginTime.getTime()+DifferenceInMonth[M]*1000);
            M++;
         }
         if(DateGL.getDate()>BeginTime.getDate()){
            BeginTime.setTime(BeginTime.getTime()+DifferenceInMonth[M]*1000);
            M==23?M=0:M++;
         }
      var JQ="";
      if(DateGL.getDate()==BeginTime.getDate()){
        JQ+="今日<"+SolarTermStr[M]+">";
      }
      else if(DateGL.getDate()==BeginTime.getDate()-1){
        JQ+="明日<"+SolarTermStr[M]+">";
      }
      else if(DateGL.getDate()==BeginTime.getDate()-2){
        JQ+="后日<"+SolarTermStr[M]+">";
      }
      else{
       JQ="";
       if(DateGL.getMonth()==BeginTime.getMonth()){
          JQ+="本月";
       }
       else{
         JQ+="下月";
       }
       JQ+=BeginTime.getDate()+"日<"+SolarTermStr[M]+">";
      }
    return JQ;
  }


    this.init=function()
    {      
       cal_Calendarinit();     
       cal_Calendare2c();     
       cal_CalendarGetDateString();     
       cal_CalendarGetcDateString(); 
    }
    
    this.getEnDateString =function()
    {
        return cal_CalendarDateString;
    }   
    
    this.getCnDateString =function()
    {
        return cal_CalendarcDateString ;
    }   
    
    this.getJQString =function()
    {
        return cal_CalendarSolarTerm(new Date());
    }
    this.getYearString =function()
    {
        return yearString;
    }
    this.getMonthString =function()
    {
        return monthString
    }
    this.getDayString =function()
    {
        return dayString;
    }
    this.getWeekString =function()
    {
        return weekString;
    }
    this.getCalendarWeekString=function()
    {
        return cal_CalendarWeekDayString;    
    }
    this.getShortCnMonth=function()
    {
        return shortCnMonth;    
    }
    this.getCnYear=function()
    {
        return CnYear;    
    }    
}