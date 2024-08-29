const PhaseURL = 'https://api.farmsense.net/v1/moonphases/?d=';
const today = Math.floor(new Date().getTime() / 1000);
const date = new Date();
let todaysdate = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
const completeday = 29.53059027777777;
async function getLunarPhase() {
    const response = await fetch(PhaseURL + today);
    const data = await response.json();
    return data[0];
}
getLunarPhase().then(phase => {
    console.log('Date:', todaysdate, date.getHours() + ':' + date.getMinutes());
    console.log('Phase:', phase.Phase);
    switch (phase.Phase) {
        case 'New Moon':
            console.log('Next phase: Waxing Crescent');
            break;
        case 'Waxing Crescent':
            console.log('Next phase: First Quarter');
            break;
        case 'First Quarter':
            console.log('Next phase: Waxing Gibbous');
            break;
        case 'Waxing Gibbous':
            console.log('Next phase: Full Moon');
            break;
        case 'Full Moon':
            console.log('Next phase: Waning Gibbous');
            break;
        case 'Waning Gibbous':
            console.log('Next phase: Third Quarter');
            break;
        case 'Third Quarter':
            console.log('Next phase: Waning Crescent')
            break;
        case 'Waning Crescent':
            console.log('Next phase: New Moon')
    }       
    console.log('Distance(:', phase.Distance, 'kilometers');
    console.log('Illumination:', phase.Illumination * 100 + '%');
    console.log('Period age:', (phase.Age).toFixed(2), 'days', '(' + (phase.Age / completeday * 100).toFixed(2) + '%' + ')');
    console.log('Period ending:', (completeday - phase.Age).toFixed(2), 'days', '(' + (100.00 - (phase.Age / completeday * 100).toFixed(2)).toFixed(2) + '%' + ')');
}).catch(error => {
    console.error('Error fetching lunar phase:', error);
});
