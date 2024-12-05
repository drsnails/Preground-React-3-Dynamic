
export function ColorInput({ name = 'Popo' }) {

    const colors = [
        '#F44236',
        '#9C27B0',
        '#3F51B5',
        '#2196F3',
        '#4caf50',
        '#101010',
    ]

    return (
        <section className="color-input">
            <div className="items-container">
            </div>
            <h3>Hello {name}!, pick a color!</h3>
        </section >
    )
}