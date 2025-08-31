import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Award, Code, Users, Star } from 'lucide-react';

const Teams: React.FC = () => {
  const teamMembers = [
    {
      name: "Shahzad Saleem",
      position: "Chairman & President",
      bio: "Tech strategist and IT development specialist with expertise in web and mobile app development, as well as AI integration. Passionate about creating innovative solutions for B2B startups across MENA and EU regions.",
      image: "/images/teams/Shahzad.jpg",
      skills: [
        "Software Design",
        "UI/UX Design",
        "Application Architecture",
        "Tech Strategy",
      ],
      social: {
        linkedin: "https://www.linkedin.com/in/shahzad-saleem-b8188220/",
        twitter: "#",
        github: "#",
      },
    },

    {
      name: "Moeez Shahzad",
      position: "CEO & Founder",
      bio: "Visionary leader with 2+ years in tech startups across MENA. Previously led development teams at three successful exits.",
      image: "/images/teams/Moeez.jpg",
      skills: ["Strategic Planning", "Product Vision", "Team Leadership"],
      social: {
        linkedin: "https://www.linkedin.com/in/moeez-shahzad-2446b131a/",
        twitter: "#",
        github: "https://github.com/Moeez-Shahzad",
      },
    },
    {
      name: "Saif Shahzad",
      position: "CTO & Co-Founder",
      bio: "Full-stack architect with expertise in scalable systems. Former senior engineer at Google and Microsoft with 15+ years experience.",
      image: "/images/teams/Saif.jpg",
      skills: [
        "System Architecture",
        "Cloud Computing",
        "AI/ML",
        "Data Engineer",
      ],
      social: {
        linkedin: "https://www.linkedin.com/in/saif-shahzad-60b160355/",
        twitter: "#",
        github: "#",
      },
    },
    // {
    //   name: "Mahrukh Shahzad",
    //   position: "Lead Frontend Developer & AI Developer",
    //   bio: "React specialist who creates pixel-perfect user experiences. Previously at Airbnb and Spotify, passionate about modern web technologies.",
    //   image:
    //     "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
    //   skills: ["React", "TypeScript", "UI/UX Design"],
    //   social: {
    //     linkedin: "#",
    //     twitter: "#",
    //     github: "#",
    //   },
    // },
    // {
    //   name: "Simrah Shahzad",
    //   position: "Project Manager & Software Developer",
    //   bio: "Cross-platform mobile expert with published apps reaching millions of users. Specializes in React Native and Flutter development.",
    //   image:
    //     "https://images.pexels.com/photos/3727463/pexels-photo-3727463.jpeg?auto=compress&cs=tinysrgb&w=400",
    //   skills: ["React Native", "Flutter", "Mobile UX"],
    //   social: {
    //     linkedin: "#",
    //     twitter: "#",
    //     github: "#",
    //   },
    // },
    // {
    //   name: "Farzana Shahzad",
    //   position: "Accounts And Legal Advisor",
    //   bio: "Experienced Accounts and Legal Advisor specializing in corporate finance, compliance, and regulatory affairs. Skilled in optimizing financial operations and providing strategic legal guidance.",
    //   image:
    //     "https://images.pexels.com/photos/3727465/pexels-photo-3727465.jpeg?auto=compress&cs=tinysrgb&w=400",
    //   skills: [
    //     "Financial Management",
    //     "Corporate Law",
    //     "Regulatory Compliance",
    //   ],
    //   social: {
    //     linkedin: "#",
    //     twitter: "#",
    //     github: "#",
    //   },
    // },
  ];

  const testimonials = [
    {
      name: 'Omar Khalil',
      position: 'CEO, TechFlow Solutions',
      content: 'The Sync Sharp team exceeded every expectation. Their technical expertise and project management skills are world-class.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Anna Kowalski',
      position: 'CTO, InnovatePL',
      content: 'Working with Sync Sharp was a game-changer for our startup. They delivered a complex AI integration ahead of schedule.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Hassan Al-Mahmoud',
      position: 'Founder, FinTechMENA',
      content: 'The mobile app they built for us has over 100K downloads. Their attention to user experience is phenomenal.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const stats = [
    { icon: Users, number: '10+', label: 'Team Members' },
    { icon: Award, number: '15+', label: 'Projects Delivered' },
    { icon: Code, number: '4+', label: 'Years Experience' },
    { icon: Star, number: '4.9/5', label: 'Client Rating' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
                Meet Our Team
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              The brilliant minds behind Sync Sharp. A diverse team of experts from around the globe, 
              united by our passion for creating exceptional digital solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 bg-blue-800 dark:bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="bg-white/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8" />
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, type: 'spring' }}
                  className="text-4xl md:text-5xl font-bold mb-2"
                >
                  {stat.number}
                </motion.div>
                <p className="text-blue-100 text-sm md:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Each team member brings unique expertise and experience from leading tech companies 
              and successful startups worldwide.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 h-full">
                  <div className="text-center mb-6">
                    <div className="relative inline-block">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-24 h-24 rounded-full object-cover mx-auto mb-4 group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-800/20 to-blue-600/20 group-hover:bg-gradient-to-r group-hover:from-blue-800/40 group-hover:to-blue-600/40 transition-all duration-300"></div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {member.name}
                    </h3>
                    <p className="text-blue-800 dark:text-blue-400 font-medium mb-4">
                      {member.position}
                    </p>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Expertise:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-center space-x-4 pt-4">
                      <motion.a
                        href={member.social.linkedin}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-gray-200 dark:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-800 hover:text-white transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                      </motion.a>
                      <motion.a
                        href={member.social.twitter}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-gray-200 dark:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-800 hover:text-white transition-colors"
                      >
                        <Twitter className="h-5 w-5" />
                      </motion.a>
                      <motion.a
                        href={member.social.github}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-gray-200 dark:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-800 hover:text-white transition-colors"
                      >
                        <Github className="h-5 w-5" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Real feedback from founders and CTOs who've trusted us with their vision.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 italic">
                  "{testimonial.content}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-600 dark:from-blue-900 dark:to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Our Growing Team
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We're always looking for talented individuals who share our passion for excellence 
              and innovation. Ready to make an impact?
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="#"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-800 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300"
              >
                View Open Positions
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Teams;