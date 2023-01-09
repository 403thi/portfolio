function Container({children}: any) {
    return (
        <main style={{
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