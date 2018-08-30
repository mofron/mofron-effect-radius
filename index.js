/**
 * @file mofron-effect-radius/index.js
 * @brief radius effect for mofron
 * @author simpart
 */
const mf = require('mofron');
/**
 * @class Radius
 * @brief radius effect for mofron
 */
mf.effect.Radius = class extends mf.Effect {
    
    constructor (po) {
        try {
            super();
            this.name('Radius');
            this.prmMap('value');
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    value (val) {
        try {
            if (undefined === val) {
                /* getter */
                if (undefined === this.m_value) {
                    this.value('0.5rem');
                }
                return this.m_value;
            }
            /* setter */
            this.m_value = mf.func.getSizeObj(val);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    enable (tgt) {
        try {
            tgt.style({
                'webkit-border-radius' : this.value().value(),
                '-moz-border-radius'   : this.value().value(),
                'border-radius'        : this.value().value()
            });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    disable () {
        try {
            tgt.style({
                'webkit-border-radius' : null,
                '-moz-border-radius'   : null,
                'border-radius'        : null
            });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.effect.Radius;
/* end of file */
