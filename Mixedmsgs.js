let zodiac = {
    "Aries":["They're always up for a challenge","They are passionate and confident leaders.","They're very optimistic."],
    "Taurus":["Taurus have a very strong memory","They tend to work out their problems alone","They tend to work out their problems alone"],
    "Gemini":["They're social butterflies!","They're very genuine","They're great communicators."],
    "Cancer":["They can be nostalgic and love reminiscing","They have a hard time saying no","Cancer is one of the most sentimental signs of the Zodiac"],
    "Leo":["Leos are often seen as a symbol of power.","Ruled by the Sun, it's a very energetic sign.","They're not afraid to tell you how they feel."],
    "Virgo":["Virgos are born intellectual","Virgos are Tranquil by their nature","Virgo is a perfectionist","Virgos are creative"],
    "Libra":["Libras are nurturing and caring.","They're always in search of balance, harmony and justice.","They have trouble moving on."],
    "Scorpius":["Scorpios are one of the most intense and passionate signs.","They can often feel misunderstood.","They don't shy away from the unknown."],
    "Sagittarius":["They always have tons of energy and are up for any adventure","They can be impatient at times","They can be very philosophical"],
    "Capricornus":["Capricorns are very patient, with themselves and others.","They are gifted with a sharp intuition.","They have confidence that they can achieve anything."],
    "Aquarius":["Aquarius are the humanitarians of the zodiac.","They have quirky personalities.","They often choose the path less traveled."],
    "Pisces":["Pisces adore exploring their endless imagination.","They're extremely good at adapting to their surroundings.","They're very observant of other people's energy and personality."]
}

const SignFacts = (obj,zodiacSign) => {
    for(let prop in obj){
        if(prop === zodiacSign){
            console.log(`Your Zodiac sign is ${prop}.\nHere is some facts about your Zodiac sign, \n`);
            for(let i = 0; i < obj[prop].length; i++){
                console.log(obj[prop][i]);
            }
        }
    }
}

const checkSign = (month, day) => {
    let sign = '';
    if((month === 'March' && (21 <= day && day <= 31 ) ) || ( month === 'April' && 1 <= day && day <= 19)){
        sign = 'Aries';
    } else if((month === 'April' && 20 <= day && day <= 30 ) || ( month === 'May' && 1 <= day && day <= 20)){
        sign = 'Taurus';
    } else if((month === 'May' && 21 <= day && day <= 31 ) || ( month === 'June' && 1 <= day && day <= 21)){
        sign = 'Gemini';
    } else if((month === 'June' && 22 <= day && day <= 30 ) || ( month === 'July' && 1 <= day && day <= 22)){
        sign = 'Cancer';
    } else if((month === 'July' && 23 <= day && day <= 31 ) || ( month === 'August' && 1 <= day && day <= 22)){
        sign = 'Leo';
    } else if((month === 'August' && 23 <= day && day <= 31 ) || ( month === 'September' && 1 <= day && day <= 22)){
        sign = 'Virgo';
    } else if((month === 'September' && 23 <= day && day <= 30 ) || ( month === 'October' && 1 <= day && day <= 23)){
        sign = 'libra';
    } else if((month === 'October' && 24 <= day && day <= 31 ) || ( month === 'November' && 1 <= day && day <= 21)){
        sign = 'Scorpius';
    } else if((month === 'November' && 22 <= day && day <= 30 ) || ( month === 'December' && 1 <= day && day <= 21)){
        sign = 'Sagittarius';
    } else if((month === 'Decemebr' && 22 <= day && day <= 31 ) || ( month === 'January' && 1 <= day && day <= 19)){
        sign = 'Capricornus';
    } else if((month === 'January' && 20 <= day && day <= 31 ) || ( month === 'February' && 1 <= day && day <= 18)){
        sign = 'Aquarius';
    } else if((month === 'February' && 19 <= day && day <= 29 ) || ( month === 'March' && 1 <= day && day <= 20)){
        sign = 'Pisces';
    } else {
        return 'Please enter you birth date correctly.';
    }

    return SignFacts(zodiac,sign);
}
