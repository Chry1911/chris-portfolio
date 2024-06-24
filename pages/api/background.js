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
                desc: 'As Head of Development, I lead a team of developers to create and maintain web applications for our clients. I have keyaccounting with customers, get in touch with them, manage change request, and assign to each member the tasks',
                year: '01/2022 - 05/2024',
                location: 'Goodcode SA, Switzerland, Mendrisio, Via Rime 38 6850'
            },
            {
                id: 2,
                title: 'Goodcode GmbH',
                role: 'Full Stack Developer',
                url: 'https://goodcode.ch/',
                desc: 'I work as a Full Stack Developer, I work on the development of web applications for our clients. I also work on the development of the applications, by using the latest technologies, Jira and Confluence.',
                year: '11/2021 - 05/2024',
                location: 'Goodcode SA, Switzerland, Mendrisio, Via Rime 38 6850'
            },
            {
                id: 3,
                title: 'Ticicom SA',
                role: 'IT Support & Consultant',
                url: 'https://www.ticicom.ch/',
                desc: "I work as IT Support, Manage office 365 licenses, manage the server, and do the technical support for our clients. I also do the technical support for our clients with remote connection. I also work as a consultant for our clients.",
                year: '06/2015 - 10/2020',
                location: 'Ticicom SA, Switzerland, Tesserete Capriasca, Via al poggio 1'
            },
            {
                id: 4,
                title: 'Unimedia Soft SRL',
                role: 'Full Stack Developer & Mobile Developer',
                url: 'https://www.unimediasoft.it/',
                desc: "I work as a Full Stack Developer and Mobile Developer, I work on the development of web application ALPHA and ALPHA Mobile application for our clients. I also do technical support for our clients with remote connection.",
                year: '06/2015 - 10/2020',
                location: 'Unimedia Soft SRL, Italy, Varese, Via Staurenghi 28, 21100'
            },
            {
                id: 5,
                title: 'Casa di Cura Le Terrazze',
                role: 'C.E.D Manager',
                url: 'https://www.leterrazze.it/',
                desc: "I work as C.E.D Manager, I manage the server, the technical support for our clients, and the development of the applications. I also do the technical support for our clients with remote connection.",
                year: '06/2011 - 10/2012',
                location: 'Casa di Cura Le Terrazze, Italy, Cunardo, Via Ugo Foscolo 6b, 21035'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
