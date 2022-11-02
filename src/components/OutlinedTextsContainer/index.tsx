import OutlinedTextsContainerProps from "../../types/OutlinedTextsContainerProps";

function OutlinedTextsContainer({children, vertical=false, mainText}: OutlinedTextsContainerProps) {

  const top  = vertical? "-85px" 
               : "0px"

  const left = vertical? "0px" 
               : "-120px"

  const direction = vertical? "column-reverse"
                    : "row-reverse"

  return (
    <div style={{
        position: 'relative',
      }}>
        {mainText}
        <div style={{
          position: 'absolute',
          display: 'flex',
          flexDirection: direction,
          top: top,
          left: left,
          height: '100%',
          width: '100%',
          pointerEvents: 'none',
          zIndex: '0',
        }}>
          {children}
        </div>
    </div>
    )
}

export default OutlinedTextsContainer