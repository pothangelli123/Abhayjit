'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaLinkedinIn, FaWhatsapp, FaTwitter, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/abhayjit-singh/', 
      icon: FaLinkedinIn 
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/917340803706',
      icon: FaWhatsapp
    },
    {
      name: 'Twitter',
      href: '#',
      icon: FaTwitter
    },
    { 
      name: 'Email', 
      href: 'mailto:caabhayjit@gmail.com', 
      icon: FaEnvelope 
    }
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <footer className="relative z-10 bg-brand-dark text-white pb-24">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/50 to-brand-primary/20" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      
      <div className="container mx-auto px-4 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-white">Abhayjit Singh</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Professional Chartered Accountant specializing in financial analysis, 
              risk management, and strategic business development.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-brand-secondary transition-colors flex items-center space-x-2 group"
                  >
                    <span className="h-1.5 w-1.5 bg-brand-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Contact</h4>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-center space-x-2">
                <span className="w-5 h-5 rounded-full bg-brand-primary/10 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                </span>
                <span>Ludhiana, Punjab, India</span>
              </li>
              <li>
                <a href="tel:+917340803706" className="hover:text-brand-secondary transition-colors flex items-center space-x-2 group">
                  <span className="w-5 h-5 rounded-full bg-brand-secondary/10 flex items-center justify-center group-hover:bg-brand-secondary/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary" />
                  </span>
                  <span>+91 7340803706</span>
                </a>
              </li>
              <li>
                <a href="mailto:caabhayjit@gmail.com" className="hover:text-brand-tertiary transition-colors flex items-center space-x-2 group">
                  <span className="w-5 h-5 rounded-full bg-brand-tertiary/10 flex items-center justify-center group-hover:bg-brand-tertiary/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-tertiary" />
                  </span>
                  <span>caabhayjit@gmail.com</span>
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-white/70 hover:bg-brand-primary hover:text-white transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-white/70"
        >
          <p>© {currentYear} Abhayjit Singh. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 