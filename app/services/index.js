import UtilitiesService from './utilities.service';
import FirebaseService from './firebase.service';

let servicesModule = angular.module('app.service', []);

servicesModule.service('UtilitiesService', UtilitiesService);
servicesModule.service('FirebaseService', FirebaseService);

export default servicesModule;
