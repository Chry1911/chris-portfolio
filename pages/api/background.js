const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Bachelor of Computer System Engineering',
                degree: 'Unipegaso',
                detail: "Bachelor's Degree in Computer System Engineering from Unipegaso.",
                year: '2024'
            },
            {
                id: 1,
                title: 'Bachelor of Computer Science',
                degree: 'University of Study of Insubria Varese and Como',
                detail: "Bachelor's studies, retired 1 exam to go",
                year: '2010-2018'
            },
            {
                id: 2,
                title: 'Diploma Ragioniere Programmatore',
                degree: 'ISIS Città di Luino',
                detail: "Completed 5 years school with diploma in Ragioniere Programmatore, graduated with 82/100",
                year: '2006-2010'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Goodcode SA',
                role: 'Head of Development',
                url: 'https://goodcode.ch/',
                desc: 'As the Head of Development, I led a team of developers in creating and maintaining web applications for our clients. I managed key accounts, communicated with clients, handled change requests, and assigned tasks to team members.',
                year: '01/2022 - 05/2024',
                location: 'Goodcode SA, Switzerland, Mendrisio, Via Rime 38 6850'
            },
            {
                id: 2,
                title: 'Goodcode GmbH',
                role: 'Full Stack Developer',
                url: 'https://goodcode.ch/',
                desc: 'As a Full Stack Developer, I developed web applications for our clients using the latest technologies. I also worked extensively with Jira and Confluence for project management and documentation.',
                year: '11/2021 - 05/2024',
                location: 'Goodcode GmbH, Switzerland, Mendrisio, Via Rime 38 6850'
            },
            {
                id: 3,
                title: 'Ticicom SA',
                role: 'IT Support & Consultant',
                url: 'https://www.ticicom.ch/',
                desc: "As an IT Support & Consultant, I managed Office 365 licenses, maintained the server, and provided technical support to our clients, including remote assistance. Additionally, I served as a consultant to clients on various IT-related issues.",
                year: '06/2015 - 10/2020',
                location: 'Ticicom SA, Switzerland, Tesserete Capriasca, Via al Poggio 1'
            },
            {
                id: 4,
                title: 'Unimedia Soft SRL',
                role: 'Full Stack Developer & Mobile Developer',
                url: 'https://www.unimediasoft.it/',
                desc: "As a Full Stack Developer and Mobile Developer, I developed the web application ALPHA and the ALPHA Mobile application for our clients. I also provided technical support to clients through remote connection.",
                year: '06/2015 - 10/2020',
                location: 'Unimedia Soft SRL, Italy, Varese, Via Staurenghi 28, 21100'
            },
            {
                id: 5,
                title: 'Casa di Cura Le Terrazze',
                role: 'C.E.D Manager',
                url: 'https://www.leterrazze.it/',
                desc: "As the C.E.D Manager, I managed the server, provided technical support, and developed applications. I also offered remote technical support to clients.",
                year: '06/2011 - 10/2012',
                location: 'Casa di Cura Le Terrazze, Italy, Cunardo, Via Ugo Foscolo 6b, 21035'
            }
        ]
        
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
