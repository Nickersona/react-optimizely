import _ from 'lodash';
import optimizely from 'optimizely-client-sdk';
import datafile from '../config/optimizely.json';

const optimizelyClientInstance = optimizely.createInstance({ datafile: datafile });
console.log(optimizelyClientInstance.events)
const events = {};
_.each(datafile.events, function(event) {
	events[event.key] = (userId) => optimizelyClientInstance.track(event.key, userId);
});
// console.log(events);
export { events as events};
export default optimizelyClientInstance;