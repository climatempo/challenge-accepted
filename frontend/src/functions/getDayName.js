export default function getDayName(day) {
    const names = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"]

    const splitted = day.split('/')
    let d = new Date(`${splitted[2]}-${splitted[1]}-${splitted[0]}T00:00:00`)

    return names[d.getDay()]
}
