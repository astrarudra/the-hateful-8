var alt = require('./alt');

class Actions { 
    constructor(){
        /* Action definition */
        this.generateActions(
            'storeSetState',
            'onClickBoxSelect',
            'getInitialData'
        );
    }
}

export default alt.createActions(Actions);