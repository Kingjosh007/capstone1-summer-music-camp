let theEvent = {
    fullName: "Global Music Summer Camp for Teenagers",
    shortName: "GMSCT",
    logo: "images/logo.png",
    venue: "Qwerty International Hotel, Douala, Cameroon",
    startDate: "2022-07-15",
    endDate: "2022-05-25",
};

var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

function dayNameFromDate(yyyymmdd)
{
    let date = new Date(yyyymmdd);
    return days[date.getDay()];
}

function updateDate()
{
    document.querySelector('.start-date').textContent = `${theEvent.startDate}(${dayNameFromDate(theEvent.startDate).slice(0,3).toUpperCase()})`;
    document.querySelector('.end-date').textContent = `${theEvent.endDate.split("-")[2]}(${dayNameFromDate(theEvent.endDate).slice(0,3).toUpperCase()})`
}

function updateEventInfos() 
{
    updateDate();
    document.querySelector('.logo-container img').src = "images/logo.png";
    document.querySelector('.title').innerHTML = `${theEvent.fullName.toUpperCase()} <span class="year">${theEvent.startDate.split("-")[0]}</span>`;
    document.querySelector('.venue').textContent = `@ ${theEvent.venue}`;
    document.querySelector('.event-short-name').textContent = `${theEvent.shortName} ${theEvent.startDate.split("-")[0]}`;
}

updateEventInfos();