export default interface ProjectSectionProps {
    title       : string
    description : string
    githubUrl   : string
    children    : any
    imgSource   : string
    altSource   ?: string
    reverse     : boolean
}