import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
const heroAsciiArt = `
██████╗ ███████╗███████╗██╗   ██╗███╗   ███╗███████╗
██╔══██╗██╔════╝██╔════╝██║   ██║████╗ ████║██╔════╝
██████╔╝█████╗  █████╗  ██║   ██║██╔████╔██║█████╗  
██╔══██╗██╔══╝       ██╗██║   ██║██║╚██╔╝██║██╔══╝  
██║  ██║███████╗███████║╚██████╔╝██║ ╚═╝ ██║███████╗
╚═╝  ╚═╝╚══════╝╚══════╝  ╚═════╝ ╚═╝     ╚═╝╚══════╝

`

const skills = ["C", "C++", "Java", "Python", "Data Structures & Algorithms", "HTML", "CSS", "JavaScript","ROS 2","Git","DBMS","embedded C","Micro python","Bash Scripting"]

const interests = ["AI/ML", "Robots", "Open Source", "Competitive Programming"]

const projects = [
  {
    file: "library_manager.java",
    command: "  ./run projects.py   --open library_manager",
    title: "Library Management System",
    description: "End-to-end Java application to track books, members, and circulation with a desktop UI.",
    tech: "Java • OOP • MySQL",
  },
  {
    file: "portfolio_site.js",
    command: "  ./run projects.py   --open portfolio_site",
    title: "Portfolio Website",
    description:
      "Responsive personal website built with semantic HTML, modular CSS, and vanilla JavaScript interactions.",
    tech: "HTML • CSS • JavaScript",
  },
  {
    file: "chatbot.py",
    command: "./run projects.py --open chatbot",
    title: "Python Chatbot",
    description: "CLI-based conversational bot leveraging NLP libraries to simulate FAQ responses.",
    tech: "Python • NLP • CLI",
  },
]

const achievements = [
  {
    file: "leetcode_stats.log",
    detail: "Solved 300+ problems on LeetCode — consistent daily practice on algorithms.",
  },
  {
    file: "hackathons.csv",
    detail: "Active participant in university and community hackathons, collaborating on rapid prototypes.",
  },
  {
    file: "codeforces_rank.json",
    detail: "Ranked within the top 10% of Codeforces contests through regular competitive programming.",
  },
]

