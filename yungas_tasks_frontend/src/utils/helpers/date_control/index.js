import moment from 'moment'

export const getDateMoment = (date) => {
    if (moment(date).isValid()) {
        return moment(date).format('YYYY-MM-DD')
    }

    return moment()
}

export const getDateTimeMoment = (date) => {
    if (moment(date).isValid()) {
        return moment(date).format('YYYY-MM-DD HH:mm:ss')
    }

    return moment()
}