
import optimizely from 'optimizely-client-sdk';
import datafile from '../config/optimizely';

const optimizelyClientInstance = optimizely.createInstance({ datafile: datafile });


export default optimizelyClientInstance;