import {paxios} from '../../utilities/axios';

export const appointment = async (email,fullname, date, phone) => {
    try {
        const {data} = await paxios.post("/email/", {
            email: email,
            fullname: fullname,
            date: date,
            phone: phone
        });
        return data;
    } catch (e) {
        throw(e);
    }
}
