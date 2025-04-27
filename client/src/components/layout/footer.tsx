import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { FaInstagram, FaTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type NewsletterFormValues = z.infer<typeof newsletterSchema>;

export function Footer() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: NewsletterFormValues) => {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/newsletter", data);
      toast({
        title: "Success!",
        description: "You have been subscribed to our newsletter.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-primary text-white pt-16 pb-8 dark:bg-[#0c1e2c]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <a href="#" className="inline-block mb-6">
              <span className="text-white font-heading font-bold text-2xl tracking-wider">
                HALLAND<span className="text-accent">+</span>
              </span>
            </a>
            <p className="text-neutral-400 mb-6">
              Creating a future of abundance through the nexus of food, health, and sustainable living in the heart of Sweden's longevity region.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-accent transition-colors duration-300">
                <FaInstagram className="text-xl" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-accent transition-colors duration-300">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-accent transition-colors duration-300">
                <FaLinkedinIn className="text-xl" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-accent transition-colors duration-300">
                <FaFacebookF className="text-xl" />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-heading font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#vision" className="text-neutral-400 hover:text-accent transition-colors duration-300">Our Vision</a></li>
              <li><a href="#projects" className="text-neutral-400 hover:text-accent transition-colors duration-300">Projects</a></li>
              <li><a href="#longevity-hub" className="text-neutral-400 hover:text-accent transition-colors duration-300">Longevity Hub</a></li>
              <li><a href="#news" className="text-neutral-400 hover:text-accent transition-colors duration-300">News & Insights</a></li>
              <li><a href="#contact" className="text-neutral-400 hover:text-accent transition-colors duration-300">Contact Us</a></li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-heading font-semibold text-lg mb-6">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-400 hover:text-accent transition-colors duration-300">Research Papers</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-accent transition-colors duration-300">Health Tourism Guide</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-accent transition-colors duration-300">Investment Opportunities</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-accent transition-colors duration-300">Sustainability Report</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-accent transition-colors duration-300">Media Kit</a></li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-heading font-semibold text-lg mb-6">Subscribe</h4>
            <p className="text-neutral-400 mb-4">
              Stay updated with our latest news and developments.
            </p>
            <form onSubmit={form.handleSubmit(onSubmit)} className="mb-4">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-l-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
                  {...form.register("email")}
                />
                <button 
                  type="submit" 
                  className="bg-accent hover:bg-accent/80 text-white px-4 py-2 rounded-r-sm transition-colors duration-300 disabled:opacity-50"
                  disabled={isSubmitting}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
              </div>
              {form.formState.errors.email && (
                <p className="mt-1 text-xs text-red-400">{form.formState.errors.email.message}</p>
              )}
            </form>
            <p className="text-neutral-500 text-sm">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from Halland Longevity Project.
            </p>
          </motion.div>
        </div>
        
        <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Halland Longevity Project. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-neutral-500 hover:text-accent text-sm transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-neutral-500 hover:text-accent text-sm transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-neutral-500 hover:text-accent text-sm transition-colors duration-300">Cookies Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
