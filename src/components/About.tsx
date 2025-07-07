

const About = () => {
    return(
         <div className="container">
        <div className="about-header">
            <h1 className="about-title">About</h1>
            <div className="dot"></div>
        </div>
        
        <div className="divider"></div>
        
        <div className="content-grid">
            <div className="about-text">
                <p>
                    <span className="highlight text-xs">Full-stack web developer</span> focused on building responsive, engaging 
                    websites tailored for individuals and small businesses. I create seamless digital experiences 
                    that align with your goals, ensuring your website looks great and works flawlessly across all devices.
                </p>
                
                <p>
                    I specialize in crafting user-friendly interfaces and optimizing website performance for speed and 
                    accessibility. Alongside development, I offer <span className="highlight">SEO and copywriting services</span> 
                    to boost your visibility, strengthen your message, and help you connect with the right audience online.
                </p>
                
                <p>
                    My technical stack includes React and Next.js for frontend development, paired with backend tools 
                    like Node.js, PostgreSQL, and MongoDB to build robust full-stack applications. I also integrate 
                    AI tools such as <span className="highlight">ChatGPT, GitHub Copilot, and Midjourney</span> to streamline 
                    my workflow and enhance creativity and productivity.
                </p>
            </div>
            
            <div className="stack-section">
                <div className="stack-header">
                    <div className="stack-icon">⚡</div>
                    <h3 className="stack-title">Stack</h3>
                </div>
                
                <div className="tech-grid">
                    <div className="tech-tag">Next.js</div>
                    <div className="tech-tag">React</div>
                    <div className="tech-tag">JavaScript</div>
                    <div className="tech-tag">TypeScript</div>
                    <div className="tech-tag">Python</div>
                    <div className="tech-tag">Redux</div>
                    <div className="tech-tag">zustand</div>
                    <div className="tech-tag">Node.js</div>
                    <div className="tech-tag">Express</div>
                    <div className="tech-tag">MongoDB</div>
                    <div className="tech-tag">MySql</div>
                    <div className="tech-tag">Appwrite</div>
                    <div className="tech-tag">GenAI</div>
                    <div className="tech-tag">Supabase</div>
                    <div className="tech-tag">PostgreSQL</div>
                    <div className="tech-tag">Firebase</div>
                    <div className="tech-tag">shadcn/ui</div>
                    <div className="tech-tag">GraphQL</div>
                    <div className="tech-tag">three.js</div>
                    <div className="tech-tag">TanStack</div>
                    <div className="tech-tag">Tailwind</div>
                    <div className="tech-tag">Git</div>
                    <div className="tech-tag">GitHub</div>
                    <div className="tech-tag">Figma</div>
                    <div className="tech-tag">GSAP</div>
                    <div className="tech-tag">Motion</div>
                    <div className="tech-tag">React Native</div>
                    {/* <div className="tech-tag">Windsurf</div> */}
                    {/* <div className="tech-tag">Expo</div> */}
                </div>
            </div>
        </div>
       
    </div>
    )
}

export default About;