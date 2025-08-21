import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, Globe, Zap } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Precision',
      description: 'Every line of code, every design element, crafted with meticulous attention to detail.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Your success is our success. We work as an extension of your team.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We never settle for good enough. Excellence is our minimum standard.'
    }
  ];

  const journey = [
    {
      year: '2020',
      title: 'Founded',
      description: 'Started with a vision to empower startups through technology.'
    },
    {
      year: '2021',
      title: 'First Milestone',
      description: 'Completed 10 successful projects across MENA region.'
    },
    {
      year: '2022',
      title: 'European Expansion',
      description: 'Extended our services to European startups, doubling our client base.'
    },
    {
      year: '2023',
      title: 'AI Pioneer',
      description: 'Became early adopters of AI integrations, helping 50+ businesses automate.'
    },
    {
      year: '2024',
      title: 'Industry Leader',
      description: 'Recognized as a leading IT services provider for startup ecosystems.'
    }
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
                About Sync Sharp
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We're not just another development company. We're your strategic technology partner, 
              dedicated to transforming innovative ideas into market-leading digital solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-blue-800 to-blue-600 p-3 rounded-xl">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                    Our Mission
                  </h2>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  To empower ambitious startups across MENA and Europe with world-class technology 
                  solutions that accelerate growth, streamline operations, and create competitive advantages 
                  in the digital marketplace.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-3 rounded-xl">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                    Our Vision
                  </h2>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  To become the most trusted technology partner for startups, known for our sharp thinking, 
                  precise execution, and ability to sync perfectly with our clients' ambitions to create 
                  the next generation of digital innovations.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              These values guide every decision we make and every solution we deliver.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-700 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 group"
              >
                <div className="bg-gradient-to-r from-blue-800 to-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From humble beginnings to industry recognition, here's how we've grown alongside our clients.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-800 to-blue-600"></div>

            <div className="space-y-12">
              {journey.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                      <div className="text-3xl font-bold text-blue-800 dark:text-blue-400 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-800 dark:bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-blue-800 dark:bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              By The Numbers
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our growth reflects the success of our clients and the strength of our partnerships.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Globe, number: '15+', label: 'Countries Served' },
              { icon: Users, number: '25+', label: 'Happy Clients' },
              { icon: Award, number: '50+', label: 'Projects Delivered' },
              { icon: Zap, number: '99%', label: 'Success Rate' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center text-white group"
              >
                <div className="bg-white/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors duration-300">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <p className="text-blue-100 text-sm md:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;