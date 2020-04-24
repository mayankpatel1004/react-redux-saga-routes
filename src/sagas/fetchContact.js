import { put,call } from 'redux-saga/effects';

function* fetchContact(data) {
    // let dataObj = {
    //     username: data.data.username,
    //     useremail: data.data.useremail,
    //     userpassword: data.data.userpassword,
    //     about: data.data.about,
    //     userphoto: data.data.userphoto,
    //     usercontact: data.data.usercontact,
    //     startdate: data.data.startdate,
    //     enddate: data.data.enddate,
    //     language: data.data.language,
    //     customselect: data.data.customselect
    // }
    let dataObj = {
        "name": "test",
        "salary": "123",
        "age": "23",
        "id": 25
    }

    try {
        yield call("http://dummy.restapiexample.com/create", dataObj);
        yield put({type: "RECEIVE_CONTACT_DATA", user: dataObj});
    } catch (e) {
        yield put({type: "RECEIVE_CONTACT_DATA", message: e.message});
    }
}
export default fetchContact;