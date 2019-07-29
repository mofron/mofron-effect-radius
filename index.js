/**
 * @file mofron-effect-radius/index.js
 * @brief radius effect for mofron
 * @author simpart
 */
const mf = require('mofron');

mf.effect.Radius = class extends mf.Effect {
    /**
     * initialize radius effect
     *
     * @param (object) effect option
     * @param (string) radius size (css size value)
     */
    constructor (po) {
        try {
            super();
            this.name('Radius');
            this.prmMap('value');
            
            this.value("0.5rem");
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * setter/getter radius size
     *
     * @param (string) radius size (css size value)
     * @return (string) radius size
     */
    value (prm) {
        try { return this.member("value", "size", prm); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    type (prm) {
        try { return this.arrayMember('type', 'string', prm); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    contents (cmp) {
        try {
            let type = this.type();
            let val  = this.value().toString();
            if (0 === type.length) {
                cmp.style({
                    'webkit-border-radius' : val,
                    '-moz-border-radius'   : val,
                    'border-radius'        : val
                });
            } else {
                let set_sty = {};
                for (let tidx in type) {
                    set_sty['webkit-border-' + type[tidx] + '-radius']  = val;
                    set_sty['webkit-border-' + type[tidx] + '-radius'] = val;
                    set_sty['-moz-border-'   + type[tidx] + '-radius']  = val;
                    set_sty['-moz-border-'   + type[tidx] + '-radius'] = val;
                    set_sty['border-'        + type[tidx] + '-radius']  = val;
                    set_sty['border-'        + type[tidx] + '-radius'] = val;
                }
                cmp.style(set_sty);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.effect.Radius;
/* end of file */