const contactCommands = [
  {
    label: "Email",
    value: "pastrystrawberry99.com",
    href: "mailto:pastrystrawberry99@gmail.com",
    command: "./run contact.sh --send email",
  },
  {
    label: "GitHub",
    value: "https://github.com/pastrystrawberry",
    href: "https://github.com/pastrystrawberry",
    command: "./run contact.sh --open github",
  },
  {
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/biplav-parthasarathi-rout-673a10352/",
    href: "https://www.linkedin.com/in/biplav-parthasarathi-rout-673a10352/",
    command: "./run contact.sh --open linkedin",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen terminal-bg text-green-400">
      <header className="border-b-2 border-green-400 bg-black/90">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="text-center font-mono">
            <pre className="text-green-400 text-xs md:text-sm mb-4 leading-tight">{heroAsciiArt}</pre>
            <h1 className="font-mono text-2xl md:text-4xl font-bold text-green-400 mb-2 glitch">~/biplav-resume$</h1>
            <p className="font-mono text-sm text-green-300">
              &gt; Initializing resume.exe for Biplav Parthsarathi Rout...
            </p>
            <p className="font-mono text-xs text-green-500 mt-2">
              [STATUS] Age: 18 | 2nd year B.Tech, Computer Science and Engineering
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12 font-mono">
        {/* About Section */}
        <section className="mb-16">
          <div className="max-w-2xl mx-auto">
            <div className="bg-black/80 border-2 border-green-400 p-6 mb-8">
              <h2 className="font-mono text-xl font-bold text-green-400 mb-4">&gt; ./run about_me.exe</h2>
              <div className="text-green-300 text-sm leading-relaxed space-y-2">
                <p>&gt; Name: Biplav Parthsarathi Rout</p>
                <p>&gt; Education: 2nd year B.Tech in Computer Science and Engineering</p>
                <p>&gt; Goof balling round tech & trying to craft efficient systems and playful interfaces.</p>
                <p>&gt; Seeking opportunities to merge AI/ML research with production-grade web development & Robots.</p>
                <p>&gt; Believes every commit should tell a story and every terminal output should delight.</p>
              </div>
            </div>
            <Button className="bg-green-600 hover:bg-green-500 text-black font-mono font-bold px-6 py-2 border-2 border-green-400 transition-all duration-200 hover:shadow-lg hover:shadow-green-400/50">
              &gt; print_resume.sh
            </Button>
          </div>
        </section>

        {/* Skills and Interests */}
        <section className="mb-16">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="bg-black/80 border-2 border-green-400">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <Badge className="bg-green-600 text-black font-mono text-xs font-bold border border-green-400">
                    skills.c
                  </Badge>
                  <span className="font-mono text-xs text-green-500">./compile skills.c</span>
                </div>
                <CardTitle className="font-mono text-lg font-bold text-green-400">Core Competencies</CardTitle>
                <CardDescription className="font-mono text-green-500 text-xs">
                  Languages &amp; tooling ready for execution
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-green-300 text-sm leading-relaxed">
                  {skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2">
                      <span className="text-green-500">[OK]</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-black/80 border-2 border-green-400">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <Badge className="bg-green-600 text-black font-mono text-xs font-bold border border-green-400">
                    interests.cfg
                  </Badge>
                  <span className="font-mono text-xs text-green-500">./tail interests.cfg</span>
                </div>
                <CardTitle className="font-mono text-lg font-bold text-green-400">Interests</CardTitle>
                <CardDescription className="font-mono text-green-500 text-xs">
                  Modules currently in active development
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-green-300 text-sm leading-relaxed">
                  {interests.map((interest) => (
                    <li key={interest} className="flex items-center gap-2">
                      <span className="text-green-500">$</span>
                      <span>{interest}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Projects & Achievements */}
        <section>
          <h2 className="font-mono text-xl font-bold text-green-400 mb-8 text-center">
            &gt; ls -la ./projects_and_achievements/
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <Card
                key={project.file}
                className="group bg-black/80 border-2 border-green-600 hover:border-green-400 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/30"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="bg-green-600 text-black font-mono text-xs font-bold border border-green-400">
                      {project.file}
                    </Badge>
                    <span className="font-mono text-xs text-green-500">{project.command}</span>
                  </div>
                  <CardTitle className="font-mono text-lg font-bold text-green-400 group-hover:text-green-300 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="font-mono text-green-500 text-xs">{project.tech}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-mono text-green-300 text-sm leading-relaxed">{project.description}</p>
                </CardContent>
              </Card>
            ))}

            <Card className="bg-black/80 border-2 border-green-600 md:col-span-2">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <Badge className="bg-green-600 text-black font-mono text-xs font-bold border border-green-400">
                    achievements.log
                  </Badge>
                  <span className="font-mono text-xs text-green-500">./grep success achievements.log</span>
                </div>
                <CardTitle className="font-mono text-lg font-bold text-green-400">Achievements Timeline</CardTitle>
                <CardDescription className="font-mono text-green-500 text-xs">
                  Signals from continuous learning loops
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-green-300 text-sm leading-relaxed">
                  {achievements.map((achievement) => (
                    <li key={achievement.file} className="flex flex-col gap-1">
                      <span className="text-green-500 text-xs">{achievement.file}</span>
                      <span>{achievement.detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact */}
        <section className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-black/80 border-2 border-green-400">
            <CardHeader>
              <CardTitle className="font-mono text-lg font-bold text-green-400">&gt; ./run contact.sh</CardTitle>
              <CardDescription className="font-mono text-green-300 text-sm">
                Pipe messages directly to the developer console
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {contactCommands.map((entry) => (
                  <div
                    key={entry.label}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border border-green-600 px-4 py-3 bg-black/60"
                  >
                    <div className="text-left">
                      <p className="text-green-400 text-sm font-bold">{entry.label}</p>
                      <p className="text-green-300 text-sm">{entry.value}</p>
                    </div>
                    <Button
                      asChild
                      variant="ghost"
                      className="font-mono text-green-400 hover:text-green-300 hover:bg-green-900/30 px-3 py-1 h-auto"
                    >
                      <a href={entry.href} target="_blank" rel="noopener noreferrer">
                        {entry.command}
                      </a>
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="border-t-2 border-green-400 bg-black/90 mt-20">
        <div className="max-w-4xl mx-auto px-6 py-8 text-center">
          <p className="font-mono text-green-500 text-sm">
            &gt; © {new Date().getFullYear()} Biplav Parthsarathi Rout | Terminal resume powered by passion and
            caffeine.
          </p>
        </div>
      </footer>
    </div>
  )
}
