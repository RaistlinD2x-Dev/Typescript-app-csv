import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';

import { CsvFileReader } from './CsvFileReader_2';


const csvFileReader = new CsvFileReader('football.csv')
const matchReader = new MatchReader(csvFileReader);


matchReader.load();

let manUnitedWins = 0;

for (let match of matchReader.matches) {
    if(match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        manUnitedWins++;
    } else if (match [2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        manUnitedWins++;
    }
}


console.log(`Man United won ${manUnitedWins} games!!`)







// const reader = new MatchReader('football.csv');
// reader.read();

// console.log(reader.data)

//comment

// console.log(reader.data)







// console.log(matches);
