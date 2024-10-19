export default function DiaNoite({propsDiaNoite}) {
    if (propsDiaNoite == true) {
        return (
            <h1>Bom Dia</h1>
        )
    }

    else if (propsDiaNoite == false) {
        return (
            <h1>Boa Noite</h1>
        )
    }
}
