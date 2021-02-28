import Plugin from 'src/plugin-system/plugin.class';

export default class CustomProductListing extends Plugin {

    init() {
         this._registerEvents(this);
    }

    /**
     * register all events
     *
     * @private
     */
    _registerEvents()
    {
        let me = this;
        let inputGroup =  $('.input-group');

        inputGroup.on('click', '.plus', function(e) {
            me._incrementValue(e);
        });

        inputGroup.on('click', '.minus', function(e) {
            me._decrementValue(e);
        });
    }

    /**
     * increment counter
     *
     * @param e
     * @private
     */
     _incrementValue(e) {
        e.preventDefault();
        let fieldName = $(e.target).data('field');
        let maxQuantity = $(e.target).data('max-quantity');
        let parent = $(e.target).closest('div');
        let currentVal = parseInt(parent.find('input[name="' + fieldName + '"]').val(), 10);

        if (!isNaN(currentVal) && currentVal < maxQuantity) {
            parent.find('input[name="' + fieldName + '"]').val(currentVal + 1);
        } else if(!isNaN(currentVal) && currentVal > maxQuantity){
            parent.find('input[name="' + fieldName + '"]').val(maxQuantity);
        }
    }

    /**
     * Decrement counter
     *
     * @param e
     * @private
     */
     _decrementValue(e) {
        e.preventDefault();
        let fieldName = $(e.target).data('field');
        let parent = $(e.target).closest('div');
        let currentVal = parseInt(parent.find('input[name="' + fieldName + '"]').val(), 10);

        if (!isNaN(currentVal) && currentVal > 1) {
            parent.find('input[name="' + fieldName + '"]').val(currentVal - 1);
        }
    }

}
