function Container({children}: any) {
    return (
        <main style={{
            scrollSnapType: 'y mandatory',
            overflow: 'auto',
            height: '100vh',
            width: '100wh',
            margin: '0px',
        }}>
            {children}
        </main>
    )
}

export default Container