import MockActions from './actions'
import alt from './alt'
import _ from 'lodash'

/* Automate BindListeners -->
bindListeners is generated automatically. Action definition must be same as Action declaration
*/

var bindListenersObject = {};
for(var i in MockActions) 
    if(typeof MockActions[i] === "function") 
        bindListenersObject[i] = MockActions[i];

export default alt.createStore({
    displayName: 'Secret_Project',
    bindListeners: bindListenersObject,
    state: {
        pageSelected: 'report',
    },

    /* Action declarations */
    getInitialData(){
        console.log("getInitialData is triggered...........")
    },

    storeSetState: function(object){    
        /* If you need an action to just setState at store, leverage the following function
            Example Usage - Actions.storeSetState({pageSelected: 'DragMapPage'});
        */
        this.setState(object)
    },
})