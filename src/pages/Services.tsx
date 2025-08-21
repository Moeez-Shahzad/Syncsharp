import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Brain, Cloud, Database, Shield, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: 'Website Development',
      description: 'Modern, responsive websites that convert visitors into customers.',
      features: ['React & Next.js Development', 'Custom WordPress Solutions', 'E-commerce Platforms', 'Landing Pages & Portfolios'],
      gradient: 'from-blue-600 to-blue-800',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform apps that users love to use.',
      features: ['iOS & Android Native Apps', 'React Native Development', 'Flutter Applications', 'App Store Optimization'],
      gradient: 'from-purple-600 to-purple-800',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin']
    },
    {
      icon: Brain,
      title: 'AI Integrations',
      description: 'Smart AI solutions that automate and optimize your business.',
      features: ['ChatGPT API Integration', 'Custom AI Models', 'Machine Learning Solutions', 'Process Automation'],
      gradient: 'from-green-600 to-green-800',
      technologies: ['OpenAI', 'TensorFlow', 'Python', 'LangChain']
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure for growth-ready businesses.',
      features: ['AWS & Azure Deployment', 'Serverless Architecture', 'Microservices Design', 'DevOps & CI/CD'],
      gradient: 'from-orange-600 to-orange-800',
      technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes']
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Robust, secure backend systems that scale with your business.',
      features: ['RESTful & GraphQL APIs', 'Database Design & Optimization', 'Authentication & Security', 'Real-time Applications'],
      gradient: 'from-red-600 to-red-800',
      technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB']
    },
    {
      icon: Shield,
      title: 'Security & Testing',
      description: 'Comprehensive security audits and testing protocols.',
      features: ['Security Audits', 'Automated Testing', 'Performance Optimization', 'Code Quality Assurance'],
      gradient: 'from-indigo-600 to-indigo-800',
      technologies: ['Jest', 'Cypress', 'SonarQube', 'OWASP']
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Strategy',
      description: 'We dive deep into your business goals, target audience, and technical requirements to craft the perfect solution strategy.'
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Our design team creates stunning visuals and interactive prototypes that bring your vision to life before development begins.'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Our expert developers build your solution using cutting-edge technologies while maintaining the highest quality standards.'
    },
    {
      step: '04',
      title: 'Launch & Support',
      description: 'We handle the deployment process and provide ongoing support to ensure your solution continues to perform optimally.'
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
                Our Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive IT solutions designed to transform your business and accelerate your growth 
              in the digital landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                            <Zap className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures every project is delivered on time, within budget, 
              and exceeds expectations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    {step.step}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Connector line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-8 h-0.5 bg-gradient-to-r from-blue-800 to-blue-600 transform translate-x-4"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Technologies We Master
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We stay at the forefront of technology to deliver cutting-edge solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {['React', 'Node.js', 'Python', 'AWS', 'TypeScript', 'Next.js', 'Flutter', 'MongoDB', 'PostgreSQL', 'Docker', 'Kubernetes', 'OpenAI'].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {tech}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-600 dark:from-blue-900 dark:to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Let's discuss your vision and create a custom solution that drives your business forward. 
              Every great digital transformation starts with a conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-800 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 group"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/teams"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-800 transition-all duration-300"
                >
                  Meet Our Experts
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;