function Container({children}: any) {
    return (
        <div style={{
            scrollSnapType: 'y mandatory',
            height: '100vh',
            width: '100wh',
            overflow: 'scroll',
            scrollBehavior: 'smooth'
        }}>
            {children}
        </div>
    )
}

export default Container