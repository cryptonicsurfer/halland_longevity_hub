import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/lib/hooks/use-intersection-observer";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

const contactFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  interest: z.string().min(1, "Please select an area of interest"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  privacy: z.boolean().refine(val => val === true, {
    message: "You must agree to the Privacy Policy"
  })
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useIntersectionObserver(ref, { threshold: 0.1 });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      interest: "",
      message: "",
      privacy: false
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      // Remove privacy field as it's just for form validation
      const { privacy, ...contactData } = data;
      await apiRequest("POST", "/api/contact", contactData);
      
      toast({
        title: "Success!",
        description: "Your message has been sent. We'll be in touch soon.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-primary text-white" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">Join the Halland Longevity Movement</h2>
          <p className="text-lg text-white/80">
            Whether you're interested in visiting, investing, researching, or learning more about our initiatives, we'd love to connect with you.
          </p>
        </motion.div>
        
        <motion.div 
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div 
            className="bg-white rounded-lg shadow-xl overflow-hidden"
            variants={itemVariants}
          >
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="lg:col-span-2 bg-primary p-8 text-white">
                <h3 className="font-heading text-2xl font-bold mb-6 text-white">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="text-accent mr-4 mt-1">
                      <FaMapMarkerAlt className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-white">Visit Us</h4>
                      <p className="mt-1 text-white">Falkenberg Longevity Hub<br />Strandvägen 45<br />311 37 Falkenberg, Sweden</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-accent mr-4 mt-1">
                      <FaEnvelope className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-white">Email Us</h4>
                      <p className="mt-1 text-white">info@hallandlongevity.se<br />partnerships@hallandlongevity.se</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-accent mr-4 mt-1">
                      <FaPhone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-white">Call Us</h4>
                      <p className="mt-1 text-white">+46 346 88 61 00</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h4 className="font-semibold text-lg mb-4 text-white">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="text-white hover:text-accent transition-colors duration-300">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                    <a href="#" className="text-white hover:text-accent transition-colors duration-300">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                    <a href="#" className="text-white hover:text-accent transition-colors duration-300">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a href="#" className="text-white hover:text-accent transition-colors duration-300">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-3 p-8">
                <h3 className="font-heading text-2xl font-bold text-primary mb-6">Send Us a Message</h3>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700 mb-1">First Name*</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        className="w-full px-4 py-2 border border-neutral-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                        {...form.register("firstName")}
                      />
                      {form.formState.errors.firstName && (
                        <p className="mt-1 text-xs text-red-500">{form.formState.errors.firstName.message}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700 mb-1">Last Name*</label>
                      <input 
                        type="text" 
                        id="lastName" 
                        className="w-full px-4 py-2 border border-neutral-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary/50" 
                        {...form.register("lastName")}
                      />
                      {form.formState.errors.lastName && (
                        <p className="mt-1 text-xs text-red-500">{form.formState.errors.lastName.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">Email Address*</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-2 border border-neutral-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                        {...form.register("email")}
                      />
                      {form.formState.errors.email && (
                        <p className="mt-1 text-xs text-red-500">{form.formState.errors.email.message}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        className="w-full px-4 py-2 border border-neutral-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                        {...form.register("phone")}
                      />
                      {form.formState.errors.phone && (
                        <p className="mt-1 text-xs text-red-500">{form.formState.errors.phone.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="interest" className="block text-sm font-medium text-neutral-700 mb-1">I'm interested in*</label>
                    <select 
                      id="interest" 
                      className="w-full px-4 py-2 border border-neutral-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white text-neutral-900"
                      {...form.register("interest")}
                    >
                      <option value="" disabled selected>Please select...</option>
                      <option value="visiting">Visiting the Longevity Hub</option>
                      <option value="investing">Investment Opportunities</option>
                      <option value="research">Research Collaboration</option>
                      <option value="tourism">Health Tourism Packages</option>
                      <option value="other">Other</option>
                    </select>
                    {form.formState.errors.interest && (
                      <p className="mt-1 text-xs text-red-500">{form.formState.errors.interest.message}</p>
                    )}
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">Your Message*</label>
                    <textarea 
                      id="message" 
                      rows={4} 
                      className="w-full px-4 py-2 border border-neutral-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                      {...form.register("message")}
                    ></textarea>
                    {form.formState.errors.message && (
                      <p className="mt-1 text-xs text-red-500">{form.formState.errors.message.message}</p>
                    )}
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input 
                          id="privacy" 
                          type="checkbox" 
                          className="focus:ring-primary h-4 w-4 text-primary border-neutral-300 rounded"
                          {...form.register("privacy")}
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="privacy" className="text-neutral-700">
                          I agree to the <a href="#" className="text-primary hover:text-secondary">Privacy Policy</a> and consent to being contacted about Halland Longevity initiatives.
                        </label>
                        {form.formState.errors.privacy && (
                          <p className="mt-1 text-xs text-red-500">{form.formState.errors.privacy.message}</p>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-secondary text-white font-medium py-3 px-6 rounded-sm transition-colors duration-300 disabled:opacity-50"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Message"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
