import Text from "../Text"

function Tech({children}: any) {
    return (
        <span style={{
            border: '2.5px solid rgba(1,1,1,0.4)',
            padding: '5px',
        }}>
            <Text>{children}</Text>
        </span>
    )
}

export default Tech