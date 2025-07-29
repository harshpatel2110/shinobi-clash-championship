import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Trophy, Users, Target, MapPin, Clock, Crown, Sword } from 'lucide-react';
import narutoHero from '@/assets/naruto-hero.jpg';
import firefireNaruto from '@/assets/freefire-naruto.jpg';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const villageColors = {
    leaf: 'bg-leaf-village',
    sand: 'bg-sand-village', 
    mist: 'bg-mist-village',
    cloud: 'bg-cloud-village'
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-wrap items-center justify-between">
            <div className="flex items-center space-x-2">
              <Sword className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">Great Shinobi War</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
              {[
                { id: 'home', label: 'Home' },
                { id: 'overview', label: 'Overview' },
                { id: 'concept', label: 'Concept' },
                { id: 'format', label: 'Roadmap' },
                { id: 'timeline', label: "Date's" }
              ].map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => scrollToSection(item.id)}
                  className="text-xs"
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${narutoHero})` }}
        >
          <div className="absolute inset-0 bg-background/80"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Great Shinobi War
          </h1>
          <p className="text-xl md:text-3xl mb-8 text-muted-foreground font-medium">
            Naruto x Free Fire Max
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span className="text-lg font-semibold">August 14–21, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-shinobi-gold" />
              <span className="text-lg font-semibold text-shinobi-gold">3,00,000 Diamonds</span>
            </div>
          </div>
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
            onClick={() => scrollToSection('overview')}
          >
            Enter the Shinobi World
          </Button>
        </div>
      </section>

      {/* Executive Overview */}
      <section id="overview" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Executive Overview</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The Great Shinobi War is an exclusive Naruto-themed Free Fire Max esports tournament designed to unite fans of anime and competitive gaming. This event delivers an immersive shinobi experience through rich storytelling, themed battles, and progressive competition.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  By integrating Naruto's iconic villages, ninja ranks, and lore into the gameplay and presentation, we create a unique blend of culture and esports that promises increased engagement, content creation opportunities, and a broader fanbase.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  This tournament aligns with Garena's vision of innovative, themed esports that captivate both players and viewers worldwide.
                </p>
              </div>
              <div className="relative">
                <img 
                  src={firefireNaruto} 
                  alt="Free Fire Naruto Collaboration" 
                  className="rounded-lg shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tournament Concept */}
      <section id="concept" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Tournament Concept & Theme</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { name: 'Konohagakure', subtitle: 'Hidden Leaf Village', color: 'leaf-village', icon: '🍃' },
              { name: 'Sunagakure', subtitle: 'Hidden Sand Village', color: 'sand-village', icon: '🏜️' },
              { name: 'Kirigakure', subtitle: 'Hidden Mist Village', color: 'mist-village', icon: '🌊' },
              { name: 'Kumogakure', subtitle: 'Hidden Cloud Village', color: 'cloud-village', icon: '⛈️' }
            ].map((village) => (
              <Card key={village.name} className="text-center hover:scale-105 transition-transform">
                <CardHeader className={`${villageColors[village.color as keyof typeof villageColors]} text-white rounded-t-lg`}>
                  <div className="text-4xl mb-2">{village.icon}</div>
                  <CardTitle className="text-lg">{village.name}</CardTitle>
                  <p className="text-sm opacity-90">{village.subtitle}</p>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-sm text-muted-foreground">12 Teams per Village</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Shinobi Stages
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <span className="font-medium">Academy Trials</span>
                  <Badge>Qualifying Stage</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <span className="font-medium">Ninja Vanguard</span>
                  <Badge>Intermediate Stage</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <span className="font-medium">Great Shinobi War</span>
                  <Badge variant="secondary">Grand Finals</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <span className="font-medium">Shinobi Reckoning</span>
                  <Badge variant="destructive">Clash Squad</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Crown className="h-5 w-5" />
                  Exclusive Titles
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-gradient-to-r from-shinobi-gold/20 to-primary/20 rounded-lg">
                  <span className="font-bold text-shinobi-gold">Hokage of the Arena</span>
                  <p className="text-sm text-muted-foreground">Ultimate Champion</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <span className="font-medium">The Lone Uchiha</span>
                  <p className="text-sm text-muted-foreground">Elite Individual</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <span className="font-medium">Legendary Sannin</span>
                  <p className="text-sm text-muted-foreground">Runner-up</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Distribution */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Team Distribution & Grouping</h2>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-4 bg-primary/10 rounded-full px-8 py-4">
                <Users className="h-8 w-8 text-primary" />
                <span className="text-3xl font-bold">48 Total Teams</span>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">24 Teams</CardTitle>
                  <p className="text-muted-foreground">Partner Program</p>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-2xl text-secondary">12 Teams</CardTitle>
                  <p className="text-muted-foreground">Extended Program</p>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-2xl text-accent">12 Teams</CardTitle>
                  <p className="text-muted-foreground">Open Qualifiers</p>
                </CardHeader>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-center">Village Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center text-lg font-semibold mb-4">4 Groups of 12 Teams each</div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { name: 'Konohagakure', subtitle: 'Hidden Leaf', color: 'leaf-village' },
                    { name: 'Sunagakure', subtitle: 'Hidden Sand', color: 'sand-village' },
                    { name: 'Kirigakure', subtitle: 'Hidden Mist', color: 'mist-village' },
                    { name: 'Kumogakure', subtitle: 'Hidden Cloud', color: 'cloud-village' }
                  ].map((village) => (
                    <div key={village.name} className={`p-4 rounded-lg text-center text-white ${villageColors[village.color as keyof typeof villageColors]}`}>
                      <div className="font-bold">{village.name}</div>
                      <div className="text-sm opacity-90">{village.subtitle}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tournament Format */}
      <section id="format" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Tournament Format & Roadmap</h2>
          <div className="space-y-8">
            {[
              {
                stage: 'Academy Trials',
                description: '4 Groups (12 teams each) • 6 matches per group • Top 6 teams qualify',
                color: 'bg-muted',
                icon: '🎓'
              },
              {
                stage: 'Ninja Vanguard', 
                description: '2 Groups (12 teams each) • 6 matches per group • Top 6 teams qualify',
                color: 'bg-secondary/20',
                icon: '⚔️'
              },
              {
                stage: 'Great Shinobi War (Grand Finals)',
                description: '12 Final teams • 12 matches in 1-day grand final • Winner crowned champion',
                color: 'bg-primary/20',
                icon: '👑'
              },
              {
                stage: 'Shinobi Reckoning (Clash Squad)',
                description: 'Top 8 teams • Quarterfinals (BO1) • Semifinals (BO3) • Finals (BO5)',
                color: 'bg-accent/20',
                icon: '💀'
              }
            ].map((stage, index) => (
              <Card key={stage.stage} className={`${stage.color} border-l-4 border-l-primary`}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">{stage.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{stage.stage}</h3>
                      <p className="text-muted-foreground">{stage.description}</p>
                    </div>
                    <Badge className="text-lg px-3 py-1">Stage {index + 1}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tournament Timeline */}
      <section id="timeline" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Tournament Timeline</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {[
              { day: 'Day 1', date: '14 August', event: 'Academy Trials – Group Konohagakure (Hidden Leaf Village)', color: 'leaf-village' },
              { day: 'Day 2', date: '15 August', event: 'Academy Trials – Group Sunagakure (Hidden Sand Village)', color: 'sand-village' },
              { day: 'Day 3', date: '16 August', event: 'Academy Trials – Group Kirigakure (Hidden Mist Village)', color: 'mist-village' },
              { day: 'Day 4', date: '17 August', event: 'Academy Trials – Group Kumogakure (Hidden Cloud Village)', color: 'cloud-village' },
              { day: 'Day 5', date: '18 August', event: 'Ninja Vanguard – Group A', color: 'secondary' },
              { day: 'Day 6', date: '19 August', event: 'Ninja Vanguard – Group B', color: 'secondary' },
              { day: 'Day 7', date: '20 August', event: 'Great Shinobi War – Grand Finals', color: 'primary' },
              { day: 'Day 8', date: '21 August', event: 'Shinobi Reckoning – Clash Squad Showdown', color: 'accent' }
            ].map((timeline, index) => (
              <Card key={timeline.day} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex items-center">
                    <div className={`p-6 ${villageColors[timeline.color as keyof typeof villageColors] || `bg-${timeline.color}`} text-white flex-shrink-0`}>
                      <div className="font-bold text-lg">{timeline.day}</div>
                      <div className="text-sm opacity-90">{timeline.date}</div>
                    </div>
                    <div className="p-6 flex-1">
                      <p className="font-medium text-lg">{timeline.event}</p>
                    </div>
                    <div className="p-6">
                      <Clock className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Titles & Honors */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Titles & Honors</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              { title: 'Hokage of the Arena', subtitle: 'Ultimate leader and champion', rank: 'Champion', color: 'bg-gradient-to-r from-shinobi-gold to-primary' },
              { title: 'Legendary Sannin', subtitle: 'Elite and respected shinobi', rank: 'Runner-Up', color: 'bg-gradient-to-r from-secondary to-muted' },
              { title: 'Anbu Elite', subtitle: 'Stealthy and deadly special forces', rank: 'Second Runner-Up', color: 'bg-gradient-to-r from-accent to-muted' },
              { title: 'Shinobi of the Tournament', subtitle: 'Outstanding individual performance', rank: 'MVP', color: 'bg-gradient-to-r from-primary to-secondary' },
              { title: 'Reckoning Master', subtitle: 'Supreme tactician and fighter', rank: 'Clash Squad Winner', color: 'bg-gradient-to-r from-destructive to-accent' }
            ].map((honor) => (
              <Card key={honor.title} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex items-center">
                    <div className={`p-6 ${honor.color} text-white flex-shrink-0 w-48`}>
                      <Badge className="mb-2 bg-white/20 text-white">{honor.rank}</Badge>
                      <div className="font-bold text-lg">{honor.title}</div>
                    </div>
                    <div className="p-6 flex-1">
                      <p className="text-muted-foreground">{honor.subtitle}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prize Pool */}
      <section id="prizes" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Prize Pool Distribution</h2>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-4 bg-shinobi-gold/10 rounded-full px-8 py-4">
                <Trophy className="h-8 w-8 text-shinobi-gold" />
                <span className="text-3xl font-bold text-shinobi-gold">3,00,000 Diamonds</span>
              </div>
            </div>
            
            <div className="space-y-4">
              {[
                { position: 'Champion', amount: '1,20,000', percentage: '40%' },
                { position: 'Clash Squad Winner', amount: '80,000', percentage: '27%' },
                { position: 'Runner-Up', amount: '50,000', percentage: '17%' },
                { position: 'Second Runner-Up', amount: '30,000', percentage: '10%' },
                { position: 'MVP', amount: '20,000', percentage: '6%' }
              ].map((prize, index) => (
                <Card key={prize.position}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white ${
                          index === 0 ? 'bg-shinobi-gold' : 
                          index === 1 ? 'bg-accent' :
                          index === 2 ? 'bg-secondary' :
                          index === 3 ? 'bg-muted-foreground' : 'bg-primary'
                        }`}>
                          {index + 1}
                        </div>
                        <div>
                          <div className="font-bold text-lg">{prize.position}</div>
                          <div className="text-sm text-muted-foreground">{prize.percentage} of total pool</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-2xl text-shinobi-gold">{prize.amount}</div>
                        <div className="text-sm text-muted-foreground">Diamonds</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Point System */}
      <section id="points" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Point System (Battle Royale)</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Placement Points</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { position: '1st', points: 12 },
                    { position: '2nd', points: 9 },
                    { position: '3rd', points: 8 },
                    { position: '4th', points: 7 },
                    { position: '5th', points: 6 },
                    { position: '6th', points: 5 },
                    { position: '7th', points: 4 },
                    { position: '8th', points: 3 },
                    { position: '9th', points: 2 },
                    { position: '10th', points: 1 },
                    { position: '11th & 12th', points: 0 }
                  ].map((placement) => (
                    <div key={placement.position} className="flex justify-between items-center p-2 rounded bg-muted">
                      <span className="font-medium">{placement.position}</span>
                      <Badge variant={placement.points >= 8 ? 'default' : placement.points >= 4 ? 'secondary' : 'outline'}>
                        {placement.points} pts
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Kill Points & Tie-breakers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-4 bg-primary/10 rounded-lg text-center">
                  <div className="text-2xl font-bold text-primary">1 Kill = 1 Point</div>
                  <p className="text-sm text-muted-foreground mt-2">Each elimination awards 1 point</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Tie-breaker Order:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <Badge className="w-6 h-6 rounded-full p-0 flex items-center justify-center">1</Badge>
                      <span>Number of Booyahs</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge className="w-6 h-6 rounded-full p-0 flex items-center justify-center">2</Badge>
                      <span>Total Kills</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge className="w-6 h-6 rounded-full p-0 flex items-center justify-center">3</Badge>
                      <span>Placement in Last Match</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Maps Schedule */}
      <section id="maps" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Map Schedule</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Battle Royale Maps
                </CardTitle>
                <p className="text-muted-foreground">6 matches per day</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {['Bermuda', 'Purgatory', 'Kalahari', 'Alpine', 'Nexterra', 'Solara'].map((map) => (
                    <div key={map} className="p-3 bg-muted rounded-lg text-center font-medium">
                      {map}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Clash Squad Maps
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <span className="font-medium">Best of 1</span>
                    <span className="text-sm">Bermuda</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <span className="font-medium">Best of 3</span>
                    <span className="text-sm">Bermuda, Purgatory, Kalahari</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <span className="font-medium">Best of 5</span>
                    <span className="text-sm">Bermuda, Purgatory, Kalahari, Alpine, Nexterra</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Clash Squad Format */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Clash Squad Format - Shinobi Reckoning</h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Top 8 teams from Grand Finals compete for Clash Squad supremacy</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    { round: 'Quarterfinals', format: 'Best of 1', matches: '4 matches', color: 'bg-muted' },
                    { round: 'Semifinals', format: 'Best of 3', matches: '2 matches', color: 'bg-secondary/20' },
                    { round: 'Finals', format: 'Best of 5', matches: '1 match', color: 'bg-primary/20' }
                  ].map((stage) => (
                    <div key={stage.round} className={`${stage.color} p-6 rounded-lg`}>
                      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="text-center md:text-left">
                          <h3 className="text-xl font-bold">{stage.round}</h3>
                          <p className="text-muted-foreground">{stage.matches}</p>
                        </div>
                        <Badge className="text-lg px-4 py-2">{stage.format}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ninja-shadow text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sword className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">Great Shinobi War</span>
          </div>
          <p className="text-muted-foreground mb-4">
            Naruto x Free Fire Max Official Collaboration Tournament
          </p>
          <p className="text-sm text-muted-foreground">
            August 14–21, 2025 • 3,00,000 Diamonds Prize Pool
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;