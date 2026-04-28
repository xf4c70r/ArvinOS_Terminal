function Navbar(){

    const links = [
        {label: 'About', href: '#About'},
        {label: 'Experience', href: '#Exp'},
        {label: 'Projects', href: '#Projects'},
        {label: 'Publication', href: '#Pubs'},
        {label: 'Contact', href: '#Contact'},
        {label: 'Resume', href: '#'}
    ]

    return(
        <div className="bg-lime-100 sticky top-0 flex justify-between items-center px-8 py-4">
            <div className="ext-4xl font-bold">Arvind Sudarshan</div>
            <div>
                <ul className="flex list-none space-x-4">
                    {links.map((link) => (
                        <li key={link.href}>
                            <a className="text-lime-700 hover:text-lime-500" href={link.href}>{link.label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Navbar