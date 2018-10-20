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
                'Size',
                (undefined === prm) ? prm : mf.func.getSize(prm)
            );
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
            tgt.style({
                'webkit-border-radius' : this.value().toString(),
                '-moz-border-radius'   : this.value().toString(),
                'border-radius'        : this.value().toString()
            });
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
