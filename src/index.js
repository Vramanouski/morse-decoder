const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let any = expr.split('**********');
    let wordToBeSolved = any.map(function (decode) {
    const dividerByLength = decode.length / 10;
    let whatDoWeSee = '';
      
        for (let i = 0; i < dividerByLength; i++) {
            let wordToBeSolved = '';
                for (let s = i * 10; s < i * 10 + 10; s += 2) {
                    if (decode[s] + decode[s + 1] === '10') {
                        wordToBeSolved += '.';
                         } else if (decode[s] + decode[s + 1] === '11') {
                             wordToBeSolved += '-';
                         }
                   }
      
            whatDoWeSee += MORSE_TABLE[wordToBeSolved];
          }
          return whatDoWeSee;
        });
      
        return wordToBeSolved.join(' ');
      }
       
      module.exports = { 
        decode,   
        };
