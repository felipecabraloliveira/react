import Item from "./Item"

function List() {
    return (
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca="Ferrari" lancamento={1985} />
                <Item marca="Fiat" lancamento={1964} />
                <Item marca="Mercedes" lancamento={1970} />
                <Item marca="Chevroled" lancamento={1999} />
                <Item />
                <Item />
            </ul>
        </>
    )
}

export default List