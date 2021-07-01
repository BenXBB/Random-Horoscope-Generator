/* TEMPLATE MESSAGE

The random star sign is -------- and shares the plantery body of --------. You're feeling ------ from recent events. 
This emotion may or may not seem the way you currently feel at this point in time but ultimately you're just ----------. 
You should be absoutely ------ of the future.

*/

const starSigns = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
const starPlanet = ["Mars", "Venus", "Mercury", "Moon", "Sun", "Mercury", "Venus", "Pluto", "Jupiter", "Saturn", "Uranus", "Neptune"];
const feelingArr = ["hopeful", "greatful", "angry", "sadness", "enjoyment", "disgust", "relief", "contentment", "joy", "peace", "stressed", "anxious", "lonely", "lost", "desperate"];
const verb = ["having fun", "finding yourself", "shaking off the rust", "waiting for a sign", "standing up for yourself", "living your best life", "mourning", "not accepting the past", "losing yourself"];
const future = ["Weary", "hopeful", "anxious", "calm", "accepting", "open to new ideas", "active"]

function randomHoroscope () {
    let randomStarSign = Math.floor(Math.random() * starSigns.length);
    let randomFeelingArr = Math.floor(Math.random() * feelingArr.length);
    let randomVerb = Math.floor(Math.random() * verb.length);
    let randomFuture = Math.floor(Math.random() * future.length);

    return `The random star sign choosen is ${starSigns[randomStarSign]} and shares the plantery body of ${starPlanet[randomStarSign]}.\nYou're feeling ${feelingArr[randomFeelingArr]} from recent events. \nThis emotion may or may not seem the way you currently feel at this point in time but ultimately you're just ${verb[randomVerb]}. \nYou should be absoutely ${future[randomFuture]} of the future.`
};


console.log(randomHoroscope());