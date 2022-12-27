function LinkIcon({href, className}: {href: string, className: string}) {
    return (
        <a href={href} style={{color:'inherit'}} target="_blank">
            <i className={className}></i>
        </a>
    )
}

export default LinkIcon