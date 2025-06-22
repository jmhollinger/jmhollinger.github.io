'use client'

import { useState } from 'react'
import { Check, Linkedin, Github, Mail, Phone, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu'
import resumeData from './resume_data.json'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Sidebar */}
      <nav className={`fixed top-0 left-0 h-full w-68 bg-primary text-primary-foreground z-50 transform transition-transform duration-300 lg:translate-x-0 ${
        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-6">
          <div className="text-center mb-6">
            <div className="hidden lg:block">
              <Avatar className="w-40 h-40 mx-auto mb-4 border-8 border-primary-foreground/20">
                <AvatarImage src="/profile.jpg" alt={resumeData.about.name} />
                <AvatarFallback className="text-2xl font-bold">
                  {resumeData.about.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
            </div>
            <div className="lg:hidden text-xl font-bold">{resumeData.about.name}</div>
          </div>
          
          <NavigationMenu orientation="vertical" className="w-full">
            <NavigationMenuList className="flex-col space-y-2">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Button 
                    variant="ghost" 
                    className="nav-link w-full justify-start"
                    onClick={() => scrollToSection('about')}
                  >
                    About
                  </Button>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Button 
                    variant="ghost" 
                    className="nav-link w-full justify-start"
                    onClick={() => scrollToSection('experience')}
                  >
                    Experience
                  </Button>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Button 
                    variant="ghost" 
                    className="nav-link w-full justify-start"
                    onClick={() => scrollToSection('education')}
                  >
                    Education
                  </Button>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Button 
                    variant="ghost" 
                    className="nav-link w-full justify-start"
                    onClick={() => scrollToSection('skills')}
                  >
                    Skills
                  </Button>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Button 
                    variant="ghost" 
                    className="nav-link w-full justify-start"
                    onClick={() => scrollToSection('publications')}
                  >
                    Publications & Presentations
                  </Button>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>

      {/* Mobile menu button */}
      <Button 
        variant="outline"
        size="icon"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden"
      >
        {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>

      {/* Main content */}
      <div className="lg">
        {/* About Section */}
        <section id="about" className="resume-section">
          <div className="resume-section-content">
            <Card className="border-0 shadow-none">
              <CardHeader className="pb-4">
                <CardTitle className="text-6xl font-saira text-foreground">
                  {resumeData.about.name.split(' ')[0]} <span className="text-primary">Hollinger</span>
                </CardTitle>
                <CardDescription className="subheading text-base">
                  {resumeData.about.contact.address} · 
                  <a href={`tel:${resumeData.about.contact.phone}`} className="text-primary hover:text-primary/80">
                    {' '}{resumeData.about.contact.phone}
                  </a> ·
                  <a href={`mailto:${resumeData.about.contact.email}`} className="text-primary hover:text-primary/80">
                    {' '}{resumeData.about.contact.email}
                  </a>
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="lead mb-8 text-muted-foreground">
                  {resumeData.about.summary}
                </p>
                <div className="flex space-x-6">
                  <Button asChild size="icon" className="social-icon h-14 w-14">
                    <a href={resumeData.about.contact.social.linkedin}>
                      <Linkedin className="w-6 h-6" />
                    </a>
                  </Button>
                  <Button asChild size="icon" className="social-icon h-14 w-14">
                    <a href={resumeData.about.contact.social.github}>
                      <Github className="w-6 h-6" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="resume-section">
          <div className="resume-section-content">
            <Card className="border-0 shadow-none">
              <CardHeader className="pb-8">
                <CardTitle className="text-3.5xl font-saira text-foreground">Experience</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 space-y-8">
                {resumeData.experience.map((job, index) => (
                  <Card key={index} className="bg-background">
                    <CardHeader className="pb-4">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                        <div>
                          <CardTitle className="text-xl mb-2 font-saira text-foreground">{job.title}</CardTitle>
                          <CardDescription className="text-lg">
                            <a href={job.company_url} className="text-primary hover:text-primary/80">
                              {job.company}
                            </a>
                          </CardDescription>
                        </div>
                        <CardDescription className="text-primary font-medium md:text-right">
                          {job.dates}
                        </CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0 space-y-6">
                      <ul className="list-disc list-inside space-y-2 ml-4 text-muted-foreground">
                        {job.responsibilities.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="resume-section">
          <div className="resume-section-content">
            <Card className="border-0 shadow-none">
              <CardHeader className="pb-8">
                <CardTitle className="text-3.5xl font-saira text-foreground">Education</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 space-y-6">
                {resumeData.education.map((edu, index) => (
                  <Card key={index} className="bg-background">
                    <CardHeader className="pb-4">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                        <div>
                          <CardTitle className="text-xl mb-2 font-saira text-foreground">{edu.institution}</CardTitle>
                          <CardDescription className="text-lg">{edu.degree}</CardDescription>
                        </div>
                        <CardDescription className="text-primary font-medium md:text-right">
                          {edu.dates}
                        </CardDescription>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="resume-section">
          <div className="resume-section-content">
            <Card className="border-0 shadow-none">
              <CardHeader className="pb-8">
                <CardTitle className="text-3.5xl font-saira text-foreground">Skills</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="grid md:grid-cols-2 gap-4">
                  {resumeData.skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <Check className="skill-icon" />
                      <span className="text-muted-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Publications Section */}
        <section id="publications" className="resume-section">
          <div className="resume-section-content">
            <Card className="border-0 shadow-none">
              <CardHeader className="pb-8">
                <CardTitle className="text-3.5xl font-saira text-foreground">Publications & Presentations</CardTitle>
              </CardHeader>
              <CardContent className="pt-0 space-y-6">
                {resumeData.publications_and_presentations.map((pub, index) => (
                  <Card key={index} className="bg-background">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-lg font-saira text-foreground">
                        <a href={pub.link} className="text-primary hover:text-primary/80">
                          {pub.title}
                        </a>
                      </CardTitle>
                      <CardDescription className="text-base">{pub.event}</CardDescription>
                      <p className="text-sm text-muted-foreground">
                        {pub.authors.join(', ')}
                      </p>
                    </CardHeader>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
} 