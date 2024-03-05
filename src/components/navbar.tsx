type LinkProps = {
    name: string,
    url: string,
}

interface NavbarProps {
    title: string;
    links: LinkProps[];
}



const Navbar = ({ title, links }: NavbarProps) => {
    return (
        <div className="flex flex-row justify-between">
            <h1>{title}</h1>
            <nav>
                {
                    links.map((link, i) => {
                        return <a href={link.url} key={i} className="px-2">{link.name}</a>
                    })
                }
            </nav>
        </div>
    )
}

export default Navbar