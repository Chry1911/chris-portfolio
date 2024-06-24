const portfolio = [
    {
        id: 0,
        projectName: "Maniva Cashier",
        url: "https://cashier-afterski-production.up.railway.app/login",
        image: "projects/maniva.webp",
        projectDetail: "Create a Responsive Web Application, to manage a Cash Desk of a restaurant self-service",
        technologiesUsed: [
            {
                tech: "Java Spring Boot"
            },
            {
                tech: "Vaadin"
            },
            {
                tech: "MySQL"
            },
            {
                tech: "Vaadin Flow"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 0,
        projectName: "Aste Giudiziarie",
        url: "#",
        image: "projects/aste login.webp",
        projectDetail: "A web application to manage and control auctions of judicial assets",
        technologiesUsed: [
            {
                tech: "Vaadin"
            },
            {
                tech: "Java Spring Boot"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    }
    
]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}
