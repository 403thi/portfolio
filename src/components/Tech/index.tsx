import Text from "../Text"

function Tech({children}: any) {
    return (
        <span style={{
            border: '2.5px solid rgba(1,1,1,0.4)',
            padding: '6px',
        }}>
            <Text>{children}</Text>
        </span>
    )
}

export default Tech