let moment  = require('moment');

export default function dateFormat(date) {
    return moment(date).format('DD/MM/YYYY')
}