function Container({children}: any) {
    return (
        <main style={{
            scrollSnapType: 'y mandatory',
            overflow: 'scroll',
            height: '100vh',
            width: '100wh',
        }}>
            {children}
        </main>
    )
}

export default Container