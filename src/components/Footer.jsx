const gitHubLink = "https://gitHub.com/jsondata";
const getFullYear = new Date().getFullYear();

export default function Footer() {

    return (
        <footer>
            <p>&copy; {getFullYear}</p>
            <p><a href={gitHubLink} target="_blank"
                rel="noreferrer"></a></p>
        </footer>
    )
}