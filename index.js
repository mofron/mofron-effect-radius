/**
 * @file mofron-effect-radius/index.js
 * @author simpart
 */

/**
 * @class Radius
 * @brief radius style effect class
 */
mofron.effect.Radius = class extends mofron.Effect {
    
    value (val) {
        try {
            if (undefined === val) {
                if (null === this.param) {
                    return 50;
                }
                return this.param;
            }
            
            if (('number' !== typeof val) || (0 > val)) {
                throw new Error('invalid parameter');
            }
            this.param = val;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    initEffect (flg, eff) {
        try {
            if (true === flg) {
                eff.target.style('webkit-border-radius', '0px');
                eff.target.style('-moz-border-radius'  , '0px');
                eff.target.style('border-radius'       , '0px');
            } else {
                eff.target.style('webkit-border-radius', this.value() + 'px');
                eff.target.style('-moz-border-radius'  , this.value() + 'px');
                eff.target.style('border-radius'       , this.value() + 'px');
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    
    effectConts (flg, eff) {
        try {
            if (true === flg) {
                eff.target.style('webkit-border-radius', this.value() + 'px');
                eff.target.style('-moz-border-radius'  , this.value() + 'px');
                eff.target.style('border-radius'       , this.value() + 'px');
            } else {
                eff.target.style('webkit-border-radius', '0px');
                eff.target.style('-moz-border-radius'  , '0px');
                eff.target.style('border-radius'       , '0px');
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
