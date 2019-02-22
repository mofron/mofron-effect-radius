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
     * @param p1 (object) effect option
     * @param p1 (string) radius size (css size value)
     */
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
    
    /**
     * setter/getter radius size
     *
     * @param p1 (string) radius size (css size value)
     * @param p1 (undefined) call as getter
     * @return (string) radius size
     */
    value (prm) {
        try {
            return this.member(
                'value',
                'string',
                (undefined === prm) ? prm : mf.func.getSize(prm).toString(),
                '0.5rem'
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    type (prm) {
        try {
            if (undefined !== prm) {
                if ( ('top'    !== prm) &&
                     ('bottom' !== prm) ) {
                    throw new Error('invalid parameter');
                }
            }
            return this.arrayMember('type', 'string', prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    contents (cmp) {
        try {
            let type = this.type();
            let val  = this.value();
            if (0 === type.length) {
                cmp.style({
                    'webkit-border-radius' : val,
                    '-moz-border-radius'   : val,
                    'border-radius'        : val
                });
            } else {
                let set_sty = {};
                for (let tidx in type) {
                    set_sty['webkit-border-' + type[tidx] + '-left-radius']  = val;
                    set_sty['webkit-border-' + type[tidx] + '-right-radius'] = val;
                    set_sty['-moz-border-'   + type[tidx] + '-left-radius']  = val;
                    set_sty['-moz-border-'   + type[tidx] + '-right-radius'] = val;
                    set_sty['border-'        + type[tidx] + '-left-radius']  = val;
                    set_sty['border-'        + type[tidx] + '-right-radius'] = val;
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
