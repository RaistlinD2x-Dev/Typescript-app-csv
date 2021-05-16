import { MatchReader } from './MatchReader';
// import { ConsoleReport } from './reportTargets/ConsoleReport'
import { Summary } from './Summary'


const matchReader = MatchReader.fromCsv('football.csv');
const summary = Summary.winsAnalysisWithHtmlReport('Man United')


matchReader.load();
summary.buildAndPrintReport(matchReader.matches);