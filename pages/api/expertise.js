const expertise = [
    {
        id: 0,
        title: 'Full Stack Development',
        desc: 'With a robust background in full stack development, I specialize in crafting comprehensive web applications utilizing Java Spring Boot, Vaadin, and databases like MongoDB or MySQL. My proficiency encompasses server-side rendering, seamless API integration, and adept database management. I deliver dynamic and efficient web solutions tailored to the specific needs of clients, ensuring top-notch performance and reliability.',
    },
    {
        id: 1,
        title: 'Scrum and Jira',
        desc: "My expertise in Jira and Scrum methodologies enhances project management and team collaboration. I leverage Jira for task allocation, prioritization, and tracking progress, while Scrum practices like daily stand-ups, sprint planning, and retrospectives drive efficient teamwork. This combination ensures the timely delivery of high-quality software solutions.",
    },
    {
        id: 2,
        title: 'UI/UX Design',
        desc: 'Proficient in design tools such as Figma, Adobe XD, and Adobe Illustrator, I have honed my skills in UI/UX and graphic design through hackathons and freelance projects. Design is my passion, fueling my creativity and continuous growth in this field. I aim to create intuitive and visually appealing user interfaces that enhance the overall user experience.',
    },
    {
        id: 3,
        title: 'GitHub',
        desc: "GitHub is a cornerstone for version control and collaborative development in my workflow. Its user-friendly interface, coupled with features like pull requests and issue tracking, streamlines the development process. Continuous integration on GitHub keeps the codebase current, making it an indispensable tool for successful project delivery.",
    }
]


export default function handler(req, res) {
    res.status(200).json(expertise)
}
