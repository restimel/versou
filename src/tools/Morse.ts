
const codeMorse = new Map([
    [' ', '/'],
    ['-', '/'],
    ['_', '/'],
    ['**SOS**', '...---...'],
    ['**OVER**', '-.-'],
    ['**ROGER**', '.-.'],
    ['**STARTMESSAGE**', '.-.-'],
    ['**ENDMESSAGE**', '.-.-.'],
    ['**WAIT**', '.-...'],
    ['**BREAK**', '-...-'],
    ['**ERROR**', '........'],
    ['**SLOW**', '....-..'],
    ['**REPEAT**', '..--..'],
    ['**CORRECT**', '-.-.'],
    ['**NEGATIVE**', '-.'],
    ['A', '.-'],
    ['B', '-...'],
    ['C', '-.-.'],
    ['D', '-..'],
    ['E', '.'],
    ['F', '..-.'],
    ['G', '--.'],
    ['H', '....'],
    ['I', '..'],
    ['J', '.---'],
    ['K', '-.-'],
    ['L', '.-..'],
    ['M', '--'],
    ['N', '-.'],
    ['O', '---'],
    ['P', '.--.'],
    ['Q', '--.-'],
    ['R', '.-.'],
    ['S', '...'],
    ['T', '-'],
    ['U', '..-'],
    ['V', '...-'],
    ['W', '.--'],
    ['X', '-..-'],
    ['Y', '-.--'],
    ['Z', '--..'],
    ['0', '-----'],
    ['1', '.----'],
    ['2', '..---'],
    ['3', '...--'],
    ['4', '....-'],
    ['5', '.....'],
    ['6', '-....'],
    ['7', '--...'],
    ['8', '---..'],
    ['9', '----.'],
]);

/**
 * Convert string message in morse code.
 * morse code characters are:
 *  . (ti)
 *  - (taa)
 *    (space for letter separation)
 *  / (word separation)
 *
 *  In message, special characters can be added enclosed with **
 *  For example, to add the Wait signal it could be written: '**WAIT**'
 *  Special code are:
 *      SOS
 *      OVER
 *      ROGER
 *      STARTMESSAGE
 *      ENDMESSAGE
 *      WAIT
 *      BREAK
 *      ERROR
 *      SLOW
 *      REPEAT
 *      CORRECT
 *      NEGATIVE
 *
 */
export default function(message: string) {
    const chars = message.toUpperCase().split(/(\*{2}\w+\*{2})/);
    const code = chars.map((c) => codeMorse.get(c) || '/').join(' ')
        .replace(/^[ /]+|[ /]+$/g, '')
        .replace(/ +/g, ' ')
        .replace(/( *\/+ *)+/g, '/');

    return code;
}

export function vibratePattern(code: string, timeUnit = 100): VibratePattern {
    const blk = timeUnit / 4;
    const point = timeUnit / 4;
    const line = 3 * timeUnit / 4;
    const endLetter = 3 * timeUnit / 4;
    const timeMap = new Map([
        ['.', point],
        ['-', line],
        [' ', blk],
        ['/', endLetter],
    ]);

    const vibrate: VibratePattern = Array.from(code).map((c) => timeMap.get(c) || 0);

    return vibrate;
}
