function updateClock(){
    const now=new Date();
    let hrs=now.getHours();

    const ampm=hrs>=12? "PM":"AM";
    hrs= hrs % 12 || 12;
    hrs=hrs.toString().padStart(2,'0');

    const min=now.getMinutes().toString().padStart(2,'0');
    const sec=now.getSeconds().toString().padStart(2,'0');
    const timeString=`${hrs}:${min}:${sec} ${ampm}`;
    document.getElementById('clock').textContent=timeString;
}

updateClock();
setInterval(updateClock,1000);



