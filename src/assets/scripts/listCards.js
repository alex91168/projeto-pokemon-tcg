
import TCGdex from '@tcgdex/sdk'
const tcgdex = new TCGdex('pt');
(async () => {
    const set = await tcgdex.fetch('sets', 'sm115');
})();