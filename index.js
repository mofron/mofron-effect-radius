/**
 * @file mofron-effect-radius/index.js
 * @author simpart
 */

/**
 * @class Radius
 * @brief radius style effect class
 */
mofron.effect.Radius = class extends mofron.Effect {
    
    constructor (prm) {
        try {
            super();
            this.name('Radius');
            
            this.prmOpt({value : prm});
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    value (val) {
        try {
            if (undefined === val) {
                return (undefined === this.m_value) ? 50 : this.m_value;
            }
            
            if (('number' !== typeof val) || (0 > val)) {
                throw new Error('invalid parameter');
            }
            this.m_value = val;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    enable () {
        try {
            this.target().style({
                'webkit-border-radius' : this.value() + 'px',
                '-moz-border-radius'   : this.value() + 'px',
                'border-radius'        : this.value() + 'px'
            });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    disable () {
        try {
            this.target().style({
                'webkit-border-radius' : '0px',
                '-moz-border-radius'   : '0px',
                'border-radius'        : '0px'
            });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.effect.Radius;
