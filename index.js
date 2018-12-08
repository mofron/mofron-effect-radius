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
            this.value('0.5rem');
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
                (undefined === prm) ? prm : mf.func.getSize(prm).toString()
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
    
    /**
     * enable border radius
     *
     * @note private method
     */
    enable (tgt) {
        try {
            let type = this.type();
            if (0 === type.length) { 
                tgt.style({
                    'webkit-border-radius' : this.value(),
                    '-moz-border-radius'   : this.value(),
                    'border-radius'        : this.value()
                });
            } else {
                let set_sty = {};
                for (let tidx in type) {
                    set_sty['webkit-border-' + type[tidx] + '-left-radius']  = this.value();
                    set_sty['webkit-border-' + type[tidx] + '-right-radius'] = this.value();
                    set_sty['-moz-border-'   + type[tidx] + '-left-radius']  = this.value();
                    set_sty['-moz-border-'   + type[tidx] + '-right-radius'] = this.value();
                    set_sty['border-'        + type[tidx] + '-left-radius']  = this.value();
                    set_sty['border-'        + type[tidx] + '-right-radius'] = this.value();
                }
                tgt.style(set_sty);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * disable border radius
     *
     * @note private method
     */
    disable (tgt) {
        try {
            if (0 === this.type().length) {
                tgt.style({
                    'webkit-border-radius' : null,
                    '-moz-border-radius'   : null,
                    'border-radius'        : null
                });
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.effect.Radius;
/* end of file */
