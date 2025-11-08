import { LightningElement, wire } from 'lwc';
import getTrainings from '@salesforce/apex/TrainingController.getTrainings';

export default class TrainingList extends LightningElement {
    trainings;
    error;

    @wire(getTrainings)
    wiredTrainings({ error, data }) {
        if (data) {
            this.trainings = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.trainings = undefined;
        }
    }
}
