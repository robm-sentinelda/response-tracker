export class Response {
    id: string;
    name: string;
    responseType: string;
    responseTypeId: string;
    timeStamp: firebase.firestore.Timestamp;
    timStampString: string;
    closeStamp: firebase.firestore.Timestamp;
    closeStampString: string;
    timeDifference: number;
}
